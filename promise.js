const promiseone = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("step 1");
    resolve();
  }, 1000);
});

promiseone.then(function () {
  console.log("step 2");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("step 3");
    resolve();
  }, 2000);
}).then(function () {
  console.log("step 4");
});

const promisetwo = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("step 5");
    resolve({ username: "John", age: 25 });
  }, 3000);
});

promisetwo.then(function (data) {
  console.log(data);
});

const promisethree = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "John", age: 25 });
    } else {
      reject("Error: Something went wrong");
    }
  }, 4000);
});

promisethree
  .then((data) => {
    console.log(data);
    return data.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Promise done");
  });

const promisefour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "John", age: 25 });
    } else {
      reject("Error: Something went wrong");
    }
  }, 5000);
});

async function fetchData() {
  try {
    const data = await promisefour;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((resolve) => {
    return resolve.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
