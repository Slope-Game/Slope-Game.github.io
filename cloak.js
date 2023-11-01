window.addEventListener('load', function() {
    var newMenu = [{"url":"/roblox-unblocked.html","title": "Roblox"},{"url":"/car-games.html","title": "Car Games"}, {"url": "/shooting-games.html","title":"Shooting Games","url":"/action-games.html","title":"Action Games"},{"url":"/shooting-games.html", "title":"Shooting Games"},{"url":"/skill-games.html", "title":"Skill Games"},{"url":"/stickman-games.html", "title":"Stickman Games"},{"url":"/running-games.html", "title":"Running Games"},{"url":"/idle-games.html", "title":"Idle Games"},{"url":"/adventure-games.html", "title":"Adventure Games"},{"url":"/2-player-games.html", "title":"2 Player Games"},{"url":"/update.html", "title":"New Games"}];
    for (let index =  newMenu.length -1; index >=0; index--) {
      const element = newMenu[index];
      var menu = this.document.createElement("a");
      menu.href = element.url;
      menu.innerHTML = `<span class="menu-bar__text">
        <span class="menu-bar__name">${element.title}</span>
      </span>`;
      document.querySelector(".menu-bar__one .active").prepend(menu);
    }
});