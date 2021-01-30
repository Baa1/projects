<template>
    <b-list-group-item @click="patricipantClicked">
        Имя: {{patricipant.username}} {{patricipant.surname}} Фирма: undefined Должность: undefined
    </b-list-group-item>
</template>

<script>
export default {
    name: 'CastingList',
    props: [
        'patricipant'
    ],
    data: () => {
        return {
            patricipant: this.patricipant
        }
    },
    methods: {
        patricipantClicked() {
            alert(this.patricipant.user_id);
        }
    }
}
</script>