const tabBtns = document.querySelectorAll('.tab-btn')
const contents = document.querySelectorAll('.content')

tabBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const id = e.currentTarget.dataset.id

    contents.forEach((content) => {
      const attribute = content.getAttribute('id')
      if (id === attribute) {
        content.classList.add('active')
      } else {
        content.classList.remove('active')
      }
    })
  })
})
