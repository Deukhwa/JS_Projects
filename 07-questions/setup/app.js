//using selectors inside the element

// const questions = document.querySelectorAll('.question')
// questions.forEach((question) => {
//   const btn = question.querySelector('.question-btn')
//   btn.addEventListener('click', () => {
//     questions.forEach((item) => {
//       if (item != question) {
//         item.classList.remove('show-text')
//       }
//     })

//     question.classList.toggle('show-text')
//   })
// })

// traversing the dom

// const btns = document.querySelectorAll('.question-btn')

// btns.forEach((btn) => {
//   btn.addEventListener('click', (e) => {
//     const questionEl = e.currentTarget.parentElement.parentElement
//     btns.forEach((button) => {
//       const itemEl = button.parentElement.parentElement
//       // console.log(itemEl)
//       if (questionEl != itemEl) itemEl.classList.remove('show-text')
//     })
//     questionEl.classList.toggle('show-text')
//   })
// })
