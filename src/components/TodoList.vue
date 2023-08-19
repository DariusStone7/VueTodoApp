<script setup>
import IconDocumentation from "../components/icons/IconDocumentation.vue";
import { ref } from "vue";
import Todo from './Todo.vue';
import { todos } from "../states/todosState";
import { todo } from "../states/todoState";
import { states } from "../states/todosState";

</script>


<template>
  <div class="title">
    <IconDocumentation />
    <h2>Tasks list</h2>
  </div>
  <hr />
  <div v-for="(todo, index) in todos" :key="index" >
    <Todo 
      :title = "todo.title"
      :description = "todo.description"
      :created_at = "todo.created_at"
      :updated_at = "todo.updated_at"
      :expire_at = "todo.expire_at"

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