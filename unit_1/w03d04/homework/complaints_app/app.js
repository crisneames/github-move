//console.log("It works!");

// $('form').on('submit', (event)=>{
//         event.preventDefault();
//         const userInput = $('input[type="text"]').val();
$(
  ()=>{
        $.ajax({
            url:'https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD',
            data: {
              "$limit" : 105
            }
        }).then(
            (data)=>{
              const list = $(`<div class="list-container"></div>`)
              $('body').append(list)

              for(let i = 0 ; i < data.length; i++){
                const $row = $(`<div id="${i}" class="row"></div>"`)
                const $uniqueKey = $(`<div id="${data[i]['unique_key']}-key">${data[i]['unique_key']}</div>`);
                const $borough = $(`<div id="${data[i]['unique_key']}-borough">${data[i].borough}</div>`);
                  const $descriptor = $(`<div id="${data[i]['unique_key']}-descriptor">${data[i].descriptor}</div>`);
                $('body').append($row)
                $row.append($uniqueKey)
                $row.append($borough)
                $row.append($descriptor)
               }
                // $('#borough').html(data.borough);
                // $('#discriptor').html(data.descriptor);
                // $('#agency').html(data.agency);
                // $('#resolution').html(data.resolution_description);
            },
            ()=>{
                console.log('bad');
            }
        );


      //  const addButtons = () => {

        const $container = $('<div>')
        .addClass('container')
        $('body').append($container)

        const $manhattan = $('<div>')
        .addClass('button')
        $($container).append($manhattan)

        const $manhattanBtn = $('<button>')
        .text('Manhattan')
        $manhattanBtn.appendTo($manhattan)

        const $brooklyn = $('<div>')
        .addClass('button')
        $($container).append($brooklyn)

        const $brooklynBtn = $('<button>')
        .text('Brooklyn')
        $brooklynBtn.appendTo($brooklyn)

        const $queens = $('<div>')
        .addClass('button')
        $($container).append($queens)

        const $queensBtn = $('<button>')
        .text('Queens')
        $queensBtn.appendTo($queens)

        const $bronx = $('<div>')
        .addClass('button')
        $($container).append($bronx)

        const $bronxBtn = $('<button>')
        .text('Bronx')
        $bronxBtn.appendTo($bronx)

        const $statenIsland = $('<div>')
        .addClass('button')
        $($container).append($statenIsland)

        const $statenIslandBtn = $('<button>')
        .text('Staten Island')
        $statenIslandBtn.appendTo($statenIsland)
      //  }



        //  const getComplaint = () => {

          $('form').on('submit', () => {
          const $inputbox = $('#input-box')
          const complaints = $inputbox.val()
          console.log(complaints)
          })




          $($manhattanBtn).on ("click", () => {
            console.log("Manhattan clicked")
            // data.Search.forEach((element) => {
            //   const $div = $('<div>')
            //   $div = $(`<div><span>${element.borough}</span><br/><hr></iv>`);
            //   $div.appendTo($container)


            })
            // $('#borough').html(data.borough);
            // $('#discriptor').html(data.discriptor);
            // $('#agency').html(data.agency);
            // $('#resolution').html(data.resolution_description)
          // } //)

          $($brooklynBtn).on ("click", () => {
            console.log("Brooklyn clicked")
          })
          $($queensBtn).on ("click", () => {
            console.log("Queens clicked")
          })

          $($bronxBtn).on ("click", () => {
            console.log("Bronx clicked")
          })

          $($statenIslandBtn).on ("click", () => {
            console.log("Staten Island clicked")
          })
})



//addButtons()
//getComplaint()
