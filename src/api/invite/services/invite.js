'use strict';

/**
 * invite service
 */

module.exports = {
    invite: async () => {
        try {
          // fetching data
            const entries = await strapi.entityService.findMany(
            "api::organization.organization",
                {
                    fields: ["id", "name", "inviteCode"],
                }
            );
    
          // reduce the data to the format we want to return
            let entriesReduced;
            if (entries && Array.isArray(entries)) {
                entriesReduced = entries.reduce((acc, item) => {
                    acc = acc || [];
                    acc.push({
                        id: item.id,
                        name: item.name || "",
                        inviteCode: item.inviteCode || "",
                    });
                    return acc;
                }, []);
            }
    
            // return the reduced data
            return entriesReduced;
        } catch (err) {
            return err;
        }
    },
    invitecode: async (code, user) => {
        
        try {
            const entries = await strapi.entityService.findMany(
                "api::organization.organization", {
                    filters: { inviteCode: code},
                    populate: 'users'
                }
            );
            
            let enti = {}
            
            for (const i in entries) {
                enti = entries[i]
            }

            const org = await strapi.db.query("api::organization.organization").findOne({
                where: { 'id': enti.id},
                populate: { users: true },
            })
            
            org.users.push({
                id: user.id,
            })
    
    
            const result = await strapi.entityService.update("api::organization.organization", enti.id, {
                data: {
                    users: org.users
                }
            });
            console.log(result)
        
            return result;
        } catch (err) {
            return err;
            console.log(err)
        }

  }
  
  
};