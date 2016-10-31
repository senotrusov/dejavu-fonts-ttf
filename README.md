# DejaVu fonts in TrueType format

This is a package for [npm public registry](https://www.npmjs.com/) containing
DejaVu fonts in TrueType format.
The current packaged version is 2.37 from 30 July 2016.

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

With the help from [webpack module bundler](http://webpack.github.io)
it is possible to refer from CSS to the font file in the installed package
with `~` path accessor. If you are not using it, replace `~` to
`node_modules/` or whatever in following code.

All fonts and faces included:

```css
@font-face {
  font-family: 'DejaVu Sans';
  src: local('DejaVu Sans'), url('~dejavu-fonts-ttf/ttf/DejaVuSans.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'DejaVu Sans';
  src: local('DejaVu Sans'), url('~dejavu-fonts-ttf/ttf/DejaVuSans-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: 'DejaVu Sans';
  src: local('DejaVu Sans'), url('~dejavu-fonts-ttf/ttf/DejaVuSans-Oblique.ttf') format('truetype');
  font-weight: normal;
  font-style: italic;
}
@font-face {
  font-family: 'DejaVu Sans';
  src: local('DejaVu Sans'), url('~dejavu-fonts-ttf/ttf/DejaVuSans-BoldOblique.ttf') format('truetype');
  font-weight: bold;
  font-style: italic;
}
@font-face {
  font-family: 'DejaVu Sans Condensed';
  src: local('DejaVu Sans Condensed'), url('~dejavu-fonts-ttf/ttf/DejaVuSansCondensed.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'DejaVu Sans Condensed';
  src: local('DejaVu Sans Condensed'), url('~dejavu-fonts-ttf/ttf/DejaVuSansCondensed-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: 'DejaVu Sans Condensed';
  src: local('DejaVu Sans Condensed'), url('~dejavu-fonts-ttf/ttf/DejaVuSansCondensed-Oblique.ttf') format('truetype');
  font-weight: normal;
  font-style: italic;
}
@font-face {
  font-family: 'DejaVu Sans Condensed';
  src: local('DejaVu Sans Condensed'), url('~dejavu-fonts-ttf/ttf/DejaVuSansCondensed-BoldOblique.ttf') format('truetype');
  font-weight: bold;
  font-style: italic;
}
@font-face {
  font-family: 'DejaVu Sans Mono';
  src: local('DejaVu Sans Mono'), url('~dejavu-fonts-ttf/ttf/DejaVuSansMono.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'DejaVu Sans Mono';
  src: local('DejaVu Sans Mono'), url('~dejavu-fonts-ttf/ttf/DejaVuSansMono-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: 'DejaVu Sans';
  src: local('DejaVu Sans Mono'), url('~dejavu-fonts-ttf/ttf/DejaVuSansMono-Oblique.ttf') format('truetype');
  font-weight: normal;
  font-style: italic;
}
@font-face {
  font-family: 'DejaVu Sans Mono';
  src: local('DejaVu Sans Mono'), url('~dejavu-fonts-ttf/ttf/DejaVuSansMono-BoldOblique.ttf') format('truetype');
  font-weight: bold;
  font-style: italic;
}
@font-face {
  font-family: 'DejaVu Serif';
  src: local('DejaVu Serif'), url('~dejavu-fonts-ttf/ttf/DejaVuSerif.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'DejaVu Serif';
  src: local('DejaVu Serif'), url('~dejavu-fonts-ttf/ttf/DejaVuSerif-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: 'DejaVu Serif';
  src: local('DejaVu Serif'), url('~dejavu-fonts-ttf/ttf/DejaVuSerif-Italic.ttf') format('truetype');
  font-weight: normal;
  font-style: italic;
}
@font-face {
  font-family: 'DejaVu Serif';
  src: local('DejaVu Serif'), url('~dejavu-fonts-ttf/ttf/DejaVuSerif-BoldItalic.ttf') format('truetype');
  font-weight: bold;
  font-style: italic;
}
@font-face {
  font-family: 'DejaVu Serif Condensed';
  src: local('DejaVu Serif Condensed'), url('~dejavu-fonts-ttf/ttf/DejaVuSerifCondensed.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'DejaVu Serif Condensed';
  src: local('DejaVu Serif Condensed'), url('~dejavu-fonts-ttf/ttf/DejaVuSerifCondensed-Bold.ttf') format('truetype');
  font-weight: bold;
  font-style: normal;
}
@font-face {
  font-family: 'DejaVu Serif Condensed';
  src: local('DejaVu Serif Condensed'), url('~dejavu-fonts-ttf/ttf/DejaVuSerifCondensed-Italic.ttf') format('truetype');
  font-weight: normal;
  font-style: italic;
}
@font-face {
  font-family: 'DejaVu Serif Condensed';
  src: local('DejaVu Serif Condensed'), url('~dejavu-fonts-ttf/ttf/DejaVuSerifCondensed-BoldItalic.ttf') format('truetype');
  font-weight: bold;
  font-style: italic;
}
@font-face {
  font-family: 'DejaVu Math TeX Gyre';
  src: local('DejaVu Sans Condensed'), url('~dejavu-fonts-ttf/ttf/DejaVuMathTeXGyre.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
```

The following font files are included in the package:

```
DejaVuSans.ttf
DejaVuSans-Bold.ttf
DejaVuSans-BoldOblique.ttf
DejaVuSans-ExtraLight.ttf
DejaVuSans-Oblique.ttf
DejaVuSansCondensed.ttf
DejaVuSansCondensed-Bold.ttf
DejaVuSansCondensed-BoldOblique.ttf
DejaVuSansCondensed-Oblique.ttf
DejaVuSansMono.ttf
DejaVuSansMono-Bold.ttf
DejaVuSansMono-BoldOblique.ttf
DejaVuSansMono-Oblique.ttf
DejaVuSerif.ttf
DejaVuSerif-Bold.ttf
DejaVuSerif-BoldItalic.ttf
DejaVuSerif-Italic.ttf
DejaVuSerifCondensed.ttf
DejaVuSerifCondensed-Bold.ttf
DejaVuSerifCondensed-BoldItalic.ttf
DejaVuSerifCondensed-Italic.ttf
DejaVuMathTeXGyre.ttf
```


## Installation

Install with the [npm package manager](https://github.com/npm/npm):

```
npm install --save dejavu-fonts-ttf
```
