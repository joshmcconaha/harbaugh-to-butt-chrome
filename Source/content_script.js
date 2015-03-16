var normalCapsRegex = /\b(Jim )?Harbaugh\b/g;
var allCapsRegex = /\b(JIM )?HARBAUGH\b/g;
var caseInsensitiveRegex = /\b(jim )?harbaugh\b/gi;

function handleText(textNode) {
    var v = textNode.nodeValue;

    v = v.replace(normalCapsRegex, "My Butt");
    v = v.replace(allCapsRegex, "MY BUTT");
    v = v.replace(caseInsensitiveRegex, "my butt");

    textNode.nodeValue = v;
}

function walk(node) {
    // I stole this function from here:
    // http://is.gd/mwZp7E

    var child, next;

    switch (node.nodeType) {
        case 1: // Element
        case 9: // Document
        case 11: // Document fragment
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;

        case 3: // Text node
            handleText(node);
            break;
    }
}

walk(document.body);
