'use strict';

/**
 * poject controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::poject.poject',
    ({strapi}) => ({
		async find(ctx) {
		    const { user } = ctx.state
		    
			ctx.query = { ...ctx.query };
			const result = await super.find(ctx);
			return result;
		},
		async findOne(ctx) {
		    const { user } = ctx.state
			const { id: paramID } = ctx.params

			const entity = await strapi.db.query('api::poject.poject').findOne({
			    where: { id: paramID },
			    populate: true
			});
			
			const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
			
			
			
			return this.transformResponse(sanitizedEntity);
		},
	})
);
