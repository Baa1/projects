<template>
    <b-list-group-item @click="userClicked">
        Имя: {{user.username}} {{user.surname}} Фирма: undefined Должность: undefined
    </b-list-group-item>
</template>

<script>
export default {
    name: 'CastingList',
    props: [
        'user'
    ],
    data: () => {
        return {
            user: this.user
        }
    },
    methods: {
        userClicked() {
            alert(this.user.user_id);
        }
    }
}
</script>