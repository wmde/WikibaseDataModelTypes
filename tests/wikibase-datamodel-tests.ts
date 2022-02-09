/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {
	Item,
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

const slimItem: Item = {
	"type":"item",
	"id":"Q32405003",
	"labels":{
		"pt":{
			"language":"pt","value":"Categoria:Pol\u00edtica de Carapicu\u00edba"
		}
	},
	"descriptions":{},
	"aliases":{},
	"claims":{
		"P31":[
			{
				"mainsnak":{
					"snaktype":"value",
					"property":"P31",
					"hash":"6ce6fb09d8a0ca69b7054c628cf9b004c29c0003",
					"datavalue":{
						"value":{
							"entity-type":"item",
							"numeric-id":4167836,
							"id":"Q4167836"
						},
						"type":"wikibase-entityid"
					},
					"datatype":"wikibase-item"
				},
				"type":"statement",
				"id":"Q32405003$15607DB0-448D-4D67-AE46-2E119DB465A4",
				"rank":"normal"
			}
		]
	},
	"sitelinks":{
		"ptwiki":{
			"site":"ptwiki",
			"title":"Categoria:Pol\u00edtica de Carapicu\u00edba",
			"badges":[],
			"url":"https://pt.wikipedia.org/wiki/Categoria:Pol%C3%ADtica_de_Carapicu%C3%ADba"
		}
	}
};