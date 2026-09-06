function openLetter(letter) {

    // Hide Mosad
    document.getElementById("name").classList.remove("show");


    // Get the image from the clicked letter
    var image = letter.querySelector(".letter-img").src;


    // Get the message from the clicked letter
    var message = letter.querySelector(".message").innerText;


    // Put the image in the popup
    document.getElementById("popupImage").src = image;


    // Put the message in the popup
    document.getElementById("popupMessage").innerText = message;


    // Open the popup
    document.getElementById("popup").classList.add("active");
}


function closeLetter() {

    // Close the popup
    document.getElementById("popup").classList.remove("active");


    // Show Mosad again
    setTimeout(function () {

        document.getElementById("name").classList.add("show");

    }, 500);
}