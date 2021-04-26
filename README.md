# @fs-fns/reverse-geocode

Async reverse-geocode file

- getAddressByLocation `async (lat: number, lon: number) => Record<string, any>`

## Install

```sh
yarn add @fs-fns/reverse-geocode axios
```

## Usage

```js
import { getAddressByLocation } from "@fs-fns/reverse-geocode";

// new york location
getAddressByLocation(-2.92887, -44.9357).then(console.log);
```
