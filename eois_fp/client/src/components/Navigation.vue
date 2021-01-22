<template>
    <div>
        <b-navbar toggleable="lg" type="light" variant="info">
            <b-navbar-nav>
                <b-navbar-brand active :to="{ name: 'home'}">
                    Home
                </b-navbar-brand>
                <template v-if="AUTHENTICATED">
                    <b-navbar-brand :to="{ name: 'about'}">
                        About
                    </b-navbar-brand>
                    <b-nav-item>
                        <b-button size="sm" class="my-2 my-sm-0" @click.prevent="logoutClicked">
                            Log Out
                        </b-button>
                    </b-nav-item>
                </template>
                <template v-else>
                    <b-navbar-brand :to="{ name: 'login'}">
                        Log In
                    </b-navbar-brand>
                </template>
            </b-navbar-nav>    
        </b-navbar>
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
    router-link-active {
        text-decoration: none;
        color: firebrick;
    }
</style>