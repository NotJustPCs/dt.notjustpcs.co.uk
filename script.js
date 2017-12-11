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
	var DomName = document.getElementById('DomainName').value;
	WLlinks = WriteOneLink("http://","",DomName,"globe","Open the website");
	WLlinks = WLlinks + WriteOneLink("https://isitup.org/","",DomName,"podcast","Make sure the website is up")
	WLlinks = WLlinks + WriteOneLink("https://www.google.co.uk/#q=","",DomName,"google","Google")
	WLlinks = WLlinks + WriteOneLink("http://","/wp-admin",DomName,"wordpress","WordPress login")
	WLlinks = WLlinks + WriteOneLink("http://","/admin",DomName,"code-fork","/admin")
	WLlinks = WLlinks + WriteOneLink("http://","/administrator",DomName,"code-fork","/administrator")
	WLlinks = WLlinks + WriteOneLink("http://","/cpanel",DomName,"cogs","cPanel")
	WLlinks = WLlinks + WriteOneLink("https://developers.google.com/speed/pagespeed/insights/?url=","&tab=desktop",DomName,"google","Google PageSpeed Tools")
	WLlinks = WLlinks + WriteOneLink("https://moz.com/researchtools/ose/links?site=","",DomName,"bar-chart","Domain Authority rank")
	WLlinks = WLlinks + WriteOneLink("http://quirktools.com/screenfly/#u=http%3A//","&w=320&h=568&a=37",DomName,"tablet","Open website (as an iPhone 5)")
	WLlinks = WLlinks + WriteOneLink("http://www.tcpiputils.com/domain-neighbors/","",DomName,"road","Domain Neighbours")
	WLlinks = WLlinks + WriteOneLink("http://dnstrails.com/#/domain/domain/","",DomName,"history","DNS History")
	WLlinks = WLlinks + WriteOneLink("https://who.is/whois/","",DomName,"user-secret","Whois")
	WLlinks = WLlinks + WriteOneLink("https://mxtoolbox.com/archive/?actionstring=mx:","&run=networktools",DomName,"envelope","MX Toolbox")
	WLlinks = WLlinks + WriteOneLink("https://mxtoolbox.com/archive/?actionstring=blacklist:","",DomName,"ban","Blacklist check (MX Toolbox)")
	WLlinks = WLlinks + WriteOneLink("https://mxtoolbox.com/SuperTool.aspx?action=https%3a","&run=toolpage",DomName,"lock","MX Toolbox (SSL Check)")
	WLlinks = WLlinks + WriteOneLink("https://www.ssllabs.com/ssltest/analyze.html?d=","&hideResults=on&latest",DomName,"shield","SSL Server Test")
	WLlinks = WLlinks + WriteOneLink("http://toolbar.netcraft.com/site_report?url=","",DomName,"list","Netcraft Site Report")
	WLlinks = WLlinks + WriteOneLink("http://web.archive.org/web/*/","",DomName,"clock-o","Wayback Machine")
	WLlinks = WLlinks + WriteOneLink("https://sitecheck.sucuri.net/results/","",DomName,"bug","Sucuri Scan")
	WLlinks = WLlinks + WriteOneLink("http://dt.notjustpcs.co.uk/?","",DomName,"link","Shortcut this page")
	document.getElementById(IDtoWrite).innerHTML = WLlinks;
}
