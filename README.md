ESLint-plugin-React
===================


Alloy specific linting rules for ESLint

# Installation

Install [ESLint](https://www.github.com/eslint/eslint) either locally or globally.

```sh
$ npm install eslint --save-dev
```

If you installed `ESLint` globally, you have to install Alloy plugin globally too. Otherwise, install it locally.

```sh
$ npm install eslint-plugin-alloy --save-dev
```


Add "alloy" to the plugins section.

```json
{
  "plugins": [
    "alloy"
  ]
}
```
```

Enable the rules that you would like to use.

```json
  "rules": {
    "alloy/no-unused-vars": "error",
  }
```

# List of supported rules

* [alloy/no-unused-vars](docs/rules/no-unused-vars.md): Extension of the built in [no-unused-vars](https://github.com/eslint/eslint/blob/master/docs/rules/no-unused-vars.md) that also looks up functions used in view files.
