const promise1 = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve({
            customer: "Sparsh",
            location: "Ghaziabad",
            order_number: "225506"
        });
    } else {
        reject("Error: Order not fetched");
    }
});

const promise2 = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve({
            customer: "Priyansh",
            location: "Ghaziabad",
            order_number: "215006"
        });
    } else {
        reject("Error: Order not fetched");
    }
});

  // Promise.all([promise1, promise2])
    //.then((responses) => {
      //  console.log("All promises resolved successfully");
        //console.log(responses);
    //})
    //.catch((error) => {
      //  console.log("One or more promises failed");
        //console.log(error);
    //});


 //Promise.race([promise2, promise1])    //// promsie race pehle wale ko run krta hai
   // .then((responses) => {
     //   console.log("All promises resolved successfully");
       // console.log(responses);
    //})
    //.catch((error) => {
      //  console.log("One or more promises failed");
        //console.log(error);
    // });
//------------------------------------------------------------------------------------------//
    //  Promise.allsettle([promise1, promise2])
    // .then((responses) => {
    //     console.log("All promises resolved successfully");
    //     console.log(responses);   //// ye promise 1 or promise 2 dono ko execute run krta hai chahe wo resolve ho ya reject ho
    // })
    // .catch((error) => {
    //     console.log("One or more promises failed");
    //     console.log(error);
    // });

//------------------------------------------------------------------------------------------//

//  Promise.any([promise1, promise2])
//     .then((responses) => {
//         console.log("All promises resolved successfully");
//         console.log(responses);
//     })
//     .catch((error) => {// ye promise 1 or promise 2 dono me se ek bhi resolve ho jaye to ye run ho jata hai
//         console.log("One or more promises failed");// or agar dono he reject ho jaate hai to error show krta hai 
//         console.log(error);
//     });

//-----------------------------------------------------//
     Promise.any([promise1, promise2])
    .then((responses) => {
        console.log("All promises resolved successfully");
        return(responses);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log("One or more promises failed");
        console.log(error);
    });

