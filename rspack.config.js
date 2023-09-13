/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
	context: __dirname,
	entry: { main: "./src/main.js" },
	builtins: { html: [{ template: "./index.html" }] },
	resolve: {
		alias: { moment: require.resolve("moment/min/moment.min.js") },
	},
};
