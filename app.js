const app = () => {
  const song = document.querySelector('.song');
  const play = document.querySelector('.play');
  const outline = document.querySelector('.moving-outline circle');
  const video = document.querySelector('.vid-container video')

  // Sounds button, beach & sun icons
  const sounds = document.querySelectorAll('.sound-picker button');
  // Time display, h3 tag
  const timeDisplay = document.querySelector('.time-display');
  //Time select all the buttons with their duration
  const timeSelect = document.querySelectorAll('.time-select button');
  // Get the length of the outline
  const outlineLength = outline.getTotalLength();
  // Duration
  let fakeDuration = 600;
  // Stripes around the play/pause button (later will become progress bar)
  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;

  // Pick different sounds 
  sounds.forEach(sound => {
      sound.addEventListener('click', function(){
          song.src = this.getAttribute('data-sound');
          video.src = this.getAttribute('data-video');
          checkPlaying(song);
      });
  });

  // Play sound
  play.addEventListener('click', () => {
      checkPlaying(song);
    });

    // Select sound
    timeSelect.forEach(option => {
        option.addEventListener('click', function () {
            fakeDuration = this.getAttribute('data-time');
            timeDisplay.textContent = `${Math.floor(fakeDuration / 60)}:${Math.floor(
                fakeDuration % 60
                )}`;
        });
    });

    // Create a function specific to stop and play the sounds
    const checkPlaying = song => {
        if(song.paused){
            song.play();
            video.play();
            play.src = './svg/pause.svg'; 
        }else{
            song.pause();
            video.pause();
            play.src = './svg/play.svg';
        }
    }
    // We can animate the circle around the play button to show song 'progress'
    song.ontimeupdate = () => {
        let currentTime = song.currentTime;
        let elapsed = fakeDuration - currentTime;
        let seconds = Math.floor(elapsed % 60);
        let minutes = Math.floor(elapsed / 60); 

        // Animate the circle
        let progress = outlineLength - (currentTime / fakeDuration) * outlineLength;
        outline.style.strokeDashoffset = progress;
        // Animate the text 
        timeDisplay.textContent = `${minutes}:${seconds}`;

        if(currentTime >= fakeDuration){
            song.pause();
            song.currentTime = 0;
            play.src = './svg/play.svg';
            video.pause();
        }
    };
};

app();


//Math.floor rounds up the numbers to whole numbers 