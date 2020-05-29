/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {
	DataType,
	DataValueType,
	Rank,
	SnakType,
	Statement,
	StatementMap,
} from '.';

const douglasAdamsStatement: Statement = {
	mainsnak: {
		snaktype: SnakType.value,
		property: 'P373',
		datatype: DataType.string,
		datavalue: {
			type: DataValueType.string,
			value: 'Douglas Adams',
		},
	},
	type: 'statement',
	rank: Rank.normal,
};

const douglasAdamsStatements: StatementMap = {
	'P373': [ douglasAdamsStatement ],
};

const douglasAdamsStatementsWithoutArray: StatementMap = {
	// @ts-expect-error
	'P373': douglasAdamsStatement,
};
