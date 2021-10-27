/*

MIT License

Copyright (c) 2021 Göksel Küçükşahin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/

const _0x2505 = ['res/img/bishamon.png', '114344kVAKul', 'split', '182647Dfyilm', '408576XKHpwq', '2089YviaZW', 'innerWidth', '436451pnmzDx', '156243gGuKlA', '1BpYRYy', 'innerHeight', 'KISALT - COMING SOON ', '42ivymZo', '29PJxaiW', '4727oviUpg', 'length'];
const _0x49aafc = _0x1d57;
(function (_0x3c9fe6, _0xdd3da2) {
  const _0x2ad872 = _0x1d57;
  while (!![]) {
    try {
      const _0xdce44c = parseInt(_0x2ad872(0x100)) + -parseInt(_0x2ad872(0x10d)) + parseInt(_0x2ad872(0x10a)) + parseInt(_0x2ad872(0x106)) * -parseInt(_0x2ad872(0x10e)) + parseInt(_0x2ad872(0x101)) + parseInt(_0x2ad872(0x102)) * parseInt(_0x2ad872(0x10c)) + -parseInt(_0x2ad872(0x107)) * parseInt(_0x2ad872(0x105));
      if (_0xdce44c === _0xdd3da2) break; else _0x3c9fe6['push'](_0x3c9fe6['shift']());
    } catch (_0xac657d) {
      _0x3c9fe6['push'](_0x3c9fe6['shift']());
    }
  }
}(_0x2505, 0x3632a));
let width = window[_0x49aafc(0xff)], height = window[_0x49aafc(0x103)];
const paddingRatio = 0.6;
let canvas, bishamonImg, turn = 0x0;
const rune = _0x49aafc(0x104)[_0x49aafc(0x10b)]('');

function setup() {
  canvas = createCanvas(width, height), imageMode(CENTER), rectMode(CENTER), ellipseMode(CENTER), textAlign(CENTER);
}

function draw() {
  background(0xf), noFill();
  const _0x3f8007 = getAutoSize();
  strokeWeight(_0x3f8007 * 0.00666), renderRune(_0x3f8007 * 0.42), stroke(0xff), ellipse(width / 0x2, height / 0x2, _0x3f8007 * 0.8), ellipse(width / 0x2, height / 0x2, _0x3f8007), image(bishamonImg, width / 0x2, height / 0x2, _0x3f8007 * paddingRatio, _0x3f8007 * paddingRatio);
}

function renderRune(_0x7e2dd1) {
  const _0x22f419 = _0x49aafc;
  push(), translate(width / 0x2, height / 0x2), rotate(turn -= 0.002), textSize(_0x7e2dd1 * 0.2), noStroke();
  for (let _0x4e8914 = 0x0; _0x4e8914 < rune[_0x22f419(0x108)]; _0x4e8914++) {
    rotate(radians(0x168 / rune['length'])), push(), translate(_0x7e2dd1, 0x0), rotate(HALF_PI), fill(0xff), text(rune[_0x4e8914], 0x0, 0x0), pop();
  }
  pop();
}

function _0x1d57(_0x5b18dd, _0x10c4bc) {
  _0x5b18dd = _0x5b18dd - 0xff;
  let _0x250577 = _0x2505[_0x5b18dd];
  return _0x250577;
}

function getAutoSize() {
  const _0x36c470 = width / height;
  let _0x46a830;
  return _0x36c470 >= 1.3 ? (_0x46a830 = height * 0.8, _0x46a830 < 0xc8 && (_0x46a830 = 0xc8)) : (_0x46a830 = width * 0.7, _0x46a830 < 0xc8 && (_0x46a830 = 0xc8), _0x46a830 - 0xc8 > height && (_0x46a830 = height - 0xc8)), _0x46a830;
}

function preload() {
  const _0x36f215 = _0x49aafc;
  bishamonImg = loadImage(_0x36f215(0x109));
}

window['onresize'] = function () {
  const _0x36e550 = _0x49aafc;
  width = window[_0x36e550(0xff)], height = window[_0x36e550(0x103)], resizeCanvas(width, height);
};