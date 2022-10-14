<h1 align="center">String-Validators</h1>
<p align="center">
  <img alt="ForTheBadge built-with-love" src="http://ForTheBadge.com/images/badges/built-with-love.svg">
  <br/>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>
<hr />
<p align="center" style="font-size:1.4em">
  <strong>Little Javascript / Typescript library for validating format of string like email, url, password...</strong>
</p>
<p align="center">
   <a href="https://github.com/jdelauney/string-validators/releases">
    <img alt="GitHub release (latest SemVer including pre-releases)" src="https://img.shields.io/github/v/release/jdelauney/string-validators?include_prereleases&style=for-the-badge">
  </a>  
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/jdelauney/string-validators?style=for-the-badge">  
  <a href="https://github.com/jdelauney/string-validators/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/jdelauney/string-validators.svg?style=for-the-badge">
  </a>
  <a href="https://github.com/jdelauney/string-validators/graphs/contributors">
    <img alt="Contributors" src="https://img.shields.io/github/contributors/jdelauney/string-validators.svg?style=for-the-badge">
  </a>
</p>
<p align="center">
  <a href="https://github.com/jdelauney/string-validators/network/members">
    <img alt="Forks" src="https://img.shields.io/github/forks/jdelauney/string-validators.svg?style=for-the-badge">
  </a>
  <a href="https://github.com/jdelauney/string-validators/issues">
    <img alt="Issues" src="https://img.shields.io/github/issues/jdelauney/string-validators.svg?style=for-the-badge">
  </a>
  <a href="/pulls">
    <img alt="requests" src="http://img.shields.io/badge/PRs-welcome-green.svg?style=for-the-badge">
  </a>
  <a href="https://github.com/jdelauney/string-validators/blob/master/LICENSE">
    <img alt="MIT License" src="https://img.shields.io/github/license/jdelauney/string-validators.svg?style=for-the-badge">
  </a>
</p>
<hr />
<p align="center">
  <a href="https://github.com/jdelauney/string-validators/issues">Signaler un Bug</a>
  ·
  <a href="https://github.com/jdelauney/string-validators/issues">Proposer une Feature</a>
  <br />
</p>
<hr/>


<span id="readme-top"></span>

<!-- TABLE OF CONTENTS -->
<details>
  <summary><b>Table of Contents</b></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a> 
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#How-to-check-if-an-email-is-valid">How to check if an email is valid</a></li>
        <li><a href="#How-to-make-your-on-custom-string-format-validation-schema">How to make your on custom string format validation schema</a></li>
      </ul>
    </li>
    <li><a href="#validators-overview">Validators overview</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#connect-with-me">Connect with me</a></li> 
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

The first goal of this project is to **create complete and personalized validation schemes** for strings by using native functions as much as possible. 
This is in order to **obtain maximum security** and to avoid as much as possible the use of RegEx which would be likely to be subject to **ReDOS attacks**.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started
<!-- Installation -->
### Installation

Use your preferred node package manager.

```bash
> pnpm install
```
Or clone this repository 

- Clone project
  ```bash
  > git clone https://github.com/jdelauney/string-validators.git
  ```

  Go to the project directory

  ```bash
  > cd string-validators
  ```
- Install dependencies with npm, pnpm or yarn:
   ```bash
   > pnpm install
   ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- Usage -->
## Usage

### How to check if an email is valid
```typescript
import {isValidEmail} from "string-validators";

const isValidEmail = isValidEmail('johndoe@mail.com');
// return true

const isValidEmailIncludeDomainBlackList = isValidEmail('johndoe@dodgeit.com', 'pathto/blacklist-domain.csv');
// return false
```

> You'll can find a file with a non-exhaustive email disposable domain list, in the folder `files`

### How to make your on custom string format validation schema

1. Create test
   - in the `__tests__` folder create your spec test and test it with the following command
     ```bash
     > pnpm test:watch src/__tests__/yourTestFile.spec.ts
     ```
   - in the `__tests__` folder create your unit test
   ```typescript
   import { describe, expect, test } from 'vitest';
   import { stringValidator } from 'string-validators';

   const validPasswords = [
     'abC$123DEf',
     'ABc1$ef#gh',
     'aB$C23dE2f',
   ];

   const invalidPasswords = [
     '',
     'abcdef',
     'ab$12AB',
     'Ab1$2cdef',
     'AB1$cdef',
   ];

   describe('Feature : Strong password validator', () => {
     describe('Given a list of valid password', () => {
       test.each(validPasswords)('When %p as argument, it should return TRUE', async password => {
         const isValid = await isValidStrongPassword(password);
         expect(isValid).toBe(true);
       });
     });

     describe('Given a list of invalid password', () => {
       test.each(invalidPasswords)('When %p as argument, it should return FALSE', async password => {
         const isValid = await isValidStrongPassword(password);
         expect(isValid).toBe(false);
       });
     });
   });
   ```

2. Launch test in **watch mode**
```bash
> pnpm test:watch src/__tests__/yourTestFile.test.ts
```
3. Write your code and refactor it until all tests are green
```typescript
import {
  stringValidator, 
  isMinLength, 
  isContainsOneOfCharsCount, 
  CHARSET_LOWER_ALPHA, 
  CHARSET_NUMBER, 
  CHARSET_UPPER_ALPHA
} from "string-validators";

const isValidStrongPassword = (password: string) => {
  return stringValidator(password, [
    isNot(isEmpty),
    isMinLength(8),
    isContainsOneOfCharsMinCount('$#%+*-=[]/(){}€£!?_', 1),
    isContainsOneOfCharsMinCount(CHARSET_LOWER_ALPHA, 3),
    isContainsOneOfCharsMinCount(CHARSET_UPPER_ALPHA, 2),
    isContainsOneOfCharsMinCount(CHARSET_NUMBER, 2),
  ]);
}

const isValidStrongPassword2 = stringValidator('abC$123Def', [
  isNot(isEmpty),
  isMinLength(10),
  isContainsOneOfCharsMinCount('$#%+*-=[]/(){}€£!?_', 2),
  isContainsOneOfCharsMinCount(CHARSET_LOWER_ALPHA, 3),
  isContainsOneOfCharsMinCount(CHARSET_UPPER_ALPHA, 2),
  isContainsOneOfCharsMinCount(CHARSET_NUMBER, 3),
]);
// return false
```
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- VALIDATORS OVERVIEW -->
## Validators overview

To help us as much as possible to create validation schemas. 
The 'String-Validators' library contains more than 50 validation rules that one can apply. 

**Here are a few available functions** :
* **isEmpty()** : check if string is empty
* **isMinLength(min)** : check if string has a minimum number of characters
* **isMinLength(max)** : check if string has a maximum number of characters
* **isEqualLength(equal)** : check if string has the exact required number of characters
* **isUpper()** : check if string is in upper case only
* **isLower()** : check if string is in lower case only
* **isAlpha()** : check if string only contain Alpha characters
* **isNumber()** : check if string only contain Number characters
* **isStartsWith(startStr)** : check if string starts with
* **isEndsWith(startStr)** : check if string ends with
* **isMatch(regex)** : check if string match with a regex
* **isSurroundBy(leftStr, rightStr)** : check if string is surrounded by leftStr and rightStr 
* **isLeftOf(searStr, leftStr)** : check if the first occurrence of searchStr have leftStr on his left
* **isNot(fn)** : Negate the result of an validator

For the complete list of available validator check the `validators` folder. Names are enough friendly to understand their purposes.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->
## Roadmap

- [ ] Write a full documentation
- [ ] Add common validators
    - [ ] Web site Url Validator
    - [ ] Url Validator
    - [ ] Password validator
    - [ ] Credit card validator
    - [ ] UUID Validator
    - [ ] IP Validator
    - [ ] Username Validator
    - [ ] Phone validator 
- [ ] Add logical AND operator
- [ ] Add logical OR operator
- [ ] Add isPrefixedBy (+ One of, One of Chars) validators
- [ ] ...more validators

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License.

Copyright 2022 J.DELAUNEY

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Connect with me:
<p>
<a href="https://twitter.com/jeromedelauney" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="jeromedelauney" height="30" width="40" /></a>
<a href="https://linkedin.com/in/jérôme-delauney-802994bb" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="jérôme-delauney-802994bb" height="30" width="40" /></a>
</p>

Project Link: [https://github.com/jdelauney/string-validators](https://github.com/jdelauney/string-validators)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
