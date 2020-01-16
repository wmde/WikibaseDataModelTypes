import DataValue from './DataValue';
import DataType from './DataType';
export declare type SnakType = 'value' | 'somevalue' | 'novalue';
export default interface Snak {
    snaktype: SnakType;
    property: string;
    datatype: DataType;
    datavalue?: DataValue;
}
