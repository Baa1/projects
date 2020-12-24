<template>
    <div class="RegistrationForm">
        <form v-on:submit.prevent="registrationClicked">
            <label for="login">Логин:</label>
            <input id="login" type="text" maxlength="50" v-model="login" placeholder="логин" required>
            <label for="password">Пароль:</label>
            <input id="password" type="password" maxlength="30" v-model="password" placeholder="пароль" required>
            <label for="email">Email:</label>
            <input id="email" type="email" maxlength="100" v-model="email" placeholder="email">
            <label for="surname">Фамилия:</label>
            <input id="surname" type="text" maxlength="50" v-model="surname" placeholder="фамилия" required>
            <label for="name">Имя:</label>
            <input id="name" type="text" maxlength="50" v-model="name" placeholder="имя" required>
            <label for="patronymic">Отчество:</label>
            <input id="patronymic" type="text" maxlength="50" v-model="patronymic" placeholder="отчество">
            <label for="birthday">Дата рождения:</label>
            <input id="birthday" type="date" v-model="birthday">
            <ItemSelector v-bind:items="ROLES" v-on:selected-item-changed="roleChanged"/>
            <button>Зарегистрировать</button>
        </form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ItemSelector from './ItemSelector'
export default {
    name: 'RegistrationForm',
    components: {
        ItemSelector
    },
    data() {
        return {
            login: '',
            password: '',
            email: '',
            name: '',
            surname: '',
            patronymic: '',
            roleId: 0,
            birthday: null
        }
    },
    computed: {
        ...mapGetters([
            'ROLES'
        ])
    },
    methods: {
        ...mapActions([
            'REGISTRATION',
            'GET_ROLES'
        ]),
        roleChanged: function(event) {
            this.roleId = event.id;
        },
        registrationClicked: async function() {
            await this.REGISTRATION({
                login: this.login, 
                password: this.password,
                email: this.email,
                name: this.name,
                surname: this.surname,
                patronymic: this.patronymic,
                roleId: this.roleId,
                birthday: this.birthday
            });
        }
    },
    mounted: async function() {
        await this.GET_ROLES();
    }
}
</script>

<style scoped>
    .RegistrationForm {
        display: flex;
        flex-direction: column;
        width: 200px;
        border: 1px dotted silver;
        margin: 5px auto;
    }
</style>