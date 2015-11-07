var roster = [{
    first_name: "Bit",
    last_name: "Lee",
    website: "http://bitly.com"
}, {
    first_name: "Face",
    last_name: "Book",
    website: "http://facebook.com"
}, {
    first_name: "Ama",
    last_name: "Zon",
    website: "http://amazon.com"
}, {
    first_name: "Twit",
    last_name: "Ter",
    website: "http://twitter.com"
}];

var links = document.getElementsByTagName("a");



for (var i = 0; i < links.length; i++) {

    printName(links[i], i);

}


function printName(links, i) {
    links.addEventListener("click", function (e) {
        alert("First Name: " + roster[i].first_name + " Last Name: " + roster[i].last_name);
        e.preventDefault();
    })
}
