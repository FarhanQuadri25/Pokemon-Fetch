// // const people = [
// //   {
// //     name: "farhan",
// //     age: 23,
// //     position: "developer",
// //     salary: 100,
// //   },
// //   {
// //     name: "rehan",
// //     age: 21,
// //     position: "designer",
// //     salary: 200,
// //   },
// //   {
// //     name: "ayan",
// //     age: 18,
// //     position: "student",
// //     salary: 300,
// //   },
// //   {
// //     name: "farooq",
// //     age: 53,
// //     position: "retired",
// //     salary: 70,
// //   },
// // ];

// // const totalSalary = people.reduce((acc, person) => {
// //   return acc + person.salary;
// // }, 0);

// // console.log("Total Salary:", totalSalary);

// // const loopArray = people.forEach((finding) => {
// //   console.log(finding);
// // });

// // const young = people.filter((youth) => {
// //   return youth.age < 20 || youth.age < 50;
// // });
// // console.log(young);

// // const developer = people.filter((newDev) => {
// //   return newDev.position === "developer";
// // });

// // console.log(developer);

// // const dev = people.find((newDeveloper) => {
// //   return newDeveloper.age < 20;
// // });
// // console.log(dev);

// // const friends = ["john", "peter", "bob", "anna", "kelly"];

// // const fruits = [
// //   { fruit: "apple", color: "red" },
// //   { fruit: "chiku", color: "orange" },
// //   { fruit: "banana", color: "yellow" },
// // ];

// // const fruit1 = fruits[0];
// // const fruit2 = fruits[1];
// // const fruit3 = fruits[2];

// // console.log(fruit1, fruit2, fruit3);

// // const [john, peter, bob, anna, kelly] = friends;
// // console.log(john, peter, bob, anna, kelly);

// // let first = "farhan";
// // let second = "rehan";

// // let temp = second;
// // second = first;
// // // console.log(temp, second);

// // //callback function

// // const newFunction = (value) => {
// //   console.log(value.toUpperCase());
// // };

// // newFunction("farhan");

// // const fullName = (name) => {
// //   const newName = `${name} This is my full name and this is in uppercase ${name.toUpperCase()}`;
// //   console.log(name.split("").reverse().join(""));
// //   console.log(newName);
// //   console.log(newName);
// //   console.log(newName);

// //   console.log(newName);
// //   console.log(newName);
// //   console.log(newName);
// //   console.log(newName);
// // };

// // fullName("syed qader pasha quadri");

// const newbtn = document.querySelector(".btn");
// const heading = document.querySelector("h1");
// const newHeading = document.querySelector(".first");
// const secondHeading = document.querySelector(".second");

// const randomColorGenerate = [
//   "red",
//   "teal",
//   "darkgreen",
//   "black",
//   "darkblue",
//   "yellow",
//   "orange",
// ];

// // let isRed = false;

// // newbtn.addEventListener("click", () => {
// //   isRed = !isRed;
// //   const color = isRed ? "red" : getRandomColor();
// //   addColor(500, "h1", color)
// //     .then(() => {
// //       console.log(`Your color changed successfully to "${color}"`);
// //     })
// //     .catch((error) => {
// //       console.error(error);
// //     });
// // });

// // function getRandomColor() {
// //   const colorGenerate = Math.floor(Math.random() * randomColorGenerate.length);
// //   return randomColorGenerate[colorGenerate];
// // }

// // function addColor(time, selector, color) {
// //   const element = document.querySelector(selector);
// //   return new Promise((resolve, reject) => {
// //     if (element) {
// //       setTimeout(() => {
// //         element.style.color = color;
// //         resolve();
// //       }, time);
// //     } else {
// //       reject(`There is no such element: "${selector}"`);
// //     }
// //   });
// // }

// newbtn.addEventListener("click", () => {
//   addColor(1000, "h1", "red")
//     .then((data) => addColor(2000, ".first", "blue",))
//     .then((data) => console.log(data))
//     .then(() => addColor(3000, ".second", "green"))
//     .catch((err) => console.log(err));
// });

// function addColor(time, selector, color) {
//   const element = document.querySelector(selector);
//   return new Promise((resolve, reject) => {
//     if (element) {
//       setTimeout(() => {
//         element.style.color = color;
//         resolve();
//       }, time);
//     } else {
//       reject(`There is no such element: ${selector}`);
//     }
//   });
// }

//async & await

// const example = async () => {
//   return "Farhan Quadri";
// };

// console.log(example());

// async function somefunc() {
//   const result = await example();
//   console.log(result);
//   console.log("hello world");
// }

// somefunc();

// const users = [
//   {
//     id: 1,
//     name: "farhan",
//   },
//   {
//     id: 2,
//     name: "rehan",
//   },
//   {
//     id: 3,
//     name: "ayan",
//   },
// ];

// const articles = [
//   {
//     userId: 1,
//     articles: ["one", "two", "three"],
//   },
//   {
//     userId: 2,
//     articles: ["four", "five"],
//   },
//   {
//     userId: 3,
//     articles: ["six", "seven", "eight", "nine"],
//   },
// ];

// function getUser(name) {
//   return new Promise((resolve, reject) => {
//     const user = users.find((user) => user.name === name);
//     if (user) {
//       return resolve(user);
//     } else {
//       reject(`No such user with name : ${name}`);
//     }
//   });
// }

// function getArticles(userId) {
//   return new Promise((resolve, reject) => {
//     const userArticles = articles.find((user) => user.userId === userId);
//     if (userArticles) {
//       return resolve(userArticles);
//     } else {
//       reject(`No such userId is present: ${userId}`);
//     }
//   });
// }

// // getUser("rehan")
// //   .then((user) => getArticles(user.id))
// //   .then((articles) => console.log(articles))
// //   .catch((err) => console.log(err));

// const getData = async () => {
//   try {
//     const users = await getUser("far");
//     if (users) {
//       const articles = await getArticles(users.id);
//       console.log(articles);
//     } else {
//       console.log(
//         `What ever you are searching it can't be found because ${users} not present`
//       );
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };
// getData();

// Example object
// const fruits = ["apple", "banana", "orange", "grape"];

// Using for...in loop to iterate over array indices
// for (let fruit in fruits) {
//   console.log(`Index ${fruit}: ${fruits[fruit]}`);
// }

async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonname")
      .value.toLowerCase();

    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    
    // Corrected variable name
    const imageElement = document.getElementById("pokemonSprite");
    
    imageElement.src = pokemonSprite;
    imageElement.style.display = "block";
  } catch (err) {
    console.log(err);
  }
}
