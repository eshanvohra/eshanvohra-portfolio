/*Smooth Scroll on clicking Nav Links*/
window.onscroll = function(){"use strict"; if((document.documentElement.scrollTop >= 5 || document.body.scrollTop >= 5) && window.innerWidth < 800){document.getElementById("soc").style['background-color'] = '#1B1B1B'; console.log(123);}else{document.getElementById("soc").style['background-color'] = '';} if(document.body.scrollTop >= 40 || document.documentElement.scrollTop >= 40 || e.classList.contains("open")){document.getElementById('nav').style['background-color'] = '#000000';}else{document.getElementById('nav').style.backgroundColor = '';} if(document.body.scrollTop >= 3*window.innerHeight || document.documentElement.scrollTop >= 3*window.innerHeight){let item = document.querySelectorAll('.active'); item[0].className = 'single';var items = document.querySelectorAll('.single'); items[3].className = 'active';}else if(document.body.scrollTop >= 2*window.innerHeight || document.documentElement.scrollTop >= 2*window.innerHeight){var item = document.querySelectorAll('.active'); item[0].className = 'single';var items = document.querySelectorAll('.single'); items[2].className = 'active';}else if(document.body.scrollTop >= 1*window.innerHeight || document.documentElement.scrollTop >= 1*window.innerHeight){var item = document.querySelectorAll('.active'); item[0].className = 'single';var items = document.querySelectorAll('.single'); items[1].className = 'active';}else{var item = document.querySelectorAll('.active'); item[0].className = 'single';var items = document.querySelectorAll('.single'); items[0].className = 'active';}}

/*Change Color of active links on Nav Bar*/
let tar = document.getElementById("target");let e = document.getElementById("toggle"); let nelem = document.getElementById("nav");
function active(a){let item = document.querySelectorAll('.active'); item[0].className = 'single'; a.className = 'active';
document.querySelector("#contact").scrollIntoView({behavior: "smooth"}); e.classList.remove("open"); tar.classList.add("nav-items"); tar.classList.remove("toggeled"); /*nelem.style.backgroundColor='';*/}

/*Changing Institune name*/
let text = ["GNDU Amritsar", "Guru Nanak Dev University, Amritsar"];
var counter = 1;var elem = document.getElementById("changeText");setInterval(change, 2500);function change(){elem.classList.add('hide');setTimeout(function () {elem.innerHTML = text[counter]; elem.classList.remove('hide'); counter++;if (counter >= text.length) {counter = 0;}}, 500);}

/*part of Changing color of NavBar from transparent to Black on scrool*/
function tog(e){if(!(e.classList.contains("open"))){e.classList.add("open"); tar.classList.remove("nav-items"); tar.classList.add("toggeled"); nelem.style['background-color'] = '#000000';} else{e.classList.remove("open"); tar.classList.add("nav-items"); tar.classList.remove("toggeled"); if(document.body.scrollTop < (window.innerHeight -500) && document.documentElement.scrollTop < (window.innerHeight -500)){ nelem.style.backgroundColor='';}}}

// Ading Social icons baced on divice width
function socialWid(){
	var thisId = document.getElementById("soc");
	console.log(window.innerWidth);
	if(window.innerWidth >= 800){
		thisId.style.top = '0px';
		thisId.style.paddingTop = '.5em';
		thisId.style.margin = '.4em';
		thisId.style.left = '50%';
		thisId.style.transform = 'translateX(-50%)';
		thisId.style.zIndex = '1000';
	}
	else{
		thisId.style.paddingTop = '5px'
		thisId.style.borderTopLeftRadius = '10px';
		thisId.style.borderTopRightRadius = '10px';
		thisId.style.bottom = '0px';
		thisId.style.justifyContent = 'space-around'
		thisId.style.width = '100vw';
	}
}

