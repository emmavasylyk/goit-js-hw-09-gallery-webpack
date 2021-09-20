import myTemplate from '../templates/templ.handlebars'
import refs from './refs'
import func from './func'
import array from '../db/array'

const { galleryContainer, closeBtnModal, overlay, lightboxContainer, ligthImage, } = refs

const createGalleryCardsMarkup = myTemplate(array)

galleryContainer.insertAdjacentHTML('beforeend', createGalleryCardsMarkup)
