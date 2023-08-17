<script setup>
    import { ref } from 'vue';

    const state = ref(false);
    const links = ref([
        {name : 'Home'},
        {name: 'About'}
    ]);
</script>

<template>
   <div id="header">
        <div class="logo">
            <img src="../assets/logo.svg" alt="logo" width="50" height="50">
            {{ state }}
        </div>
        <!-- Mobile -->
        <div class="burger" @click=" state = !state" :class="{'burger-open' : state}">
            <div class="trait"></div>
            <div class="trait"></div>
            <div class="trait"></div>
        </div>

        <div class="menu-burger" :class="{'open' : state}">
            
        </div>

        <!-- Desktop -->
        <ul class="links">
            <li v-for="(link, index) in links" :key="index">
                {{ link.name }}
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

    #header .menu-burger{
        height: 100vh;
        width: 100vh;
        background: #000;
        position: fixed;
        top: 0;
        left: 100%;
        transition: 0.3s;
    }
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

    @media screen and (min-width: 800px) {
        #header .burger,  #header .menu-burger{
            display: none;
        }
        
        #header .links{
            display: flex;
        }

        #header .links li{
            text-decoration: none;
            list-style-type: none;
            margin-right: 20px;
        }
    }
</style>