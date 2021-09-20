// ----------------------------------------------------------------------------
// --------------------------------- ФУНКЦИИ ----------------------------------
// ----------------------------------------------------------------------------
// именованый экспорт
import array from '../db/array'
import refs from './refs'
const { galleryContainer, closeBtnModal, overlay, lightboxContainer, ligthImage, } = refs

galleryContainer.addEventListener('click', onGalleryContainerClick)
closeBtnModal.addEventListener('click', onCloseBtnModal)
overlay.addEventListener('click', onCloseBtnModal)

function ligthImageAttributs(src, alt) {
  ligthImage.setAttribute('src', src)
  ligthImage.setAttribute('alt', alt)
}

function onGalleryContainerClick(e) {
  e.preventDefault()
  window.addEventListener('keydown', onEcsKeyPress)
  window.addEventListener('keydown', handleKeydown)


  if (e.target.nodeName !== 'IMG') {
    return
  }
  lightboxContainer.classList.add('is-open')

  ligthImageAttributs(e.target.dataset.source, e.target.alt)

}

function onCloseBtnModal() {
  lightboxContainer.classList.remove('is-open')
  ligthImageAttributs(' ', ' ')
  window.removeEventListener('keydown', onEcsKeyPress)
  window.removeEventListener('keydown', handleKeydown)
}

function onEcsKeyPress(e) {
  if (e.code !== 'Escape') {
    return
  }
  onCloseBtnModal()
}

function handleKeydown(e) {
  let currentIndex = array.findIndex(img => img.original === ligthImage.src)

  let nextIndex = currentIndex + 1;
  let previousIndex = currentIndex - 1;
  if (e.code === 'ArrowRight') {
    if (nextIndex >= array.length) {
      nextIndex = 0;
    }
    ligthImage.src = array[nextIndex].original;
  }
  if (e.code === 'ArrowLeft') {
    if (previousIndex < 0) {
      previousIndex = array.length - 1;
    }
    ligthImage.src = array[previousIndex].original;
  }
}