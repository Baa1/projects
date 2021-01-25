<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="primary">
            <b-navbar-brand :to="{ name: 'home'}">
                Home
            </b-navbar-brand>
            <template v-if="AUTHENTICATED">
                <b-navbar-nav>
                    <b-navbar-brand :to="{ name: 'about'}">
                        About
                    </b-navbar-brand>
                    <b-navbar-brand :to="{ name: 'registration'}">
                        Registration
                    </b-navbar-brand>
                    <b-navbar-brand :to="{ name: 'firm'}">
                        Firm
                    </b-navbar-brand>
                     <b-navbar-brand :to="{ name: 'casting'}">
                        Casting
                    </b-navbar-brand>
                </b-navbar-nav>
                <b-navbar-nav  class="ml-auto">
                    <b-nav-item>
                        <b-button size="sm" class="my-2 my-sm-0" @click.prevent="logoutClicked">
                            Log Out
                        </b-button>
                    </b-nav-item>
                </b-navbar-nav>
            </template>
            <template v-else>
                <b-navbar-nav class="ml-auto">
                    <b-navbar-brand :to="{ name: 'login'}">
                        Log In
                    </b-navbar-brand>
                </b-navbar-nav>
            </template>
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