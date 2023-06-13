var  r = document.createElement("script");
	r.setAttribute("src", "//api.adinplay.com/libs/aiptag/pub/TTS/slope-game.github.io/tag.min.js"), r.setAttribute("type", "text/javascript"), r.setAttribute("crossOrigin", "anonymous", "async"),  r.onload = function (){
        //<div id="overlay"></div>
        let stylediv = document.createElement('style');
        stylediv.innerHTML = `#overlay {
            position: fixed; /* Sit on top of the page content */
            width: 100%; /* Full width (cover the whole page) */
            height: 100%; /* Full height (cover the whole page) */
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgb(12, 72, 108);
            z-index: 1000; /* Specify a stack order in case you're using a different order for other elements */
            cursor: pointer; /* Add a pointer on hover */
          }
          #overlay .btnPlay{
          margin: 0;
          position: absolute;
          top: 50%;
          left: 50%;
          -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          padding: 10px 22px;
          border-radius: 5px;
          border: 3px solid white;
          background: linear-gradient(0deg, #dddddd, #ffffff);
          color: #222;
          text-transform: uppercase;
          text-shadow: 0 0 1px #fff;
          font-family: Helvetica, Arial, sans-serif;
          font-weight: bold;
          font-size: 18px;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
          width: 150px;}
          `;
        
        document.querySelector("head").appendChild(stylediv);
        let adsdiv = document.createElement('div');
        // adsdiv.id = "overlay";
        adsdiv.id = "preroll";
        document.querySelector("body").appendChild(adsdiv);
        
        let headTag = document.getElementsByTagName('head')[0]; 
        let scriptAds = `<script>
        window.aiptag = window.aiptag || {cmd: []};
        aiptag.cmd.display = aiptag.cmd.display || [];
        aiptag.cmd.player = aiptag.cmd.player || [];
        
        function showPreroll(){
            document.querySelector('#overlay').style.display = "none";
            if (typeof aiptag.adplayer !== 'undefined') {
        
                aiptag.cmd.player.push(function() { aiptag.adplayer.startPreRoll(); });
        
            } else {
                //Adlib didnt load this could be due to an adblocker, timeout etc.
                //Please add your script here that starts the content, this usually is the same script as added in AIP_COMPLETE.
                alert("Ad Could not be loaded, load your content here");
            }
        }
        </script>`;
        // document.querySelector("body").appendChild(scriptAds);
        headTag.innerHTML += (scriptAds);

        let overlay = document.createElement('div');
        overlay.id = "overlay";
        overlay.innerHTML = `<button class="btnPlay">Play</button>`;
        document.querySelector("body").appendChild(overlay);
        let gameBtn = document.querySelector('.btnPlay');
        gameBtn.addEventListener("click", function(event){
            event.preventDefault();
            document.querySelector('#overlay').style.display = "none";
            //CMP tool settings
            aiptag.cmp = {
                show: true,
                position: "centered",  //centered, bottom
                button: true,
                buttonText: "Privacy settings",
                buttonPosition: "bottom-left" //bottom-left, bottom-right, top-left, top-right
            }
            aiptag.cmd.player.push(function() {
                aiptag.adplayer = new aipPlayer({
                    AIP_REWARDEDNOTGRANTED: function (state)  {
                        //This event is fired when a rewarded ad is:
                        //timed out, empty, unsupported or closed by the user.
                        //don't grand the reward here
                        alert("Rewarded ad state: " + state); //state can be: timeout, empty, unsupported or closed.
                    },
                    AIP_REWARDEDGRANTED: function ()  {
                        // This event is called whenever a reward is granted for a rewarded ad
                        if (event && "isTrusted" in event && event.isTrusted) {
                        alert("Reward Granted");
                        } else {
                            alert("Something went wrong don't grant the reward");
                        }
                    },
                    AD_WIDTH: 960,
                    AD_HEIGHT: 540,
                    AD_DISPLAY: 'default', //default, fullscreen, center, fill
                    LOADING_TEXT: 'loading advertisement',
                    PREROLL_ELEM: function(){return document.getElementById('preroll')},
                    AIP_COMPLETE: function (state)  {
                        /*******************
                         ***** WARNING *****
                        *******************
                        Please do not remove the PREROLL_ELEM
                        from the page, it will be hidden automaticly.
                        */
                        
                        alert("Preroll Ad Completed: " + state);
                    }
                });

            });
            if (typeof aiptag.adplayer !== 'undefined') {
        
                aiptag.cmd.player.push(function() { aiptag.adplayer.startPreRoll(); });
        
            } else {
                //Adlib didnt load this could be due to an adblocker, timeout etc.
                //Please add your script here that starts the content, this usually is the same script as added in AIP_COMPLETE.
                alert("Ad Could not be loaded, load your content here");
            }
        });
        
},document.head.appendChild(r);
