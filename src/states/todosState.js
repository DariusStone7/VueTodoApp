import { ref } from "vue";

export const todos = ref([  
    {
        title : "Home",
        description: "In this case, the checkedNames array will always contain the values from the currently checked boxes.In this case, the checkedNames array will always co",
        created_at: "05/02/2023",
        updated_at: "05/02/2023",
        expire_at: "05/02/2023"
    },
    {
        title: "Scholl",
        description:"In this case, the checkedNames array will always contain the values from the currently checked boxes.",
        created_at: "05/02/2023",
        updated_at: "05/02/2023",
        expire_at: "05/02/2023"
    },
    {
        title: "Travel",
        description:"In this case, the checkedNames array will always contain the values from the currently checked boxes.",
        created_at: "05/02/2023",
        updated_at: "05/02/2023",
        expire_at: "05/02/2023"
    },
    {
        title: "Design",
        description:"In this case, the checkedNames array will always contain the values from the currently checked boxes.",
        created_at: "05/02/2023",
        updated_at: "05/02/2023",
        expire_at: "05/02/2023"
    }
    
]);

export const states = ref(todos.value.map(() => {
    // Créer un nouvel élément avec des valeurs différentes
    return {
        menu: false,
        description: false,
        update: false
    };
  }));
