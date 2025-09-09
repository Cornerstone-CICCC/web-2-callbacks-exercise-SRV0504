const fs = require("fs");

fs.readFile("./firstname.txt", "utf-8", (e, first) => {
  if (e) return console.error(e);

  fs.readFile("./lastname.txt", "utf-8", (e, last) => {
    if (e) return console.error(e);

    fs.readFile("./age.txt", "utf-8", (e, age) => {
      if (e) return console.error(e);

      fs.readFile("./hobbies.txt", "utf-8", (e, hobbiesData) => {
        if (e) return console.error(e);

        const hobbies = JSON.parse(hobbiesData);
        console.log(
          `${first.trim()} ${last.trim()} is ${age.trim()} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}`
        );
      });
    });
  });
});
