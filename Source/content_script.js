walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
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

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bHarbaugh\b/g, "My Butt");
	v = v.replace(/\bHARBAUGH\b/g, "MY BUTT");
	v = v.replace(/\bJim Harbaugh\b/g, "my Butt");
	v = v.replace(/\bjim harbaugh\b/g, "my butt");
	v = v.replace(/\bharbaugh\b/g, "my butt");
	v = v.replace(/\bJIM HARBAUGH\b/g, "MY BUTT");
	
	textNode.nodeValue = v;
}


