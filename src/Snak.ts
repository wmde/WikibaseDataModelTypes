import DataValue from './DataValue';
import DataType from './DataType';

export type SnakType = 'value'|'somevalue'|'novalue';

export default interface Snak {
	snaktype: SnakType;
	property: string; // https://github.com/Microsoft/TypeScript/issues/6579 is accepted
	datatype: DataType;
	datavalue?: DataValue;
}
