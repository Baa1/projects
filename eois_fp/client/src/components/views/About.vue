<template>
    <div class="About">
        <h4>Common info</h4>
        <div>
            <h5>Surname</h5>
            <p>{{userInfo.surname}}</p>
        </div>
        <div>
            <h5>Name</h5>
            <p>{{userInfo.name}}</p>
        </div>
        <div>
            <h5>Patromymic</h5>
            <p>{{userInfo.patronymic}}</p>
        </div>
        <div>
            <h5>Birthday</h5>
            <p>{{userInfo.birthday}}</p>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'About',
    data() {
        return {
            userInfo: {
                name: '',
                surname: '',
                patronymic: '',
                birthday: ''
            }
        }
    },
    computed: {
        ...mapGetters([
            'USER',
            'USER_INFO'
        ])
    },
    methods: {
        ...mapActions([
            'GET_USER_INFO'
        ]),
    },
    mounted: async function() {
        if (this.USER && this.USER.id > 0) {
            await this.GET_USER_INFO(this.USER.id);
            if (this.USER_INFO) this.userInfo = this.USER_INFO;
        }
    }
}
</script>

<style>

</style>