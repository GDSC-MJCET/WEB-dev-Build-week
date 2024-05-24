// Get the hash part of the URL
const hash=window.location.hash

// Decode the base64 encoded message from the hash, after removing the '#' character
const decrypt_message=atob(hash.replace('#',""))

// If there is a decrypted message, show it and hide the message form
if(decrypt_message){
    document.querySelector('#message-show').classList.remove('hide')
    document.querySelector('#message-form').classList.add('hide')

    // Set the inner HTML of the first <h1> element to the decrypted message
    document.querySelector('h1').innerHTML=decrypt_message

}

// adding event listner to form to handle the form submission
document.querySelector('form').addEventListener('submit',event=>{
    
    // Prevent the default form submission behavior
    event.preventDefault();

    document.querySelector('#message-form').classList.add('hide')
    document.querySelector('#link-form').classList.remove('hide')

    const input=document.querySelector('#form-input')

    // Encrypt the user message using base64 encoding
    const encrypt_message=btoa(input.value)
    const linkinput=document.querySelector('#link-input')

    // Set the value of the link input to the current URL with the encrypted message as the hash
    linkinput.value=`${window.location}#${encrypt_message}`
    linkinput.select();
})