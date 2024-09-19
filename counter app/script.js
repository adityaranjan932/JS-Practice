const countValue = document.querySelector('#counter1');
const decrement = () => {
    //get the value from UI
let value = parseInt(countValue.innerText);
//update the value 
value = value-1;
//set the value into UI
countValue.innerText = value;

};

const increment = () => {
    // get the value from UI
    let value = parseInt(countValue.innerText);
    // Update the value from UI
    value = value+1;
    // set the value into UI
    countValue.innerText = value;
};
