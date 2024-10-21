
function greetUser() {
    let enter_time = parseInt(document.getElementById('timeInput').value);
    let result = document.getElementById('result');
    
    result.innerHTML = `Hours: <b>${enter_time}</b><br>`;

    if (enter_time >= 0 && enter_time < 1200) {
        result.innerHTML += `Greeting: "Good Morning!"`;
       result.style.color='blue';
    } else if (enter_time >= 1200 && enter_time < 1700) {
        result.innerHTML += `Greeting: "Good Afternoon!"`
        result.style.color='brown';
    } else if (enter_time >= 1700 && enter_time < 2100) {
        result.innerHTML += `Greeting: "Good Evening!"`;
        result.style.color='purple';
    } else if (enter_time >= 2100 && enter_time < 2400) {
        result.innerHTML += `Greeting: "Good Night!"`;
        result.style.color='black';
    } else {
        result.innerHTML += `Error: "Enter correct Timing!"`;
        result.style.color='red';
    }
}