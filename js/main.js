$(document).ready(function () { // Ждём загрузки страницы // АНИМАЦИЯ ЦВЕТА ШАПКИ
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            anim();
        }
    });
});

function anim() {
    $('header').css(anim_style);
}
var anim_style = {
    "background-color": "rgb(181,175,239)",
    "transition": "0.5s",
    "box-shadow": "0 0 20px 0 rgba(115,98,223,1)"
} // АНИМАЦИЯ ЦВЕТА ШАПКИ ПРИ СКРОЛЛЕ

$(document).ready(function (){
    $(window).scroll(function(){
        if ($(this).scrollTop() <150){
            anim1();
        }
    })
})
function anim1(){
    $('header').css(anim_style1)
}
var anim_style1 ={
    "background" : "rgb(255, 156, 118)",
    "transition" : "0.5s",
    "box-shadow" : "none"

}
function scrollTo(element){
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: "smooth"
    })
}
let post1 = document.querySelector('.post1')
let post__about = document.querySelector('.post--about');
let post_invite = document.querySelector('.invite--block');
let post_trainers = document.querySelector('.trainers');

let header__about = document.querySelector('#header--about').addEventListener('click', ()=>{
    scrollTo(post__about),
    console.log('header-aboutPost')
});
let header_contact = document.querySelector('#header--contact').addEventListener('click', ()=>{
    scrollTo(post_invite),
    console.log('header-invitePost')
})

let header_trainers = document.querySelector('#header--trainers').addEventListener('click', ()=>{
    scrollTo(post_trainers)
    console.log('header-trainers')
})
let footer_home = document.querySelector('#footer--home').addEventListener('click', ()=>{
    scrollTo (post1),
    console.log('footer-post1')
})

let footer_about = document.querySelector('#footer--About').addEventListener('click', ()=>{
    scrollTo(post__about),
    console.log('footer-about')
})

let footer_trainers = document.querySelector('#footer--Trainers').addEventListener('click', () =>{
    scrollTo(post_trainers),
    console.log('footer-trainers')
})
let footer_contact = document.querySelector('#footer--Contact').addEventListener('click', ()=>{
    scrollTo(post_invite);
    console.log('footer-invite')
})
openlog = function() {
    document.querySelector('#id01').style.display='block';
};
closelog = function() {
    document.querySelector('#id01').style.display='none';
};


// let x = Number(prompt('Вес первого '))
// let y = Number(prompt('Вес второго '))
// let z = Number(prompt('вес третьего '))

// if (x || y || z <= '93' ){
//     alert('error')
// }
//  else if (x||y||z > '700'){
// alert('perebor') 
// }
