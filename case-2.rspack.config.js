/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
	context: __dirname,
	entry: { main: "./case-2/src/main.js" },
	builtins: { html: [{ template: "./case-2/index.html" }] },
};
