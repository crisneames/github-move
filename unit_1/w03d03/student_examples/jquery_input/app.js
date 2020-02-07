
const list = []

$(() => {
  $('form').on('submit', (event) => {
    event.preventDefault()
    const inputValue = $('#person-name').val()
    list.push(inputValue)
    $(event.currentTarget).trigger('reset')
    render()
  })
})

const render = () => {
  console.log('list: ', list)
  // empty out unordered list
  $('ul').empty(
    // list is an array
    // .forEach is a method that takes a callbak
    // the first argument is the variable name for each element
    // all we are doing for now is console logging the person
  )
  list.forEach((person) => {
    const $li = $('<li>').text(person)
    $('ul').append($li)
  })
}
