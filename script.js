function pullQueryString() {
	var error = window.location.search;
	if (error.substring(0, 1) == "?") {
		error = error.substring(1);
	}
	return error;
}

function WriteOneLink(URLprefix,URLsuffix,TelNo,FAicon,LinkDesc) {
	return "<a class='list-group-item' target='_blank' href='" + URLprefix + TelNo + URLsuffix + "'><i class='fa fa-" + FAicon + " fa-fw' aria-hidden='true'></i>&nbsp; " + LinkDesc + "</a>";
}

function WriteLinks(IDtoWrite) {
	WLlinks = WriteOneLink("http://","",document.getElementById('DomainName').value,"globe","Open the website");
	WLlinks = WLlinks + WriteOneLink("https://isitup.org/","",document.getElementById('DomainName').value,"podcast","Make sure the website is up")
	WLlinks = WLlinks + WriteOneLink("http://","/wp-admin",document.getElementById('DomainName').value,"wordpress","WordPress login")
	WLlinks = WLlinks + WriteOneLink("http://","/admin",document.getElementById('DomainName').value,"code-fork","/admin")
	WLlinks = WLlinks + WriteOneLink("http://","/administrator",document.getElementById('DomainName').value.substring(0, 5),"code-fork","/administrator")
	WLlinks = WLlinks + WriteOneLink("http://","/cpanel",document.getElementById('DomainName').value,"cogs","cPanel")
	WLlinks = WLlinks + WriteOneLink("http://dt.notjustpcs.co.uk/?","",document.getElementById('DomainName').value,"link","Shortcut this page")
	document.getElementById(IDtoWrite).innerHTML = WLlinks;
}
