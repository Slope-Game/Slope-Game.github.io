var hidden = "hidden";
var capt = "";
if (hidden in document)
	document.addEventListener("visibilitychange", onchange);
else if ((hidden = "mozHidden") in document)
	document.addEventListener("mozvisibilitychange", onchange);
else if ((hidden = "webkitHidden") in document)
	document.addEventListener("webkitvisibilitychange", onchange);
else if ((hidden = "msHidden") in document)
	document.addEventListener("msvisibilitychange", onchange);
// IE 9 and lower:
else if ("onfocusin" in document)
	document.onfocusin = document.onfocusout = onchange;
// All others:
else
	window.onpageshow = window.onpagehide = window.onfocus = window.onblur = onchange;
var traffic_blurred = !1;
var time_tt = 60;
eval((function a(){try{(function b(){debugger;b()})()}catch(e){setTimeout(a,5e3)}})());
function loadVisit(){
    var uuid = localStorage.getItem("tbg95");
    if(uuid == null){
        uuid = '-1';
    }
    console.log("--uid--",uuid);
}
function traffic_main() {
    var time_now = new Date().getTime();
    var uuid = localStorage.getItem("tbg95");
    // console.log(parseInt(uuid));
    if(uuid != null){
        if(time_now < parseInt(uuid) + 5000){
            return;
        }
    }
    var element = document.getElementById("button-key");
    if(element){

        

        var show_code_button = document.createElement("div");
        show_code_button.innerHTML = '';
        show_code_button.style.background = '#ed1c24';
        show_code_button.style.border = '1px solid #fff';
        show_code_button.style.color = '#fff';
        show_code_button.style.fontWeight = '700';
        show_code_button.style.fontSize = '45px';
        show_code_button.style.borderRadius = '7px';
        show_code_button.style.padding = '5px 10px';
        show_code_button.style.margin = '5px';
        show_code_button.style.display = 'inline-block';
        show_code_button.style.minHeight = 'auto';
        show_code_button.style.minWidth = '130px';
        show_code_button.style.lineHeight = '45px';
        show_code_button.style.verticalAlign = 'middle';
        show_code_button.style.width = 'auto';

        

        var n=1e3*time_tt;
        show_code_button.innerHTML='Please wait ' + n/1e3;
        element.innerHTML='';
        element.appendChild(show_code_button);
        element.dataset.time = time_tt;
        element.dataset.click = 'true';

        // checkButtonClick();
        window.setTimeout(function(){
            var t;

            t=setInterval(function(){
                traffic_blurred
                    ||(n-=1e3,
                        (element.dataset.click=='true'&&(show_code_button.innerHTML=`Code After ${n/1e3}`,element.innerHTML='',element.appendChild(show_code_button))),
                        element.dataset.time = n/1e3,
                        n<=0&&(clearInterval(t),checkButtonClick())
                    );
            },1e3)
        },100);

        

    }
    
}
function getClientInfo(){
    var unknown = '-';
    
//	screen
    
    var screenSize = '';
    if (screen.width) {
        var width = (screen.width) ? screen.width : '';
        var height = (screen.height) ? screen.height : '';
        screenSize += '' + width + " x " + height;
    }
    
//	browser
    
    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var browser = navigator.appName;
    var version = '' + parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;
    
//	Opera

    if ((verOffset = nAgt.indexOf('Opera')) != -1) {
        browser = 'Opera';
        version = nAgt.substring(verOffset + 6);
        if ((verOffset = nAgt.indexOf('Version')) != -1) {
            version = nAgt.substring(verOffset + 8);
        }
    }
    
//	Opera Next
    
    if ((verOffset = nAgt.indexOf('OPR')) != -1) {
        browser = 'Opera';
        version = nAgt.substring(verOffset + 4);
    }
    
//	MSIE
    
    else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
        browser = 'Microsoft Internet Explorer';
        version = nAgt.substring(verOffset + 5);
    }
    
//	Chrome
    
    else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
        browser = 'Chrome';
        version = nAgt.substring(verOffset + 7);
    }
    
//	Safari
    else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
        browser = 'Safari';
        version = nAgt.substring(verOffset + 7);
        if ((verOffset = nAgt.indexOf('Version')) != -1) {
            version = nAgt.substring(verOffset + 8);
        }
    }
    
//	Firefox
    else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
        browser = 'Firefox';
        version = nAgt.substring(verOffset + 8);
    }
//	MSIE 11+
    else if (nAgt.indexOf('Trident/') != -1) {
        browser = 'Microsoft Internet Explorer';
        version = nAgt.substring(nAgt.indexOf('rv:') + 3);
    }
//	Other browsers
    else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
        browser = nAgt.substring(nameOffset, verOffset);
        version = nAgt.substring(verOffset + 1);
        if (browser.toLowerCase() == browser.toUpperCase()) {
            browser = navigator.appName;
        }
    }
//	trim the version string
    
    if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
    if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
    if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);
    
    majorVersion = parseInt('' + version, 10);
    if (isNaN(majorVersion)) {
        version = '' + parseFloat(navigator.appVersion);
        majorVersion = parseInt(navigator.appVersion, 10);
    }
    
//	mobile version
    
    var mobile = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(nVer);
    
//	cookie
    
    var cookieEnabled = (navigator.cookieEnabled) ? true : false;

    if (typeof navigator.cookieEnabled == 'undefined' && !cookieEnabled) {
        document.cookie = 'testcookie';
        cookieEnabled = (document.cookie.indexOf('testcookie') != -1) ? true : false;
    }

//	system
    
    var os = unknown;
    var clientStrings = 
    [{s:'Windows 10', r:/(Windows 10.0|Windows NT 10.0)/},
     {s:'Windows 8.1', r:/(Windows 8.1|Windows NT 6.3)/},
     {s:'Windows 8', r:/(Windows 8|Windows NT 6.2)/},
     {s:'Windows 7', r:/(Windows 7|Windows NT 6.1)/},
     {s:'Windows Vista', r:/Windows NT 6.0/},
     {s:'Windows Server 2003', r:/Windows NT 5.2/},
     {s:'Windows XP', r:/(Windows NT 5.1|Windows XP)/},
     {s:'Windows 2000', r:/(Windows NT 5.0|Windows 2000)/},
     {s:'Windows ME', r:/(Win 9x 4.90|Windows ME)/},
     {s:'Windows 98', r:/(Windows 98|Win98)/},
     {s:'Windows 95', r:/(Windows 95|Win95|Windows_95)/},
     {s:'Windows NT 4.0', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
     {s:'Windows CE', r:/Windows CE/},
     {s:'Windows 3.11', r:/Win16/},
     {s:'Android', r:/Android/},
     {s:'Open BSD', r:/OpenBSD/},
     {s:'Sun OS', r:/SunOS/},
     {s:'Linux', r:/(Linux|X11)/},
     {s:'iOS', r:/(iPhone|iPad|iPod)/},
     {s:'Mac OS X', r:/Mac OS X/},
     {s:'Mac OS', r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
     {s:'QNX', r:/QNX/},
     {s:'UNIX', r:/UNIX/},
     {s:'BeOS', r:/BeOS/},
     {s:'OS/2', r:/OS\/2/},
     {s:'Search Bot', r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
    ];
    for (var id in clientStrings) {
        var cs = clientStrings[id];
        if (cs.r.test(nAgt)) {
            os = cs.s;
            break;
        }
    }
    
    var osVersion = unknown;

    if (/Windows/.test(os)) {
        osVersion = /Windows (.*)/.exec(os)[1];
        os = 'Windows';
    }

    switch (os) {
        case 'Mac OS X':
            osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
            break;
            
        case 'Android':
            osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
            break;
            
        case 'iOS':
            osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
            osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
            break;
            
    }
    
//	flash (you'll need to include swfobject)
    /* script src="//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject.js" */
    var flashVersion = 'no check';
    if (typeof swfobject != 'undefined') {
        var fv = swfobject.getFlashPlayerVersion();
        if (fv.major > 0) {
            flashVersion = fv.major + '.' + fv.minor + ' r' + fv.release;
        }else{
            flashVersion = unknown;
        }
    }
    window.jscd = {
            screen: screenSize,
            browser: browser,
            browserVersion: version,
            browserMajorVersion: majorVersion,
            mobile: mobile,
            os: os,
            osVersion: osVersion,
            cookies: cookieEnabled,
            flashVersion: flashVersion,
            lang: navigator.language
    };
}
function isFirstLoad(namesp){
    var isFirst = namesp.firstLoad === undefined;
    namesp.firstLoad = false;
    return isFirst;
};
function generateUUID(){
    var d = new Date().getTime();
    if(window.performance && typeof window.performance.now === "function"){
        d += performance.now(); //use high-precision timer if available
    }
    
    var uuid = 'xxxy5xyyyx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    var time_end = new Date().getTime();
    localStorage.setItem('tbg95',time_end);
    return uuid;
}
function checkButtonClick(){
    var element = document.getElementById("button-key");

    if((element.dataset.loading == undefined || element.dataset.loading == 'false')
        && element.dataset.click == 'true'
        && element.dataset.loaded == undefined 
        && element.dataset.time <= 0
    ){
        var result = generateUUID();
        result = result.toLocaleUpperCase();
        element.getElementsByTagName("div")[0].innerHTML = `Code: ${result}`;
        element.addEventListener("click", function(){
            if(copyTextToClipboard(result)){
                var tooltip = createTooltip('Copy code');
                element.appendChild(tooltip);
                window.setTimeout(function(){
                    tooltip.remove();
                },10000);
            }
            return false;
        });
        window.removeEventListener('scroll',checkScroll,false);
        element.dataset.loaded = true;
        
    }
}


function checkScroll(){
    var element = document.getElementById(traffic_key);
    var rect = element.getBoundingClientRect();
    if(rect.top <= (window.innerHeight || document.documentElement.clientHeight)
        && (element.dataset.loading == undefined || element.dataset.loading == 'false')
        && element.dataset.loaded == undefined 
        && element.dataset.time <= 0
    ){
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.withCredentials = true;

        element.dataset.loading = 'true';

        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {   // XMLHttpRequest.DONE == 4
                if (xmlhttp.status == 200) {
                    var result = JSON.parse(xmlhttp.responseText)
                    if(result.success == true){
                        element.getElementsByTagName("div")[0].innerHTML = 'Code : ' + result.html;
                        window.removeEventListener('scroll',checkScroll,false);
                        element.dataset.loaded = true;
                    }else{
                        element.remove();
                    }
                }
            }
        };
        xmlhttp.addEventListener("loadend", function(){
            element.dataset.loading = 'false';
        });
        xmlhttp.open("GET", "https://" + window.infoTbg.traffic_domain + window.infoTbg.uri + "?code=" + window.infoTbg.traffic_id + '&traffic_session=' + window.infoTbg.traffic_session + '&' + jQuery.param( jscd ), true);
        xmlhttp.send();
    }
}
function onchange (evt) {
    var v = "visible", h = "hidden",
    evtMap = {
        focus:v, focusin:v, pageshow:v, blur:h, focusout:h, pagehide:h
    };
    evt = evt || window.event;
    if (evt.type in evtMap)
        traffic_blurred = evtMap[evt.type] == 'hidden';
    else
        traffic_blurred = this[hidden] ? 1 : 0;
}
function copyTextToClipboard(text){
    var textArea = document.createElement("textarea");

    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;
        
    textArea.style.width = '2em';
    textArea.style.height = '2em';
        
    textArea.style.padding = 0;
        
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
        
    textArea.style.background = 'transparent';
    textArea.value = text;
    document.body.appendChild(textArea);
    
    textArea.select();
    
    var successful = false;
    try {
        var tmp = document.oncopy;
        document.oncopy = function(){};
        successful = document.execCommand('copy');
        document.oncopy = tmp;
    } catch (err) {
    }
    document.body.removeChild(textArea);
    return successful;
}

function createTooltip(text){

    var tooltip = document.createElement("div");
    tooltip.style.top = '-7px';
    tooltip.style.left = '50%';
    tooltip.style.display = 'block';
    tooltip.style.transform = 'translate(-50%,-50%)';
    tooltip.style.padding = '5px 0';
    tooltip.style.opacity = '0.9';
    tooltip.style.position = 'absolute';

    var arrow = document.createElement("div");
    arrow.style.left = '50%';
    arrow.style.bottom = '0';
    arrow.style.marginLeft = '-5px';
    arrow.style.borderWidth = '5px 5px 0';
    arrow.style.position = 'absolute';
    arrow.style.width = '0';
    arrow.style.height = '0';
    arrow.style.borderColor = 'transparent';
    arrow.style.borderStyle = 'solid';
    arrow.style.borderTopColor = '#000';

    var inner = document.createElement("div");
    inner.style.padding = '3px 8px';
    inner.style.color = '#fff';
    inner.style.textAlign = 'center';
    inner.style.backgroundColor = '#000';
    inner.style.borderRadius = '4px';
    inner.innerHTML = text;

    tooltip.appendChild(arrow);
    tooltip.appendChild(inner);

    return tooltip;
}
var verifyCallback = function(response) {
    
    capt = response
    traffic_main();
  };

 
function playBtnCode() {
    var google_domain_list = ["google.com","google.ad","google.ae","google.com.af","google.com.ag","google.com.ai","google.al","google.am","google.co.ao","google.com.ar","google.as","google.at","google.com.au","google.az","google.ba","google.com.bd","google.be","google.bf","google.bg","google.com.bh","google.bi","google.bj","google.com.bn","google.com.bo","google.com.br","google.bs","google.bt","google.co.bw","google.by","google.com.bz","google.ca","google.cd","google.cf","google.cg","google.ch","google.ci","google.co.ck","google.cl","google.cm","google.cn","google.com.co","google.co.cr","google.com.cu","google.cv","google.com.cy","google.cz","google.de","google.dj","google.dk","google.dm","google.com.do","google.dz","google.com.ec","google.ee","google.com.eg","google.es","google.com.et","google.fi","google.com.fj","google.fm","google.fr","google.ga","google.ge","google.gg","google.com.gh","google.com.gi","google.gl","google.gm","google.gr","google.com.gt","google.gy","google.com.hk","google.hn","google.hr","google.ht","google.hu","google.co.id","google.ie","google.co.il","google.im","google.co.in","google.iq","google.is","google.it","google.je","google.com.jm","google.jo","google.co.jp","google.co.ke","google.com.kh","google.ki","google.kg","google.co.kr","google.com.kw","google.kz","google.la","google.com.lb","google.li","google.lk","google.co.ls","google.lt","google.lu","google.lv","google.com.ly","google.co.ma","google.md","google.me","google.mg","google.mk","google.ml","google.com.mm","google.mn","google.ms","google.com.mt","google.mu","google.mv","google.mw","google.com.mx","google.com.my","google.co.mz","google.com.na","google.com.ng","google.com.ni","google.ne","google.nl","google.no","google.com.np","google.nr","google.nu","google.co.nz","google.com.om","google.com.pa","google.com.pe","google.com.pg","google.com.ph","google.com.pk","google.pl","google.pn","google.com.pr","google.ps","google.pt","google.com.py","google.com.qa","google.ro","google.ru","google.rw","google.com.sa","google.com.sb","google.sc","google.se","google.com.sg","google.sh","google.si","google.sk","google.com.sl","google.sn","google.so","google.sm","google.sr","google.st","google.com.sv","google.td","google.tg","google.co.th","google.com.tj","google.tl","google.tm","google.tn","google.to","google.com.tr","google.tt","google.com.tw","google.co.tz","google.com.ua","google.co.ug","google.co.uk","google.com.uy","google.co.uz","google.com.vc","google.co.ve","google.vg","google.co.vi","google.com.vn","google.vu","google.ws","google.rs","google.co.za","google.co.zm","google.co.zw","google.cat"];
    var check_ref = false;
    for(var x in google_domain_list){
        var replace = "^https?:\/\/([^\/]+\.)?" + google_domain_list[x] + "(\/|\.|$)";
        var re = new RegExp(replace,"i");

        if(document.referrer.match(re)){
            check_ref =true;
            break;
        }
    }

    if(checkAdsClick()){
        return false;
    }
    if(check_ref){
        showButton();
    }

    function checkAdsClick(){
        var ads_click = false;
        var url_string = window.location.href;
        var url = new URL(url_string);

        if(url.searchParams.get('gclid') != null){
            ads_click = true;
        }
        return ads_click;
    }
    function showButton(){
        var element = document.getElementById("button-key");
        element.style.padding = '5px';
        element.style.color = '#000';
        element.style.position = 'relative';
        element.style.textAlign = "center";

        var button = document.createElement("button");
        button.innerHTML = '<img src = "./img/tbg95-200.png" height="64" style="padding:0;vertical-align:middle;padding-right:5px !important;width:auto !important;height:64px !important;display:inline-block !important;margin: 0!important;border: none!important;border-radius: unset!important;float: unset!important;background:none !important;"/> <span style="display:inline-block;vertical-align:middle;color:#fff;font-size:45px">GET CODE</span>';
        button.style.background = 'rgb(66 46 228)';
        button.style.border = '1px solid #fff';
        button.style.color = '#fff';
        button.style.fontWeight = '700';
        button.style.fontSize = '14px';
        button.style.borderRadius = '7px';
        button.style.padding = '5px 10px';
        button.style.margin = '5px';
        button.style.minHeight = 'auto';
        button.style.minWidth = '130px';
        button.style.lineHeight = '20px';
        button.style.verticalAlign = 'middle';
        button.style.width = 'auto';
        element.appendChild(button);
        button.addEventListener("click",function () {var time = Date.now();localStorage.setItem('tbg95_time',time); traffic_main();return false;});
        button.addEventListener('mouseenter', e => {
            button.style.background = '#c40b11';
        });

        button.addEventListener('mouseleave', e => {
            button.style.background = 'rgb(66 46 228)';
        });

        button.addEventListener('mousedown', e => {
            button.style.background = '#9a070d';
        });

        button.addEventListener('mouseup', e => {
            button.style.background = '#ed1c24';
        });
        
        
    }
};