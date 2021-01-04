<template>
    <div class="AuthorizationForm">
        <form class="Form" v-on:submit.prevent="authorizationClicked">
            <div class="Field">
                <label class="Label" for="login">Логин:</label>
                <input id="login" type="text" maxlength="50" v-model="login" placeholder="логин" required>
            </div>
            <div class="Field">
                <label class="Label" for="password">Пароль:</label>
                <input id="password" type="password" maxlength="30" v-model="password" placeholder="пароль" required>
            </div>
            <button>Войти</button>
        </form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'AuthorizationForm',
    data() {
        return {
            login: '',
            password: ''
        }
    },
    computed: {
        ...mapGetters([
            'USER_ID',
            'LOGIN',
            'TOKEN'
        ])
    },
    methods: {
        ...mapActions([
            'AUTHORIZATION'
        ]),
        roleChanged: function(event) {
            this.roleId = event.id;
        },
        authorizationClicked: async function() {
            await this.AUTHORIZATION({
                login: this.login, 
                password: this.password
            });
            if (this.USER_ID > 0 && this.TOKEN != '') this.$router.push('/main');
        }
    }
}
</script>

<style scoped>
    .AuthorizationForm {
        width: 300px;
        display: flex;
        justify-content: center;
    }
    .Form {
        display: flex;
        flex-direction: column;
        border: 1px dotted silver;
        
        margin: 0 auto;
        justify-content: center;
    }
    .Field {
        display: flex;
        justify-content: space-between;
    }
    .Label {
        width: 130px;
    }
    button {
        width: 150px;
    }
</style>