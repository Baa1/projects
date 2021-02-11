<template>
    <div v-if="AUTHENTICATED">
        <b-navbar toggleable="lg" type="dark" variant="primary">
            <template>
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
                    <b-navbar-brand :to="{ name: 'schedule'}">
                        Schedule
                    </b-navbar-brand>
                    <b-navbar-brand :to="{ name: 'encouragement'}">
                        Encouragement
                    </b-navbar-brand>
                    <b-nav-item>
                        <b-button size="sm" @click.prevent="logoutClicked">
                            Log Out
                        </b-button>
                    </b-nav-item>
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
                    name: 'login'
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