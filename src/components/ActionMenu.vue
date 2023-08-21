<script setup>

    import { ref, defineProps, defineEmits, onMounted, onUnmounted} from 'vue';
    import { formAction } from '../states/formAction';

    const props = defineProps(['state', 'index']);
    const emits = defineEmits(['toggleDescription', 'toggleDelete', 'toggleUpdate']);


    // const toggleDescription = (index) => {
    //     // Modifier l'état de description pour l'indice donné
    //     states[index].description = !states[index].description;
    // };

    const handleClick = () => {
        
        // Émettre l'événement toggleDescription avec l'index en tant que payload
        emits('toggleDescription', props.index);
    };

    const handleDeleteTodo = () =>{
        
        emits('toggleDelete', props.index);
    }

    const handleUpdateTodo = () =>{

        emits('toggleUpdate', props.index);
        formAction.update = true;

        }


</script>


<template>
    <div class="menu">
        <button class="eye" @click="handleClick()"> <i class="fas fa-eye"></i> Description</button>
        <button class="pencil" @click="handleUpdateTodo()"> <i class="fas fa-pencil"></i> Modifier</button><br>
        <button class="trash" @click="handleDeleteTodo()"> <i class="fas fa-trash"></i> Supprimer</button>
    </div>
</template>


<style scoped>
    .menu{
        background: rgb(170, 170, 165);
        height: 100px;
        border-radius: 5px;
        width: 120px;
        position: absolute;
    }
    .menu button{
        margin: 10px 10px 1px 0px;
        background:rgb(170, 170, 165);
        width: 100%;
        font-family: 'Times New Roman', Times, serif;
        border: none;
        color: rgb(72, 77, 77);
        font-size: 15px;
    }
    i{
        margin-right: 5px;
    }
    .menu .trash i{
        color: red;
    }
    .menu .pencil i{
        color: green;
    }

    .menu .eye i{
        color: black;
    }

    .menu button:hover{
        background: rgb(241, 236, 236);
    }

</style>