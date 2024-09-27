const mongoose = require('mongoose');
const Quotes = require('./models/Quote');

let dummyQuotes =  [
    {
        author: "Albert Einstein",
        text: "Life is like riding a bicycle. To keep your balance, you must keep moving."
    },
    {
        author: "Mahatma Gandhi",
        text: "Live as if you were to die tomorrow. Learn as if you were to live forever."
    },
    {
        author: "Thomas Edison",
        text: "I have not failed. I've just found 10,000 ways that won't work."
    },
    {
        author: "Steve Jobs",
        text: "Your time is limited, so don't waste it living someone else's life."
    },
    {
        author: "Nelson Mandela",
        text: "It always seems impossible until it is done."
    }
];


async function seedDB(){
    await Quotes.insertMany(dummyQuotes);
    console.log("db seeded")
}

module.exports = seedDB;