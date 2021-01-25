function thisIsSyncFunction() {
    fetch('https://codequiz.azurewebsites.net/data').then(res => res.json()).then((response) =>    {
        const result = response.data * 10;
        console.log(result);
    });
}

thisIsSyncFunction();