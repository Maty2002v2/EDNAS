(function(){
    const videoBox = document.querySelector('.video-presentation__video-box');
    const preview = videoBox?.querySelector('.video-presentation__preview');
    const video = videoBox?.querySelector('.video-presentation__video');
    const customPlayButton = videoBox?.querySelector('.video-presentation__play-button');

    const switchVisibility = () => {
        preview.classList.add('hidde');
        customPlayButton.classList.add('hidde');
        video.classList.add('show');
    }

    const setSizeVideo = () => {
        const { width, height } = preview.getBoundingClientRect();
        video.style.height = height + 'px';
        video.style.width = width + 'px';
    }

    if(!videoBox) return; 

    videoBox.addEventListener('click', () => {
        setSizeVideo();
        switchVisibility();
    });
}())