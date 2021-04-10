// console.log(document.all) //html collection
// console.log(document.title)
// console.log(document.URL);
// console.log(document.contentType);
// console.log(document.head);
// console.log(document.body);
// console.log(document.links);
// console.log(document.images);
// console.log(document.styleSheets);
// console.log(document.scripts);
// console.log(document.forms);






// let links = document.links;
// console.log(links);
// console.log(typeof links);
// console.log(Array.isArray(links)); //false 
// console.log(links[1]); //by index
// links[1].style.background ="red";
// links[1].style.padding ="10px";
// links[1].style.color ="white";
// links[1].style.display ="inline block";
// links[1].style.textDecoration ="none";


// [...links].forEach(link => {
//     link.style.backgroundColor ="red";
//     link.style.padding ="10px";
//     link.style.color ="white";
//     link.style.display ="inline block";
//     link.style.textDecoration ="none";
//     link.style.margin ="10px";

// });


// for(let link of links){
//     link.style.backgroundColor ="crimson";
//     link.style.padding ="10px";
//     link.style.color ="white";
//     link.style.display ="inline block";
//     link.style.textDecoration ="none";
//     link.style.margin ="10px";
// }


//text methods
// document.write("dfsadf") // for testing propose

// document.body.innerHTML=`<h1>This is the innerHTML</h1> `;
// document.body.innerText="This is the innerText"; //its removing white space
// document.body.textContent="hello this textContent" ; //its not removing white space





//popup outputs
// window.alert("heoo")
// window.confirm()
// window.prompt()


// let isAvailable  = false;
// if(isAvailable === true){
//     confirm("stock is available")
// }
// else{
//     alert("stock is not available")
// }



// function reverseAString(str){
//     return [...str].reverse().join("");
// }

// let text = prompt("please enter data");
// document.write(reverseAString(text))



//dom methods 
// document.getElementById();
// document.getElementsByTagName();
// document.getElementsByClassName();
// document.querySelector();
// document.querySelectorAll();
// document.createElement();

// document.createAttribute();
// document.createComment();


//document.getElementById();
// let demo = document.getElementById("demo");
// let templet = document.getElementById("templet")
// console.log(demo);
// console.log(templet);

// demo.textContent ="I am a demo i trigger something";
// templet.innerText ="I am smile😄";

// let block = document.getElementsByClassName("block")
// console.log(block[2]);

// for(let b of block){
//     b.style.backgroundColor ="crimson";
// }


// let div = document.getElementsByTagName("div");
// console.log(div);
// [...div].forEach( x => console.log(x)); // error foreach is not a function 


// let x = document.querySelector(".block")
// let All = document.querySelectorAll(".block")

// All.forEach(x => {
//     x.style.backgroundColor ="crimson";  //querySelectorAll givs direct access to foreach
// })


//how to create a element by using DOM

// let div = document.createElement("div");

// div.textContent="i am sdfs";
// console.log(div);

// let form = document.createElement("form");

// document.body.prepend(div)


// DoM Events  

let btn = document.getElementById("btn");
console.log(btn);

btn.addEventListener("mouseenter",function(){
    document.body.style.background ="blue";
    document.getElementById("templet").innerHTML="mouse enter"
})
btn.addEventListener("mouseleave",function(){
    document.body.style.background ="red";
    document.getElementById("templet").innerHTML="mouse leave"
})