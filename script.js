'use strict';
(function(window, document, undef){
    var msg = encodeURIComponent('Hi Fashluxee,\nI would like to talk about this item: \n\n ');
    var phone = '919503021689';
    var wsl = 'https://api.whatsapp.com/send?phone='+phone+'&text='+msg;
    var vdos = /(mp4|3gp|ogg|avi|mov|wmv|flv|webm|mkv)/;
    var poto = /(png|jpg|jpeg|gif|webp|bmp|tiff|svg)/;
    var pos = -1;
    var mail_to='mailto:brandreplicastore@gmail.com?cc=tanzil.memon03@gmail.com&subject=Catalog%20Product%20Enquiry&body=';
    var listEl = null;
    var lastEl = null;
    var catEl = null;
    var noteEl = null;
    var resEl = null;
    var hadEl = null;
    var datUrl = 'https://luxury.pythonanywhere.com';
    var catUrl = datUrl + '/category-list';
    var medUrl = datUrl + '/media-list';
    var pos = 0;
    var moreLocked = false;
    var cath = null;
    var tgl = null;

    function loadNewScript(src) {
      var sel = 'lazy-js';
      var lazyJs = document.querySelector('.'+sel);
      if(lazyJs && lazyJs.parentNode){
        var pe = lazyJs.parentNode;
        pe.removeChild(lazyJs);
      }
      lazyJs = document.createElement('script');
      lazyJs.type = 'text/javascript';
      lazyJs.className = sel;
      lazyJs.src = src+'?v='+Date.now();
      document.body.appendChild(lazyJs);
    }

    var push_medias = function (data){
        moreLocked = false;
        console.log('medias',data);
        if(!data.length){
            noteEl.classList.add('d-none');
            lastEl.classList.add('d-none');
            if(!pos){
                resEl.classList.remove('d-none');
            } else {
                hadEl.classList.remove('d-none');
            }
            return;
        }
        pos += data.length;
        data.forEach(src => {
            var media = '';
             if(poto.test(src)){
                media = ['<img src="',src,'" class="gallery-image"/>'].join('');
            } else if(vdos.test(src)){
                media = [
                '<video class="gallery-image" autoplay="" muted="" playsinline="" loop="">',
                    '<source src="',src,'" />',
                '</video>'
                ].join('');
            }
            var link = encodeURIComponent(src);
            var wa_link = wsl + link;
            var email = mail_to + msg + link;
            listEl.innerHTML += [
                '<div class="gallery-item" tabindex="0">',
                    media,
                    '<div class="gallery-item-info">',
                        '<a class="d-link" target="_blank" href="',wa_link,'">WhatsApp</a>',
                        '<a class="d-link" target="_blank" href="',email,'">Email</a>',
                    '</div>',
                '</div>'
            ].join('');
        });
        scroller();
    };

    var push_categories = function (data){
        console.log('categories',data);
        data.forEach(item => {
            var option = document.createElement('option');
            option.value = item.value;
            option.textContent = item.text;
            catEl.appendChild(option);
        });
        update_cat_text();
        loadMore();
    };

    function outViewport(el){
        var rect = el.getBoundingClientRect();
        return (
            rect.bottom < 0 || 
            rect.right < 0 || 
            rect.left > window.innerWidth || 
            rect.top > window.innerHeight
        );
    }

    function loadMore(){
        if(moreLocked){
            return;
        }
        moreLocked = true;
        var cat_id = catEl.value;
        loadNewScript([medUrl,'?pos=',pos,'&cat_id=',cat_id,'&ts=',Date.now()].join(''))
    }

    function scroller() {
        if (outViewport(lastEl))return;
        loadMore();
    }

    function update_cat_text(){
        cath.textContent = catEl.options[catEl.selectedIndex].text;
    }

    window.push_medias = push_medias;
    window.push_categories = push_categories;
    document.addEventListener("scroll", scroller, false);
    document.addEventListener("DOMContentLoaded", function(){
        listEl = document.querySelector('.gallery');
        lastEl = document.querySelector('.loader');
        catEl = document.querySelector('#cat');
        noteEl = document.querySelector('#load-note');
        resEl = document.querySelector('#no-result');
        hadEl = document.querySelector('#last-result');
        cath = document.querySelector('#cath');
        tgl = document.querySelector('#toggle');
        catEl.addEventListener("change", function(){
            pos = 0;
            listEl.innerHTML = '';
            update_cat_text();
            noteEl.classList.remove('d-none');
            lastEl.classList.remove('d-none');
            resEl.classList.add('d-none');
            hadEl.classList.add('d-none');
            loadMore();
        }, false);
        cath.addEventListener('click', e => {
            e.preventDefault();
            tgl.checked = !tgl.checked;
            return false;
        });
        loadNewScript(catUrl);
    }, false);   
})(window, document);
