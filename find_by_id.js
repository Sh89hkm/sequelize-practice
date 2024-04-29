// Use Sequelize to find a row in the todo table by ID
// Enter your code below
const Sequelize = require("sequelize");

// Establish a connection to the database
const path = "mysql://root:secret@localhost:3306/practice";
const sequelize = new Sequelize(path);

// Define the model if not already defined
const Todo = sequelize.define("todo", {
  description: Sequelize.STRING,
});

// Find a row in the todo table by ID
const todoId = 1; // Replace 1 with the ID you want to search for
Todo.findByPk(todoId)
  .then((todo) => {
    if (todo) {
      console.log("Todo found:", todo.get({ plain: true }));
    } else {
      console.log("Todo not found");
    }
  })
  .catch((err) => {
    console.error("Error finding todo by ID: ", err);
  })
  .finally(() => {
    sequelize.close();
  });
