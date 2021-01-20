<template>
    <div class="Navigator">
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
    </div>
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
    .Navigator {
        margin: 0 auto;
    }
    ul {
        display: flex;
        justify-content: flex-start;
        padding: 0px;
        margin: 0 auto;
    }
    ul li {
        list-style: none;
        text-decoration: none;
        padding-right: 20px;
    }
</style>