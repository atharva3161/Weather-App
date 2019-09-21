
const request = require('request')
const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const address = process.argv[2]

if (!address){
    console.log('please provide an address');
}else{
    geocode(address,(error,data) =>{
        if(error){
            return console.log(error);
        }

        forecast(data.latitude,data.longitude,(error,dataForecast) => {
            if(error){
                return console.log(error);
            }
            console.log(data.location);
            console.log(dataForecast);
        })
    })

}




/*-----------------------------------------NOTES--------------------------------------------------
// NOTE: in terminal wheather app needs to be initialised as a npm project with NPM INIT -Y in root directory. this generated package.json file with all default values in place
// NOTE: by installing certain npm modules, package-lock.json file and node_modules directory is generated.
// NOTE: all dependencies of this request module are in node_modules directory
// NOTE: query string starts with a question mark followed by a 'key : value' pair. '&' used to concatenate another query
// NOTE: keep habit of identifying what type of data it is by seeing it from the terminal.
// NOTE: string is in green in terminal.
//NOTE: json set to true so response is no longer a string it is a parsed object


*/
