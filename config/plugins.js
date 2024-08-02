module.exports = ({env}) => ({
	email: {
		config: {
		  provider: 'sendgrid',
		  providerOptions: {
			apiKey: env('SENDGRID_API_KEY'),
		  },
		  settings: {
			defaultFrom: 'noreply@denalify.com',
			defaultReplyTo: 'noreply@denalify.com',
		  },
		},
	},
	'email-designer': {
        enabled: true,
    
        // ⬇︎ Add the config property
        config: {
            appearance: {
              theme: 'dark',
              panels: {
                tools: {
                  dock: 'left',
                },
              },
            },
         },
	},
	"users-permissions": {
        config: {
            register: {
                allowedFields: ["emial", "password"],
            },
            jwt: {
                expiresIn: '30d',
            },
        },
    },
    "graphql": {
        enabled: true,
        config: {
          // set this to true if you want to enable the playground in production
            playgroundAlways: true,
        },
    },
    "apollo-sandbox": {
        enabled: process.env.NODE_ENV === "production" ? false : true,
    },
});
