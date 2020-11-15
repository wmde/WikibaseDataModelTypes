export interface WikidataResponse {
	entities: {
		[id: string]: Item;
	};
}

export interface Item {
	pageid: number;
	ns: number;
	title: string;
	lastrevid: number;
	modified: string;
	type: string;
	id: string;
	labels: Labels;
	descriptions: Descriptions;
	aliases: Aliases;
	claims: StatementMap;
	sitelinks: Sitelinks;
}

export interface Labels {
	[language: string]: LabelAndDiscription;
}

export interface Descriptions {
	[language: string]: LabelAndDiscription;
}

export interface Aliases {
	[language: string]: LabelAndDiscription[] | null;
}

export interface LabelAndDiscription {
	language: string;
	value: string;
}

export interface StatementMap {
	[propery: string]: (Statement)[] | null;
}

export type Snaks = CommonsMediaSnak
| GlobeCoordinateSnak
| MonolingualTextSnak
| QuantitySnak
| StringSnak
| TimeSnak
| URLSnak
| WikibaseItemSnak
| ExternalIdentifierSnak
| GeoShapeSnak
| MathSnak
| TabularDataSnak
| MusicalNotationSnak;

export interface Statement {
	mainsnak: Snaks;
	type: "statement",
	id?: string;
	rank: "normal" | "deprecated" | "preferred";
	qualifiers?: Qualifiers;
	"qualifiers-order"?: (string)[] | null;
	references?: (Reference)[] | null;
}

export type Qualifier<T> = T & {hash: string};

export type QualifierSnaks = Qualifier<CommonsMediaSnak>
| Qualifier<GlobeCoordinateSnak>
| Qualifier<MonolingualTextSnak>
| Qualifier<QuantitySnak>
| Qualifier<StringSnak>
| Qualifier<TimeSnak>
| Qualifier<URLSnak>
| Qualifier<WikibaseItemSnak>
| Qualifier<ExternalIdentifierSnak>
| Qualifier<GeoShapeSnak>
| Qualifier<MathSnak>
| Qualifier<TabularDataSnak>
| Qualifier<MusicalNotationSnak>;

export interface Qualifiers {
	[property: string]: QualifierSnaks[] | null
}

export interface Reference {
	hash: string;
	snaks: ReferenceSnaks;
	"snaks-order"?: (string)[] | null;
}

export interface ReferenceSnaks {
	[properyId: string]: (Snaks)[] | null;
}

export interface Sitelinks {
	[wiki: string]: SiteLink;
}

export interface SiteLink {
	site: string;
	title: string;
	badges?: (string)[] | null;
	url: string;
}


/*       
						_          
					   | |         
  ___   _ __     __ _  | | __  ___ 
 / __| | '_ \   / _` | | |/ / / __|
 \__ \ | | | | | (_| | |   <  \__ \
 |___/ |_| |_|  \__,_| |_|\_\ |___/
								   
								   
*/

export type SnakType = 'value' | 'somevalue' | 'novalue';

interface Snak {
	snaktype: SnakType;
	property: string;
	datavalue?: Record<string, unknown>;
	datatype: string;
}

export interface StringSnak extends Snak {
	datavalue?: {
		value: string;
		type: string;
	};
	datatype: "string";
}

export interface URLSnak extends Snak {
	datavalue?: {
		value: string;
		type: string;
	};
	datatype: "url";
}

export interface WikibaseItemSnak extends Snak {
	datavalue?: {
		value: {
			"entity-type": string;
			"numeric-id": number;
			id: string;
		};
		type: string;
	}
	datatype: "wikibase-item";
}


export interface TimeSnak extends Snak {
	datavalue?: {
		value: {
			time: string;
			timezone: number;
			before: number;
			after: number;
			precision: number;
			calendarmodel: string;
		};
		type: "time";
	};
	datatype: "time";
}

export interface MonolingualTextSnak extends Snak {
	datavalue?: {
		value: {
			text: string;
			language: string;
		};
		type: "monolingualtext";
	};
	datatype: "monolingualtext";
}

export interface ExternalIdentifierSnak extends Snak {
	datavalue?: {
		value: string;
		type: string;
	};
	datatype: "external-id";
}

export interface QuantitySnak extends Snak {
	datavalue?: {
		value: {
			amount: string
			unit: string
			upperBound?: string;
			lowerBound?: string
		};
		type: "quantity"
	};
	datatype: "quantity";
}

export interface GlobeCoordinateSnak extends Snak {
	datavalue?: {
		value: {
			latitude: number;
			longitude: number;
			altitude?: null;
			precision: number;
			globe: string;
		};
		type: "globecoordinate";
	};
	datatype: "globe-coordinate";
}

export interface CommonsMediaSnak extends Snak {
	datavalue?: {
		value: string
		type: string
	};
	datatype: "commonsMedia";
}

export interface GeoShapeSnak extends Snak {
	datavalue?: {
		value: string,
		type: string
	};
	datatype: "geo-shape";
}

export interface MathSnak extends Snak {
	datavalue?: {
		value: string,
		type: string
	};
	datatype: "math";
}

export interface TabularDataSnak extends Snak {
	datavalue?: {
		value: string,
		type: string
	};
	datatype: "tabular-data";
}

export interface MusicalNotationSnak extends Snak {
	datavalue?: {
		value: string,
		type: string
	};
	datatype: "musical-notation";
}
