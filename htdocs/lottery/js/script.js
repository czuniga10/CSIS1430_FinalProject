let userNum = 0;

let lottery = (number) => {
    let n = askForNum();

    let numbers = fillNums(n);

    let result = prettyPrint(numbers);

    document.getElementById("lottoNums").innerHTML = result;
}

let askForNum = () => {
    let check = false;
    while(!check) {
        let x = prompt("How many Lotto numbers would you like? (1-7)");
        if(isNaN(x)) {
            alert("Must be a number");
        } else if (x <= 0 || x > 7) {
            alert("Must be between 1 and 7");
        } else {
            check = !check;
            userNum = x;
            return x;
        }   
    }
}

let rerun = () => {
    let n = fillNums(userNum);
    let result = prettyPrint(n);
    document.getElementById("lottoNums").innerHTML = result;
}

let fillNums = (n) => {
    let numbers = [];
    for(let i = 0; i < n; i++) {
        let x = Math.ceil(Math.random() * 70);
        while(numbers.includes(x)) {
            x = Math.ceil(Math.random() * 70);
        }
        numbers.push(x);
   }

   return numbers;
}

let prettyPrint = (x) => {
    let result = "";
    for(let i = 0; i < x.length; i++) {
        result += i != x.length-1 ? `${x[i]} - ` : `${x[i]}`;
    }

    return result;
}