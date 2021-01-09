var name = prompt('enter your name', 'hello');

let today = new Date();
let hour = today.getHours();

if (hour<=12) {
        document.write('Good morning!' + ' ' +name);
        
} 
else if(hour<=17){
        document.write('Good Noon!' + ' ' + name);
}
else if(hour<=20){
        document.write('Good Eve!' + ' ' + name);
}
else{
        document.write('Good Night!'+' ' +  name);
}