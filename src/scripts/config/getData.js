import arr from '../../public/data/DATA.json'

const cardContainer = document.getElementById('card-container') // Container untuk semua card

try {
  for (const restaurant of arr.restaurants) {
    const card = document.createElement('div')
    card.id = 'maincontent'
    card.className = 'card'

    const imgResto = document.createElement('img')
    imgResto.src = restaurant.pictureId
    imgResto.alt = 'Foto Restoran'

    const nameResto = document.createElement('div')
    nameResto.className = 'nameResto'
    nameResto.textContent = restaurant.name

    const locationResto = document.createElement('div')
    locationResto.className = 'locationResto'
    locationResto.textContent = restaurant.city

    card.appendChild(imgResto)
    card.appendChild(nameResto)
    card.appendChild(locationResto)

    cardContainer.appendChild(card)
  }
} catch (error) {
  console.log(error)
}
