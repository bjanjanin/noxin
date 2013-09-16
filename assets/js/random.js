var num = (Math.floor(Math.random()*4));
var array = ['main-header-bg-1', 'main-header-bg-2', 'main-header-bg-3', 'main-header-bg-4', 'main-header-bg-5'];
var elem = document.getElementById('l-main-header');
elem.classList.add(array[num]);