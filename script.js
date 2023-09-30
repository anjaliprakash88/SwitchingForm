let login = document.getElementById('login');
let signup= document.getElementById('signup');
let shade= document.getElementById('switch');

login.addEventListener('click',() =>
{
    shade.classList.remove('toRight');
    shade.classList.add('toLeft');
});

signup.addEventListener('click', ()=>
{
    shade.classList.remove('toLeft');
    shade.classList.add('toRight');
});

