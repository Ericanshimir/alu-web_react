module.exports = {
	testEnvironment: 'jsdom',
	transformIgnorePatterns: ["/node_modules/"],
	moduleNameMapper: {
	  "\\.(css|less)$": "identity-obj-proxy",
	  "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
	},
  };
  