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
	var DomNameLessWs = String(DomName).replace(/^www\./,'');
	WLlinks = WriteOneLink("http://","",DomName,"globe","Open the website (http)");
	WLlinks = WriteOneLink("https://","",DomName,"globe","Open the website (https)");
	WLlinks = WLlinks + WriteOneLink("https://isitup.org/","",DomName,"podcast","Make sure the website is up")
	WLlinks = WLlinks + WriteOneLink("https://www.google.co.uk/#q=","",DomName,"google","Google")
	WLlinks = WLlinks + WriteOneLink("https://www.google.co.uk/#q=site:","",DomName,"google","Google Site Search")
	WLlinks = WLlinks + WriteOneLink("http://","/wp-admin",DomName,"wordpress","WordPress login")
	WLlinks = WLlinks + WriteOneLink("http://","/?q=user/login",DomName,"drupal","Drupal login")
	WLlinks = WLlinks + WriteOneLink("http://wppluginchecker.earthpeople.se/?wordpress-site=","",DomName,"wordpress","WP Plugin Checker")
	WLlinks = WLlinks + WriteOneLink("http://","/admin",DomName,"code-fork","/admin")
	WLlinks = WLlinks + WriteOneLink("http://","/administrator",DomName,"code-fork","/administrator")
	WLlinks = WLlinks + WriteOneLink("http://","/whm",DomName,"cogs","WHM (cPanel)")
	WLlinks = WLlinks + WriteOneLink("http://","/cpanel",DomName,"cogs","cPanel")
	WLlinks = WLlinks + WriteOneLink("http://",":8443",DomName,"cogs","Plesk Control Panel")
	WLlinks = WLlinks + WriteOneLink("https://developers.google.com/speed/pagespeed/insights/?url=","&tab=desktop",DomName,"google","Google PageSpeed Tools")
	WLlinks = WLlinks + WriteOneLink("https://validator.w3.org/nu/?doc=http%3A%2F%2F","",DomName,"code","Nu Html Checker")
	//WLlinks = WLlinks + WriteOneLink("https://moz.com/researchtools/ose/links?site=","",DomName,"bar-chart","Domain Authority rank")
	WLlinks = WLlinks + WriteOneLink("https://realfavicongenerator.net/favicon_checker?site=","",DomName,"eye","Check sites favicon")
	WLlinks = WLlinks + WriteOneLink("http://quirktools.com/screenfly/#u=http%3A//","&w=320&h=568&a=37",DomName,"tablet","Open website (as an iPhone 5)")
	WLlinks = WLlinks + WriteOneLink("http://www.tcpiputils.com/domain-neighbors/","",DomName,"road","Domain Neighbours")
	WLlinks = WLlinks + WriteOneLink("https://securitytrails.com/domain/","/dns",DomName,"history","DNS History")
	WLlinks = WLlinks + WriteOneLink("https://www.gandi.net/whois/details/?search=","",DomNameLessWs,"registered","Whois (gandi)")
	WLlinks = WLlinks + WriteOneLink("https://who.is/whois/","",DomName,"user-secret","Whois")
	WLlinks = WLlinks + WriteOneLink("https://who.is/dns/","",DomName,"files-o","DNS records (Whois)")
	WLlinks = WLlinks + WriteOneLink("https://intodns.com/","",DomName,"files-o","DNS records (intoDNS)")
	WLlinks = WLlinks + WriteOneLink("https://www.whatsmydns.net/#A/","",DomName,"check-circle-o","Check on DNS propagation")
	WLlinks = WLlinks + WriteOneLink("https://www.whatsmydns.net/#A/","/89.145.100.25",DomName,"check-circle","Check on DNS propagation (to primary NJPC IP)")
	WLlinks = WLlinks + WriteOneLink("http://","/webmail",DomName,"envelope-open","/webmail")
	WLlinks = WLlinks + WriteOneLink("https://geopeeker.com/fetch/?url=","",DomName,"globe","GeoPeeker")
	WLlinks = WLlinks + WriteOneLink("https://toolbox.googleapps.com/apps/checkmx/check?domain=","",DomNameLessWs,"google","MX Toolbox (gSuite only)")
	WLlinks = WLlinks + WriteOneLink("https://mxtoolbox.com/SuperTool.aspx?action=mx%3a","&run=toolpage",DomNameLessWs,"envelope","MX Toolbox")
	WLlinks = WLlinks + WriteOneLink("https://mxtoolbox.com/SuperTool.aspx?action=spf%3a","&run=toolpage",DomNameLessWs,"telegram","SPF Record (MX Toolbox)")
	WLlinks = WLlinks + WriteOneLink("http://multirbl.valli.org/lookup/",".html",DomName,"ban","Comprehensive Blacklist check")
	WLlinks = WLlinks + WriteOneLink("https://www.blacklistmaster.com/check?t=","",DomName,"ban","Blacklist check")
	WLlinks = WLlinks + WriteOneLink("https://mxtoolbox.com/SuperTool.aspx?action=blacklist%3a","",DomName,"ban","Blacklist check (MX Toolbox)")
	WLlinks = WLlinks + WriteOneLink("https://mxtoolbox.com/SuperTool.aspx?action=https%3a","&run=toolpage",DomName,"lock","SSL Check (MX Toolbox)")
	WLlinks = WLlinks + WriteOneLink("https://www.ssllabs.com/ssltest/analyze.html?d=","&hideResults=on&latest",DomName,"shield","SSL Server Test")
	WLlinks = WLlinks + WriteOneLink("https://www.jitbit.com/sslcheck/#url=https://","",DomName,"exchange","SSL Mixed Content Test")
	WLlinks = WLlinks + WriteOneLink("http://toolbar.netcraft.com/site_report?url=","",DomName,"list","Netcraft Site Report")
	WLlinks = WLlinks + WriteOneLink("http://",".cutestat.com",DomName,"list","CuteStat Site Report")
	WLlinks = WLlinks + WriteOneLink("http://web.archive.org/web/*/","",DomName,"clock-o","Wayback Machine")
	WLlinks = WLlinks + WriteOneLink("https://archive.is/","",DomName,"clock-o","archive.today - Alternative to Wayback Machine")
	WLlinks = WLlinks + WriteOneLink("https://sitecheck.sucuri.net/results/","",DomName,"bug","Sucuri Scan")
	WLlinks = WLlinks + WriteOneLink("https://www.virustotal.com/#/domain/","",DomName,"search","VirusTotal Scan")
	WLlinks = WLlinks + WriteOneLink("https://transparencyreport.google.com/safe-browsing/search?url=","",DomName,"life-ring","Google Safe Browsing Check")
	WLlinks = WLlinks + WriteOneLink("https://quttera.com/sitescan/","",DomName,"heartbeat","Quttera Malware Scan")
	WLlinks = WLlinks + WriteOneLink("https://verify.cpanel.net/ipaddrs.cgi?ip=","",DomName,"id-card-o","cPanel License Check")
	WLlinks = WLlinks + WriteOneLink("http://dt.notjustpcs.co.uk/?","",DomName,"link","This page")
	WLlinks = WLlinks + WriteOneLink("http://dt.notjustpcs.co.uk/?","",DomNameLessWs,"link","This page, without the wwws")
	document.getElementById(IDtoWrite).innerHTML = WLlinks;
}
