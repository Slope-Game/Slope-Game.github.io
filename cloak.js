window.addEventListener('load', function() {
    var newMenu = [{"url":"/roblox.html","title": "Roblox Unblocked"},{"url":"/car-games.html","title": "Car Games"}, {"url": "/shooting-games.html","title":"Shooting Games","url":"/action-games.html","title":"Action Games"},{"url":"/shooting-games.html", "title":"Shooting Games"},{"url":"/skill-games.html", "title":"Skill Games"},{"url":"/stickman-games.html", "title":"Stickman Games"},{"url":"/running-games.html", "title":"Running Games"},{"url":"/idle-games.html", "title":"Idle Games"},{"url":"/adventure-games.html", "title":"Adventure Games"},{"url":"/2-player-games.html", "title":"2 Player Games"},{"url":"/update.html", "title":"New Games"}];
    for (let index =  newMenu.length -1; index >=0; index--) {
      const element = newMenu[index];
      var menu = this.document.createElement("a");
      menu.href = element.url;
      menu.innerHTML = `<span class="menu-bar__text">
        <span class="menu-bar__name">${element.title}</span>
      </span>`;
      document.querySelector(".menu-bar__one .active").prepend(menu);
    }
    // addHtml();
});
function addHtml(){
  
  var html = `
  <style>.ads-bottom{display: block; width: 100% !important; height: 129px !important; bottom: -124px; clear: none !important; float: none !important; left: 0px; margin: 0px !important; max-height: none !important; max-width: none !important; opacity: 1; overflow: visible !important; padding: 0px !important; position: fixed; right: auto !important; top: auto !important; vertical-align: baseline !important; visibility: visible !important; z-index: 2147483647; background: rgb(250, 250, 250) !important;}</style>
  <div class="grippy-host">
    <ins class="ee" style="inset: auto !important; clear: none !important; display: block !important; float: none !important; height: 5px !important; margin: 0px !important; max-height: none !important; max-width: none !important; opacity: 1 !important; overflow: visible !important; padding: 0px !important; position: relative !important; vertical-align: baseline !important; visibility: visible !important; width: auto !important; z-index: 1 !important; background-color: rgb(250, 250, 250) !important; box-shadow: rgba(0, 0, 0, 0.2) 0px -1px 5px -1px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px !important;">
      <span style="display: block !important; width: 80px !important; height: 45px !important; bottom: 0px !important; left: 0% !important; pointer-events: none !important;">
        <svg style="margin: 0px !important; position: absolute !important; bottom: 0px !important; left: 0% !important; display: block !important; width: 80px !important; height: 30px !important; transform: none !important; pointer-events: initial !important;" onclick="closeAds(document.querySelector('.ads-bottom'),800)">
          <defs>
            <filter id="dropShadowTop" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feComponentTransfer in="SourceAlpha" result="TransferredAlpha">
                <feFuncR type="discrete" tableValues="0.5"></feFuncR>
                <feFuncG type="discrete" tableValues="0.5"></feFuncG>
                <feFuncB type="discrete" tableValues="0.5"></feFuncB>
              </feComponentTransfer>
              <feGaussianBlur in="TransferredAlpha" stdDeviation="2"></feGaussianBlur>
              <feOffset dx="0" dy="0" result="offsetblur"></feOffset>
              <feMerge>
                <feMergeNode></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
          </defs>
          <path d="M0,26 L0,6 A6,6 0 0,1 6,1 L50,1 A6,6 0 0,1 56,6 L56,20 A6,6 0 0,0 62,26 Z" stroke="#FAFAFA" stroke-width="1" fill="#FAFAFA" style="filter: url(&quot;#dropShadowTop&quot;);"></path>
          <rect x="0" y="25" width="80" height="5" style="fill: rgb(250, 250, 250);"></rect>
          <g class="down" stroke="#616161" stroke-width="2px" stroke-linecap="square">
            <line x1="22" y1="12" x2="28" y2="18"></line>
            <line x1="28" y1="18" x2="34" y2="12"></line>
          </g>
        </svg>
      </span>
    </ins>
  </div>
  <div id="aswift_9_host" tabindex="0" title="Advertisement" aria-label="Advertisement" style="border: none !important; height: 124px !important; width: 100% !important; margin: 0px !important; padding: 0px !important; position: relative !important; visibility: visible !important; background-color: transparent !important; display: inline-block !important; inset: auto !important; clear: none !important; float: none !important; max-height: none !important; max-width: none !important; opacity: 1 !important; overflow: visible !important; vertical-align: baseline !important; z-index: auto !important;"></div>
`;
var el = document.createElement('div');
  el.classList.add("ads-bottom");
  el.innerHTML = html;
  document.querySelector('body').appendChild(el);
  fadeIn(el, 1500);
  var tmp = document.querySelector('#aswift_9_host');
  var tmp_child = document.createElement('script');
  var atOptions = {
    'key' : '1057eb92bc5ed2a4f3d160639bcb15a3',
    'format' : 'iframe',
    'height' : 90,
    'width' : 728,
    'params' : {}
  };
  tmp_child.setAttribute('src','//www.topcreativeformat.com/1057eb92bc5ed2a4f3d160639bcb15a3/invoke.js'); 
  tmp.appendChild(tmp_child);

}
function fadeIn(el, time) {
  // el.style.opacity = 0;
  var bottom = -94;

  var last = +new Date();
  var tick = function() {
    // el.style.opacity = +el.style.opacity + (new Date() - last) / time;
    bottom = +bottom + 0.72*(3000/time);
    if(bottom >= -8){
      bottom = 0;
    }
    var string = `${bottom}px`;
    el.style.bottom = string;
    // console.log(string);
    last = +new Date();
    
    if (bottom < 0) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
    } else {
      bottom = 0;
      var string1 = `${bottom}px`;
    el.style.bottom = string1;
    }
  };

  tick();
}
function closeAds(el, time){
  if(el.style.bottom == "0px"){
    document.querySelector('.down').innerHTML = ` <line x1="22" y1="18" x2="28" y2="12"></line><line x1="28" y1="12" x2="34" y2="18"></line>`;
    var bottom = 0;
    var tick = function() {
      bottom = +bottom - 0.6*(3000/time);
    
    console.log(bottom);
    var string = `${bottom}px`;
    el.style.bottom = string;
    
      if (+bottom > -94) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      } else {
        el.style.bottom = "-94px";
      }
    }
    tick();
  } else {
    document.querySelector('.down').innerHTML = ` <line x1="22" y1="12" x2="28" y2="18"></line><line x1="28" y1="18" x2="34" y2="12"></line>`

    var bottom = -94;
    var tick = function() {
      bottom = +bottom + 0.6*(3000/time);
    
    console.log(bottom);
    var string = `${bottom}px`;
    el.style.bottom = string;
    
      if (+bottom < 0) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      } else {
        el.style.bottom = "0px";
      }
    }
    tick();
  }
}
