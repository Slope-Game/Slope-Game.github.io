
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
function fullscreen(){
  var main_game = document.querySelector('#game-main');
  if(main_game.classList.contains("fullscreen")){
    main_game.classList.remove("fullscreen");
    document.querySelector('.btn-full svg use').setAttribute("href","#enterFullscreenIcon");
  } else {
    main_game.classList.add("fullscreen");
    document.querySelector('.btn-full svg use').setAttribute("href","#closeFullscreenIcon");
  }
}
function liveSearch(){
  var id_game = document.querySelector("#listgame");
  var filename = 'game';
  // if(id_game){
  //   filename = id_game.dataset.cate;
  // }
  
    fetch(`/data/${filename}.json?v=3`).then(response => response.json())
    .then(data => {
      var x = document.querySelector(".search-game").value;
      console.log(x);
      
      let html = "";
      if(x != ""){
        var listGame = [];
        var listCheck = [];
        data.forEach(item => {
          var tmp = {};
          tmp.title = item.title;
          tmp.domain = item.domain;
          tmp.img = item.img;
          tmp.slug = item.slug;
          tmp.cat = item.cat;
          if(item.ext){
            tmp.ext = item.ext;
          }
          if(listCheck.indexOf(item.slug) == -1){
            listCheck.push(item.slug);
            listGame.push(tmp);
          }
        });
        listGame.sort(function (a, b){
          if (a.title.toUpperCase() < b.title.toUpperCase()) {
            return -1;
          }
          if (a.title.toUpperCase() > b.title.toUpperCase()) {
            return 1;
          }
          return 0;
        });
        
        for (var j=0; j<listGame.length; j++) {
            if (listGame[j].title.toUpperCase().indexOf(x.toUpperCase()) >= 0) {
                var item = listGame[j];
                var img = "";
                if(item.domain == 1){
                    img = `https://slope-game.github.io/file/${item.slug}/logo.png`;
                } else if(item.domain == 2) {
                  
                    img = `https://slope-game.github.io/rungame/${item.slug}/logo.png`;
                    if(item.slug == "roblox-unblocked"){
                      img = item.img;
                    }
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
                }else if(item.domain == 9) {
                  img = item.img;
                }
                else if(item.domain == 10) {
                  img = item.img;
                } else if(item.domain == 11) {
                  img = item.img;
                } else if(item.domain == 20) {
                  img = `/${item.img}`;
                  console.log(img);
                } else if(item.domain == 99) {
                  img = item.img;
                  console.log(img);
                }
                if(item.ext){
                  img = `/img/${item.img}.png`;
                }

                if(id_game){
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
                } else {
                
                html += `<div class="item-game">
                    <div class="trending-action__head">
                    <a href="/${item.slug}.html"> 
                      <img src="${img}" alt="${item.title}">
                      </a>
                    </div>

                </div>`;
                }
            }
        }
      } else {
        
        for (var j=0; j<listGame.length; j++) {
          var item = listGame[j];
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
              }else if(item.domain == 9) {
                img = item.img;
              }
              else if(item.domain == 10) {
                img = item.img;
              } else if(item.domain == 11) {
                img = item.img;
              }else if(item.domain == 20) {
                img = `/${item.img}`;
                console.log(img);
              } else if(item.domain == 99) {
                img = item.img;
                console.log(img);
              }
              if(item.ext){
                img = `/img/${item.img}.png`;
              }

              if(id_game){
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
              } else {
              
              html += `<div class="item-game">
                  <div class="trending-action__head">
                  <a href="/${item.slug}.html"> 
                    <img src="${img}" alt="${item.title}">
                    </a>
                  </div>

              </div>`;
              }
        }
        
      } 
      if(html != ""){
        
        document.querySelector('#listgame').innerHTML = html;
      }
      
    })

  

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
    r.setAttribute("src", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7889675448259925"), r.setAttribute("type", "text/javascript"), r.setAttribute("crossOrigin", "anonymous"), r.onload = function (){
      if(document.querySelector('.ads_728x90')){
        (adsbygoogle = window.adsbygoogle || []).push({});
      }
      if(document.querySelector('.ads_300x600')){
        (adsbygoogle = window.adsbygoogle || []).push({});
      }
    },document.head.appendChild(r);
    
}
function isNumeric(str) {
  if (typeof str != "string") return false 
  return !isNaN(str) && 
         !isNaN(parseFloat(str))
}
function loadData(){
  var id_game = document.querySelector("#listgame");
  var filename = 'hot';
  if(id_game){
    filename = 'game';
  }
  var url = document.URL;
  if(url.indexOf("list.html") != -1){
    filename = "game";
  }
  console.log(url);
  var date_tmp =  Date.now();
  if(filename == 'hot'){
    var d = new Date();
    let day = d.getDay();
    // day = day;
    switch (day) {
      case 0:
        filename = 'hot_Sun';
        break;
      case 1:
        filename = 'hot_M';
        break;
      case 2:
        filename = 'hot_T';
        break;
      case 3:
        filename = 'hot_W';
        break;
      case 4:
        filename = 'hot_Th';
        break;
      case 5:
        filename = 'hot_F';
        break;
      case 6:
        filename = 'hot_S';
        break;
      default:
        break;
    }
  }
  fetch(`/data/${filename}.json?v=${date_tmp}`).then(response => response.json())
    .then(data => {
        var listGame = [];
        var listCheck = [];
        data.forEach(item => {
          var tmp = {};
          tmp.title = item.title;
          tmp.domain = item.domain;
          tmp.img = item.img;
          tmp.slug = item.slug;
          tmp.cat = item.cat;
          if(item.ext){
            tmp.ext = item.ext;
          }
          if(listCheck.indexOf(item.slug) == -1){
            listCheck.push(item.slug);
            listGame.push(tmp);
          }
        });
        listGame.sort(function (a, b){
          if (a.title.toUpperCase() < b.title.toUpperCase()) {
            return -1;
          }
          if (a.title.toUpperCase() > b.title.toUpperCase()) {
            return 1;
          }
          return 0;
        });
        
        //var html = `<div id="headerSearchResult" style="display: block;font-size: 4vmin;">Games found starting with Number.</div>`;
        var html = "";
        listGame.forEach((item, index) => {
         
            var tmp_str = item.title.toLowerCase().split("");
            if(isNumeric(tmp_str[0])){
              item.number = 1;
            } else {
              if(index > 0 && listGame[index].title.toLowerCase().split("")[0] != listGame[index-1].title.toLowerCase().split("")[0]){
                listGame[index].end = 1;
              }
            }
            
        });
        
        listGame.forEach((item, index) => {
            
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
            }else if(item.domain == 9) {
              img = item.img;
            }
            else if(item.domain == 10) {
              img = item.img;
            } else if(item.domain == 11) {
              img = item.img;
            } else if(item.domain == 20) {
              img = `/${item.img}`;
              // console.log(img);
            } else if(item.domain == 99) {
              img = item.img;
              // console.log(img);
            }
            if(item.ext){
              img = `/img/${item.img}.png`;
            }
            if(id_game){
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
            } else {
            
            html += `<div class="item-game">
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
            </div>`;
            }
        
        });
        if(id_game){
          document.getElementById('listgame').innerHTML = html;
        } else {
          document.getElementById('listhot').innerHTML = html;
        }
        if(window.location.href.indexOf("localhost") == -1 && window.location.href.indexOf("127.0.0.1") == -1 && window.location.href.indexOf("tunnel-rush.html") == -1 && window.location.href.indexOf("monkey-mart.html") == -1){
          loadGA();
          loadAds();
        }
    });
}
window.addEventListener('load', function() {
    
    loadData();

    console.log(window.location.href.indexOf("localhost"));
    
})
window.alert = {};  
function loadMainGame(){
  document.querySelector('.game-frame').innerHTML = `<iframe src="${document.querySelector('.game-frame').dataset.url}" id="gameframe" frameborder="0" style="height: 100%;width: 100%;"></iframe>`;
}
function playGame(){
  document.querySelector(".game-frame").innerHTML = `<iframe allowfullscreen="true" src="${document.querySelector('#talpa-splash-button').dataset.url}" id="gameframe" frameborder="0" style="height: 100%;width: 100%;"></iframe>`;
  playBtnCode();
}