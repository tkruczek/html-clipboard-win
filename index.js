/**
 * Created by tomek on 2016-01-30.
 * @module html-clipboard-win
 */

var clipboard = require('win-clipboard');

function findHTMLFormat() {
    var r = /html/gi;
    var formats = clipboard.getFormats();
    var format;

    for (var i = 0; i < formats.length; i++) {
        var name = clipboard.getFormatName(formats[i]);
        if (r.exec(name)) {
            format = {
                id: formats[i],
                name: name
            };
            break;
        }
    }

    return format;
}

function getHtml() {
    var format = findHTMLFormat();
    console.log(format);
    if (format && format.id) {
        return clipboard.getData(format.id);
    }
}

exports.getHtml = getHtml;