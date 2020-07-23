const resultDiv = document.querySelector('#results');
console.log(resultDiv); 

// goes to the browser window object .location
new URLSearchParams(window.location.search).forEach((value, name) => {
    console.log(name); // name of the input
    console.log(value); // value put inside of the input
    // let nameElement = document.createElement('p');
    // let valueElement = document.createElement('p');

    // nameElement.textContent = name;
    // valueElement.textContent = value;
    // console.log(nameElement);
    // console.log(valueElement);

    // resultDiv.appendChild(nameElement);
    // resultDiv.appendChild(valueElement);

    let resultElement = document.createElement('p');
    resultElement.textContent = name + ': ' + value;
    resultDiv.appendChild(resultElement);
});

