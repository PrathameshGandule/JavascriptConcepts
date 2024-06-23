/*
    ES 6 Module
        An external file that contains reusable code,
        that can be  imported into other javascript files.
        Write reusable code for many diffrent apps.
        Can contain variable, classes, functions, ... and more
        Introduced as the part of ECMAScript 2015 update.
*/

import {PI, getArea, getCircumference, getSurfaceArea, getVolume} from './MathUtil.js'

console.log(PI);
const circumference = getCircumference(15);
const area = getArea(15);
const surfaceArea = getSurfaceArea(15);
const volume = getVolume(15); 

console.log(`${circumference.toFixed(2)} cm`);
console.log(`${area.toFixed(2)} sq.cm`);
console.log(`${surfaceArea.toFixed(2)} sq.cm`);
console.log(`${volume.toFixed(2)} cu.cm`);

