import Snak from './Snak';
import QualifierMap from './QualifierMap';
import Reference from './Reference';
declare type Rank = 'preferred' | 'normal' | 'deprecated';
export interface Statement {
    id: string;
    mainsnak: Snak;
    rank: Rank;
    qualifiers?: QualifierMap;
    'qualifiers-order'?: string[];
    references?: Reference[];
    type: 'statement';
}
export {};
