<template>
    <ul>
        <li>
            <router-link
                :to="{
                    name: 'home'
                }"
            >
                Home
            </router-link>
        </li>
        
        <template v-if="AUTHENTICATED">
            <li>
                {{USER.login}}
            </li>
            <li>
                <router-link
                    :to="{
                        name: 'about'
                    }"
                >
                    About
                </router-link>
            </li>
            <li>
                <a href="#" @click.prevent="logoutClicked">
                    Log Out
                </a>
            </li>
        </template>
        <template v-else>
            <li>
                <router-link
                    :to="{
                        name: 'login'
                    }"
                >
                    Log In
                </router-link>
            </li>
        </template>    
    </ul>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'Navigation',
    computed: {
        ...mapGetters([
            'AUTHENTICATED',
            'USER'
        ])
    },
    methods: {
        ...mapActions([
            'LOGOUT'
        ]),
        logoutClicked() {
            console.log(this);
            this.LOGOUT().then(() => {
                this.$router.replace({
                    name: 'home'
                });
            });
        }
    }
}
</script>
<style scoped>
    ul {
        display: flex;
        justify-content: space-between;
        width: 300px;
    }
    ul li {
        list-style: none;
        text-decoration: none;
    }
</style>