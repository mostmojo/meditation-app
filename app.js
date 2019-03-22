const app = () => {
  const song = document.querySelector('.song');
  const play = document.querySelector('.play');
  const outline = document.querySelector('.moving-outline circle');
  const video = document.querySelector('.vid-container video')

  // Sounds button, beach & sun icons
  const sounds = document.querySelectorAll('.sound-picker button');
  // Time display, h3 tag
  const timeDisplay = document.querySelector('.time-display');
  // Get the length of the outline
  const outlineLength = outline.getTotalLength();
  console.log(outlineLength);
}

app();
