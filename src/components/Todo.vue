<script setup>
    import { ref, defineProps} from 'vue';
    import { todos } from '../states/todosState';
    import { todo } from '../states/todoState';
    import { states } from '../states/todosState';
    import ActionMenu from './ActionMenu.vue';

    const props = defineProps({
        title: String,
        description: String,
        created_at: Date,
        updated_at: Date,
        expire_at: Date,
        index: Number
    })


    const state = ref({
        menu: false,
        description: false
    });

    const handleToggleDescription = () => {

      if (state.value) {
        // Vérifier si la propriété 'description' existe
        if (!state.value.hasOwnProperty('description')) {
          // Définir la propriété 'description' si elle n'existe pas encore
          Vue.set(state.value, 'description', false);
        }

        // Inverser l'état de description pour l'indice donné
        state.value.description = !state.value.description;
        state.value.menu = !state.value.menu;
    } 
};

const handleToggleDelete = () =>{
  
  const deletedTodo = todos.value.splice(props.index, 1);

  state.value.menu = !state.value.menu;

  console.log(deletedTodo);

}

const handleToggleUpdate = () =>{

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;

todo.value.title = todos.value[props.index].title;
todo.value.description = todos.value[props.index].description;  
todo.value.created_at = todos.value[props.index].created_at;  
todo.value.expire_at = todos.value[props.index].expire_at;  
todo.value.updated_at = formattedDate;

states.value[props.index].update = true;


state.value.menu = !state.value.menu;

console.log(todo);

}

</script>

<template>

<div class="content">
          <div class="task-title">
            <p @click="state.description = !state.description ">
                <i class="fas fa-circle"> </i>
                
                {{ props.title }}
                
            </p>
            <p>
                {{ props.created_at }} - {{ props.expire_at }} 
                <i class="fa-solid fa-ellipsis-vertical" @click="state.menu = !state.menu "></i>
            </p>
            
          </div>
          <div class="action-menu">
            <ActionMenu  :state="state" v-if="state?.menu"
                v-on:toggleDescription="handleToggleDescription()" 
                v-on:toggleDelete="handleToggleDelete()"
                v-on:toggleUpdate="handleToggleUpdate()"/>
          </div>
          

        <div class="task-description" v-if="state?.description">
            {{ props.description }} <br>
            <span>Lastest update at {{ props.updated_at }}</span>
        </div>
  </div>
  
</template>

<style scoped>
.content {
  padding: 30px 20px;
  margin-bottom: -40px;
}

.content .task-title {
  justify-content: space-between;
  display: flex;
  align-items: center;
}
i {
  color: gray;
  padding-left: 10px;
  width: 20px;
}
.content .task-description {
  margin-left: 40px;
  background: rgb(219, 217, 217);
  border-radius: 10px;
  padding: 10px 10px 20px 10px;
  height: auto;
}
.task-description span{
  font-size: 10px;
  float: right;
}

.red-color{
  color: red;
}

.green-color{
  color: green;
}
.action-menu{
  float: right;
  margin-right: 100px;
}
</style>