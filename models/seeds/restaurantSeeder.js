const mongoose = require('mongoose')
const restaurant = require('../restaurant')
const restaurantList = require('../../restaurant.json').results
mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})

db.once('open', () => {
  console.log('mongodb connected')

  for (let i = 0; i < restaurantList.length; i++) {
    restaurant.create({
      id: `${restaurantList[i].id}`,
      name: `${restaurantList[i].name}`,
      name_en: `${restaurantList[i].name_en}`,
      category: `${restaurantList[i].category}`,
      image: `${restaurantList[i].image}`,
      location: `${restaurantList[i].location}`,
      phone: `${restaurantList[i].phone}`,
      google_map: `${restaurantList[i].google_map}`,
      rating: `${restaurantList[i].rating}`,
      description: `${restaurantList[i].description}`
    })
  }

  console.log('Done')
})
