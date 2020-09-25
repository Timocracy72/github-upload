import React from 'react';

function getTitle(title) {
    return "Your Royal Highness Extreme Potentate, Sir " + title + " IV";
}

const radius = 5;
const base = 6;
const height = 7;
const baseLength = 8;
const baseWidth = 9;
const area = {
    circle: function(radius) {return Math.PI * radius * radius;},
    rightTriangle: function(base,height) {return base * height / 2;}
}
const volume = {
    pyramid4: function(baseLength, baseWidth, height) {return baseLength * baseWidth / 3 * height;},
    sphere: function(radius) {return 4/3 * Math.PI * radius * radius * radius;}
}

const bool = true;
var undef;
var nu = null;
var nan = 1 / "zero";

const a = ["one","banana","yearning","declare","Neptune","utilitarianism","6,492.7","spacetime","obsequious","mauve","cassowary","Basil Rathbone"];

function App() {
    return (
        <div>
            <h1>Hello {getTitle('Porpington')}</h1>

            <div>
                Circle area (radius {radius}): {area.circle(radius)}<br />
                Right triangle area (base {base}, height {height}): {area.rightTriangle(base,height)}<br />
                4-sided pyramid volume (base length {baseLength}, base width {baseWidth}, height {height}): {volume.pyramid4(baseLength,baseWidth,height)}<br />
                Sphere volume (radius {radius}): {volume.sphere(radius)}<br />
                true: {bool} ({(bool) ? "true" : "false"})<br />
                undefined: {undef}< br/>
                null: {nu}<br />
                nan: {nan}<br />
                array: {a.join(" - ")}
            </div>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text" />
        </div>
    );
}

export default App;