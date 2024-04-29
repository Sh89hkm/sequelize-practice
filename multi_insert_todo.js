// Use Sequelize to insert multiple rows in the todo table
// Insert the values from given array below

const todosToInsert = [
  { description: "Tai chi in the morning" },
  { description: "Visit friend" },
  { description: "Visit grocery store" },
  { description: "Listen to music" },
  { description: "Watch Netlfix" },
  { description: "Walk for an hour" },
];

// Enter your code below
const Sequelize = require("sequelize");

// Establish a connection to the database
const path = "mysql://root:secret@localhost:3306/practice";
const sequelize = new Sequelize(path);

// Define the model if not already defined
const Todo = sequelize.define("todo", {
  description: Sequelize.STRING,
});

// Insert multiple rows into the todo table
Todo.bulkCreate(todosToInsert)
  .then(() => {
    console.log("Todos inserted successfully");
  })
  .catch((err) => {
    console.error("Error inserting todos: ", err);
  })
  .finally(() => {
    sequelize.close();
  });

// // Insert multiple rows into the todo table using Promise.all
// Promise.all(
//   todosToInsert.map((todo) => {
//     return Todo.create(todo);
//   })
// )
//   .then(() => {
//     console.log("Todos inserted successfully");
//   })
//   .catch((err) => {
//     console.error("Error inserting todos: ", err);
//   })
//   .finally(() => {
//     sequelize.close();
//   });

// // Generate SQL INSERT query
// const insertQuery = `
//   INSERT INTO todos (description, createdAt, updatedAt)
//   VALUES ${todosToInsert.map(todo => `('${todo.description}', NOW(), NOW())`).join(',')}
// `;

// // Execute the SQL query
// sequelize.query(insertQuery)
//   .then(([results]) => {
//     console.log("Todos inserted successfully");
//   })
//   .catch((err) => {
//     console.error("Error inserting todos: ", err);
//   })
//   .finally(() => {
//     sequelize.close();
//   });
