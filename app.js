   //Answer no 1
// function addnum(num){
    
//     return function(inputNum)
//     {
//         return num + inputNum;
//     }
// }
// var num =addnum(5);
// var result = num(10);
// console.log(result);

//Answer no 2
// function searchArray(array,value)
// {
//     if(array.length===0)
//     {
//         return false;
//     } 
//     else if(array[0]===value)
//     {
//         return true;
//     }
//     else
//     {
//         return searchArray(array.slice(1),value);
//     }
// }
//     var array=[1,3,7,9,0];
//     var result = searchArray(array,8);
//     console.log(result);
//     var result = searchArray(array,7);
//     console.log(result);


//Answer no 3
// function addParagraph(text)
// {
//     const newParagraph=document.createElement('p');
//     const textNode=document.createTextNode(text);
//     newParagraph.appendChild(textNode);
//     document.body.appendChild(newParagraph);
// }
// let newParagraph = 'this is the Paragraph';
// newParagraph=addParagraph(newParagraph);

// Answer no 4 
// function addNewListItem(text)
// {
//         const newListItem=document.createElement('li');
//         const textNode=document.createTextNode(text);
//         newListItem.appendChild(textNode);
//         const unorderedList= document.querySelector("ul");
//         unorderedList.appendChild(newListItem);
// }
//  let newListItem='Four';
//  newListItem=addNewListItem(newListItem);

// Answer no 5
// let myPara = document.getElementById("my-para");
// myPara.innerHTML="<b>Hello welcome to our Page</b>"
// setInterval(function() 
// {
//     let color1=Math.floor(math.random()*16777215).toString(16);
//     let color2=Math.floor(math.random()*16777215).toString(16);
//     console.log(color1, color2);
//     myPara.style.backgroundColor="#"+ color1;
//     myPara.style.Color="#"+ color2;
// }, 500);

//Answer no 6
// function saveObjectToLocalStorage(key,object)
// {
//     const jsonString= JSON.stringify(object);
//     localStorage.setItem(key,jsonString);
// }
//     const myObject={
//         name: 'Mahnoor',
//         age:20,
//         city: 'karachi'
//     };

//     console.log(myObject);
    
//Answer no 7
// function getObjectFromLocalStorage(key)
// {
//     const jsonString = localStorage.getItem(key);
//     const object = JSON.parse(jsonString);
//     return Object;
// }
//     const myObject=getObjectFromLocalStorage('myObjectKey');
//     console.log(myObject);




   
   //Answer no 8 

// function store(){ //stores items in the localStorage
//     var brand = document.getElementById('carBrand').value;
//     var price = document.getElementById('carPrice').value;
//     var key = document.getElementById('key').value;
q
//     const car = {
//         brand: brand,
//         price: price,
//     }

//     window.localStorage.setItem(key,JSON.stringify(car));  
//     //converting object to string
// }

// function retrieveRecords(){ //retrieves items in the localStorage
//     var key = document.getElementById('retrieveKey').value; //gets key from user
//     console.log("retrive records");
//     var records = window.localStorage.getItem(key); //searches for the key in localStorage
//     var paragraph = document.createElement("p");
//     var infor = document.createTextNode(records);
//     paragraph.appendChild(infor);
//     var element = document.getElementById("retrieve");
//     element.appendChild(paragraph);
// }

// function removeItem(){ //deletes item from localStorage
//     var key = document.getElementById('removeKey').value; //gets key from user
//     localStorage.removeItem(key) //passes key to the removeItem method
//     console.log("remove items");
// }

// function clearStorage(){ //clears the entire localStorage
//     localStorage.clear()
//     console.log("clear records");
// }

// window.onload =function(){ //ensures the page is loaded before functions are executed.
//     document.getElementById("carForm").onsubmit = store
//     document.getElementById("clearButton").onclick = clearStorage
//     document.getElementById("removeButton").onclick = removeItem
//     document.getElementById("retrieveButton").onclick = retrieveRecords
// }
                                                             //----------------//