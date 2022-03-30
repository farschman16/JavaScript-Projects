function hockey_dictionary() { //dictionary function, main variable being "Forsberg"
    var Forsberg = {
        Nickname: "Peter the Great", //additional keys defining attributes
        Nationality: "Swedish",
        Age: 48,
        Handed: "Left",
        Team: "Colorado Avalanche",
        GP: 708,
        Goals: 249,
        Assists: 636,
    };
    delete Forsberg.Team; //deletes the key-value-pair "Forsberg.Team," which would be "Colorado Avalanche"
    document.getElementById("Dictionary").innerHTML = Forsberg.Team; //this value will show as "undefined" since it has been deleted
}