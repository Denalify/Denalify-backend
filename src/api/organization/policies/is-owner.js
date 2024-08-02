module.exports = async (policyContext, config, { strapi }) => {
  const { body } = policyContext.request;
  const { user } = policyContext.state;

  // Return an error if there is no authenticated user with the request
  if (!user) {
    return false;
  }
  /**
   * Queries the Restaurants collection type
   * using the Entity Service API
   * to retrieve information about the restaurant's owner.
   */ 
  const [organizations] = await strapi.entityService.findMany(
    'api::organization.organization',
    {
      filters: {
        slug: body.restaurant,
      },
      populate: ['admin_users'],
    }
  );
  if (!organizations) {
    return false;
  }

  /**
   * If the user submitting the request is the restaurant's owner,
   * we don't allow the review creation.
   */ 
  if (user.id === organizations.admin_users.id) {
    return false;
  }

  return true;
};