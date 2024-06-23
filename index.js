// like button

document.addEventListener('DOMContentLoaded', (event) => {
    const likeButton = document.getElementById('like-button');
    const likeCount = document.getElementById('like-count');
    let count = 0;

    likeButton.addEventListener('click', () => {
        count++;
        likeCount.textContent = count;
        likeButton.classList.add('clicked');

        setTimeout(() => {
            likeButton.classList.remove('clicked');
        }, 400);
    });
});

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// Function to open the popup
function openPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
    popup.classList.remove("fadeOut"); // Ensure fadeOut class is removed
}

// Function to close the popup
function closePopup() {
    var popup = document.getElementById("popup");
    popup.classList.add("fadeOut"); // Apply fadeOut animation
    setTimeout(function () {
        popup.style.display = "none"; // Hide popup after animation completes
    }, 500); // Match animation duration (0.5s = 500ms)
}

// Function to handle form submission
function submitForm() {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;

    // Example: Validate inputs or process data

    // For demonstration, just log the values
    console.log("Input 1:", input1);
    console.log("Input 2:", input2);

    // Close the popup after submission
    closePopup();
}

// sidebar

function openNav() {
    document.getElementById("sidebar2").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidebar2").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}
