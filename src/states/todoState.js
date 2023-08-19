import { ref } from "vue";

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;

export const todo = ref({
    title: null,
    description: null,
    created_at: formattedDate,
    expire_at: null,
    updated_at: formattedDate,
    update: false
})