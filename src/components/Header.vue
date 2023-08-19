<script setup>
    import { ref } from 'vue';
    import Sidebar from './sidebar.vue'

    const state = ref(false);
    const links = ref([
        {name: 'Home', route: '/'},
        {name: 'About', route: '/about'},
        {name: 'sign-in', route: '/sign-in'},
        {name: 'sign-up', route: '/sign-up'}
    ]);
</script>

<template>
   <div id="header">
        <div class="logo">
            <img src="../assets/logo.svg" alt="logo" width="50" height="50">
            <h1>Todo</h1>
        </div>
        <!-- Mobile -->
        <div class="burger" @click=" state = !state" :class="{'burger-open' : state}">
            <div class="trait"></div>
            <div class="trait"></div>
            <div class="trait"></div>
        </div>

        <!-- Sidebar -->
        <Sidebar v-if="state"/>
        
        <!-- Desktop -->
        <ul class="links">
            <li v-for="(link, index) in links" :key="index">
                <router-link :to="link.route" class="no-underline">{{ link.name }} </router-link>
            </li>
        </ul>
   </div>
</template>

<style scoped>
     #header{
        display: flex;
        align-items: center;
        justify-content: space-between;
     }
    #header .burger .trait{
        height: 3px;
        width: 23px;
        background: #054975;
        margin-bottom: 3px;
    }

    /* #header .menu-burger{
        height: 200px;
        width: 150px;
        background: #000;
        position: fixed;
        top: 0;
        right: 0;
        transition: 0.3s;
    } */
    #header .open{
        left: 0%;
    }

    #header .burger-open{
        z-index: 2;
        background: white;
    }

    #header .links{
        display: none;
    }

    .logo{
        display: flex;
        align-items: center;
    }

    .logo h1{
        padding-left: 20px;

    }

    @media screen and (min-width: 650px) {
        #header .burger,  #header .menu-burger{
            display: none;
        }
        
        #header .links{
            display: flex;
        }

        #header .links li{
            text-decoration: none;
            list-style-type: none;
            margin-right: 50px;

        }
        .no-underline {
            text-decoration: none;
            font-size: 18px;
            color: rgb(4, 44, 77);
        }
    }
</style>