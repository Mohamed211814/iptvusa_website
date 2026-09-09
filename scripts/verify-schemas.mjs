import fs from 'fs';
import path from 'path';

const APP_SERVER_DIR = path.resolve('.next/server/app');

const routesToTest = [
  { route: '/', file: 'index.html' },
  { route: '/pricing', file: 'pricing.html' },
  { route: '/channels', file: 'channels.html' },
  { route: '/setup-guide', file: 'setup-guide.html' },
  { route: '/contact', file: 'contact.html' },
  { route: '/reseller', file: 'reseller.html' },
  { route: '/privacy-policy', file: 'privacy-policy.html' },
  { route: '/refund-and-returns-policy', file: 'refund-and-returns-policy.html' },
  { route: '/blog', file: 'blog.html' },
];

const VALID_SCHEMA_TYPES = new Set([
  'Organization', 'WebSite', 'WebPage', 'Product', 'Offer', 'AggregateOffer',
  'FAQPage', 'Question', 'Answer', 'HowTo', 'HowToStep', 'HowToTool',
  'BreadcrumbList', 'ListItem', 'BlogPosting', 'ContactPoint', 'Brand',
  'ItemPage', 'CollectionPage', 'ContactPage', 'MonetaryAmount'
]);

let totalPagesChecked = 0;
let totalSchemaBlocks = 0;
let duplicateIds = [];
let allErrors = [];
let allWarnings = [];

const reportRows = [];

for (const { route, file } of routesToTest) {
  const filePath = path.join(APP_SERVER_DIR, file);
  totalPagesChecked++;

  if (!fs.existsSync(filePath)) {
    reportRows.push({
      route,
      schemaTypes: 'N/A',
      rendered: false,
      validJson: false,
      errors: ['File not found: ' + file],
      status: 'FAIL'
    });
    continue;
  }

  const html = fs.readFileSync(filePath, 'utf-8');

  // Extract all <script type="application/ld+json">...</script>
  const regex = /<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/gi;
  let match;
  const blocks = [];
  while ((match = regex.exec(html)) !== null) {
    blocks.push(match[1]);
  }

  totalSchemaBlocks += blocks.length;

  if (blocks.length === 0) {
    reportRows.push({
      route,
      schemaTypes: 'None',
      rendered: false,
      validJson: false,
      errors: ['No JSON-LD blocks found in HTML'],
      status: 'FAIL'
    });
    continue;
  }

  const routeErrors = [];
  const routeWarnings = [];
  const foundTypes = new Set();
  const foundIds = new Set();

  let allJsonValid = true;

  for (const block of blocks) {
    let parsed;
    try {
      parsed = JSON.parse(block);
    } catch (e) {
      allJsonValid = false;
      routeErrors.push(`JSON parse error: ${e.message}`);
      continue;
    }

    function inspectEntity(entity) {
      if (!entity || typeof entity !== 'object') return;

      if (entity['@context'] && entity['@context'] !== 'https://schema.org' && entity['@context'] !== 'http://schema.org') {
        routeErrors.push(`Invalid @context: ${entity['@context']}`);
      }

      const type = entity['@type'];
      if (type) {
        foundTypes.add(type);
        if (!VALID_SCHEMA_TYPES.has(type)) {
          routeWarnings.push(`Unrecognized schema type: ${type}`);
        }
      }

      if (entity['@id']) {
        if (foundIds.has(entity['@id'])) {
          routeErrors.push(`Duplicate @id on same page: ${entity['@id']}`);
          duplicateIds.push({ route, id: entity['@id'] });
        }
        foundIds.add(entity['@id']);

        if (!entity['@id'].startsWith('https://www.iptvusa-pro.com')) {
          routeErrors.push(`@id does not use preferred domain: ${entity['@id']}`);
        }
      }

      if (entity.url && typeof entity.url === 'string') {
        if (!entity.url.startsWith('https://www.iptvusa-pro.com')) {
          routeErrors.push(`Entity url does not use preferred domain: ${entity.url}`);
        }
      }

      // Check for forbidden fake data
      if (entity.aggregateRating || type === 'AggregateRating') {
        routeErrors.push(`Forbidden fake AggregateRating found in schema!`);
      }
      if (type === 'Review') {
        routeErrors.push(`Unverified Review schema found!`);
      }
      if (entity.telephone) {
        routeWarnings.push(`Telephone property found: ${entity.telephone}`);
      }
      if (entity.address) {
        routeWarnings.push(`Address property found: ${JSON.stringify(entity.address)}`);
      }

      // Check Product Offer prices
      if (type === 'Offer' && entity.price) {
        const allowedPrices = ['14.95', '29.95', '44.95', '59.95'];
        if (!allowedPrices.includes(entity.price)) {
          routeErrors.push(`Unexpected offer price: ${entity.price}`);
        }
        if (entity.priceCurrency !== 'USD') {
          routeErrors.push(`Unexpected priceCurrency: ${entity.priceCurrency}`);
        }
      }

      // Recurse into nested objects / arrays
      if (Array.isArray(entity['@graph'])) {
        for (const item of entity['@graph']) inspectEntity(item);
      }
      if (Array.isArray(entity.mainEntity)) {
        for (const item of entity.mainEntity) inspectEntity(item);
      }
      if (Array.isArray(entity.offers)) {
        for (const item of entity.offers) inspectEntity(item);
      }
      if (entity.offers && typeof entity.offers === 'object') {
        inspectEntity(entity.offers);
      }
      if (Array.isArray(entity.itemListElement)) {
        for (const item of entity.itemListElement) inspectEntity(item);
      }
      if (Array.isArray(entity.step)) {
        for (const item of entity.step) inspectEntity(item);
      }
    }

    inspectEntity(parsed);
  }

  const status = routeErrors.length === 0 ? 'PASS' : 'FAIL';
  if (routeErrors.length > 0) allErrors.push(...routeErrors.map(e => `[${route}] ${e}`));
  if (routeWarnings.length > 0) allWarnings.push(...routeWarnings.map(w => `[${route}] ${w}`));

  reportRows.push({
    route,
    schemaTypes: Array.from(foundTypes).join(', '),
    rendered: true,
    validJson: allJsonValid,
    errors: routeErrors,
    status
  });
}

console.log(JSON.stringify({
  totalPagesChecked,
  totalSchemaBlocks,
  duplicateIds,
  allErrors,
  allWarnings,
  reportRows
}, null, 2));
