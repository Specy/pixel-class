"use strict";

const deffy = require("deffy");
module.exports = class PixelClass {
    /**
     * PixelClass
     * A tiny class for pixel manipulation.
     *
     * @name PixelClass
     * @function
     * @param {Number|Object} r The *red* value of the pixel (0-255) or an object containing the `r`, `g`, `b`, `a` fields.
     * @param {Number} g The *green* value of the pixel (0-255).
     * @param {Number} b The *blue* value of the pixel (0-255).
     * @param {Number} a The *alpha* (opacity) value of the pixel. If greater
     * then `1`, it will be normalized to a value between `0` and `1`. Defaults
     * to `1`.
     * @return {PixelClass} The `PixelClass` instance.
     */
    constructor (r, g, b, a) {

        if (typeof r === "object") {
            g = r.g;
            b = r.b;
            a = r.a;
            r = r.r;
        }

        this.r = r;
        this.g = g;
        this.b = b;

        if (a > 1) {
            a /= 100;
        }

        this.a = deffy(a, 1);
    }

    /**
     * intensity
     * Calculates the pixel intensity.
     *
     * @name intensity
     * @function
     * @return {Number} The pixel intensity (0-255).
     */
    intensity () {
        return (this.r + this.g + this.b) * this.a;
    }
        /**
     * toHex
     * converts the input color to a hexadecimal string, this removes opacity
     *
     * @name toHex
     * @function
     * @return {String} The color as hexadecimal string.
     */
    toHex(){
        // convert rgba to hex
        let hex = '#' + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
        return hex;
    }
        /**
     * toRGBAString
     * converts the input color to a RGBA string.
     *
     * @name toRGBAString
     * @function
     * @return {String} The color as RGBA string.
     */
    toRGBAString(){
        return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
    }
};


