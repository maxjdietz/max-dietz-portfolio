const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");
const showcase = document.querySelector(".side");

button1.addEventListener("click", test);
button2.addEventListener("click", test2);
button3.addEventListener("click", test3);
button4.addEventListener("click", test4);

function test(){
    console.log("ETST")
    showcase.style.height = "100px";

}
function test2(){
    console.log("YIPEEE")
    showcase.style.height = "200px";

}
function test3(){
    console.log("ETST")
    showcase.style.height = "300px";

}
function test4(){
    console.log("YIPEEE")
    showcase.style.height = "400px";

}