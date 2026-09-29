///draft

var muhFlag = false;
var cockTemp = true;

function grepBeans() {
console.log("cock");//THIS is called twice sometimes and i don't know why
 var beans = document.forms[0];
 var time = 10;//defualt
 for (const bean of beans) {
  if (bean.checked) {
   //console.log("c", bean.value);
   //return bean.value;///.... i just had a revelation
   time = parseInt(bean.value);//bruh
  }
}
return time;

}

function flipFlag() {
muhFlag = !muhFlag;
}

  var tag = document.createElement('script');
  tag.id = 'iframe-demo';
  tag.src = 'https://www.youtube.com/iframe_api';
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var player;
  function onYouTubeIframeAPIReady() {

    player = new YT.Player('videobox', {
          height: '540',
          width: '960',
          videoId: "sCvszgwu10w",//this is a placeholder sCvszgwu10w
          playerVars: {
            'playsinline': 1
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }//ev
    });//videobox
  }//func

  function onPlayerReady(ebent) {
console.log("elp");
    player.setVolume(50);
    nextVid();
  }

  function onPlayerStateChange(ebent) {
    if (ebent.data == YT.PlayerState.ENDED) {
	console.log("evennt");//this is called twice sometimes and i don't know wny
        if (cockTemp){
	cockTemp=false;
        nextVid();}
    }
  }


function nextVid() {
 var rand = something(eps.length);
var tim = grepBeans();
console.log("t", tim);
 loadVid( eps[rand], tim );//that'd do it
}


function loadVid(vid, time) {
var start = something(vid[1]-time);
var end = start + time;
console.log("e", end);

player.loadVideoById({'videoId': vid[0],
               'startSeconds': start,
               'endSeconds': end});
cockTemp = true;
}//loadvid


function something( max ) {
 return Math.floor(Math.random() * max);
}