'use strict';
var base = encodeURIComponent('http://sto.rf.gd/');
var msg = encodeURIComponent('Hi Fashluxee,\nI would like to talk about this item: \n\n ');
var phone = '919503021689';
var wsl = 'https://api.whatsapp.com/send?phone='+phone+'&text='+msg;
var vdos = /(mp4|3gp|ogg)$/;
var poto = /(png|jpg|jpeg)$/;
var pos = -1;
var mail_to='mailto:brandreplicastore@gmail.com?cc=tanzil.memon03@gmail.com&subject=Catalog%20Product%20Enquiry&body=';

function outViewport(el){
  var rect = el.getBoundingClientRect();
  return rect.bottom < 0 || rect.right < 0 || rect.left > window.innerWidth || rect.top > window.innerHeight;
}

function img_fn(imgs){
  var listEl = document.querySelector('.gallery');
  var lastEl = document.querySelector('.loader');
  function loadMore(){
    var ihtml = '';
    var src, wa_link, media, email, link;
    for(var i = 1; 9 >= i; i ++){
      src = imgs[++pos];
      if(!src) continue;
      if(vdos.test(src)){
        media = [
          '<video class="gallery-image" autoplay="" muted="" playsinline="">',
          '<source src="',src,'" type="video/',src.split('.').pop(),'"/>',
          '</video>'
        ].join('');
      } else if(poto.test(src)){
        media = ['<img src="',src,'" class="gallery-image"/>'].join('');
      } else {
        continue;
      }
			link = encodeURIComponent(src);
      wa_link = wsl + link;
			email = mail_to + msg + link;
      ihtml += [
        '<div class="gallery-item" tabindex="0">',
        	media,
        	'<div class="gallery-item-info">',
						'Send Enquiry By',
        		'<a class="d-link" target="_blank" href="',wa_link,'">WhatsApp</a>',
	        	'<a class="d-link" target="_blank" href="',email,'">Email</a>',
					'</div>',
        '</div>'
      ].join('');
    }
    if(ihtml){
      listEl.innerHTML += ihtml;
    }
  }

  function scroller() {
    if (outViewport(lastEl))return;
    loadMore();
  }

  if (document.addEventListener) {
    document.addEventListener("scroll", scroller, false);
  } else {
    document.attachEvent("onscroll", scroller);
  }

  loadMore();
}
var url = 'list.js?_=' + Date.now();
var js = document.createElement('script');
js.setAttribute('src', url);
document.querySelector('body').appendChild(js);
