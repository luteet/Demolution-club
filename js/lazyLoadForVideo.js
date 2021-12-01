export default function lazyLoadForVideo() {
    var lazyVideos = [].slice.call(document.querySelectorAll("video._lazy-load-video"));

    if ("IntersectionObserver" in window) {
      var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(video) {
          if (video.isIntersecting) {
            for (var source in video.target.children) {
              var videoSource = video.target.children[source];
              if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                videoSource.src = videoSource.dataset.src;
                videoSource.removeAttribute('data-src');
              }
            }
    
            video.target.load();
            video.target.classList.remove("lazy");
            var obj = document.getElementById('example');
    
            video.target.addEventListener('loadeddata', function() {
    
                video.target.classList.add("_visible");
    
            });
            lazyVideoObserver.unobserve(video.target);
          }
        });
      });
    
      lazyVideos.forEach(function(lazyVideo) {
        lazyVideoObserver.observe(lazyVideo);
      });
    }
  
}

