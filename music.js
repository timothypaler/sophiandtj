(() => {
 'use strict';
 const music=document.getElementById('wedding-music'),button=document.querySelector('.music-toggle'),label=document.querySelector('.music-label');
 music.volume=0.3;let wanted=false,resume=false;
 function update(){const playing=!music.paused;button.setAttribute('aria-pressed',String(playing));button.setAttribute('aria-label',playing?'Pause wedding music':'Play wedding music');label.textContent=playing?'Pause':'Music';}
 async function start(){wanted=true;music.volume=0.3;try{await music.play();}catch{wanted=false;}update();}
 document.getElementById('open-invitation').addEventListener('click',()=>{if(!wanted)start();});
 document.querySelector('.skip-opening').addEventListener('click',()=>{if(!wanted)start();});
 button.addEventListener('click',()=>{if(music.paused)start();else{wanted=false;music.pause();update();}});
 music.addEventListener('play',update);music.addEventListener('pause',update);music.addEventListener('error',()=>{wanted=false;update();label.textContent='Retry music';});
 document.addEventListener('visibilitychange',()=>{if(document.hidden){resume=wanted&&!music.paused;music.pause();}else if(resume){resume=false;start();}});
 addEventListener('pagehide',()=>{music.pause();});update();
})();
