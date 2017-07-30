`use strict`;


class PageRenderHeader{
    constructor(){}
    renderTable(){
        let header = '';
        header += `<div class="container top-radius">
                        <h2>${contactsDb.pages[1]}</h2>
                    </div>`;
        document.body.querySelector('header').innerHTML = header;
    }
}
class PageRenderMain{
    constructor(){}
    renderTable(){
        let keypadTable = [1, 2, 3, 4, 5, 6, 7, 8, 9, '*', 0, '#'],
        input = '', buttons = '', keypad = '';
// input
        input += `<div class="number">
                    <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
                        <span class="numbers" id="numbers_input" placeholder="Enter phone number"></span>
                    <span id="dell_contact" class="glyphicon glyphicon-circle-arrow-left" aria-hidden="true"></span>
                </div>`;
// buttons
        keypadTable.forEach(elem => {
            buttons += `<button class="key">${elem}</button>`;
        });
        keypad += `<div id="keypad" class="keypad-holder">
                    ${buttons}
                    <button class="key glyphicon glyphicon-earphone"></button>
                </div>`;
        
        document.body.querySelector('main').innerHTML = `<div class="container"> ${input} ${keypad} </div>`;
        this.keypadInputSave();
    }
    keypadInputSave(){
        let inputNumber = document.getElementById('numbers_input'),
            keypadStorage = new numberMethod(),
            inputSave = '';
//class call
        let numberMethodCall = () => {
            let format = new numberMethod(inputSave, inputNumber);
            inputSave = inputSave.replace(/\D/g, '');
        console.log(inputSave)
        };
//keypress input
        document.body.addEventListener('keydown', (event) => {
            if(event.keyCode >= '48' && event.keyCode <= '57'){
                inputSave += event.key;
                numberMethodCall();
            }
        });
// click input
        document.getElementById('keypad').addEventListener('click', (event) => {
            inputSave += event.target.innerHTML;
            if(inputSave.length >= 10) inputSave = inputSave.slice(0, 9);
            numberMethodCall();
        });
// click input dell
		document.getElementById('dell_contact').onclick = () => {
            inputSave = '';
            numberMethodCall();
        }
    }
}
let KeypadHeader = new PageRenderHeader().renderTable();
let KeypadMain = new PageRenderMain().renderTable();