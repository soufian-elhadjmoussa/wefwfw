
const light_btn = document.querySelector('.light ');
const munu_btn = document.querySelector('.humbrger ');
const mobile_menu = document.querySelector('.mobile ');
const logo_menu = document.querySelector('.logo ');
const spa = document.querySelector('.spa ');



const light = document.querySelector('.ligh ');
const body = document.querySelector('.bo_dy ');
const logo = document.querySelector('.logo ');
const bar = document.querySelector('.bar ');
const humbrger = document.querySelector('.humbrger ');
const soufian = document.querySelector('.info-h1 ');
const link0 = document.querySelector('.link0 ');
const link1 = document.querySelector('.link1 ');
const link2 = document.querySelector('.link2 ');
const link3 = document.querySelector('.link3 ');
const link4 = document.querySelector('.link4 ');
const pra0 = document.querySelector('.pra0 ');
const pra1 = document.querySelector('.pra1 ');
const pra2 = document.querySelector('.pra2 ');
const pra3 = document.querySelector('.pra3 ');




munu_btn.addEventListener('click', function() 
{
    munu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
    logo_menu.classList.toggle('is-active');
    spa.classList.toggle('is-active');
    light.classList.toggle('is-active');
    body.classList.toggle('is-active');
    
    
    //    ----------------------------------------
});

light_btn.addEventListener('click' ,function()
{
    body.classList.toggle('active');
    logo.classList.toggle('active');
    light.classList.toggle('active');
    bar.classList.toggle('active');
    humbrger.classList.toggle('active');
    soufian.classList.toggle('active');
    link0.classList.toggle('active');
    link1.classList.toggle('active');
    link2.classList.toggle('active');
    link3.classList.toggle('active');
    link4.classList.toggle('active');
    pra0.classList.toggle('active');
    pra1.classList.toggle('active');
    pra2.classList.toggle('active');
    pra3.classList.toggle('active');
    
    
    

} );



    