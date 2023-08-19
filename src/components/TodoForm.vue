<script setup>
    import { ref, defineEmits} from "vue";
    import IconTooling from "./icons/IconTooling.vue";
    import { todo } from "../states/todoState";
    import { todos } from "../states/todosState";
    import { states } from "../states/todosState";


    const savetodo = () =>{

      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate()).padStart(2, '0');

      const formattedDate = `${year}-${month}-${day}`;
      let indice = -1;

      // console.log('aaaaaaaaaaaaaaaaaaaaaaa', states.value.length);

      for (let i = 0; i < states.value.length; i++){
        if(states.value[i].update){
          indice = i;
          break;
        }
      }
      // console.log('aaaaaaaaaaaaaaaaaaaaaaa', indice, todo.title);
      if(indice === -1){
        todo.created_at = formattedDate;
        todo.updated_at = formattedDate;
        todos.value.push(todo.value);
      }
      else{
        todos.value[indice].title = todo.value.title;
        todos.value[indice].description = todo.value.description;
        todos.value[indice].expire_at = todo.value.expire_at;
        todos.value[indice].updated_at = todo.value.updated_at;

        states.value[indice].update = false;
      }
        console.log(todo);
    }
</script>

<template>
  <div class="title">
    <icon-tooling/>
    <h2>Imformations</h2>
  </div>
  <hr />

  <div class="content">
    <form action="" method="post" @submit.prevent="savetodo"> 
        <input type="text" v-model="todo.title" placeholder="title" required/><br><br>
        <input type="date" v-model="todo.expire_at" placeholder="expire at" required/><br><br>
        <textarea v-model="todo.description" placeholder="description" required></textarea><br><br>
        <button type="submit" id="submit"><i class="fas fa-plus"></i></button>
    </form>
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

#submit{
    width: 60px;
    height: 60px;
    border-radius: 30px;
    float: right;
    border: 2px solid rgb(148, 158, 163);
    background: rgb(179, 192, 204);
}

#submit i{
  color: rgb(57, 65, 73);;
}

#submit:hover{
  background: rgb(57, 65, 73);
}

#submit:hover i{
  color: white;
}

form{
    text-align: center;
    width: 80%;
    padding: 30px 20px 20px 40px;
}
input{
    width: 500px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid rgb(13, 74, 102);
    padding-left: 20px;
}

input:hover{
    border: 2px solid rgb(5, 109, 134);
}

textarea{
    margin-top: 20px;
    width: 500px;
    height: 100px; 
    border-radius: 10px;
    border: 1px solid rgb(13, 74, 102);
    padding: 20px 20px;
}

textarea:hover{
    border: 2px solid rgb(5, 109, 134);
}

@media screen and (max-width: 1500px) {
    input{
    width: 300px;
    height: 50px;
    border-radius: 10px;
    border: 1px solid rgb(13, 74, 102);
    padding-left: 20px;
}

textarea{
    margin-top: 20px;
    width: 300px;
    height: 100px; 
    border-radius: 10px;
    border: 1px solid rgb(13, 74, 102);
    padding: 20px 20px;
}
}
</style>