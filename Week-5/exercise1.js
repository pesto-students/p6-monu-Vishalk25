function resolveAfter3Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("verySlow");
        console.log("verySlow promise is done");
      }, 3000);
    });
  }

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("slow");
      console.log("slow promise is done");
    }, 2000);
  });
}

function resolveAfter1Second() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("fast");
      console.log("fast promise is done");
    }, 1000);
  });
}

async function sequentialStart() {
  console.log("==SEQUENTIAL START==");

    const fast = await resolveAfter1Second();
    console.log(fast);

    const slow = await resolveAfter2Seconds();
    console.log(slow);

    const verySlow = await resolveAfter3Seconds();
    console.log(verySlow);
  
}

function* generator(){
    console.log("==SEQUENTIAL START==");
    let speed;
  yield speed = resolveAfter3Seconds();
  console.log(speed);

  yield speed =  resolveAfter2Seconds();
  console.log(speed);

  yield speed = resolveAfter1Second();
  console.log(speed);
}

sequentialStart();

// let sequentialSpeed = generator();

// for (const speed of sequentialSpeed){
//     console.log(speed);
// };