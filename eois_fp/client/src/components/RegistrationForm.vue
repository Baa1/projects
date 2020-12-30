<template>
    <div class="RegistrationForm">
        <form class="Form" v-on:submit.prevent="registrationClicked">
            <div class="Field">
                <label class="Label" for="login">Логин:</label>
                <input id="login" type="text" maxlength="50" v-model="login" placeholder="логин" required>
            </div>
            <div class="Field">
                <label class="Label" for="password">Пароль:</label>
                <input id="password" type="password" maxlength="30" v-model="password" placeholder="пароль" required>
            </div>
            <div class="Field">
                <label class="Label" for="email">Email:</label>
                <input id="email" type="email" maxlength="100" v-model="email" placeholder="email">
            </div>
            <div class="Field">
                <label class="Label" for="surname">Фамилия:</label>
                <input id="surname" type="text" maxlength="50" v-model="surname" placeholder="фамилия" required>
            </div>
            <div class="Field">
                <label class="Label" for="name">Имя:</label>
                <input id="name" type="text" maxlength="50" v-model="name" placeholder="имя" required>
            </div>
            <div class="Field">
                <label class="Label" for="patronymic">Отчество:</label>
                <input id="patronymic" type="text" maxlength="50" v-model="patronymic" placeholder="отчество">
            </div>
            <div class="Field">
                <label class="Label" for="birthday">Дата рождения:</label>
                <input id="birthday" type="date" v-model="birthday">
            </div>
            <ItemSelector v-bind:items="ROLES" v-on:selected-item-changed="roleChanged" defaultOptionText="выберите роль"/>
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
        background-color: aqua;
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