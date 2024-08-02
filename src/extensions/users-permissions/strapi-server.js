module.exports = (plugin) => {
  for (let i = 0; i < plugin.routes["content-api"].routes.length; i++) {
    const route = plugin.routes["content-api"].routes[i];
    if (
      route.method === "GET" &&
      route.path === "/users/:id" &&
      route.handler === "user.findOne"
    ) {
      console.log(route);
      plugin.routes["content-api"].routes[i] = {
        ...route,
        config: {
          ...route.config,
          policies: route.config.policies
            ? [...route.config.policies, "global::isOwner"] // tests if policies were defined
            : ["global::isOwner"],
        },
      };
    }
  }
  
     plugin.controllers.user.updateMe = async (ctx) => {
        if (!ctx.state.user || !ctx.state.user.id) {
            return ctx.response.status = 401;
        }
        await strapi.query('plugin::users-permissions.user').update({
            where: {id: ctx.state.user.id},
            data: ctx.request.body
        }).then((res)=> {
            ctx.response.status = 200;
        })
    }
  
    plugin.routes['content-api'].routes.push({
        method: "PUT",
        path: '/user/me',
        handler: "user.updateMe",
        config: {
            prefix: '',
            policies: []
        }
    })

  return plugin;
};