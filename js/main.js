
var imgs = Array.from(document.querySelectorAll('.container .img-fluid'));
var lightboxContainer = document.querySelector('.lightbox-container');
var lightboxItem = document.querySelector('.lightbox-item');

var closeIcon = document.getElementById('close');
var nextIcon = document.getElementById('next');
var prevIcon = document.getElementById('prev');
var currentIndex = 0;

for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener('click', function (e) {
    currentIndex = imgs.indexOf(e.target);
    var currentSrc = e.target.src;
    lightboxItem.style.backgroundImage = `url(${currentSrc})`;
    lightboxContainer.style.display = 'flex';
  })
}

closeIcon.addEventListener('click', closeSlider)
function closeSlider(){
  lightboxContainer.style.display = 'none'
}
nextIcon.addEventListener('click', getNextSlide)
function getNextSlide(){
  currentIndex++;
  if(currentIndex==imgs.length)
  {
    currentIndex=0
  }
  var currentSrc = imgs[currentIndex].src;
  lightboxItem.style.backgroundImage = `url(${currentSrc})`;
}
prevIcon.addEventListener('click', getPrevSlide)
function getPrevSlide(){
  currentIndex--;
  if(currentIndex<0)
  {
    currentIndex=imgs.length-1
  }
  var currentSrc = imgs[currentIndex].src;
  lightboxItem.style.backgroundImage = `url(${currentSrc})`;
}

document.addEventListener('keyup',function(e){
    if(e.key=='ArrowLeft')
    {
      getPrevSlide()
    }
    else if(e.key=='ArrowRight')
    {
      getNextSlide()
    }
    else if(e.key=='Escape')
    {
      closeSlider()
    }
})