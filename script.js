 let display = document.querySelector('.text');
        let buttons = document.querySelectorAll('button');

        let displayValue = '';

        buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                let value = e.target.innerText;

                if (value === 'AC') {
                    displayValue = '';
                    display.value = '';
                } 
                else if (value === 'DEL') {
                    displayValue = displayValue.slice(0, -1);
                    display.value = displayValue;
                } 
                else if (value === '=') {
                    try {
                        displayValue = eval(displayValue).toString();
                        display.value = displayValue;
                    } catch {
                        display.value = 'Error';
                        displayValue = '';
                    }
                } 
                else {
                    displayValue += value;
                    display.value = displayValue;
                }
            });
        });