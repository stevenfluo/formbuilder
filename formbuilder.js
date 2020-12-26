var headingform = document.getElementById("headingform");
var texteditform = document.getElementById("texteditform");
var buttonform = document.getElementById("buttonform");
var headingtab = document.getElementById("headingtab");
var textedittab = document.getElementById("textedittab");
var buttontab =  document.getElementById("buttontab");


function firstLoad() {
    console.log("firstload");
    headingform.style.display = "block";
    headingtab.style.border = "4px solid black";
    texteditform.style.display = "none";
    textedittab.style.border = "4px solid white";
    buttonform.style.display = "none";
    buttontab.style.border = "4px solid white";
}
window.addEventListener('load', firstLoad, false);

function showHeadingForm() {
    console.log("showheadingform");
    headingform.style.display = "block";
    headingtab.style.border = "4px solid black";

    texteditform.style.display = "none";
    textedittab.style.border = "4px solid white";
    buttonform.style.display = "none";
    buttontab.style.border = "4px solid white";
}
function showTextEditForm() {
    console.log("showtexteditform");
    texteditform.style.display = "block";
    textedittab.style.border = "4px solid black";

    headingform.style.display = "none";
    headingtab.style.border = "4px solid white";
    buttonform.style.display = "none";
    buttontab.style.border = "4px solid white";
}
function showButtonForm() {
    console.log("showbuttonform");
    buttonform.style.display = "block";
    buttontab.style.border = "4px solid black";

    texteditform.style.display = "none";
    textedittab.style.border = "4px solid white";
    headingform.style.display = "none";
    headingtab.style.border = "4px solid white";
}
headingtab.addEventListener("click", showHeadingForm, false);
textedittab.addEventListener("click", showTextEditForm, false);
buttontab.addEventListener("click", showButtonForm, false);

function clearAll() {
    console.log("clearall");
    document.getElementById("headingform").reset();
    document.getElementById("texteditform").reset();
    document.getElementById("buttonform").reset();
    var userForm = document.getElementById("form");
    userForm.innerHTML = "<form id='form'></form>";
    // remove everything in form
}
document.getElementById("clearall").addEventListener("click", clearAll, false);

var addheading = document.getElementById("addheading");
var addtext = document.getElementById("addtext");
var addbutton = document.getElementById("addbutton");

function addHeadingToForm() {
    console.log("addheadingtoform");
    var enteredHeadingTitle = document.getElementById("headingtitle").value;
    console.log(enteredHeadingTitle);
    if (document.getElementById("headingitalicized").checked == true) {
        document.getElementById("form").innerHTML = document.getElementById("form").innerHTML + "<h3><i>" + enteredHeadingTitle + "</i></h3><br>";
    } else {
        document.getElementById("form").innerHTML = document.getElementById("form").innerHTML + "<h3>" + enteredHeadingTitle + "</h3><br>";
    }
}
function addTextToForm() {
    console.log("addtexttoform");
    var enteredTextFieldTitle = document.getElementById("textfieldtitle").value;
    var enteredInitialValue = document.getElementById("initialvalue").value;
    console.log(enteredTextFieldTitle, enteredInitialValue);
    document.getElementById("form").innerHTML = document.getElementById("form").innerHTML + enteredTextFieldTitle + `<input type='text' value='${enteredInitialValue}'/><br>`;
}
function addButtonToForm() {
    console.log("addbuttontoform");
    var enteredButtonTitle = document.getElementById("buttontitle").value;
    console.log(enteredButtonTitle);
    document.getElementById("form").innerHTML = document.getElementById("form").innerHTML + "<button type='button'>" + enteredButtonTitle + "</button><br>";
}
addheading.addEventListener("click", addHeadingToForm, false);
addtext.addEventListener("click", addTextToForm, false);
addbutton.addEventListener("click", addButtonToForm, false);
