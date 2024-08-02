'use strict';

/**
 * organization controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController("api::organization.organization",
	({strapi}) => ({
		async find(ctx) {
			const { user } = ctx.state
			
			ctx.query = { ...ctx.query, filters: { users: { id: user.id } } };
			const result = await super.find(ctx);
			return result;
		},
		async findOne(ctx) {
		    const { user } = ctx.state
			const { id: paramID } = ctx.params
			
			ctx.query = { ...ctx.query, where: { id: paramID, users: { id: user.id } } };
			const result = await super.findOne(ctx);
			return result;
		},
	})
)