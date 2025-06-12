document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("scrollDownBtn").addEventListener("click", function () {
    const vh = window.innerHeight / 100;
    const targetScroll = window.scrollY + 100 * vh; // 40vh más abajo
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  });
});




window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  const vh = window.innerHeight / 100;
  const triggerOffset = 40 * vh; // 10vh

  if (window.scrollY > triggerOffset) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});







    const API_KEY = "AIzaSyBnGRIUPS9XUFR_0Z2gS8RkLsxsKDW141c";
    const CHANNEL_ID = "UCP3chYjzMmbN3hys3xQTsXQ";

    async function getShorts() {
      const res = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=10`);
      const data = await res.json();

      const shorts = data.items
        .filter(item => item.id.kind === "youtube#video")
        .filter(item => item.id.videoId) // solo vídeos
        .slice(0, 5); // mostrar solo 5

      const container = document.getElementById("shortsContainer");
      shorts.forEach(video => {
        const iframe = document.createElement("iframe");
        iframe.width = "300";
        iframe.height = "533";
        iframe.src = `https://www.youtube.com/embed/${video.id.videoId}?mute=1&modestbranding=1&rel=0`;
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        container.appendChild(iframe);
      });
    }

    getShorts();