const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiYXRoYXJ2YTMxNjEiLCJhIjoiY2p5b2FrejlwMDczMDNubW1qNmFnczlyMiJ9.E0rDCfEmEMx28CC4ZpO-cA'

    request({url: url, json: true}, (error,response) => {
        if (error){
            callback('unable to connect to the server',undefined)
        }else if(response.body.features.length===0){
            callback('recheck the location',undefined)
        }else{
            callback(undefined,{     // NOTE: never use quotation for undefined as it can cause chaos in debugging
                latitude:response.body.features[0].center[1],
                longitude:response.body.features[0].center[0],
                location:response.body.features[0].place_name
            })
        }
    })
}
//NOTE: all the data of response resides in body property. other info is like metadata.

module.exports= geocode
