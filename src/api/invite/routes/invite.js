module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/invite',
     handler: 'invite.invite',
     config: {
        policies: [],
        middlewares: [],
     },
    },
    {
      method: 'POST',
      path: '/invite/:code', 
      handler: 'invite.inviteCode',
    },
  ],
};
