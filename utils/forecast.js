const request = require('request');

const forecast= (longitude,latitude,callback) => {
    urll = 'https://api.darksky.net/forecast/8a4db6d87a19e9748294c67aa50583ac/' + longitude + ',' +latitude +'?units=si'

    request({url: urll, json: true}, (error,response) => {
        if(error){
            callback('unable to connect to the server',undefined)
        }else if(response.body.error){
            callback('recheck the Coordinates', undefined)
        }else {
            callback(undefined,response.body.daily.data[0].summary+' The current temperature is '+response.body.currently.temperature)
        }
    })
}

module.exports = forecast
