const config = {
  translations: {
      en: {
          "app.components.leftMenu.navbrand.title": "Denalify Dashboard",
          "Auth.form.welcome.title": "Welcome to Denalify Admin Panel",
          "Auth.form.welcome.subtitle": "Login to your account"
      }
  }
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
