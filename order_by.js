// Use Sequelize to display all rows in the todo table in ascending order of description (alphabetic order)
// Enter your code below
const Sequelize = require("sequelize");

// Establish a connection to the database
const path = "mysql://root:secret@localhost:3306/practice";
const sequelize = new Sequelize(path);

// Define the model if not already defined
const Todo = sequelize.define("todo", {
  description: Sequelize.STRING,
});

// Function to display all rows in ascending order of description
const displayTodosAscending = async () => {
  try {
    // Use async/await to find all rows with ascending order
    const todos = await Todo.findAll({
      order: [
        ["description", "ASC"] // Sort by description in ascending order
      ]
    });

    console.log("Todos in ascending order:");
    todos.forEach(todo => {
      console.log(todo.get({ plain: true }));
    });
  } catch (err) {
    console.error("Error displaying todos: ", err);
  } finally {
    sequelize.close();
  }
};

// Call the function to display todos in ascending order
displayTodosAscending();
