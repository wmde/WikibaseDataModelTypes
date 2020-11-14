/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {
	Statement,
	StatementMap,
} from '../';

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
