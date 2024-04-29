// Enter your code below
const Sequelize = require("sequelize");

const path = "mysql://root:secret@localhost:3306/practice";
const sequelize = new Sequelize(path);

// The table will have a column called description of type string
const Todo = sequelize.define("todo", {
  description: Sequelize.STRING,
});

Todo.sync()
  .then(() => {
    console.log('New table "todo" created');
  })
  .catch((err) => {
    console.error("Unable to create table: ", err);
  })
  .finally(() => {
    sequelize.close();
  });