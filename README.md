# DejaVu fonts in TrueType format

This is a package for [npm public registry](https://www.npmjs.com/) containing
DejaVu fonts in TrueType format.
The current packaged version is 2.35 from 17 May 2015.

For more information on DejaVu fonts please see
[dejavu-fonts.org](http://dejavu-fonts.org) and [README-dejavu](README-dejavu).

The DejaVu fonts are a font family based on the
[Bitstream Vera Fonts](http://gnome.org/fonts/) version 1.10.
Its purpose is to provide a wider range of characters
(see [status.txt](status.txt) for more information)
while maintaining the original look and feel.

For license information see [LICENSE](LICENSE). What's new is described
in [NEWS](NEWS). Known bugs are in [BUGS](BUGS). All authors are mentioned
in [AUTHORS](AUTHORS).

The information added in order to produce the package including but not
limited to [README.md](README.md) and [package.json](package.json) files
is in public domain.

If you have any questions regarding this package, please do not hesitate to
contact [me](mailto:stan@senotrusov.com).


## Usage

To programatically get the path to one of the TTF files included in this package:

```javascript
var dejavu = require("dejavu-fonts-ttf");
dejavu.getPathToTTF("DejaVuSans", "Bold");  // => "/path/to/DejaVuSans-Bold.ttf"
dejavu.getPathToTTF("DejaVuSerif");  // => "/path/to/DejaVuSerif.ttf"
```

With the help form [webpack module bundler](http://webpack.github.io)
it is possible to refer from CSS to the font file in the installed package:

```css
@font-face {
  font-family: 'DejaVu Sans';
  src: local('DejaVu Sans'),
    url('~dejavu-fonts-ttf/ttf/DejaVuSans.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: 'DejaVu Sans';
}
```

The following font files are included in the package:

```
DejaVuSans-Bold.ttf
DejaVuSans-BoldOblique.ttf
DejaVuSans-ExtraLight.ttf
DejaVuSans-Oblique.ttf
DejaVuSans.ttf
DejaVuSansCondensed-Bold.ttf
DejaVuSansCondensed-BoldOblique.ttf
DejaVuSansCondensed-Oblique.ttf
DejaVuSansCondensed.ttf
DejaVuSansMono-Bold.ttf
DejaVuSansMono-BoldOblique.ttf
DejaVuSansMono-Oblique.ttf
DejaVuSansMono.ttf
DejaVuSerif-Bold.ttf
DejaVuSerif-BoldItalic.ttf
DejaVuSerif-Italic.ttf
DejaVuSerif.ttf
DejaVuSerifCondensed-Bold.ttf
DejaVuSerifCondensed-BoldItalic.ttf
DejaVuSerifCondensed-Italic.ttf
DejaVuSerifCondensed.ttf
```


## Installation

Install with the [npm package manager](https://github.com/npm/npm):

```
npm install --save-dev dejavu-fonts-ttf
```
