// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert')
const form = document.querySelector('.grocery-form')
const grocery = document.getElementById('grocery')
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')

// edit option
let editElement
let editFlag = false
let editID = ''
// ****** EVENT LISTENERS **********
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const value = grocery.value
  const id = new Date().getTime().toString()
  if (value && !editFlag) {
    const element = document.createElement('article')
    element.classList.add('grocery-item')
    const attr = document.createAttribute('data-id')
    attr.value = id
    element.setAttributeNode(attr)
    element.innerHTML = `    
    <p class="title">${value}</p>
    <div class="btn-container">
      <button class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>
    `
    const deleteBtn = element.querySelector('.delete-btn')
    const editBtn = element.querySelector('.edit-btn')

    deleteBtn.addEventListener('click', (e) => {
      const item = e.currentTarget.parentElement.parentElement
      const id = item.dataset.id

      list.removeChild(item)
      if (list.children.length === 0) {
        container.classList.remove('show-container')
      }
      displayAlert('item removed', 'danger')
      setBackToDefault()
      removeFromLocalStorage(id)
    })

    editBtn.addEventListener('click', (e) => {
      const element = e.currentTarget.parentElement.parentElement
      // set edit item
      editElement = e.currentTarget.parentElement.previousElementSibling
      // set from value
      grocery.value = editElement.innerHTML
      editFlag = true
      editID = element.dataset.id
      submitBtn.textContent = 'edit'
    })

    list.appendChild(element)
    displayAlert('item added to the list', 'success')
    container.classList.add('show-container')
    addToLocalStorage(id, value)
    setBackToDefault()
  } else if (value && editFlag) {
    editElement.innerHTML = value
    displayAlert('value changed', 'success')
    editLocalStorage(editID, value)
    setBackToDefault()
    addToLocalStorage(id, value)
  } else {
    displayAlert('empty value', 'danger')
  }
})

clearBtn.addEventListener('click', () => {
  const items = document.querySelectorAll('.grocery-item')
  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item)
    })
  }
  container.classList.remove('show-container')
  displayAlert('empty list', 'danger')
  setBackToDefault()
})
// ****** FUNCTIONS **********
const displayAlert = (text, action) => {
  alert.textContent = text
  alert.classList.add(`alert-${action}`)

  setTimeout(() => {
    alert.textContent = ''
    alert.classList.remove(`alert-${action}`)
  }, 1000)
}

const setBackToDefault = () => {
  grocery.value = ''
  editFlag = false
  editID = ''
  submitBtn.textContent = 'submit'
}

// ****** LOCAL STORAGE **********
const addToLocalStorage = (id, value) => {}
const removeFromLocalStorage = (id) => {}
const editLocalStorage = (id, value) => {}
// ****** SETUP ITEMS **********
