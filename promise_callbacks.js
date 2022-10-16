// function watchTutorialCallback(callback, errorCallback) {
    

//     if (userLeft) {
//         errorCallback({
//             name: 'User Left',
//             message: ':('
//         })
//     } else if (userWatchingCatMeme) {
//         errorCallback({
//             name: 'User Watching Cat Meme',
//             message: 'WebDevSimplified < Cat'
//         })
//     } else {
//         callback('Thumbs up and Subscribe')
//     }
// }
// watchTutorialCallback(message => {
//     console.log(message)
// }, error => {
//     console.log(error.name + ' ' + error.message)
// })




// let userLeft = false
// let userWatchingCatMeme = true


// function watchTutorialPromise(){
//     return new Promise((resolve, reject)=>{
//         if (userLeft) {
//             reject(
//                 {name: 'User Left', message: ':(' })
//         } else if (userWatchingCatMeme) {
//             reject(
//                 {name: 'User Watching Cat Meme',message: 'WebDevSimplified < Cat'})
//         } else {
//             resolve('Thumbs up and Subscribe')
//         }
//     })
// }


// watchTutorialPromise().then((message) => {
//     console.log(message.name+message.message)
// }).catch((msg)=>{
//     console.log(msg.name+ msg.message)
// })

//Promises let us avoid callback hell!

const recordVideo1 = new Promise((resolve, reject) =>{
    resolve('Video 1 recorded')
})

const recordVideo2 = new Promise((resolve, reject)=>{
    resolve('Video 2 recorded')
})

const recordVideo3 = new Promise((resolve, reject) =>{
    resolve('Video 3 recorded')
})


// recordVideo1.then((msg)=>{console.log(msg)}).catch((msg2)=>{console.log(msg2)})
// recordVideo2.then((msg)=>{console.log(msg)}).catch((msg2)=>{console.log(msg2)})
// recordVideo3.then((msg)=>{console.log(msg)}).catch((msg2)=>{console.log(msg2)})

Promise.all([recordVideo1, recordVideo2, recordVideo3]).then((arr_msg)=>{
    console.log("Promise.all is called ")
    for (let i in arr_msg){
        console.log(arr_msg[i])
    }
    console.log('\n')
}) //note that all promises in promise.all take same amount of time.
//so if, recordVideo3 takes 4 minutes, and recordVideo1 and recordVideo2
//take 2 minutes, they will wait for 2 more minutes until
//recordVideo3 is done. Only then will then and catch will happen


Promise.race([recordVideo1, recordVideo2, recordVideo3]).then((arr_msg)=>{
    console.log('Promise.race is called ')
    console.log(arr_msg)

})

//race returns as soon as any one promise is completed. That's why
//we get only one print statemnet.













