console.log($)
// old way
// $.ajax({
//     url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen',
//     success: (data)=>{
//         console.log(data);
//     },
//     error: ()=>{
//         console.log('bad request');
//     }
// });

// ajax call assigned to an object
const obj = {
    url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen',
    success: (data)=>{
        console.log(data);
    },
    error: ()=>{
        console.log('bad request');
    }
}
// passing object into function
//$.ajax(obj)

//ajax call
// $.ajax ({
//   url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen',
//   success: (data)=>{
//       console.log(data);
//     },
//     error: ()=>{
//         console.log('bad request');
//       }
// })

// promise - first function runs if promise is fulfilled
const promise = $.ajax({
  url: 'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen'
})
promise.then(
  (data) =>{console.log(data)
  },
  ()=> {console.log('i did not run')
}
)

const movie = $.ajax({
  url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=GoneWithTheWind'
})

movie.then(
  (data) =>{console.log(data)
  },
  ()=> {console.log('Something went wrong')
}
)

$(()=>{
    $.ajax({
        url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=Frozen'
    }).then(
        (data)=>{
            $('#title').html(data.Title);
            $('#year').html(data.Year);
            $('#rated').html(data.Rated);
        },
        ()=>{
            console.log('bad');
        }
    );
})

$('form').on('submit', (event)=>{
        event.preventDefault();
        const userInput = $('input[type="text"]').val();
        $.ajax({
            url:'http://www.omdbapi.com/?apikey=53aa2cd6&t=' + userInput
        }).then(
            (data)=>{
                $('#title').html(data.Title);
                $('#year').html(data.Year);
                $('#rated').html(data.Rated);
            },
            ()=>{
                console.log('bad');
            }
        );
    })
