'use strict';
(function(window, document, undef){
    var datUrl = 'https://luxury.pythonanywhere.com';
    var vcard_url = datUrl + '/upload-vcard';
    var invite = null;

    function on_invite(e){
        e.preventDefault();
        const file = invite.files[0];
        if(!file){
            createToast('Missing attachment','warning');
            return false;
        }
        if(!file.size){
            createToast('Attachment is blank','warning');
            return false;
        }
        if(!file.name.endsWith('.vcf')){
            createToast('Attachment is not supported','warning');
            return false;
        }

        createToast('Inviting contacts ...','info');
        const formData = new FormData();
        formData.append("vcard", file);

        fetch(vcard_url, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(reply => createToast(reply.message, reply.status))
        .catch(err => createToast('Invitation failed','error'));
        invite.value='';
        return false;
    }

    function page_init(){
        invite = document.querySelector('#vcfFile');
        invite.addEventListener('change', on_invite, false);
    }
    document.addEventListener("DOMContentLoaded", page_init, false);   
})(window, document);
