let buttons = $('[data-carousel-button]')

const slides = $('[data-slides]').children()

buttons.click(target => {
    const offset = target.currentTarget.attributes[1].value === 'next' ? 1 : -1

    const activeSlide = slides.closest('[data-active]')[0]

    let newIndex = [...slides].indexOf(activeSlide) + offset
    if (newIndex < 0) {newIndex = slides.length - 1}
    if (newIndex >= slides.length) {newIndex = 0}

    $(slides[newIndex]).attr('data-active', '')
    // $(slides[newIndex]).addClass('d-none')
    $(activeSlide).removeAttr('data-active')
    // $(activeSlide).removeClass('d-none')

})

