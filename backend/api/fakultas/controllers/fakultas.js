'use strict';
const {
    sanitizeEntity
} = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {

    async coba(ctx) {
        return 'Hello, world';
    },

    /**
     * Retrieve records.
     *
     * @return {Array}
     */

    async find(ctx) {
        let entities;
        if (ctx.query._q) {
            entities = await strapi.services.fakultas.search(ctx.query);
        } else {
            entities = await strapi.services.fakultas.find(ctx.query);
        }

        return entities.map(entity => sanitizeEntity(entity, {
            model: strapi.models.fakultas
        }));
    },
};
