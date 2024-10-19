function submitForm() {
   let nameElement = document.getElementById("name");
   let emailElement = document.getElementById("email");
   let subjectElement = document.getElementById("subject");
   let messageElement = document.getElementById("message");

   // Check if elements are found before accessing their values
   if (nameElement && emailElement && subjectElement && messageElement) {
      let name = nameElement.value;
      let email = emailElement.value;
      let subject = subjectElement.value;
      let message = messageElement.value;


   // Prepare data for submission
   let formData = {
      name: name,
      email: email,
      subject: subject,
      message: message
   };


   // Send data to Formspree using Fetch API
   fetch("https://formspree.io/f/mvgooezd", {
      method: "POST",
      headers: {
         "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)

   })
   .then(response => {
      if (!response.ok) {
         throw new Error("Network response was not ok");
      }
      return response.json();
   })
   .then(data => {
      // Handle success - you can update the UI as needed
      console.log(data);
      alert("Your message has been sent. Thank you!");
      // Optionally, reset the form
      document.getElementById("contact-form").reset();
   })
   .catch(error => {
      // Handle error - you can update the UI as needed
      console.error("There was a problem with the fetch operation:", error);
      alert("There was an error sending your message. Please try again later.");
   });

}
else {
   console.error("One or more elements not found.");
}
}
