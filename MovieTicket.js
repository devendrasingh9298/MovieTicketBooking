const movieApi = "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"

fetch(movieApi).then(res => res.json()).then(data => {
    console.log(data);
    data.map(movie => CreateMovieCard(movie))
})

const movieContainer = document.getElementById("movieContainer");
const CreateMovieCard = (movie) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const poster = document.createElement('img')
    poster.src = movie.Poster

    const cardBody = document.createElement('div')
    const title = document.createElement('div')
    title.innerText = movie.Title;
    title.classList.add('title')
    cardBody.appendChild(title)

    const runningTime = document.createElement('div')
    runningTime.innerText = movie.Runtime;
    runningTime.classList.add('runningTime')
    cardBody.appendChild(runningTime)

    const button = document.createElement('button')
    button.innerText = 'Book Ticket'
    button.style.margin = "0px 0px 10px 10px"
    cardBody.appendChild(button)

    button.addEventListener('click', function(e){
        showBookTicketPrompt(movie)
    })

    card.appendChild(poster)
    card.appendChild(cardBody)

    movieContainer.appendChild(card)
}

const showBookTicketPrompt = (movie) => {
    const prompt = document.createElement('div')
    prompt.style.width = "450px"
    prompt.style.height = "250px"
    prompt.style.border = "1px solid #cbcbcb"
    prompt.style.borderRadius = "4px"
    prompt.style.position = "fixed"
    prompt.style.top = "calc(50% - 125px)"
    prompt.style.left = "calc(50% - 225px)"
    prompt.style.backgroundColor = "#ffffff"

    const title = document.createElement('div')
    title.classList.add('title')
    title.innerText = movie.Title

    const selectDate = document.createElement('select')
    const date = [ "Today", "Tomorrow", "2nd June", "3rd June", "4th June", "5th June"]

    date.map(d => {
        const option = document.createElement('option')
        option.value = d;
        option.text = d;
        selectDate.appendChild(option)
    })

    selectDate.style.padding = "8px"
    selectDate.style.margin = "10px"

    const selectSeat = document.createElement('select')
    const seats = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    

    seats.map(seat => {
        const option = document.createElement('option')
        option.value = seat;
        option.text = seat;
        selectSeat.appendChild(option)
    })

    selectDate.style.padding = "8px"
    selectDate.style.margin = "10px"

    const button = document.createElement('button')
    button.innerText = "Book My Seat"
    button.style.padding = "8px 16px"
    button.style.margin = "10px"
    button.style.backgroundColor = "blue"
    button.style.color = "white"

    const confirmation = document.createElement('div');
    button.addEventListener('click', function(e){
    confirmation.innerText = "Booking Your Seat Please Wait ..."
    setTimeout(() => {
        confirmation.innerText = "Your Ticket is Booked! for"+ selectDate.value + " for seat no "+ selectSeat.value
    }, 2000)
    })

    prompt.appendChild(title)
    prompt.appendChild(selectDate)
    prompt.appendChild(selectSeat)
    prompt.appendChild(button)
    prompt.appendChild(confirmation)

    document.getElementById('container').appendChild(prompt)
}
