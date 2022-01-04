const fs = require("fs")
const parser = require('./parser/parser');
const htmlFormatter = require('./formatters/htmlFormatter');

module.exports = function(file, options) {
	const rtf = fs.readFileSync(file, "utf8");
	const parsedRTF = parser.parse(rtf);
	const fmter = htmlFormatter;
	const options = options || {
		margins: [0, 0, 0, 0],
        vertAlign: 'center'
	}
	const out = fmter(parsedRTF, options);
	return out;
}
