# BoxIcons icons for preact

[![JSR](https://jsr.io/badges/@preact-icons/bi)](https://jsr.io/@preact-icons/bi)

**License** [CC BY 4.0 License](https://github.com/atisawd/boxicons/blob/master/LICENSE)

**Project** [https://github.com/atisawd/boxicons](https://github.com/atisawd/boxicons)

[See available icons here](https://react-icons.deno.dev/bi)

## install the module

```bash
deno add @preact-icons/bi
dnpx jsr add @preact-icons/bi
pnpm dlx jsr add @preact-icons/bi
bunx jsr add @preact-icons/bi
```

You may need to update your preact mapping to avoid mixing JSR and http import:
Currently Deno fresh import preact using https://esm.sh/preact http import can not be mixed with JSR package, so you may need to update your preact mapping:
```json
{
 "preact": "npm:preact@10.22.1",
 "preact/jsx-runtime": "npm:preact@10.22.1/jsx-runtime",
 "preact/hooks": "npm:preact@10.22.1/hooks",
}
```

## import an icon from all icons

```ts
import { BiAbacus } from "@preact-icons/bi"
```

## import a single icon, downloading just one icon

```ts
import { BiAbacus } from "react-icons/bi/BiAbacus"
```

or using default export

```ts
import BiAbacus from "react-icons/bi/BiAbacus"
```
