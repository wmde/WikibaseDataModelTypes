import axios from 'axios';
import * as fs from 'fs';

const endpointUrl = 'https://www.wikidata.org/w/api.php?action=query&format=json&meta=wbcontentlanguages&formatversion=2&wbclcontext=monolingualtext';

interface Response {
	batchcomplete: boolean;
	query: {
		wbcontentlanguages: {
			[key: string]: {
				code: string;
			}
		}[]
	}
}

axios.get<Response>(endpointUrl).then((response) => {
	const data = Object.keys(response.data.query.wbcontentlanguages);

	const languages = data.map((lang) => {
		return `'${lang}'`;
	}).join(' | \n');
    
	fs.writeFileSync('MonolingualLanguages.d.ts', `export type MonolingualLanguages = ${languages};`);
});

const labelLanguages = 'https://www.wikidata.org/w/api.php?action=query&format=json&meta=wbcontentlanguages&formatversion=2';

axios.get<Response>(labelLanguages).then((response) => {
	const data = Object.keys(response.data.query.wbcontentlanguages);

	const languages = data.map((lang) => {
		return `'${lang}'`;
	}).join(' | \n');

	fs.writeFileSync('LabelLanguages.d.ts', `export type LabelLanguages = ${languages};`);
});
