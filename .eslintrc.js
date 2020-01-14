module.exports = {
	extends: [
		'@wmde/wikimedia-typescript',
	],
	overrides: [
		{
			files: [ '**/*.json' ],
			rules: {
				'@typescript-eslint/semi': 'off',
			},
		},
	],
}
