/* typing */

const t="Hi, I'm M. Abdhul Wahab";
let i=0;
(function type(){
if(i<t.length){
document.getElementById("typing").innerHTML+=t.charAt(i++);
setTimeout(type,45);
}
})();


/* reveal + skill fill */

window.addEventListener("scroll",()=>{

document.querySelectorAll(".reveal").forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight-80){
el.style.opacity=1;
el.style.transform="translateY(0)";
}
});

document.querySelectorAll(".fill").forEach(bar=>{
if(bar.getBoundingClientRect().top < window.innerHeight-40){
bar.style.width=bar.getAttribute("data");
}
});

/* progress */

let h=document.documentElement;
let sc=(h.scrollTop)/(h.scrollHeight-h.clientHeight)*100;
document.getElementById("progress").style.width=sc+"%";

});


/* smooth scroll */

document.querySelectorAll('a[href^="#"]').forEach(a=>{
a.onclick=e=>{
e.preventDefault();
document.querySelector(a.getAttribute("href"))
.scrollIntoView({behavior:"smooth"});
};
});