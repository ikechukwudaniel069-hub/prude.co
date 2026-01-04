let maincontent=document.querySelector('#main-content');
let htmlCONTENT=document.querySelector('#html-content');
let csScontent=document.querySelector('#css-content');
let jscontent=document.querySelector('#js-content');
let cssbtn=document.querySelector('#cssbtn');




let htmlbtn=document.querySelector('#htmlbtn');
htmlbtn.onclick=function(){
    maincontent.style.display="none";
    htmlCONTENT.style.display="block";
    csScontent.style.display="none";
    jscontent.style.display="none";
} 
cssbtn.onclick=function(){
    maincontent.style.display="none";
    csScontent.style.display="block";
    jscontent.style.display="none";
    htmlCONTENT.style.display="none";
}
jsbtn.onclick=function(){
    maincontent.style.display="none";
    htmlCONTENT.style.display="none";
    csScontent.style.display="none";
    jscontent.style.display="block";
}