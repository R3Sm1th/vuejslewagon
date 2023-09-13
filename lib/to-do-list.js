import { createApp } from "vue";

createApp({
  data() {
    return {
      message: "If you see this message in your browser, that means Vue is successfully mounted! 🙌",
      todos: [
        { title: "Code a to-do list", done: false },
        { title: "Eat breakfast", done: true },
        { title: "Go for a walk", done: false },
        { title: "Water my plants", done: true }
      ],
      newTodo: null,
      deleteTodo: null
    };
  },
  methods: {
    addTodo() {
      console.log("Adding a todo...");
      // console.log(this.newTodo);
      this.todos.push({title: `${this.newTodo}`, done: false})
      this.newTodo = null
    },
    removeTodo(index) {
      console.log("Removing a todo...")
      // console.log(item);
      this.todos.splice(index, 1)
    }
  }
}).mount('#todosContainer');
