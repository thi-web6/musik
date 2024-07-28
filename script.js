document.addEventListener("DOMContentLoaded", function() {
  const audio = document.getElementById("audio");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const progressBar = document.getElementById("progressBar");
  const progress = document.getElementById("progress");

  playPauseBtn.addEventListener("click", function() {
    if (audio.paused) {
      audio.play();
      playPauseBtn.textContent = "❚❚";
    } else {
      audio.pause();
      playPauseBtn.textContent = "►";
    }
  });

  audio.addEventListener("timeupdate", function() {
    const percentage = (audio.currentTime / audio.duration) * 100;
    progress.style.width = percentage + "%";
  });

  progressBar.addEventListener("click", function(e) {
    const clickPosition = e.offsetX;
    const barWidth = progressBar.offsetWidth;
    const clickPercentage = clickPosition / barWidth;
    audio.currentTime = clickPercentage * audio.duration;
  });
});
