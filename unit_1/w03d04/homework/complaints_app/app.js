//console.log("It works!");

// $('form').on('submit', (event)=>{
//         event.preventDefault();
//         const userInput = $('input[type="text"]').val();
        $.ajax({
            url:'https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD',
            data: {
              "$limit" : 105
            }
        }).then(
            (data)=>{
                $('#borough').html(data.borough);
                $('#discriptor').html(data.discriptor);
                $('#agency').html(data.agency);
                $('#resolution').html(data.resolution_description);
                console.log(data)
            },
            ()=>{
                console.log('bad');
            }
        );
