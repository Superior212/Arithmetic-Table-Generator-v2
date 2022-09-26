function check() {
var myInput1=Number(userInput1.value);
var myInput2=Number(userInput2.value);
table1.innerText ="";

if (select.value=="Operation"||userInput1.value =="" || userInput2.value=="" ){
    table1.innerHTML ="Kindly Input a Value and Select an Option"
}

if (select.value=="Multiplication") {
    for (var i = 1; i <=Number(userInput1.value); i++) {
        mul = `<tr class="border border-black hover:bg-orange-700 ">`
        for (let j = 1; j<=Number(userInput2.value); j++) { 
        mul += `<td class="border border-black  hover:bg-orange-700 ">${j} x ${i} = ${j*i}</td>`
       }
        mul += "</tr>"
        table1.innerHTML += mul
}
userInput1.value= "";
userInput2.value= "";
}

if (select.value=="Addition"){   
    for (var i = 1; i <=Number(userInput1.value); i++) {
        add = `<tr class="border border-black hover:bg-orange-700 ">`
        for (let j = 1; j<=Number(userInput2.value); j++) { 
        add += `<td class="border border-black hover:bg-orange-700 ">${j} + ${i} = ${j+i}</td>`
       }
        add += "</tr>"
        table1.innerHTML += add
    }
    userInput1.value= "";
    userInput12.value= "";
    };

     if (select.value=="Subtraction") {  
            for (var i = 1; i <=Number(userInput1.value); i++) {
            sub = `<tr class="border border-black hover:bg-orange-700 ">`
            for (let j = 1; j<=Number(userInput2.value); j++) { 
            sub += `<td class="border border-black hover:bg-orange-700 ">${j} - ${i} = ${j-i}</td>`
           }
            sub += "</tr>"
            table1.innerHTML += sub
        }
        userInput1.value= ""
        userInput2.value= "" 
        } 

     if  (select.value=="Division"){
       
        for (var i = 1; i <=Number(userInput1.value); i++) {
        div = `<tr class="border border-black hover:bg-orange-700 ">`
        for (let j = 1; j<=Number(userInput2.value); j++) { 
        div += `<td class="border border-black hover:bg-orange-700 ">${j} / ${i} = ${j/i}</td>`
       }
        div += "</tr>"
        table1.innerHTML += div
    }
    userInput1.value= "";
    userInput2.value= "" ;
    }
};
