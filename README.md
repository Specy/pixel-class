<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->


# pixel-class

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Ask me anything](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/pixel-class.svg)](https://www.npmjs.com/package/pixel-class) [![Downloads](https://img.shields.io/npm/dt/pixel-class.svg)](https://www.npmjs.com/package/pixel-class)

> A tiny class for pixel manipulation.

## :cloud: Installation

```sh
$ npm i --save pixel-class
```


## :clipboard: Example



```js
const Pixel = require("pixel-class");

let p = new Pixel(42, 7, 6, 0.5);
console.log(p);
console.log(p.intensity());
```



## :question: Get Help

There are few ways to get help:

 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:


## :memo: Documentation


### `PixelClass(r, g, b, a)`
A tiny class for pixel manipulation.

#### Params

- **Number|Object** `r`: The *red* value of the pixel (0-255) or an object containing the `r`, `g`, `b`, `a` fields.
- **Number** `g`: The *green* value of the pixel (0-255).
- **Number** `b`: The *blue* value of the pixel (0-255).
- **Number** `a`: The *alpha* (opacity) value of the pixel. If greater then `1`, it will be normalized to a value between `0` and `1`. Defaults
to `1`.

#### Return
- **PixelClass** The `PixelClass` instance.

### `intensity()`
Calculates the pixel intensity.

#### Return
- **Number** The pixel intensity (0-255).



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects

I open-source almost everything I can, and I try to reply everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:

 - Starring and sharing the projects you like :rocket:
 - [![Buy me a book][badge_amazon]][amazon]—I love books! I will remember you after years if you buy me one. :grin: :book:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)

Thanks! :heart:


## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`asciify-pixel`](https://github.com/IonicaBizau/asciify-pixel#readme)—Asciifies a pixel object.
 - [`gm-tools`](https://github.com/IonicaBizau/gm-tools#readme)—Friendly tools for interacting with GraphicsMagick.
 - [`image-parser`](https://github.com/IonicaBizau/image-parser#readme)—An image parser that works.
 - [`lwip-pixels`](https://github.com/IonicaBizau/lwip-pixels#readme)—Get a matrix of pixels from a lwip image object.
 - [`pixel-bg`](https://github.com/IonicaBizau/pixel-bg#readme)—Change the pixel background color.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[badge_patreon]: http://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: http://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: http://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: http://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(https%3A%2F%2Fionicabizau.net)&year=2016#license-mit
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
