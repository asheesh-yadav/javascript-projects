let string = "";
let buttonss = document.querySelectorAll('.btn');
Array.from(buttonss).forEach((button)=>{
button.addEventListener('click',(e)=>{
    let value= e.target.innerHTML;
    if( value == '='){
         string = eval(string);
         document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'AC'){
        string = '';
        document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'DEL'){
         string = string.toString().slice(0,-1);
        document.querySelector('input').value = string; 
    }
     else if(e.target.innerHTML == '%'){
        // string = (value2 - value1) / (value1) * 100;
        document.querySelector('input').value = string; 
   }
    else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
    }

})
})


