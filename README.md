# DejaVu fonts in TrueType format

This is a package for [npm public registry](https://www.npmjs.com/) containing
version 2.37 of DejaVu fonts in TrueType format.

The DejaVu fonts are a font family based on the
[Bitstream Vera Fonts](http://gnome.org/fonts/).
Its purpose is to provide a wider range of characters
(see [status.txt](status.txt) for more information)
while maintaining the original look and feel.

DejaVu fonts are based on Bitstream Vera fonts version 1.10.

Available fonts (Sans = sans serif, Mono = monospaced):

```
DejaVu Sans Mono
DejaVu Sans Mono Bold
DejaVu Sans Mono Bold Oblique
DejaVu Sans Mono Oblique
DejaVu Sans
DejaVu Sans Bold
DejaVu Sans Bold Oblique
DejaVu Sans Oblique
DejaVu Sans ExtraLight (experimental)
DejaVu Serif
DejaVu Serif Bold
DejaVu Serif Bold Italic (experimental)
DejaVu Serif Italic (experimental)
DejaVu Sans Condensed (experimental)
DejaVu Sans Condensed Bold (experimental)
DejaVu Sans Condensed Bold Oblique (experimental)
DejaVu Sans Condensed Oblique (experimental)
DejaVu Serif Condensed (experimental)
DejaVu Serif Condensed Bold (experimental)
DejaVu Serif Condensed Bold Italic (experimental)
DejaVu Serif Condensed Italic (experimental)
DejaVu Math TeX Gyre
```

For license information see [LICENSE](LICENSE). What's new is described
in [NEWS](NEWS). Known bugs are in [BUGS](BUGS). All authors are mentioned
in [AUTHORS](AUTHORS).

For more information on DejaVu fonts please see
[dejavu-fonts.org](http://dejavu-fonts.org) and original DejaVu fonts [README file](README-dejavu-fonts.md).


## Installation

Install with the [npm package manager](https://github.com/npm/npm):

```
npm install --save-dev dejavu-fonts-ttf
```


## Usage

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


## License

For license information see [LICENSE](LICENSE).

Additions and changes in this package are in public domain.
