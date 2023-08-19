<script setup>
import Hello from "../components/Hello.vue";
import TodoForm from "../components/TodoForm.vue";
import TodoList from "../components/TodoList.vue";
</script>

<template>
  <Hello />
  <div class="content">
    <div class="todo-form">
      <TodoForm />
    </div>
    <div class="todo-list">
      <TodoList />
    </div>
  </div>
</template>

<style scoped>
.content {
  display: flex;
}

.content .todo-form{
  width: 50%;
  border: 2px solid rgb(219, 214, 214);
  margin-right: 20px;
  border-radius: 20px;
}

.content .todo-list{
  width: 50%;
  min-height: 500px;
  border: 2px solid rgb(219, 214, 214);
  border-radius: 20px;

}

@media screen and (max-width: 1000px) {
  .content{
    display: block;
    width: 800px;
  }
  .todo-form{
    width: 100%;
    margin-bottom: 100px;
    height: 500px;
  }
  .todo-list{
    width: 100%;
  }
}
</style>