// Use Sequelize to delete a row in the todo table
// For example, delete the todo with description: Watch Netlfix
// Enter your code below
const Sequelize = require("sequelize");

// Establish a connection to the database
const path = "mysql://root:secret@localhost:3306/practice";
const sequelize = new Sequelize(path);

// Define the model if not already defined
const Todo = sequelize.define("todo", {
  description: Sequelize.STRING,
});

// Function to delete a row with a specific description
const deleteTodo = async () => {
  try {
    // Use async/await to delete the row
    const rowsDeleted = await Todo.destroy({
      where: { description: "Watch Netlfix" } // Condition to find the row to delete
    });

    console.log("Number of rows deleted:", rowsDeleted);
  } catch (err) {
    console.error("Error deleting row: ", err);
  } finally {
    sequelize.close();
  }
};

// Call the function to delete the row
deleteTodo();
