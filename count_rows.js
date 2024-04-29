// Use Sequelize to count the number of rows in the todo table
// Enter your code below
const Sequelize = require("sequelize");

// Establish a connection to the database
const path = "mysql://root:secret@localhost:3306/practice";
const sequelize = new Sequelize(path);

// Define the model if not already defined
const Todo = sequelize.define("todo", {
  description: Sequelize.STRING,
});

// Function to count the number of rows in the todo table
const countRows = async () => {
  try {
    // Use async/await to count the number of rows
    const rowCount = await Todo.count();
    console.log("Number of rows in todo table:", rowCount);
  } catch (err) {
    console.error("Error counting rows: ", err);
  } finally {
    sequelize.close();
  }
};

// Call the function to count rows
countRows();
