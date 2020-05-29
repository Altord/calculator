
// Calling all the elements by their individual ID values
tally = document.getElementById('equ');
sumO = document.getElementById('sum');
subO = document.getElementById('sub');
multO = document.getElementById('mult');
divO = document.getElementById('divis');
clr = document.getElementById('clear');
screen = document.getElementById('screen');
bak = document.getElementById('back');
dot = document.getElementById('deci');
num1 = document.getElementById('num1');
num2 = document.getElementById('num2');
num3 = document.getElementById('num3');
num4 = document.getElementById('num4');
num5 = document.getElementById('num5');
num6 = document.getElementById('num6');
num7 = document.getElementById('num7');
num8 = document.getElementById('num8');
num9 = document.getElementById('num9');
num0 = document.getElementById('num0');
let primary = [0];
let operator = '';
let a = [0,0];

//Removes the value of "primary" and sets div to 0
clean = () => {screen.innerHTML = 0; primary = []}
window.onload = function(){screen.innerHTML = 0; primary = []; secondary = primary; console.log(primary)};
clr.onclick = ()=> {screen.innerHTML = 0; primary = []; secondary = primary; };
check = () => {if (primary = [0]){primary.pop()}}
//Fixes the input scroll of screen
let fix = () => { screen.style.direction ='rtl';}

//The Display for the screen
let innerScreen = () => {screen.innerHTML = primary.join('');}


// Values for all relevant available inputs
let value1 = () => {(primary.push(1)); innerScreen(); fix();}
let value2 = () => {(primary.push(2)); innerScreen(); fix();}
let value3 = () => {(primary.push(3)); innerScreen(); fix();}
let value4 = () => {(primary.push(4)); innerScreen(); fix();}
let value5 = () => {(primary.push(5)); innerScreen(); fix();}
let value6 = () => {(primary.push(6)); innerScreen(); fix();}
let value7 = () => {(primary.push(7)); innerScreen(); fix();}
let value8 = () => {(primary.push(8)); innerScreen(); fix();}
let value9 = () => {(primary.push(9)); innerScreen(); fix();}
let value0 = () => {if (primary.length >= 0 ){primary.push(0); innerScreen();}};
let delk = () =>  {primary.pop(); fix(); if (primary.length == 0) {screen.innerHTML = 0} else {innerScreen();}}
let decimal = ()  => {if (!screen.innerHTML.includes(".")) {primary.push('.');screen.style.direction = 'ltr'; screen.innerHTML += '.';}};
secondary = primary;


// Click responses for basic input
num1.onclick = value1;
num2.onclick = value2;
num3.onclick = value3;
num4.onclick = value4;
num5.onclick = value5;
num6.onclick = value6;
num7.onclick = value7;
num8.onclick = value8;
num9.onclick = value9;
num0.onclick = value0;
bak.onclick = delk;
dot.onclick = decimal;

//if (primary.length >=1 ) {(primary.push(0)); innerScreen(); fix();}

// Keyboard response for input, couldn't figure out what I could put at the bottom instead of placeholder :(
// Also didn't do anything outside of the numbers and delete key cause I thought there wouldn't be any useto do every single object (although it could be very easily done)
document.onkeydown = (event) => {
    let key = event.key;
    (key==1) ? value1()
        : (key == 2)? value2()
        : (key == 3)? value3()
        : (key == 4)? value4()
        : (key == 5)? value5()
        : (key == 6)? value6()
        : (key == 7)? value7()
        : (key == 8)? value8()
        : (key == 9)? value9()
        : (key == 0)? value0()
        : (key == "Backspace")? delk()
        : 'placeholder';
}












//Assigned Result and then created the operator responses
let result = 0;
sumO.onclick = () => {clean(); return operator = '+'; };
subO.onclick = () => {clean(); return operator = '-'; };
multO.onclick = () => {clean(); return operator = '*';};
divO.onclick = () => {clean(); return operator = '/';};


final = (primary, operator, secondary) => {
    //Convereted the arrays to string and then to float point int
    let primary1 = primary.join('').toString();
    let secondary1 = secondary.join('').toString();
    let primary2 = parseFloat(primary1);
    let secondary2 = parseFloat(secondary1);

    //Created the actual functions to operate with
    add = (primary2, secondary2) => {return primary2 + secondary2};
    sub = (primary2, secondary2) => {return secondary2 - primary2};
    div = (primary2, secondary2) => {return secondary2 / primary2};
    mul = (primary2, secondary2) => {return primary2 * secondary2};

    switch(operator){
        case '+':
            result = add((primary2),(secondary2));


            break;
        case '-':
            result = sub((primary2),(secondary2));


            break;
        case '*':
            result = mul((primary2),(secondary2));
            break;
        case '/':
             result = div((primary2),(secondary2));


            break;



    }
    return result;


};

//Final call when '=' is clicked
tally.onclick = () => {screen.innerHTML = (final(primary,operator,secondary)); (primary,secondary); secondary =[result]; primary = [];}