## js-password-gen

Password generator using JS for NodeJS


## Installation

Install js-password-gen with npm

```bash
//Production dependencie
npm install js-password-gen

//Developer dependencie
npm install js-password-gen -D
```

## Usage
- NodeJS syntax

  ```javascript
  //@ts-check
  const generatePassword = require("js-password-gen");
  const password = generatePassword(length, options);
  /*
  length: Number,
  options: { chars: boolean, upperCase?: boolean, numbers?: boolean, symbols?: boolean }
  */
  ```
- Example:
  ```javascript
  //@ts-check
  const generatePassword = require("js-password-gen");
  const password = generatePassword(16, {chars: true, symbols: true, numbers: true, upperCase:true})
  console.log(`password:`, password) //password: #YP]%#x]u3K:/Z0;
  ```

## length - Number
- Type `number`
- Default value: `8`
- Max value: `64`
## { options } - Object

| **Prop**          | **Type**   | **Description**                                                                                                                                                                                                                                                 | **Required** |
| ----------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| chars           | `boolean`   | Include characters in your password.                                                                                                                                                                | ✅            |
| upperCase           | `boolean`   | Include upper case characters in your password.                                                                                                                                       |              |
| numbers     | `boolean`   | Include numbers in your password. |              |
| symbols         | `boolean` | Include symbols in your password.                                                                                                                                                   |              | 

## Authors

- [@alexisg24](https://www.github.com/alexisg24)

![](https://img.shields.io/twitter/follow/MasterCR_)  ![](https://img.shields.io/github/followers/alexisg24?style=social) ![](https://img.shields.io/github/stars/alexisg24/js-password-gen?style=social)
