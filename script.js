let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";
let history = [];
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            let result = eval(string);
            history.push(`${string} = ${result}`);
            string = result.toString();
            input.value = string;
        } else if (e.target.innerHTML == "AC") {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else if (e.target.innerHTML != "View History ↻") {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});

document.getElementById('historyBtn').addEventListener('click', () => {
    let historyList = document.getElementById('historyList');
    historyList.innerHTML = '';
    history.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });
    document.getElementById('history').classList.toggle('show');
});
