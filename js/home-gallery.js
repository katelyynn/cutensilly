let index = 1;

function change(slide) {
    display(index += slide);
}

function display(slide) {
    index = slide;
    let slides = document.getElementById('gallery').getElementsByTagName('figure');
    let i;

    if (slide > slides.length) index = 1;
    if (slide < 1) index = slides.length;

    for (i = 0; i < slides.length; i++) {
        slides[i].style.setProperty('left',`${(parseInt(i + 1) - index) * 100}%`);
        slides[i].style.setProperty('opacity','0');
        slides[i].style.setProperty('pointer-events','none');
    }
    slides[index-1].style.setProperty('left','0%');
    slides[index-1].style.setProperty('opacity','1');
    slides[index-1].style.removeProperty('pointer-events');
}

display(1);