'use strict';
var galleryPreview = document.querySelector('.overlay-gallery-preview');

var Gallery = function(pictures) {
  this.pictures = pictures;
  this.activePicture = 0;
  this.elements = {
    overlay: document.querySelector('.overlay-gallery'),
    controls: {
      left: document.querySelector('.overlay-gallery-control-left'),
      right: document.querySelector('.overlay-gallery-control-right')
    },
    current: document.querySelector('.preview-number-current'),
    total: document.querySelector('.preview-number-total'),
    closeElem: document.querySelector('.overlay-gallery-close')
  };
};

Gallery.prototype.show = function(num) {
  var obj = this;
  obj.elements.closeElem.onclick = obj.hide.bind(obj);
  obj.elements.total.innerText = obj.pictures.length;

  obj.elements.controls.left.onclick = obj.elements.controls.right.onclick = function(e) {
    if (e.target.classList.contains('overlay-gallery-control-left')) {
      if (Number(obj.activePicture) >= 1) {
        obj.setActivePicture(Number(obj.activePicture) - 1);
      }
    } else {
      if (Number(obj.activePicture) <= obj.pictures.length - 2) {
        obj.setActivePicture(Number(obj.activePicture) + 1);
      }
    }
  };
  obj.elements.overlay.classList.remove('invisible');
  obj.setActivePicture(num);
};
Gallery.prototype.hide = function() {
  this.elements.overlay.classList.add('invisible');
  this.elements.controls.left.onclick = this.elements.controls.right.onclick = null;
};
Gallery.prototype.setActivePicture = function(num) {
  this.activePicture = num;
  var img = new Image();
  img.src = this.pictures[num];

  var imgExistingElem = galleryPreview.querySelector('img');
  if (imgExistingElem !== null) {
    galleryPreview.removeChild(imgExistingElem);
  }
  galleryPreview.appendChild(img);

  this.elements.current.innerText = this.activePicture + 1;
};

define(function() {
  return Gallery;
});
