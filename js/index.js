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
            '</div>'+
        '</nav>'+
        '</header>';
    }
}

customElements.define('main-header', Header);

// Display Name of Employee on Second page
let user_name = document.getElementById("user_name");
var section_score = document.getElementById("score-section");

let Usernames = localStorage.getItem("Usernames");
if (Usernames && section_score){
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

let submit_btn = document.getElementById("btn-submit");
let input_type = document.getElementsByTagName("input");
var years = [];
submit_btn.addEventListener('click', () =>{
    let tracks = localStorage.getItem("Tracks");
    tracks = JSON.parse(tracks);
    for (var i=0; i<input_type.length; i++){
           if (input_type[i].type = "radio"){
                if(input_type[i].checked){
                    years.push(input_type[i].value);
                    localStorage.setItem("Tracks", JSON.stringify(years));
                    location.href = "score.html";
                }
                else if (input_type[i].checked == null){
                    alert("Check all buttons");
                }
           }
        }     
})