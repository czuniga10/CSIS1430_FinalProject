var myFunc = () => {
    var name = prompt("Enter your name:");
    var age = prompt("Enter your age:");
    var season = getSeason();

    alert("Welcome to the Matrix " + name + "! You are " + age + " years old, and you were born in " 
            + season + "!");
    
    document.getElementById("wake-up").innerHTML = "Wake up, " + name + "...";
}

var getSeason = () => {
    var valid = false;
    var season = "";
    while(!valid) {
        var month = prompt("Enter your birth month:").toLowerCase();
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
