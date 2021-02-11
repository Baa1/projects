<template>
    <div v-if="AUTHENTICATED">
        <b-navbar toggleable="lg" type="dark" variant="primary">
            <template>
                <b-navbar-nav>
                    <b-navbar-brand :to="{ name: 'about'}">
                        {{locale.ABOUT}}
                    </b-navbar-brand>
                    <b-navbar-brand :to="{ name: 'registration'}">
                        {{locale.REGISTRATION}}
                    </b-navbar-brand>
                    <b-navbar-brand :to="{ name: 'firm'}">
                        {{locale.FIRM}}
                    </b-navbar-brand>
                    <b-navbar-brand :to="{ name: 'casting'}">
                        {{locale.CASTING}}
                    </b-navbar-brand>
                    <b-navbar-brand :to="{ name: 'schedule'}">
                        {{locale.SCHEDULE}}
                    </b-navbar-brand>
                    <b-navbar-brand :to="{ name: 'encouragement'}">
                        {{locale.ENCOURAGEMENT}}
                    </b-navbar-brand>
                    <b-nav-item>
                        <b-button size="sm" @click.prevent="logoutClicked">
                            {{locale.LOGOUT}}
                        </b-button>
                    </b-nav-item>
                </b-navbar-nav>
            </template>
        </b-navbar>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import locale from '../../locale'
export default {
    name: 'Navigation',
    data() {
        return {
            locale
        }
    },
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