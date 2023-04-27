document.body.addEventListener('click',(event)=>{
    if (event.target.id == 'btn-restart'){
        window.location.reload();
    }
})