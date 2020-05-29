export const enum DataType {
	string = 'string',
}

export const enum DataValueType {
	string = 'string',
}

export interface DataValue {
	type: DataValueType;
	value: string;
}

export const enum SnakType {
	value = 'value',
	somevalue = 'somevalue',
	novalue = 'novalue',
}

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

export const enum Rank {
	preferred = 'preferred',
	normal = 'normal',
	deprecated = 'deprecated',
}

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