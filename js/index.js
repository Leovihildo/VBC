// Reusable Web components
// Header
class Header extends HTMLElement{
    connectedCallback(){
        this.innerHTML = 
    '<header id="header">'+
        '<nav id="nav_scroll" class="navbar navbar-expand-lg navbar-light bg-light sticky-top">'+
            '<div class="container">'+
            '<a class="brand" href="index.html">'+
                    '<img src="images/logova.png" alt="" class="brand-img d-inline-block align-text-top">'+
                '</a>'+
                '<button class="navbar-toggler" type="button" data-bs-target="#offcanvasRight" data-bs-toggle="offcanvas" aria-controls="offcanvasRight">'+
                    '<span class="navbar-toggler-icon clear"></span>'+
                '</button>'+
            '<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">'+
                '<div class="offcanvas-header">'+
                    '<h5 class="offcanvas-title" id="offcanvasRightLabel">Menu</h5>'+
                    '<button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>'+
                '</div>'+
            '<div class="offcanvas-body small">'+
                '<ul class="navbar-nav justify-content-end  flex-grow-1 pe-3">'+
                    '<li class="nav-names faq"><a class="nav-link" href="#">Help</a></li>'+
                '</ul>'+
            '</div>'+
            '</div>'+
            '</div>'+
        '</nav>'+
        '</header>';
    }
}

customElements.define('main-header', Header);

let user_name = document.getElementById("user_name");
var section_score = document.getElementById("score-section");

let Usernames = localStorage.getItem("Usernames");
console.log(Usernames);
if (Usernames && section_score){
    console.log(Usernames);
    user_name.innerHTML = "Dear "+ "<strong>"+Usernames+"</strong>"+",";
}
else{
    console.log("is empty");
}

// Function to show hidden evaluation form
let hidden_form = document.querySelector(".in-visible");
let form_name = document.getElementById("inputText4");
let form_pos = document.forms["Form"]["pos"];

function valid_form(){
    console.log("clicked");
    if((form_pos.value == "") || (form_name.value == "")){
        hidden_form.style.display = "none";
        document.querySelector(".continue").classList.remove("hide");
        alert("Please fill in all fields");
        // swal({
        //     icon: "info",
        //   });
    }
    else{
        // localStorage.setItem("user_name", form_name.value);
        hidden_form.style.display = "block";
        document.querySelector(".continue").classList.add("hide");
        document.getElementById("user_form").classList.add("in-active");

    }
}
// Call the Valid form function onclick of the continue button
document.querySelector(".continue").addEventListener('click', valid_form);


// Store the name in local storage
store_user = ()=>{
    console.log("Executed");
    let Usernames = localStorage.getItem("Usernames");
        if (Usernames){
            localStorage.clear();
            localStorage.setItem("Usernames", form_name.value);
        }
        else{
            localStorage.setItem("Usernames", form_name.value);
        }
}
// Call the store value function onclick of the continue button
document.querySelector(".continue").addEventListener('click', store_user);

// Get Username from local storage
window.onload = function display_user(){
    // let user_name = document.getElementById("user_name");
    // var section_score = document.getElementById("score-section");

    // let Usernames = localStorage.getItem("Usernames");
    // console.log(Usernames);
    // if (Usernames && section_score){
    //     console.log(Usernames);
    //     user_name.innerHTML = "Dear "+ Usernames;
    // }
}

// Function to read Excel file
// Importing dependencies
// const XLSX = require("xlsx");

// Reading the file into memory
// const workbook = XLSX.readfile("evaluation.xlsx");

// Converting the file to JSON
// let worksheet = {};
// for (const sheetName of workbook.SheetNames){
//     worksheet[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
// }

// Show the data as json
// console.log('json:\n', JSON.stringify(worksheets.Sheet1), "\n\n");

// RESULT PAGE
let submit_btn = document.getElementById("btn-submit");

// submit_btn.addEventListener('click', () =>{
        
// })