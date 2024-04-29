// Use Sequelize to find the first row where description includes the word 'Visit'
// Try to use async/await instead of promises this time
// Enter your code below
const Sequelize = require("sequelize");

// Establish a connection to the database
const path = "mysql://root:secret@localhost:3306/practice";
const sequelize = new Sequelize(path);

// Define the model if not already defined
const Todo = sequelize.define("todo", {
  description: Sequelize.STRING,
});

// Function to find the first row where description includes the word 'Visit'
const findOneWithVisit = async () => {
  try {
    // Use async/await to find the first row
    const todo = await Todo.findOne({
      where: {
        description: {
          [Sequelize.Op.like]: "%Visit%",
        },
      },
    });

    if (todo) {
      console.log("First todo with 'Visit' found:", todo.get({ plain: true }));
    } else {
      console.log("No todo with 'Visit' found");
    }
  } catch (err) {
    console.error("Error finding todo: ", err);
  } finally {
    sequelize.close();
  }
};

// Call the function to find the first row with 'Visit'
findOneWithVisit();
