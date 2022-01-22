
const theme = document.querySelector('#theme')
const newTask = document.querySelector('#todo-input')
const check = document.querySelector('.check')
const remove = document.querySelector('.items-clear')
const all = document.querySelector('#all')
const active = document.querySelector('#active')
const clearAll = document.querySelector('#completed')
const clearItem = document.querySelectorAll('.clear-item')
const todo_items_box = document.querySelector('#todo-box')
const new_to_do = document.querySelector('.new-todo')
const status = document.querySelector('.status')
const todo_input = document.querySelector('.todo-input')
const todo_item = document.querySelectorAll('.todo-item')
const backgroundImg = document.querySelector('.bckImg')
const done = document.querySelectorAll('.done')
const text = document.querySelectorAll('.text')
const first_done = document.querySelector('.first-done')

theme.addEventListener('click', () => {
    document.querySelector('body').classList = [theme.checked ? 'theme-light' : 'theme-dark'];
    todo_items_box.classList.toggle('todo-items-box-light')
    status.classList.toggle('status-light')
    new_to_do.classList.toggle('new-todo-light')
    todo_input.classList.toggle('todo-input-light')
    backgroundImg.classList.toggle('bckImg-light')
    todo_item.forEach((board) =>{
        board.classList.toggle('todo-item-light')
    })
    clearItem.forEach((board) =>{
        board.classList.toggle('clear-item-light')
    })

});

first_done.addEventListener('click', () => {
    first_done.classList.toggle('done-click')
})
done.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('done-click')
      text.forEach((txt) =>{
        txt.classList.toggle('text-click')
      })
    });
});

  all.addEventListener('click', () => {
    done.forEach((item) => {
        item.classList.toggle('done-click')
    });
  });