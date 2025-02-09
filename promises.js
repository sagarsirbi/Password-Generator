const age = 21

const checker = new Promise((resolve, reject) => {
    const age = 21;

    if (age > 18) {
        resolve("Eligible to vote")
    } else {
        resolve("Not eligible to vote")
    }
});

checker
    .then((message) => console.log(message))
    .catch((error) => console.log(error));