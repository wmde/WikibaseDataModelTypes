/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {
	Fingerprintable,
	Statement,
	StatementMap,
} from '.';

const douglasAdamsStatement: Statement = {
	mainsnak: {
		snaktype: 'value',
		property: 'P373',
		datatype: 'string',
		datavalue: {
			type: 'string',
			value: 'Douglas Adams',
		},
	},
	type: 'statement',
	rank: 'normal',
};

const douglasAdamsStatements: StatementMap = {
	'P373': [ douglasAdamsStatement ],
};

const douglasAdamsStatementsWithoutArray: StatementMap = {
	// @ts-expect-error
	'P373': douglasAdamsStatement,
};

const douglasAdamsTerms: Fingerprintable = {
	labels: {
		en: {
			language: 'en',
			value: 'Douglas Adams',
		},
	},
	descriptions: {
		en: {
			language: 'en',
			value: 'English writer and humorist',
		},
		'en-gb': {
			language: 'en-gb',
			value: 'English writer and humourist',
		},
	},
	aliases: {
		en: [
			{
				language: 'en',
				value: 'Douglas Noel Adams',
			},
			{
				language: 'en',
				value: 'Douglas Noël Adams',
			},
			{
				language: 'en',
				value: 'Douglas N. Adams',
			},
		],
	},
};

const douglasAdamsTermsWithoutLanguage: Fingerprintable = {
	labels: {
		// @ts-expect-error
		en: 'Douglas Adams',
	},
	descriptions: {
		// @ts-expect-error
		en: 'English writer and humorist',
		// @ts-expect-error
		'en-gb': 'English writer and humourist',
	},
	aliases: {
		en: [
			// @ts-expect-error
			'Douglas Noel Adams',
			// @ts-expect-error
			'Douglas Noël Adams',
			// @ts-expect-error
			'Douglas N. Adams',
		],
	},
};
