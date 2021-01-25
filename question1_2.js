function thisIsSyncFunction() {
    const request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:3000/temp/1', false);
    request.send(null);

    if (request.status === 200) {
        const data = JSON.parse(request.responseText);
        return data.data;
    }
}

const number1 = thisIsSyncFunction()
const calculation = number1 * 10;
console.log(calculation);
