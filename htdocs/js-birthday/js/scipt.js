var myFunc = () => {
    var name = prompt("Enter your name:");
    var age = prompt("Enter your age:");
    var month = prompt("Enter your birth month:").toLowerCase();
    var season = getSeason(month);

    alert("Welcome to the Matrix " + name + "! You are " + age + " years old, and you were born in " 
            + season + "!");
    
    document.getElementById("wake-up").innerHTML = "Wake up, " + name + "...";
}

var getSeason = (month) => {
    var season = "";
    if(month == "march" || month == "april" || month == "may") {
        season = "the spring";
    } else if (month == "june" || month == "july" || month == "august") {
        season = "the summer";
    } else if (month == "september" || month == "october" || month == "november") {
        season = "the fall";
    } else if (month == "december" || month == "january" || month == "february") {
        season = "the winter";
    } else {
        season = "an unknown season";
    }
    return season;
}
