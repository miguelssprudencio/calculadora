window.addEventListener('load', function () {
    const calculator = new Calculator();
});

function Calculator() {
    this.display = document.getElementById('display');
    this.buttons = document.querySelectorAll('.button');
    

    this.buttons.forEach(button => {
        button.addEventListener('click', () => {
            this.handleButtonClick(button);
        });
    });
}

Calculator.prototype.handleButtonClick = function (button) {
    const value = button.textContent;

    if (value === 'C') {
        this.clearDisplay();
    } else if (value === '=') {
        this.calculateResult();
    } else {
        this.appendToDisplay(value);
    }
};

Calculator.prototype.clearDisplay = function () {
    this.display.value = '';
};

Calculator.prototype.appendToDisplay = function (value) {
    
    if (this.display.value === '0' && value !== '.') {
        this.display.value = value;
    } else {
        this.display.value += value;
    }
};

Calculator.prototype.calculateResult = function () {
    try {
        
        const result = eval(this.display.value);
        this.display.value = result;
    } catch (error) {
        this.display.value = 'Erro';
        setTimeout(() => this.clearDisplay(), 1500);
    }
};
