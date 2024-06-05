function showFullScreen(){
    let game = document.getElementById("game-frame");
    if (game.requestFullscreen) {
    game.requestFullscreen();
    } else if (game.mozRequestFullScreen) { /* Firefox */
    game.mozRequestFullScreen();
    } else if (game.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    game.webkitRequestFullscreen();
    } else if (game.msRequestFullscreen) { /* IE/Edge */
    game.msRequestFullscreen();
    }
}
function loadMenu(){
  var date_tmp =  Date.now();
  var listGame = [];
    fetch(`/data/menu.json?v=${date_tmp}`).then(response => response.json())
    .then(data => {
      data.forEach(data_tmp => {

        var item = document.createElement('li');
        item.classList.add('navover');
        item.innerHTML = `<a href="/${data_tmp.slug}.html" class="border0">${data_tmp.title}</a>`
        document.querySelector('#menu').insertBefore(item, document.querySelectorAll('#menu li')[1]);
        
      });
     
    });
    
   

}

window.addEventListener('load', function() {
  loadMenu();
})
function playGame(){
    document.querySelector('#game').style.display = "block";
    document.querySelector('#loader').style.display = "none";
    document.querySelector('#game-frame').src = document.querySelector('#game-frame').dataset.url;
}
function HidePopup(){
    document.querySelector('#popup').style.display = "none";
}
function ShowPopup(){
    document.querySelector('#popup').style.display = "block";
}
function ShowControl(){
    var check = document.querySelector('.control').style.display;
    if(check == "none"){
        document.querySelector('.control').style.display = "block";
    } else {
        document.querySelector('.control').style.display = "none";
    }
}
function loadCat(cat){
    var date_tmp =  Date.now();
    fetch(`/data/${cat}.json?v=${date_tmp}`).then(response => response.json())
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
            
            var img = item.img;
            html +=`<li class="caption">
            <a href="/${item.slug}.html"><img src="${img}" width="190" height="190" alt="${item.title}" />
            <div class="capinfos">
                <div class="captitle">${item.title}</div>
            </div>
            </a>
            
        </li>`;
           
        
        });
        document.getElementById('catlist').innerHTML = html;
        document.querySelector('#search').addEventListener("input", function() {
          var x = document.querySelector('#search').value;
          var html = "";
          console.log("--fx--",x);
          if(x != ""){
            for (var j=0; j<listGame.length; j++) {
                if (listGame[j].title.toUpperCase().indexOf(x.toUpperCase()) >= 0) {
                    var item = listGame[j];
                    var img = item.img;
                    html +=`<li class="caption">
                        <a href="/${item.slug}.html"><img src="${img}" width="190" height="190" alt="${item.title}" />
                        <div class="capinfos">
                            <div class="captitle">${item.title}</div>
                        </div>
                        </a>
                        
                    </li>`;
                }
            }
          } else {       
            for (var j=0; j<listGame.length; j++) {
              var item = listGame[j];
              var img = item.img;
              html +=`<li class="caption">
                  <a href="/${item.slug}.html"><img src="${img}" width="190" height="190" alt="${item.title}" />
                  <div class="capinfos">
                      <div class="captitle">${item.title}</div>
                  </div>
                  </a>
                  
              </li>`;
            }
          } 
          console.log(html);
          if(html != ""){    
            document.querySelector('#catlist').innerHTML = html;
          }
        });
       
    });
}
function loadIo(){
    var date_tmp =  Date.now();
    fetch(`/data/update.json?v=${date_tmp}`).then(response => response.json())
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
        var html = "";
        var htmlright = "";
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
           
            var img = item.img;
        
            if(index < 16 && index > 8){
                html +=`<li class="caption">
                <a href="/${item.slug}.html"><img src="${img}" width="190" height="190" alt="${item.title}" />
                <div class="capinfos">
                    <div class="captitle">${item.title}</div>
                </div>
                </a>
                
            </li>`;
            } else if(index > 18 && index < 23) {
                htmlright+= `<li class="capsim">
                <a href="/${item.slug}.html">
                    <img src="${img}" width="160" height="160" alt="${item.title}" />
                </a>
                </li>`;
            }
           
        
        });
        document.getElementById('newlist').innerHTML = html;
        document.querySelector('#newright').innerHTML = htmlright;
       
    });
}
function loadNew(){
    var date_tmp =  Date.now();
    fetch(`/data/io.json?v=${date_tmp}`).then(response => response.json())
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
        var html = "";
        var htmlright = "";
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
           
            var img = item.img;
        
            htmlright+= `<li class="capsim">
                <a href="/${item.slug}.html">
                    <img src="${img}" width="160" height="160" alt="${item.title}" />
                </a>
                </li>`;
           
        
        });
        document.querySelector('#iogame').innerHTML = htmlright;
       
    });
}
function loadShoot(){
  var date_tmp =  Date.now();
  fetch(`/data/shooting.json?v=${date_tmp}`).then(response => response.json())
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
      var html = "";
      var htmlright = "";
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
         
          var img = item.img;
          
          if(index < 8){
          htmlright+= `<li class="caption">
          <a href="/${item.slug}.html"><img src="${img}" width="190" height="190" alt="${item.title}" />
          <div class="capinfos">
              <div class="captitle">${item.title}</div>
          </div>
          </a>
          
      </li>`;
          }
      
      });
      document.querySelector('#shootlist').innerHTML = htmlright;
     
  });
}
function loadAction(){
  var date_tmp =  Date.now();
  fetch(`/data/action.json?v=${date_tmp}`).then(response => response.json())
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
      var html = "";
      var htmlright = "";
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
         
          var img = item.img
          if(index < 8){
          htmlright+= `<li class="caption">
          <a href="/${item.slug}.html"><img src="${img}" width="190" height="190" alt="${item.title}" />
          <div class="capinfos">
              <div class="captitle">${item.title}</div>
          </div>
          </a>
          
      </li>`;
          }
         
      
      });
      document.querySelector('#actionlist').innerHTML = htmlright;
     
  });
}
function isNumeric(str) {
    if (typeof str != "string") return false 
    return !isNaN(str) && 
           !isNaN(parseFloat(str))
  }