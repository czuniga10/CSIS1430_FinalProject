var zooDay = () => {
    var noun1 = prompt("Noun #1 (City)");
    var noun2 = prompt("Noun #2 (Person in the room)");
    var noun3 = prompt("Noun #3 (Mammal)");
    var noun4 = prompt("Noun #4 (Insect)");
    var noun5 = prompt("Noun #5 (Reptile)");  
    var noun6 = prompt("Noun #6 Plural Noun");
    var noun7 = prompt("Noun #7 (Emotion)");
    var noun8 = prompt("Noun #8 (Number)");

    var verb1 = prompt("Verb #1 (Action ending in -ing)");
    var verb2 = prompt("Verb #2 (Action NOT ending in -ing)");

    var adj1 = prompt("Adjective #1");
    var adj2 = prompt("Adjective #2");
    var adj3 = prompt("Adjective #3");
    var adj4 = prompt("Adjective #4");
    confirm("Ready to See your MAD LIB?");

    document.getElementById("noun1").innerHTML = noun1;
    document.getElementById("noun2").innerHTML = noun2;
    document.getElementById("noun3").innerHTML = noun3;
    document.getElementById("noun4").innerHTML = noun4;
    document.getElementById("noun5").innerHTML = noun5;
    document.getElementById("noun6").innerHTML = noun6;
    document.getElementById("noun7").innerHTML = noun7;
    document.getElementById("noun8").innerHTML = noun8;

    document.getElementById("verb1").innerHTML = verb1;
    document.getElementById("verb2").innerHTML = verb2;

    document.getElementById("adj1").innerHTML = adj1;
    document.getElementById("adj2").innerHTML = adj2;
    document.getElementById("adj3").innerHTML = adj3;
    document.getElementById("adj4").innerHTML = adj4;
}