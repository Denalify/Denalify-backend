module.exports = [
    'strapi::logger',
    'strapi::errors',
    {
        name: 'strapi::security',
        config: {
            contentSecurityPolicy: {
                directives: {
                    "script-src": ["'self'","'unsafe-inline'", "editor.unlayer.com"],
                    "frame-src": ["http://localhost:*", "'self'", "editor.unlayer.com", "sandbox.embed.apollographql.com"],
                    "img-src": [
                        "'self'",
                        "data:",
                        "cdn.jsdelivr.net",
                        "strapi.io",
                        "s3.amazonaws.com",
                    ],
                    frameAncestors: ['http://localhost:*', 'self'],
                }
            }
        },
    },
    {
        name: 'strapi::cors',
        config: {
          headers: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'Cache-Control', 'Pragma'],
          origin: '*',
          methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
          credentials: true,
        },
    },
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
];
