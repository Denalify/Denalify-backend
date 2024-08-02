'use strict';

/**
 * A set of functions called "actions" for `orgbyname`
 */

module.exports = {
  async orgbyname(ctx, next) {
        try {
            const data = await strapi
            .service("api::orgbyname.orgbyname")
            .findit(ctx.params.orgname, ctx.state.user)
            
            
            if (data == null) {
                ctx.badRequest("Empty organization name");
            }
            ctx.body = data;
        } catch (err) {
            ctx.badRequest("findOrg controller error", { moreDetails: err });
        }
    },
};
