export type DataType = 'string';

export type DataValueType = 'string';

export interface DataValue {
	type: DataValueType;
	value: string;
}

export type SnakType = 'value' | 'somevalue' | 'novalue';

export interface Snak {
	snaktype: SnakType;
	property: string;
	datatype: DataType;
	datavalue?: DataValue; // absent for snaktype != 'value'
	hash?: string;
}

export interface Qualifier extends Snak {
	hash: string;
}

export interface QualifierMap {
	[ propertyId: string ]: Qualifier[];
}

export interface SnakMap {
	[ propertyId: string ]: Snak[];
}

export interface Reference {
	hash: string;
	snaks: SnakMap;
	'snaks-order': string[];
}

export type Rank = 'preferred' | 'normal' | 'deprecated';

export interface Statement {
	id?: string; // absent in newly created statements (fresh ID assigned server-side on save)
	mainsnak: Snak;
	rank: Rank;
	qualifiers?: QualifierMap; // may be absent if empty, to save space
	'qualifiers-order'?: string[]; // may be absent if empty
	references?: Reference[]; // may be absent if empty
	type: 'statement';
}

export interface StatementMap {
	[ propertyId: string ]: Statement[];
}

export interface Term {
	language: string;
	value: string;
}

export interface TermList {
	[language: string]: Term;
}

export interface AliasesList {
	[language: string]: Term[];
}

export interface Fingerprintable {
	labels: TermList;
	descriptions: TermList;
	aliases: AliasesList;
}