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
	WLlinks = WLlinks + WriteOneLink("https://developers.google.com/speed/pagespeed/insights/?url=","&tab=desktop",document.getElementById('DomainName').value,"google","Google PageSpeed Tools")
	WLlinks = WLlinks + WriteOneLink("https://moz.com/researchtools/ose/links?site=","",document.getElementById('DomainName').value,"bar-chart","Domain Authority rank")
	WLlinks = WLlinks + WriteOneLink("http://quirktools.com/screenfly/#u=http%3A//","&w=320&h=568&a=37",document.getElementById('DomainName').value,"tablet","Open website (as an iPhone 5)")
	WLlinks = WLlinks + WriteOneLink("http://www.tcpiputils.com/domain-neighbors/","",document.getElementById('DomainName').value,"road","Domain Neighbours")
	WLlinks = WLlinks + WriteOneLink("http://dnstrails.com/#/domain/domain/","",document.getElementById('DomainName').value,"history","DNS History")
	WLlinks = WLlinks + WriteOneLink("https://who.is/whois/","",document.getElementById('DomainName').value,"user-secret","Whois")
	WLlinks = WLlinks + WriteOneLink("https://mxtoolbox.com/archive/?actionstring=mx:","&run=networktools",document.getElementById('DomainName').value,"envelope","MX Toolbox")
	WLlinks = WLlinks + WriteOneLink("https://mxtoolbox.com/archive/?actionstring=blacklist:","",document.getElementById('DomainName').value,"ban","Blacklist check (MX Toolbox)")
	WLlinks = WLlinks + WriteOneLink("https://mxtoolbox.com/SuperTool.aspx?action=https%3a","&run=toolpage",document.getElementById('DomainName').value,"lock","MX Toolbox (SSL Check)")
	WLlinks = WLlinks + WriteOneLink("https://www.ssllabs.com/ssltest/analyze.html?d=","&hideResults=on&latest",document.getElementById('DomainName').value,"shield","SSL Server Test")
	WLlinks = WLlinks + WriteOneLink("http://toolbar.netcraft.com/site_report?url=","",document.getElementById('DomainName').value,"list","Netcraft Site Report")
	WLlinks = WLlinks + WriteOneLink("http://web.archive.org/web/*/","",document.getElementById('DomainName').value,"clock-o","Wayback Machine")
	WLlinks = WLlinks + WriteOneLink("https://sitecheck.sucuri.net/results/","",document.getElementById('DomainName').value,"bug","Sucuri Scan")
	WLlinks = WLlinks + WriteOneLink("http://dt.notjustpcs.co.uk/?","",document.getElementById('DomainName').value,"link","Shortcut this page")
	document.getElementById(IDtoWrite).innerHTML = WLlinks;
}
