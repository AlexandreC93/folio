/*
SI le input est check 
ALORS cuisine est cachée
SINON SI il est desactivé 
ALORS la cusine se remet 


*/


/*

SI le input est check
ALORS les classes choisit restes
SINON SI une autre classe est check 
ALORS les autres disparaissent

*/

// ON DEFINIT LES VARIABLES DU DOM

let btns = document.querySelectorAll('.no-check');
let imgs = document.querySelectorAll('.img')
let triR = document.querySelector('.img-react')
let triB = document.querySelector('.img-boot')
let triC = document.querySelector('.img-css')



// ON CREER LES FONCTION

let all = function () {


    for (let i = 0; i < imgs.length; i++) {
        img = imgs[i]
        console.log(img.classList)
        if (img.value == triB.value ) {
            img.classList.toggle('img-none')
        }
    }


}


let html = function () {

    for (i = 1; i < imgs.length; i++) {

        img = imgs[i]
        console.log(triC.classList)
        if(img.value == triR.value){

        
       
        img.classList.toggle('img-none')
        }
    }
}

let boot = function () {

    for (i = 2; i < imgs.length; i++) {
        img = imgs[i]
        img.classList.toggle('img-none')
    }
}

let reactF = function () {

    for (i = 3; i < imgs.length; i++) {
        img = imgs[i]
        img.classList.toggle('img-none')
    }
}


// ON CREER LECOUTEUR

btns[0].addEventListener('click', all)
btns[1].addEventListener('click', html)
btns[2].addEventListener('click', boot)
btns[3].addEventListener('click', reactF)




let movies = []

let app = new function () {

    this.movies = movies;


    this.fetchAll = function (data) {
        let elProjet = document.getElementById('projet')
        let htmlProjet = '';

    }
}









