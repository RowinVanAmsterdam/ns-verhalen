/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
// Bron: https://www.w3schools.com/howto/howto_js_collapsible.asp
// https://alligator.io/js/classlist/

// Filter
var coll = document.getElementsByClassName("dropbtn");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
            (content.style.maxHeight)
            content.style.maxHeight = null;
        } else {
            content.style.display = "block";
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

// Search
// http://jsfiddle.net/HvmmY/
// https://stackoverflow.com/questions/21002986/make-a-div-tag-toggle-between-two-css-classes
// https://teamtreehouse.com/community/addeventlistener-doesnt-work-for-some-reason-while-onclick-works-awesome-quiz-project

var searchForm = document.getElementById("searchForm")
var searchInput = document.getElementById("searchInput")

searchForm.addEventListener("click", function(){
    if (searchInput.className == "notactive")
        searchInput.className = "active";
    else
        searchInput.className = "notactive";
});

// Counter
// https://stackoverflow.com/questions/30779626/retrieve-value-of-p-from-html-convert-to-number-in-javascript
//https://stackoverflow.com/questions/30420758/counter-vs-counter-counter1
//https://bytes.com/topic/javascript/answers/725788-string-number-conversion
//https://www.w3schools.com/jsref/met_document_queryselector.asp
//https://stackoverflow.com/questions/14617221/need-to-convert-result-of-innerhtml-to-number-on-javascript

var likeButtons = document.querySelectorAll(".likeButton")

if (likeButtons[0]) {
    for (var i = 0; i < likeButtons.length; i++) {
        likeButtons[i].addEventListener("click", function () {
            var totalClicks = this.querySelector(".totalclicks");
            var number = parseInt(totalClicks.innerHTML);

            number++;
            totalClicks.innerHTML = number;
        });
    }
}

//Submit
//https://stackoverflow.com/questions/41619497/how-to-make-pseudo-class-invalid-apply-to-an-input-after-submitting-a-form/41619669
var submitbtn = document.getElementsByClassName("submitbtn")

submitbtn[0].addEventListener("click", function(){
	document.getElementById("formInlog").classList.add("submitted");
});

submitbtn[1].addEventListener("click", function(){
	document.getElementById("formRegistreer").classList.add("submitted");
});