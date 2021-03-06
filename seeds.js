const mongoose = require('mongoose'),
    Restaurant = require('./models/restaurant'),
    Comment =    require('./models/comment')

const data = [{
        name: "Fabryka Kurtosza",
        image: "https://s.inyourpocket.com/gallery/183322.jpg",
        menu: "http://lgucma.ayz.pl/wp-content/uploads/2016/03/23.jpg",
        author: {
            id: "1b86ed6f57b16410441620f5"
        },
        username: "asd",
        description: "foobar"
    },
    {
        name: "Fabryka Kurtosza 2",
        image: "https://s.inyourpocket.com/gallery/183322.jpg",
        menu: "http://lgucma.ayz.pl/wp-content/uploads/2016/03/23.jpg",
        author: {
            id: "5b86ed6f57b16410441620f5"
        },
        username: "asd",
        description: "foobar"
    },
    {
        name: "Fabryka Kurtosza 2",
        image: "https://s.inyourpocket.com/gallery/183322.jpg",
        menu: "http://lgucma.ayz.pl/wp-content/uploads/2016/03/23.jpg",
        author: {
            id: "5b86ed6f57b16410441620f5"
        },
        username: "asd",
        description: "foobar"
    },
    {
        name: "Fabryka Kurtosza 2",
        image: "https://s.inyourpocket.com/gallery/183322.jpg",
        menu: "http://lgucma.ayz.pl/wp-content/uploads/2016/03/23.jpg",
        author: {
            id: "1b86ed6f57b16410441620f5"
        },
        username: "asd",
        description: "foobar"
    },
    {
        name: "Fabryka Kurtosza 3",
        image: "https://s.inyourpocket.com/gallery/183322.jpg",
        menu: "http://lgucma.ayz.pl/wp-content/uploads/2016/03/23.jpg",
                author: {
            id: "5b86ed6f57b16410441620f5"
        },
        username: "asd",
        description: "foobar"
    }
]

function seedDB() {
    Restaurant.remove({}, function (err) {
        if (err) {
            console.log(err)
        } else {
            console.log('removed restaurant')
        }
    })
    data.forEach(function (seed) {
        Restaurant.create(seed, function (err, restaurant) {
            if (err) {
                console.log(err)
            } else {
                console.log('added restaurant')
                // Comment.create({
                //     text: 'Awesome place, definitely coming back, would recommend to all my friends',
                //     author: 'Some dude'
                // }, function (err, comment) {
                //     if (err) {
                //         console.log(err)
                //     } else {
                //         restaurant.comments.push(comment)
                //         restaurant.comments.push(comment)
                //         restaurant.comments.push(comment)
                //         restaurant.comments.push(comment)
                //         restaurant.comments.push(comment)
                //         restaurant.comments.push(comment)
                //         restaurant.save()
                //         console.log('added comment')
                //     }
                // })
            }
        })
    })
}

// Restaurant.findOne({name: 'Hurry Curry'}).populate('comments').exec(function(err, restaurant) {
//     console.log(restaurant)
// })

module.exports = seedDB