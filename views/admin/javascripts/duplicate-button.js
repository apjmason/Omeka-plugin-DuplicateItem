document.addEventListener('DOMContentLoaded', function() {
  var panel = document.getElementById('edit');
	var regex = />([^<][a-zA-Z]*)</gi;
	var buttons = panel.children;
	for (i=0; i < buttons.length; i++) {
	  if (buttons[i].href.indexOf('/items/edit/') > 0) {
		  var cln = buttons[i].cloneNode(true);
			cln.innerHTML = '" . __('Duplicate') . "';
			cln.href = cln.href.replace('items/edit', 'items/duplicate');
			buttons[i].parentNode.insertBefore(cln, buttons[i].nextSibling);
			break;
		}
	}
}, false);
