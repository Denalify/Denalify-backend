'use strict';

/**
 * orgbyname service
 */

module.exports = () => ({
    findit: async (orgname, user) => {
        try {
          // fetching data
            const entries = await strapi.entityService.findMany(
            "api::organization.organization",
                {   
                    filters: 
                    {
                        name: {
                            $eqi: orgname
                        }
                    },
                    populate: '*',
                }
            );
            
          // reduce the data to the format we want to return
            let entriesReduced;
            for (const i in entries) {
                entriesReduced = entries[i]
            }
    
            console.log(entriesReduced)
            // return the reduced data
            return entriesReduced;
        } catch (err) {
            return err;
        }
    },
});
