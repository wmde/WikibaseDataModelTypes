import {LabelLanguages} from './LabelLanguages';
import {MonolingualLanguages} from './MonolingualLanguages';

export {LabelLanguages} from './LabelLanguages';
export {MonolingualLanguages} from './MonolingualLanguages';

export interface WikidataResponse {
	entities: {
		[id: string]: Item;
	};
}

export interface WikiCommonsResponse {
	entities: {
		[id: string]: Mediainfo;
	};
}

export interface Item {
	pageid?: number;
	ns?: number;
	title?: string;

	lastrevid?: number;
	modified?: string; // ISO 8601 date string

	type: "item";
	id: string; // Q-string

	labels: Labels;
	descriptions: Descriptions;
	aliases: Aliases;
	claims: StatementMap;
	sitelinks: Sitelinks;
}

/**
 * mediainfo is used in the structured data of wiki commons
 * it is like a item but has some key differences like not having Aliases
 * and having claims be names statements
 */
export interface Mediainfo {
	pageid?: number;
	ns?: number;
	title?: string;

	lastrevid?: number;
	modified?: string; // ISO 8601 date string

	type: "mediainfo";
	id: string; // Q-string

	labels: Labels;
	descriptions: Descriptions;
	statements: StatementMap;
}

export interface Labels {
	[language: string]: LabelAndDescription;
}

export interface Descriptions {
	[language: string]: LabelAndDescription;
}

export interface Aliases {
	[language: string]: LabelAndDescription[];
}

export interface LabelAndDescription {
	language: LabelLanguages;
	value: string;
}

export interface StatementMap {
	[property: string]: Statement[];
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
| MusicalNotationSnak
| WikibasePropertySnak;

export interface Statement {
	mainsnak: Snaks;
	type: "statement",
	id?: string;
	rank: "normal" | "deprecated" | "preferred";
	qualifiers?: Qualifiers;
	"qualifiers-order"?: string[];
	references?: Reference[];
}

export interface Qualifiers {
	[property: string]: Snak[]
}

export interface Reference {
	hash?: string;
	snaks: ReferenceSnaks;
	"snaks-order"?: string[];
}

export interface ReferenceSnaks {
	[propertyId: string]: Snaks[];
}

export interface Sitelinks {
	[wiki: string]: SiteLink;
}

export interface SiteLink {
	site: string;
	title: string;
	badges?: string[];
	url?: string;
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

export interface Snak {
	snaktype: SnakType;
	property: string;
	hash?: string,
	datavalue?: Record<string, unknown>;
	datatype?: string;
}

export interface StringSnak extends Snak {
	datavalue?: {
		value: string;
		type: "string";
	};
	datatype?: "string";
}

export interface URLSnak extends Snak {
	datavalue?: {
		value: string;
		type: "string";
	};
	datatype?: "url";
}

export interface WikibaseItemSnak extends Snak {
	datavalue?: {
		value: {
			"entity-type": "item";
			"numeric-id": number;
			id: string;
		};
		type: "wikibase-entityid";
	}
	datatype?: "wikibase-item";
}

export type CalendarModels = 'http://www.wikidata.org/entity/Q1985727' | 'http://www.wikidata.org/entity/Q1985786';

export interface TimeSnak extends Snak {
	datavalue?: {
		value: {
			time: string;
			timezone: number;
			before: number;
			after: number;
			precision: number;
			calendarmodel: CalendarModels
		};
		type: "time";
	};
	datatype?: "time";
}

export interface MonolingualTextSnak extends Snak {
	datavalue?: {
		value: {
			text: string;
			language: MonolingualLanguages;
		};
		type: "monolingualtext";
	};
	datatype?: "monolingualtext";
}

export interface ExternalIdentifierSnak extends Snak {
	datavalue?: {
		value: string;
		type: "string";
	};
	datatype?: "external-id";
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
	datatype?: "quantity";
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
	datatype?: "globe-coordinate";
}

export interface CommonsMediaSnak extends Snak {
	datavalue?: {
		value: string
		type: "string"
	};
	datatype?: "commonsMedia";
}

export interface GeoShapeSnak extends Snak {
	datavalue?: {
		value: string,
		type: "string"
	};
	datatype?: "geo-shape";
}

export interface MathSnak extends Snak {
	datavalue?: {
		value: string,
		type: "string"
	};
	datatype?: "math";
}

export interface TabularDataSnak extends Snak {
	datavalue?: {
		value: string,
		type: "string"
	};
	datatype?: "tabular-data";
}

export interface MusicalNotationSnak extends Snak {
	datavalue?: {
		value: string,
		type: "string"
	};
	datatype?: "musical-notation";
}

export interface WikibasePropertySnak extends Snak {
	datavalue?: {
		value: {
			"entity-type": "property",
			"numeric-id": number,
			id: string
		},
		"type": "wikibase-entityid"
	};
	datatype?: "wikibase-property";
}
