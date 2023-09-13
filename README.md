#### Case 1

```js
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
```

```bash

    # install
    yarn
    # run build
    yarn build:case1

    # $ rspack build
    # error[internal]: Failed to resolve ./locale in project root



    # rspack compiled with 1 error in 299 ms
    # error Command failed with exit code 1.
    # info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.



```

#### Case 2

```js
/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
	context: __dirname,
	entry: { main: "./case-2/src/main.js" },
	builtins: { html: [{ template: "./case-2/index.html" }] },
};
```

```bash

    # install
    yarn
    # run build
    yarn build:case2

    # $ rspack build
    # error[internal]: Failed to resolve ./locale in project root



    # rspack compiled with 1 error in 299 ms
    # error Command failed with exit code 1.
    # info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.



```
