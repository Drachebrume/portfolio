function responsive() {
  if (window.innerHeight > window.innerWidth) {
    $('#navbarPc').addClass("d-none");
    $('#navbarMobile').removeClass("d-none");
    $('#columnLeft').addClass("d-none");
    $('#columnRight').addClass("d-none");
  } else {
    $('#navbarPc').removeClass("d-none");
    $('#navbarMobile').addClass("d-none");
    $('#columnLeft').removeClass("d-none");
    $('#columnRight').removeClass("d-none");
    if (window.innerHeight < 500) {
      $('#columnLeft').addClass("d-none");
      $('#columnRight').addClass("d-none");
    }
  }
}
function activateModal(buttonId, modalId, closeId) {
  $(`#${buttonId}`).on('click', () => {
    $(`#${modalId}`).addClass('active')
  })
  $(`#${closeId}`).on('click', () => {
    $(`#${modalId}`).removeClass('active')
  })
}
$(window).resize(() => {
  responsive();
})
$(document).ready(() => {
  responsive();
  activateModal('buttonMobileModal', 'mobileModal', 'closeMobileModal')
  $('.customLinkMobile').on('click', () => {
    $('#mobileModal').removeClass('active')
  })
  $('.subMenu').on('click', (event) => {
    $('.triggered').removeClass('triggered');
    $(event.target).addClass('triggered');
    $('.blocksection').addClass('d-none');
    $(`#block${event.target.id}`).removeClass('d-none')
  })
})

