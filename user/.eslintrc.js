module.exports = {
	env: {
		browser: true,
		es6: true
	},
	parser:  '@typescript-eslint/parser',  // Specifies the ESLint parser
	plugins: ['@typescript-eslint'],
	extends:  [
	  'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from the @typescript-eslint/eslint-plugin
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	rules: {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'@typescript-eslint/explicit-function-return-type': 'off'
	}
};