var nav = document.querySelector('.header'); // Identify target

window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();

    if (window.scrollY <= 30) { // Just an example
        nav.style.backgroundColor = '#FFFFFF'// or default color
        
    } else {
        nav.style.backgroundColor = '#999e9d';
    }
});


document.getElementById("name").addEventListener('click',function(){
    
var randomColor = Math.floor(Math.random()*16777215).toString(16);

    this.style.color = '#' + randomColor;
})    