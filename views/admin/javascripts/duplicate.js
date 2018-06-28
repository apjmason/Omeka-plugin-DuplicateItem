document.addEventListener('DOMContentLoaded', function() {
 	var items = document.getElementsByClassName('action-links group');
 	var regex = />([^<][a-zA-Z]*)</gi;
 	for (i=0; i < items.length; i++) {
 		var listItems = items[i].children;
 		for (ii=0; ii < listItems.length; ii++) {
 			var newLI = listItems[ii].innerHTML;
 			if (newLI.indexOf('items/edit') > 0) {
 				newLI = newLI.replace('items/edit', 'items/duplicate');
 				newLI = newLI.replace(regex, '>Duplicate<');
 				var entry = document.createElement('li');
 				entry.innerHTML = newLI;
 				items[i].appendChild(entry);
 				break;
 			}
 		}
 	}
 }, false);