# react-overflow-text
> Overflow text for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-overflow-text
```

## usage
1. import css
  ```scss
  @import "~@jswork/react-overflow-text/dist/style.css";

  // or use sass
  @import "~@jswork/react-overflow-text/dist/style.scss";
  ```
2. import js
  ```js
  import ReactOverflowText from '@jswork/react-overflow-text';
  import '@jswork/react-overflow-text/dist/style.scss';
  import { useState } from 'react';

  function App() {
    const [v1, setV1] = useState(false);
    const [v2, setV2] = useState(false);
    return (
      <div className="m-10 p-4 shadow bg-gray-100 text-gray-800 hover:shadow-md transition-all">
        <div className="badge badge-warning absolute right-0 top-0 m-4">
          Build Time: {BUILD_TIME}
        </div>
        <h1 className="text-center">react-overflow-text</h1>
        <div className="y-5 p-5 bg-gray-200 wp-7 mx-auto">
          <div className="mockup-code">
            <pre data-prefix="$"><code>{JSON.stringify({ v1, v2 })}</code></pre>
          </div>
          <h3>V1</h3>
          <ReactOverflowText className="lc-2" onChange={(e) => setV1(e)}>
            <p>道可道，非常道；名可名，非常名。</p><p>无名，天地之始，有名，万物之母。</p>
            <p>故常无欲，以观其妙，常有欲，以观其徼。</p><p>此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。</p>
          </ReactOverflowText>
          <hr className="bg-gray-300 h-1" />
          <h3>V2</h3>
          <ReactOverflowText className="lc-1" onChange={(e) => setV2(e)}>
            <p>乾六画皆阳，纯阳刚健，当它静而不变之时，则专一而无他；当它动而变化之时，则直遂而不挠，所以广大的宇宙持此产生。</p>
          </ReactOverflowText>
        </div>
      </div>
    );
  }

  export default App;
  ```

## preview
- https://afeiship.github.io/react-overflow-text/

## license
Code released under [the MIT license](https://github.com/afeiship/react-overflow-text/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-overflow-text
[version-url]: https://npmjs.org/package/@jswork/react-overflow-text

[license-image]: https://img.shields.io/npm/l/@jswork/react-overflow-text
[license-url]: https://github.com/afeiship/react-overflow-text/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-overflow-text
[size-url]: https://github.com/afeiship/react-overflow-text/blob/master/dist/react-overflow-text.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-overflow-text
[download-url]: https://www.npmjs.com/package/@jswork/react-overflow-text
