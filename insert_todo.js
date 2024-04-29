// Use Sequelize to insert a new row in the todo table
// Enter your code below
const Sequelize = require("sequelize");

// Establish a connection to the database
const path = "mysql://root:secret@localhost:3306/practice";
const sequelize = new Sequelize(path);

// Define the model if not already defined
const Todo = sequelize.define("todo", {
  description: Sequelize.STRING,
});

// Insert a new row into the todo table
Todo.create({ description: "Workout" })
  .then((todo) => {
    console.log("New todo created:", todo.get({ plain: true }));
  })
  .catch((err) => {
    console.error("Unable to create todo: ", err);
  })
  .finally(() => {
    sequelize.close();
  });
