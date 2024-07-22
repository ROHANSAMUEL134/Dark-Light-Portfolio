var video = document.getElementById('video-background');
const changeThemebtn = document.getElementById('changeTheme');
var flag = 'dark';
changeThemebtn.addEventListener("click", function() {
  var css = document.getElementById('css');
  var bgvid = document.getElementById('bg');
  var socialGithub = document.getElementById('social-github');
  var icon = document.getElementById('theme-icon');
  if(flag == 'dark'){
      css.href = "CSS/light.css";
      bgvid.src = "BG Video/Light Theme BG.mp4";
      flag = 'light';
      socialGithub.src="Social/Github-B.png";
      icon.className="fa-solid fa-moon";
  } else {
      css.href="CSS/dark.css";
      bgvid.src="BG Video/Dark Theme BG.mp4";
      flag = 'dark';
      socialGithub.src="Social/Github.png";
      icon.className="fa-solid fa-sun";
  }
  video.load();
});

document.addEventListener("DOMContentLoaded", function() {
  function isMobile() {
    return window.matchMedia("(max-width: 768px)").matches;
  }
  const footer = document.getElementById('footer-text')
  if (isMobile()) {
      const marquee = `<marquee>${footer.innerHTML}</marquee>`;
      footer.innerHTML = marquee;
  }
});

let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
}

let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}



