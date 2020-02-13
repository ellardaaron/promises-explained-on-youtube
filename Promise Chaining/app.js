let cleanRoom = function () {
    return new Promise(function(resolve, reject) {
        resolve(' cleaned the room ');
    });
};

let removeGarbage = function (message){
    return new Promise(function(resolve, reject) {
        resolve(message +' removed the garbage ');
    })
};

let winIceCream = function(message) {
    return new Promise(function(resolve, reject){
        resolve(message +' won the ice cream ');
    });
};

cleanRoom().then(function(result){
    return removeGarbage (result);
}).then(function(result){
    return winIceCream(result);
}).then(function(result){
    console.log('finished' +result)
})