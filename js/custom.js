function showMenu(e){
    e.style.display = "none";
    var menu = document.querySelector(".nftmax-smenu");
    console.log(menu);
    menu.style.transform = "translateX(0)";
}
function hideMenu(){
    var menu = document.querySelector(".nftmax-smenu");
    menu.style.transform = "translateX(-100%)";
    var icon_menu = document.querySelector(".icon-menu");
    icon_menu.style.display ="block";
}
function open_fullscreen() {
    let game = document.getElementById("gameframe");
    if (game.requestFullscreen) {
    game.requestFullscreen();
    } else if (game.mozRequestFullScreen) { /* Firefox */
    game.mozRequestFullScreen();
    } else if (game.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    game.webkitRequestFullscreen();
    } else if (game.msRequestFullscreen) { /* IE/Edge */
    game.msRequestFullscreen();
    }
};
function loadGA(){
    
    var  r = document.createElement("script");
  r.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-BF3BWX3NND"), r.setAttribute("type", "text/javascript"), r.setAttribute("crossOrigin", "anonymous"),  r.onload = function (){
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
  
      gtag('config', 'G-BF3BWX3NND');
  
    },document.head.appendChild(r);
    
}
function loadAds(){
    var  r = document.createElement("script");
    r.setAttribute("src", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7889675448259925"), r.setAttribute("type", "text/javascript"), r.setAttribute("crossOrigin", "anonymous");
    document.head.appendChild(r);
}

function loadData(){
    fetch("data/game.json").then(response => response.json())
    .then(data => {
        var listGame = data;
        var html = "";
        listGame.forEach(item => {
            var img = "";
            if(item.domain == 1){
                img = `https://slope-game.github.io/file/${item.slug}/logo.png`;
            } else if(item.domain == 2) {
                img = `https://slope-game.github.io/rungame/${item.slug}/logo.png`;
            } else if(item.domain == 3) {
              img = `https://ubg77.github.io/game131022/${item.slug}/logo.png`;
            } else if(item.domain == 4) {
              img = `https://ubg77.github.io/fix/${item.slug}/logo.png`;
              if(item.slug.indexOf("fnaf2") != -1){
                img = `https://ubg77.github.io/fix/${item.img}.png`;
              }
            } else if(item.domain == 5) {
              img = `https://webglmath.github.io/${item.slug}/logo.png`;
            } else if(item.domain == 6) {
              img = `https://ubg77.github.io/edit/${item.slug}/logo.png`;
            } else if(item.domain == 7) {
              img = `https://slope-game.github.io/newgame/${item.slug}/logo.png`;
            } else if(item.domain == 8) {
              img = `https://ubg77.github.io/updatefaqs/${item.slug}/logo.png`;
            }
            if(item.ext){
              img = `/img/${item.img}.png`;
            }
            html += `<div class="col-lg-3 col-md-3 col-12">
            <div class="trending-action__single trending-action__single--v2">
              <div class="trending-action__head">
              <a href="/${item.slug}.html"> 
                <img src="${img}" alt="${item.title}">
                </a>
              </div>
              <div class="trending-action__body trending-marketplace__body">
                <h2 class="trending-action__title">
                  <a href="/${item.slug}.html">${item.title}</a>
                </h2>
                
              </div>
            </div>
          </div>`;

        });
        document.getElementById('listgame').innerHTML = html;
    });
}
window.addEventListener('load', function() {
    loadGA();
    loadData();
    loadAds();
})
window.alert = {};  