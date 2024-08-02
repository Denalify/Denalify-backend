module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/orgbyname/:orgname',
     handler: 'orgbyname.orgbyname',
    },
  ],
};
