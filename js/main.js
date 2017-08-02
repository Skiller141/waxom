var arrowLeft = document.getElementById('left'),
	arrowRight = document.getElementById('right');

arrowLeft.onclick = function(){
	alert('left');
}

var tabs = document.querySelectorAll('#tabs>ul>li');
console.log(tabs[0].innerHTML);
var block = document.getElementsByClassName('flex-contaner')[0];
var block2 = document.getElementsByClassName('another-block')[0];
for(var i=0; i < 5; i++){
	tabs[i].onclick = function(){
		console.log('тыц!');
		this.style.background = '#998675';
		this.style.color = '#fff';
		block.style.display = 'none';
		block2.style.display = 'block';
		tabs[i].style.background = '#fff';
	}
}