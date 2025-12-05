let heading = document.getElementById("heading");

let counter = 0;


const increase = () => {
    // let counter = 0; //intentional local variable
    counter++;
    heading.innerText = counter;

}

const decrease = () => {
    counter--;
    heading.innerText = counter;
}

const reset = () => {
    counter = 0;
    heading.innerText = counter;
}
