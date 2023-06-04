function submitForm(event) {
    event.preventDefault();  

    // Get the data from the form 
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;

    // Display !Congratulations (first name)  (last name)  you are now signed up 

    var message = document.getElementById("message");
    message.innerText = "!Congratulations " + firstName + " " + lastName + ", you are now signed up.";

    // Show result
    var Result = document.getElementById("Show_res");
    
}