console.log("It works!");

const toDoList = [];
$(() => {

	// DOM stuff
// Get form input and push to array
  $('form').on('submit', (event) => {
    event.preventDefault()
    const inputValue = $('#input-box').val()
    toDoList.push(inputValue)
    $(event.currentTarget).trigger('reset')
    render()
    })

    const render = () => {
      console.log(toDoList)
      //initialize to do list
      $('.list1').empty()
      toDoList.forEach((item) => {
      const $li = $('<li>').addClass('to-do-item').text(item)
                            $('.list1').append($li)
      const $btn = $('<button>')
                  .attr('type', 'button')
                  .attr('name', 'button')
                  .attr('id', 'submit')
                  .text('Completed')
      $($li).append($btn)
      })
      // This doesn't work properly
      // Trying to move to do item to done items when button is clicked
      $('#submit').on('click', () => {
      const completed = $('.to-do-item').remove()
      completed.appendTo('#list2')
      console.log(completed)
      console.log('clicked!')
    })
  }


})
