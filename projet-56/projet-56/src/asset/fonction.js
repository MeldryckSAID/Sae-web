function bascule(cla) {
    console.log('Appel à la fonction cacher détecté' + cla);
    let paragraphe = document.querySelectorAll('.'+cla)
    paragraphe.forEach(function(p,i){
        if (p.style.display == 'none') {
             p.style.display ='block';
        } else {
            p.style.display='none';
        }
    });
}