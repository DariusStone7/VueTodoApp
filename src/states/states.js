import { ref } from "vue";
import { todos } from "./todosState";

export const states = ref(todos.value.map(() => {
    // Créer un nouvel élément avec des valeurs différentes
    return {
        menu: false,
        description: false,
        update: false
    };
  }));