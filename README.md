# @fs-fns/reverse-geocode

Async reverse-geocode function

- getAddressByLocation `(lat: number, lon: number) => Record<string, any>`

## Install

```sh
yarn add @fs-fns/reverse-geocode
```

## Usage

```js
import { getAddressByLocation } from "@fs-fns/reverse-geocode";

// new york location
getAddressByLocation(40.7148652, -74.1014854).then(console.log);
```
