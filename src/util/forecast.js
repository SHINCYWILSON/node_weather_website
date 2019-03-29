

    const request = require('request')

const forecast = (lat,lg,callback) => {
    const url = 'https://api.darksky.net/forecast/4e07fcc7d245cb381a974d0bb25a6ae3/'+lat+',' +lg

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + '°F out.  This high today is ' + response.body.daily.data[0].temperatureHigh + ' with a low of ' +response.body.daily.data[0].temperatureLow + '. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast

   