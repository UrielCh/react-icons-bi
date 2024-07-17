# BoxIcons icons for deno / Preact

**License** [CC BY 4.0 License](https://github.com/atisawd/boxicons/blob/master/LICENSE)

**Project** [https://github.com/atisawd/boxicons](https://github.com/atisawd/boxicons)

[See available icons here](https://react-icons.deno.dev/bi)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "@preact-icons/common": "jsr:@preact-icons/common@^1.0.9",
    "preact": "npm:preact@10.22.1",
    "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
    "preact/hooks": "npm:preact@10.22.1/hooks",
    "react-icons/bi": "jsr:@preact-icons/bi@^1.0.10/mod.ts",
    "react-icons/bi/": "jsr:@preact-icons/bi@^1.0.10/ico/",
  }
}
```

## Import an icon without import_map by and afer loading all icons from the lib bi

```ts
import { BiAbacus } from "jsr:preact-icons/bi@1.0.10/mod.ts"
```

## import_map import an icon from all icons

```ts
import { BiAbacus } from "react-icons/bi"
```

## import a single icon, downloading just one icon

```ts
import { BiAbacus } from "react-icons/bi/BiAbacus.ts"
```

or using default export

```ts
import BiAbacus from "react-icons/bi/BiAbacus.ts"
```

