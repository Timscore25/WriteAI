//Get all dropdowns from the document
const dropdowns = document. querySelectorAll(" .dropdown");

//Loop through all dropdown elements
dropdowns. forEach (dropdown => {
    //Get inner elements from each dropdown
     const select = dropdown.querySelector(".select");
     const caret = dropdown.querySelector(".caret");
     const caretRotate = dropdown.querySelector(".caret-rotate");
     const menu = dropdown.querySelector(".menu");
     const options = dropdown.querySelectorAll(".menu li");
     const selected = dropdown.querySelector(".selected");

    /*
    We are using this method in order to have
    multiple dropdown menus on the page work
    */

    //Add a click event to the select element
    select. addEventListener('click', () => {
        //Add the clicked select styles to the select element
        select.classList.toggle("select-clicked");
        //Add the clicked open styles to the caret element
        menu.classList.toggle("menu-open");
        //Add the rotate styles to the caret element
        caret.classList.toggle("caret-rotate");
});

//Loop through all options elements
options. forEach (option => {
    //Add a click event to the option element
    option. addEventListener('click', () => {
        //Change the selected inner text to clicked oiption inner text
        selected.innerText = option.innerText;
        //Add the clicked select styles to the select element
        select. classList.remove('select-clicked');
        //Add the rotate styles to the caret element
        caret.classList.remove('caret-rotate');
        //Remove active class from all option elements
        menu.classList.remove('menu-open');

        //Remove active class from all option elements
        options.forEach(option => {
            option.classList.remove('active');
        });
        //Add active class to clicked option element
        option.classList.add('active');
    });
  });
});