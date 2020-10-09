const path = require('path');
const rule = require('../rules/no-unused-vars');
const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester();
const appFixtureDir = path.join(__dirname, 'fixtures', 'testApp');

ruleTester.run('no-unused-vars', rule, {
	valid: [
		{
			code: 'function foo() { }; var x; x=2; if(x) {  }',
			parserOptions: { 'alloy/no-unused-vars': true },
			filename: path.join(appFixtureDir, 'app', 'controllers', 'index.js')
		},
		{
			code: 'function foo() { }; var x; x=2; if(x) {  }',
			parserOptions: { 'alloy/no-unused-vars': true },
			filename: path.join(appFixtureDir, 'app', 'controllers', 'foo.js')
		}
	],
	invalid: [
		{
			code: 'function noFoo() { }',
			parserOptions: { 'alloy/no-unused-vars': true },
			filename: path.join(appFixtureDir, 'app', 'controllers', 'index.js'),
			errors: [ { line: 1, column: 10 } ],
		},
		{
			code: 'function foo() { }; var x; x=2; if(x) {  }',
			parserOptions: { 'alloy/no-unused-vars': true },
			filename: path.join(appFixtureDir, 'app', 'controllers', 'subdir', 'bar.js'),
			errors: [ { line: 1, column: 10 } ],
		}
	]
});
