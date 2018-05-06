let numbers = document.querySelectorAll('.number'),
operations =document.querySelectorAll('.operation'),
decimalBtn = document.getElementById('decimal'),
clearBtns = document.querySelectorAll('clear_btn'),
resultBtn = document.getElementById('result'),
display = document.getElementById('display'),
memoryCurretNumber = '0',
memoryNewNumber = false,
memoryPendingOperation = '';


for (let i=0; i<numbers.length; i++){
    let number = numbers[i];
number.addEventListener('click', function (e){
numberPress(e.target.textContent);
});
};

for (let i=0; i<operations.length; i++){
    let operationBtn = operations[i];
operationBtn.addEventListener('click', function(e){
        operation(e.target.textContent);
});
}


for (let i=0; i<clearBtns.length; i++){
    let clearBtn = clearBtns[i];
clearBtn.addEventListener ('click', function(e){
    clear(e.srcElement.id);
});
};


    

function numberPress(number){
    if(display.value === 0){
         display.value = number;
    } else {
        display.value += number;
    };
};

function operation(op){
   let localOperationMemory = display.value;
    
    
    if(memoryNewNumber && memoryPendingOperation !== '='){
        display.value= memoryCurretNumber;
    }
    else{
        memoryCurretNumber=true;
        if (memoryPendingOperation  === '+'){
            memoryCurretNumber += parseFloat(localOperationMemory);
        }
        else if (memoryPendingOperation  ==='-'){
            memoryCurretNumber -= parseFloat(localOperationMemory);
        }
        else if (memoryPendingOperation  ==='/'){
            memoryCurretNumber /= parseFloat(localOperationMemory);
        }
        else if (memoryPendingOperation  ==='*'){
            memoryCurretNumber *= parseFloat(localOperationMemory);
        } else{
        memoryCurretNumber = localOperationMemory;    
    };
    display.value = memoryCurretNumber;
    memoryPendingOperation = op;
};
};

function decimal (argument) {
    let localDecimalMemory = display.value;
    
    if(memoryNewNumber){
        localDecimalMemory = '0.';
        memoryNewNumber = false;
    } else {
        if(localDecimalMemory.indexOf('.') === -1){
        localDecimalMemory +='.';
    };
};

display.value = localDecimalMemory;
};

function clear(id){
    if (id === 'ce'){
        
    } else if (id === 'c'){
        display.value = '0';
        memoryNewNumber = true;
        memoryCurretNumber = 0;
        memoryPendingOperation = '';
    }
};