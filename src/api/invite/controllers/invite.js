'use strict';

/**
 * A set of functions called "actions" for `invite`
 */

module.exports = {
    async invite(ctx, next) {
        try {
            const data = await strapi
            .service("api::invite.invite")
            .invite()
    
            ctx.body = data;
        } catch (err) {
            ctx.badRequest("Ivite controller error", { moreDetails: err });
        }
    },
    async inviteCode(ctx, next) {
        try {
            
            const data = await strapi
            .service("api::invite.invite")
            .invitecode(ctx.params.code, ctx.state.user)
    
            ctx.body = data;
            
            if (data == null) {
                ctx.badRequest("Bad invite code");
            }
        } catch (err) {
            ctx.badRequest("Bad invite code", { moreDetails: err });
        }
    },
};