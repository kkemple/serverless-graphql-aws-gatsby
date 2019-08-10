/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION

Amplify Params - DO NOT EDIT */
const axios = require("axios")

exports.handler = function(event, context) {
  const { lat, lon } = event.source.location
  const api = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`
  axios
    .get(api)
    .then(response => {
      const temperature = response.data.main.temp
      const description = response.data.weather[0].description
      const weather = `The current temperature is ${temperature} and ${description}`
      context.done(null, weather)
    })
    .catch(error => context.done(error))
}
