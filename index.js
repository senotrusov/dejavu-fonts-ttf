var path = require("path");

var VALID_FILE_NAMES = [
	"DejaVuSans-Bold.ttf",
	"DejaVuSans-BoldOblique.ttf",
	"DejaVuSans-ExtraLight.ttf",
	"DejaVuSans-Oblique.ttf",
	"DejaVuSans.ttf",
	"DejaVuSansCondensed-Bold.ttf",
	"DejaVuSansCondensed-BoldOblique.ttf",
	"DejaVuSansCondensed-Oblique.ttf",
	"DejaVuSansCondensed.ttf",
	"DejaVuSansMono-Bold.ttf",
	"DejaVuSansMono-BoldOblique.ttf",
	"DejaVuSansMono-Oblique.ttf",
	"DejaVuSansMono.ttf",
	"DejaVuSerif-Bold.ttf",
	"DejaVuSerif-BoldItalic.ttf",
	"DejaVuSerif-Italic.ttf",
	"DejaVuSerif.ttf",
	"DejaVuSerifCondensed-Bold.ttf",
	"DejaVuSerifCondensed-BoldItalic.ttf",
	"DejaVuSerifCondensed-Italic.ttf",
	"DejaVuSerifCondensed.ttf",
];

function getPathToTTF(face, style) {
	// Get the filename from the arguments
	var ttfFileName = style ? face + "-" + style + ".ttf" : face + ".ttf";

	// Ensure that the specified face/style combination exists (throw an exception otherwise)
	if (VALID_FILE_NAMES.indexOf(ttfFileName) === -1) {
		throw new Error("The font face '" + face + "' does not exist or does not have a style '" + style + "'");
	}

	// Compute and return the path
	return path.join(__dirname, "ttf", ttfFileName);
}

module.exports = { getPathToTTF: getPathToTTF };
