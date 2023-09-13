/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
	context: __dirname,
	entry: { main: "./case-1/src/main.js" },
	builtins: { html: [{ template: "./case-1/index.html" }] },
	resolve: {
		alias: { moment: require.resolve("moment/min/moment.min.js") },
	},
};
