// ! Async and await are just used to make promises easier to write, read, and/or understand


function makeRequest(location){
    return new Promise((resolve, reject)=>{
        console.log('Making request to ' + location)
        if (location ==='Google'){
            resolve('Google says Hi')
        } else {
            reject('We can only talk to Google')
        }
    })
}


function processRequest(response){
    return new Promise((resolve, reject) =>{
        console.log('Processing response')
        resolve('Extra information ' + response)
    })
}

makeRequest('Google')
// processRequest();

