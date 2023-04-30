const playBtns = document.querySelectorAll('.play__btn');
const closeBtns = document.querySelectorAll('.close__btn');
const videos = document.querySelectorAll('.video');

// Add event listener to each play button
playBtns.forEach((playBtn, index) => {
  playBtn.addEventListener('click', () => {
    // Get the video element corresponding to the clicked button
    const video = videos[index];

    // Show the video element
    video.style.display = 'block';
  });
});

// Add event listener to each close button
closeBtns.forEach((closeBtn, index) => {
  closeBtn.addEventListener('click', () => {
    // Get the video element corresponding to the clicked button
    const video = videos[index];

    // Hide the video element
    video.style.display = 'none';
  });
});
