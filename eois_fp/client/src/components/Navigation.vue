<template>
    <div class="Navigator">
        <nav class="container">
            <ul>
                <li class="nav-item">
                    <router-link class="nav-link"
                        :to="{
                            name: 'home'
                        }"
                    >
                        Home
                    </router-link>
                </li>
                <template v-if="AUTHENTICATED">
                    <li class="nav-item">
                        <router-link class="nav-link"
                            :to="{
                                name: 'about'
                            }"
                        >
                            About
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" @click.prevent="logoutClicked">
                            Log Out
                        </a>
                    </li>
                </template>
                <template v-else>
                    <li class="nav-item">
                        <router-link class="nav-link"
                            :to="{
                                name: 'login'
                            }"
                        >
                            Log In
                        </router-link>
                    </li>
                </template>    
            </ul>
        </nav>
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
    .Navigator, ol, ul {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    ol, ul {
        list-style: none;
    }

    .container {
        margin: 0 auto;
        width: 640px;
        text-align: center;
    }

    .nav-item {
        padding: 3px;
        background: rgba(0, 0, 0, 0.01);
        border-radius: 4px;
        display: inline-block;
        vertical-align: baseline;
        zoom: 1;
        *display: inline;
        *vertical-align: auto;
        background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.01), rgba(255, 255, 255, 0.12));
        background-image: -moz-linear-gradient(top, rgba(0, 0, 0, 0.01), rgba(255, 255, 255, 0.12));
        background-image: -o-linear-gradient(top, rgba(0, 0, 0, 0.01), rgba(255, 255, 255, 0.12));
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.01), rgba(255, 255, 255, 0.12));
        -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3), inset 0 -1px rgba(255, 255, 255, 0.15);
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.3), inset 0 -1px rgba(255, 255, 255, 0.15);
    }

    .nav-link {
        display: block;
        line-height: 27px;
        width: 100px;
        font-size: 12px;
        color: white;
        text-decoration: none;
        text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
        background: #7e929b;
        border: 1px solid;
        border-color: #c2ccd1 #9cacb2 #91a2aa;
        border-color: #c2ccd1 rgba(255, 255, 255, 0.1) #91a2aa;
        border-radius: 3px;
        background-image: -webkit-linear-gradient(top, #b9c6cc, #8ea1aa 50%, #768b94 51%, #7c9099 75%, #7e929b);
        background-image: -moz-linear-gradient(top, #b9c6cc, #8ea1aa 50%, #768b94 51%, #7c9099 75%, #7e929b);
        background-image: -o-linear-gradient(top, #b9c6cc, #8ea1aa 50%, #768b94 51%, #7c9099 75%, #7e929b);
        background-image: linear-gradient(to bottom, #b9c6cc, #8ea1aa 50%, #768b94 51%, #7c9099 75%, #7e929b);
    }
    .nav-link:hover {
        background: #a8bdc7;
        border-color: #e3eaed #d3dee3 #cedadf;
        background-image: -webkit-linear-gradient(top, #cfdae0, #b5c7cf 50%, #a6bac5 51%, #aec1ca);
        background-image: -moz-linear-gradient(top, #cfdae0, #b5c7cf 50%, #a6bac5 51%, #aec1ca);
        background-image: -o-linear-gradient(top, #cfdae0, #b5c7cf 50%, #a6bac5 51%, #aec1ca);
        background-image: linear-gradient(to bottom, #cfdae0, #b5c7cf 50%, #a6bac5 51%, #aec1ca);
    }
    .nav-link:active {
        padding: 1px;
        background: #8c9da5;
        border: 0;
        background-image: -webkit-linear-gradient(top, #5f7681, #8c9da5 45%, #9dabb1);
        background-image: -moz-linear-gradient(top, #5f7681, #8c9da5 45%, #9dabb1);
        background-image: -o-linear-gradient(top, #5f7681, #8c9da5 45%, #9dabb1);
        background-image: linear-gradient(to bottom, #5f7681, #8c9da5 45%, #9dabb1);
    }
</style>