// Use Sequelize to update the description for an existing row in the todo table
// For example, update the todo with description: Visit friend to Visit doctor
// Enter your code below
const Sequelize = require("sequelize");

// Establish a connection to the database
const path = "mysql://root:secret@localhost:3306/practice";
const sequelize = new Sequelize(path);

// Define the model if not already defined
const Todo = sequelize.define("todo", {
  description: Sequelize.STRING,
});

// Function to update the description for an existing row
const updateDescription = async () => {
  try {
    // Use async/await to update the row
    const updatedRows = await Todo.update(
      { description: "Visit doctor" }, // New description
      { where: { description: "Visit friend" } } // Condition to find the row to update
    );

    console.log("Number of rows updated:", updatedRows[0]);
  } catch (err) {
    console.error("Error updating row: ", err);
  } finally {
    sequelize.close();
  }
};

// Call the function to update the row
updateDescription();

