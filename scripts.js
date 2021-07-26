const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e)=>{
	cursor.style.left = e.pageX+ 'px';
	cursor.style.top = e.pageY + 'px';
	cursor.setAttribute('data-fromTop', (cursor.offsetTop - scrollY))
	console.log(e.pageX, e.pageY)
})

window.addEventListener('scroll', ()=>{
	const fromTop = parseInt(cursor.getAttribute('data-fromTop'));
	cursor.style.top = scrollY + fromTop + 'px';
	console.log(scrollY)
})

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

var sites = [
        'http://www.google.com',
        'http://www.stackoverflow.com',
        'http://www.example.com',
        'http://www.youtube.com'
    ];

    function randomSite() {
        var i = parseInt(Math.random() * sites.length);
        location.href = sites[i];
    }