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
  