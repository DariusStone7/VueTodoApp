<script setup>
import axios from "axios";
import IconDocumentation from "../components/icons/IconDocumentation.vue";
import { ref, onMounted } from "vue";
import Todo from "./Todo.vue";
import { todos } from "../states/todosState";
import { todo } from "../states/todoState";
import { states } from "../states/states";

onMounted(() => {
  axios
    .get("http://127.0.0.1:8000/todo")
    .then((response) => {
      // response.forEach(element => {
      //   todos.value.push(element)
      // });
      todos.value = response.data.todos;

      states.value = 
        todos.value.map(() => {
          // Créer un nouvel élément avec des valeurs différentes
          return {
            menu: false,
            description: false,
            update: false,
          };
        });
      console.log(todos.value);
    })
    .catch((error) => console.log(error));
});
</script>


<template>
  <div class="title">
    <IconDocumentation />
    <h2>Tasks list</h2>
  </div>
  <hr />
  <div v-for="(todo, index) in todos" :key="index">
    <Todo
      :title="todo.title"
      :description="todo.description"
      :created_at="todo.created_at"
      :updated_at="todo.updated_at"
      :expire_at="todo.expire_at"
      :index="index"
    />
  </div>
</template>
    
<style scoped>
.title {
  text-align: center;
}

.title h2 {
  font-weight: 500;
  color: rgb(83, 82, 82);
}
</style>