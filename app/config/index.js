'use strict';

var init = function () {

	if (process.env.NODE_ENV === 'production') {
		return {
			dbURI: process.env.dbURI,
			sessionSecret: process.env.sessionSecret,
			facebook: {
				clientID: process.env.facebookClientID,
				clientSecret: process.env.facebookClientSecret,
				callbackURL: "/auth/facebook/callback",
				profileFields: ['id', 'displayName', 'photos']
			},
			twitter: {
				consumerKey: process.env.twitterConsumerKey,
				consumerSecret: process.env.twitterConsumerSecret,
				callbackURL: "/auth/twitter/callback",
				profileFields: ['id', 'displayName', 'photos']
			},
			redis: {
				host: process.env.rHost,
				port: process.env.rPort,
				password: process.env.rPassword
			}
		}
	}
	else {
		return require('./config.json');
	}
}

module.exports = init();
