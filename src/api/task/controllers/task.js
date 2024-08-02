'use strict';

/**
 * task controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::task.task', ({ strapi }) => ({
    
    
    async create(ctx) {
         const data = ctx.request.body

        const newTask = await super.create(ctx);

        let users = []
        for (let i in data.data.users) {
            const entry = await strapi.db.query('plugin::users-permissions.user').findOne({
              where: { id: data.data.users[i] }
            })
            users.push(entry.username)
        }
        
        const board =  await strapi.db.query('api::board.board').findOne({
              where: { id: data.data.board },
              populate: { poject: true }
            })
            
        const user = await strapi.db.query('plugin::users-permissions.user').findOne({
              where: { id: ctx.state.user.id },
              populate: {avatar: true}
            })
        
        console.log(users)


        await fetch("https://discord.com/api/webhooks/1264851546613743646/XicjnB3j7RfENM1gl9X0D2UtzJVr75E3YDnvTXHWDVCHJ6--KluFx4rfxpFOyTwfhrtS", {
            method: "POST",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "username": "Denalify - Tasks",
              "avatar_url": "https://app.denalify.com/logo.png",
              "content": "",
              "embeds": [
                {
                  "title": board.poject.nazwa + " - " + data.data.title,
                  "color": parseInt(board.poject.color.substring(1), 16),
                  "fields": [
                    {
                      "name": "Priority",
                      "value": data.data.priority,
                      "inline": true
                    },
                    {
                      "name": "Linked users",
                      "value": users.join(),
                      "inline": true
                    },
                  ],
                  "footer": {
                    "text": user.username+' created new task',
                    "icon_url": 'https://strapi.denalify.com'+user.avatar.url
                  }
                }
              ]
            }),
        })
        
    }
}));
