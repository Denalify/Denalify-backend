'use strict';

/**
 * organization router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::organization.organization');


// module.exports = {
//     routes: [
//         {
//              method: 'GET',
//              path: '/organizations',
//              handler: 'organization.find',
//              config: {
//                 /**
//                  Before executing the find action in the Restaurant.js controller,
//                  we call the global 'is-authenticated' policy,
//                  found at ./src/policies/is-authenticated.js.
//                 */
//                 policies: ['is-owner']
//              }
//         }
//     ]
// }