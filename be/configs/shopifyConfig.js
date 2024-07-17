const Shopify = require('shopify-api-node');

const {
    SHOPIFY_API_KEY,
    SHOPIFY_API_SECRET,
    SHOPIFY_API_VERSION,
    SHOPIFY_STORE_URL
} = process.env;

if (!SHOPIFY_API_KEY || !SHOPIFY_API_SECRET || !SHOPIFY_API_VERSION || !SHOPIFY_STORE_URL) {
    console.error('Missing Shopify environment variables');
    process.exit(1);
}

const shopify = new Shopify({
    shopName: SHOPIFY_STORE_URL,
    apiKey: SHOPIFY_API_KEY,
    password: SHOPIFY_API_SECRET,
    autoLimit: true,
    apiVersion: SHOPIFY_API_VERSION
});

module.exports = shopify;