function toggleMenu() {
  if (window.innerHeight > window.innerWidth) {
    console.log('mobile')
    $('#navbarPc').addClass("d-none");
    $('#navbarMobile').removeClass("d-none");
    $('#columnLeft').addClass("d-none");
    $('#columnRight').addClass("d-none");
  } else {
    console.log('pc')
    $('#navbarPc').removeClass("d-none");
    $('#navbarMobile').addClass("d-none");
    $('#columnLeft').removeClass("d-none");
    $('#columnRight').removeClass("d-none");
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
  toggleMenu();
})
$(document).ready(() => {
  toggleMenu();
  activateModal('buttonMobileModal', 'mobileModal', 'closeMobileModal')
  $('.customLinkMobile').on('click', () => {
    $('#mobileModal').removeClass('active')
  })
})

