let panels = document.querySelectorAll('.panel');

function toggleOpen(){
    this.classList.toggle('open');
}

panels.forEach(el => el.addEventListener('click', toggleOpen));

function toggleActive(e){
    console.log(e.propertyName);
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}
panels.forEach(el => el.addEventListener('transitionend', toggleActive));