var baseballGame = () => {
    var noun1 = prompt("Noun #1 (Feeling)");
    var noun2 = prompt("Noun #2 (US State)");
    var noun3 = prompt("Noun #3 Plural (Animal)");
    var noun4 = prompt("Noun #4 (EXCLAMATION!!)");
    var noun5 = prompt("Noun #5 Singular (Food or Drink)");  
    var noun6 = prompt("Noun #6 Plural (Food or Drink)");
    var noun7 = prompt("Noun #7 (Body part)");
    var noun8 = prompt("Noun #8 (Number)");
    var noun9 = prompt("Noun #9 (Person in the room)");
    var noun10 = prompt("Noun #10 (Song title)");
    var noun11 = prompt("Noun #11 (Number)");
    var noun12 = prompt("Noun #12 (Number)");
    var noun13 = prompt("Noun #13 A funny Name");

    var verb1 = prompt("Verb #1 (Action ending in -ing)");
    var verb2 = prompt("Verb #2 (Action NOT ending in -ing)");

    var adj1 = prompt("Adjective #1");
    var adj2 = prompt("Adjective #2");
    confirm("Ready to See your MAD LIB?");

    document.getElementById("noun1").innerHTML = noun1;
    document.getElementById("noun2").innerHTML = noun2;
    document.getElementById("noun3").innerHTML = noun3;
    document.getElementById("noun4").innerHTML = noun4;
    document.getElementById("noun5").innerHTML = noun5;
    document.getElementById("noun6").innerHTML = noun6;
    document.getElementById("noun7").innerHTML = noun7;
    document.getElementById("noun8").innerHTML = noun8;
    document.getElementById("noun9").innerHTML = noun9;
    document.getElementById("noun10").innerHTML = noun10;
    document.getElementById("noun11").innerHTML = noun11;
    document.getElementById("noun12").innerHTML = noun12;
    document.getElementById("noun13").innerHTML = noun13;

    document.getElementById("verb1").innerHTML = verb1;
    document.getElementById("verb2").innerHTML = verb2;

    document.getElementById("adj1").innerHTML = adj1;
    document.getElementById("adj2").innerHTML = adj2;
}