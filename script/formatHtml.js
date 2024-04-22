function formatHtml(html) {
    var formattedHtml = '';
    var stack = [];

    for (var i = 0; i < html.length; i++) {
        if (html[i] === '<' && html[i + 1] !== '/') {
            var tagStart = i;
            while (html[i] !== '>') {
                i++;
            }
            var tag = html.substring(tagStart, i + 1);
            if (tag.toLowerCase().startsWith('<table')) {
                tag = '<table>';
            }
            stack.push(tag);
            formattedHtml += '    '.repeat(stack.length - 1) + tag;
            if (tag === '<td>' || tag.includes('rowspan') || tag.includes('colspan')) {
                formattedHtml = formattedHtml.trimRight(); 
            } else {
                formattedHtml += '\n';
            }
        }
        else if (html[i] === '<' && html[i + 1] === '/') {
            var tagStart = i;
            while (html[i] !== '>') {
                i++;
            }
            var tag = html.substring(tagStart, i + 1);
            stack.pop();
            if (tag !== '</td>') {
                formattedHtml += '    '.repeat(stack.length) + tag + '\n';
            } else {
                formattedHtml += tag + '\n';
            }
        }
        else {
            formattedHtml += html[i];
            if (html[i + 1] === '<' && stack[stack.length - 1] === '<td>') {
                formattedHtml = formattedHtml.trimRight();
            }
        }
    }
    return formattedHtml;
}