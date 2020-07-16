var myFunc = () => {
    var name = prompt("Enter your name:");
    var age = getAge();
    var season = getSeason();

    alert("Welcome to the Matrix " + name + "! You are " + age + " years old, and you were born in " 
            + season + "!");
    
    document.getElementById("wake-up").innerHTML = "Wake up, " + name + "...";
}

var getAge = () => {
    var valid = false;
    var age = 0;
    while(!valid) {
        var age = prompt("Enter your age:");
        if(isNaN(age)) {
            alert("Age must be a number.");
        } else if (age > 150 || age <= 0) {
            alert("Age must be within 1 - 150");
        } else {
            valid = !valid;
            return age;
        }
    }
}

var getSeason = () => {
    var month;
    var valid = false;
    var season = "";
    while(!valid) {
        month = prompt("Enter your birth month:").toLowerCase();

        if(month == "march" || month == "april" || month == "may") {
            valid = !valid;
            season = "the spring";
        } else if (month == "june" || month == "july" || month == "august") {
            valid = !valid;
            season = "the summer";
        } else if (month == "september" || month == "october" || month == "november") {
            valid = !valid;
            season = "the fall";
        } else if (month == "december" || month == "january" || month == "february") {
            valid = !valid;
            season = "the winter";
        } else {
            alert("Not a valid month. Try again.")
        }
    };

    return season;
}
