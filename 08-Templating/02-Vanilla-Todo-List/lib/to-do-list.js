// Declaration of global variables

const todos = [
  { title: "Code a to-do list", done: false },
  { title: "Eat breakfast", done: true },
  { title: "Do some exercise", done: false },
  { title: "Water the plants", done: true },
];

const templateData = document.getElementById("todoItemTemplate");
const todosContainer = document.getElementById("todosContainer");

// console.log(clone, typeof clone, templateData, typeof templateData);

todos.forEach((element) => {
  // console.log(element.title);
  const clone = templateData.content.cloneNode(true);
  console.log(clone.children[0].querySelector(".d-flex"));

  clone.children[0].querySelector(".title").textContent = element.title;
  clone.children[0].querySelector(".d-flex").checked = element.done;
  todosContainer.appendChild(clone);
});

// Logic of the code

// Call functions

// TODO: Use the template in the `index.html` to dynamically generate a list based on `todos` array
