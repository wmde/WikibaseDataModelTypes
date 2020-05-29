# WikibaseDataModelTypes

Typescript definitions for the Wikibase DataModel expressed as flat JS objects,
as returned and accepted by Wikibase APIs like wbgetentities or wbeditentity.

## Scope

For now, the definitions in this repository are very limited.
However, you can always augment them through [declaration merging][],
for example:

```
namespace '@wmde/wikibase-datamodel-types' {
	const enum DataType {
		url = 'url',
	}
}
```
