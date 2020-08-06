
//----------------getElementById-----------------
// document.getElementById("bio").innerHTML="Html Css : 2020"

// var intro1= document.getElementById("intro1");
// var mesaj=document.getElementById("mesaj");
// mesaj.innerHTML = intro1.innerHTML;


//----------------getElementsByTagName-----------------
// var fullLists=document.getElementsByTagName("ul");
// var cities=fullLists[0];
// fullElements = cities.getElementsByTagName("li");

// for(i=0; i<fullElements.length;i++){
//     alert(fullElements[i].innerHTML);
// }


//----------------getElementsByClassName-----------------
// var classElements=document.getElementsByClassName("intro1");
// alert(classElements[0].innerHTML)


//----------------querySelectorAll-----------------
// var queryElements=document.querySelectorAll("p.intro1");
// alert(queryElements.length)


//----------------getElementsByName-----------------
// var nameElements=document.getElementsByName("userName");
// alert(nameElements[0].value)


//----------------AddEventListener-----------------
// var script= document.getElementById("javascript").addEventListener("mouseover",changeColor);

// function changeColor(){
//     document.getElementById("div1").style.color="red";
//     var nameElements=document.getElementsByName("userName");
//     nameElements[0].value="http"
// }

//----------------Nods-----------------
// var node=document.getElementById("tree");
// alert(node.childNodes[0].nodeValue);

//----------------appendChild-----------------
var title=document.createElement("h2");
var node=document.createTextNode("hello javascript")
title.appendChild(node);

var div1=document.getElementById("div1");
var p2=document.getElementById("p2");

div1.insertBefore(title,p2);

//----------------removeChild-----------------
alert("p2 deleting");
div1.removeChild(p2);

//----------------replaceChild-----------------
var p1=document.getElementById("p1");
alert("p1 changing");
div1.replaceChild(title,p1);