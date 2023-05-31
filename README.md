# BoxIcons icons for deno / Preact

**License** [CC BY 4.0 License](https://github.com/atisawd/boxicons/blob/master/LICENSE)

**Project** [https://github.com/atisawd/boxicons](https://github.com/atisawd/boxicons)

[See available icons here](https://react-icons.github.io/react-icons/icons?name=bi)

## import_map.json

For a transparent usage:

```json
{
  "imports": {
    "preact":  "https://esm.sh/preact@10.15.1",
    "preact/": "https://esm.sh/preact@10.15.1/",
    "react-icons/bi":  "https://cdn.jsdelivr.net/gh/urielch/react-icons-bi@1.0.5/mod.ts",
    "react-icons/bi/": "https://cdn.jsdelivr.net/gh/urielch/react-icons-bi@1.0.5/ico/",
  }
}
```

## Direct import sample

```ts
import { BiAbacus } from "https://deno.land/x/react_icons_bi@1.0.5/mod.ts"
```

## import_map import sample

```ts
import { BiAbacus } from "react-icons/bi"
```

## minimal import

```ts
import { BiAbacus } from "react-icons/bi/BiAbacus.ts"
```

## minimal import using default export

```ts
import BiAbacus from "react-icons/bi/BiAbacus.ts"
```

