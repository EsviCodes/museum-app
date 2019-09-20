function submitComment() {
  console.log("Hello");
  // // Gather data of the input fields
  const inputField = document.getElementById("name");
  const name = inputField.value;
  const textField = document.getElementById("msg");
  const msg = textField.value;

  // Gather data of the input fields
  const comment = document.createElement("section");
  const h3Element = document.createElement("h3");
  const pElement = document.createElement("p");

  // Adjust the elements so they display the data

  h3Element.innerHTML = `${name} said:`;
  pElement.innerHTML = msg;
  comment.classList.add("comment");
  comment.appendChild(h3Element);
  comment.appendChild(pElement);
  console.log(comment);

  // Display the adjusted elements on your page
}

// STEPS
// Create an input field for the name, one for the comment and an submit-button
// Add an event (name and comment) listener/handler to the button
// Gather data of the input fields
// Create some elements (to display the data)
// Adjust the elements so they display the data
// Display the adjusted elements on your page
// Empty the input fields so the next user can type some new text.
