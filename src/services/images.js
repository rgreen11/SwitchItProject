const ImageService = {}

ImageService.init = () => {
  if (localStorage.getItem('images') === null) {
    localStorage.setItem('images', JSON.stringify([]));
  }
}

ImageService.getImages = () => {
  const imageArrayString = localStorage.getItem('images');
  const imageArray = JSON.parse(imageArrayString);
  return imageArray;
}

ImageService.saveImage = (url) => {
  const newImage = { url};
  const oldImages = ImageService.getImages();
  //pass the stuff from createpost to local storage in here 
  // and link it with the userid and avatar that is currently "logged in"/ who posted it

  oldImages.unshift(newImage);

  localStorage.setItem('images', JSON.stringify(oldImages));
  return oldImages;
}

export default ImageService;