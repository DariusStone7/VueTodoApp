<script setup>
    import { ref } from 'vue';
    const state = ref(false);
    const links = ref([
        {name: 'Home', route: '/'},
        {name: 'About', route: '/about'},
        {name: 'sign-in', route: '/sign-in'},
        {name: 'sign-up', route: '/sign-up'}
    ]);
</script>

<template>
         <div class="menu-burger" :class="{'open' : state}">
            <ul class="links">
            <li v-for="(link, index) in links" :key="index">
                <router-link :to="link.route" class="no-underline">{{ link.name }} </router-link>
            </li>
        </ul>
        </div>
</template>

<style scoped>
    .menu-burger{
        position: fixed;
        font-size: 100%;
        top: 80px;
        right: 0;
        background: rgb(253, 254, 255);
        width: 35%;
        height: 25%;
        transition: 0.3s;
        padding-top: 30px;
        border: 2px solid rgb(47, 93, 146);
        padding-bottom: 10px;
        border-radius: 10px;
    }


    .menu-burger li{
        text-decoration: none;
        list-style-type: none;
        padding-bottom: 15px;
        width: 80px;
        padding-left: 7px;
    }

    .menu-burger li:hover{
        border-bottom: 2px solid rgb(7, 81, 141);
        font-size: 16px;
        padding-bottom: 5px;

    }
    .no-underline{
        text-decoration: none;
        font-size: 25px;
        color: rgb(4, 44, 77);
    }
    .menu-burger li:hover .no-underline{
        font-size: 18px;
        text-decoration: none;

    }
</style>