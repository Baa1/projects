<template>
    <b-form>
        <b-form-group
            label="Date Start"
            label-size="sm"
            label-cols="2"
            label-for="date_start"
            content-cols-sm="4"
        >
            <b-form-datepicker  
                locale="ru"
                id="date_start"
                size="sm"
                v-model="form.date_start"
            ></b-form-datepicker>
        </b-form-group>

        <b-form-group
            label="Date End"
            label-size="sm"
            label-cols="2"
            label-for="date_end"
            content-cols-sm="4"
        >
            <b-form-datepicker  
                locale="ru"
                id="date_end"
                size="sm"
                v-model="form.date_end"
            ></b-form-datepicker>
        </b-form-group>

        <b-button type="submit" variant="primary">Add</b-button>

    </b-form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'ScheduleForm',
    data () {
        return {
            form: {
                date_start: '',
                date_end: ''
            }
        }
    },
    computed: {
        ...mapGetters([
            'POSITIONS',
        ])
    },
    methods: {
        ...mapActions([
            'ADD_SESSION'
        ]),
    },
    mounted() {
        this.GET_POSITIONS();
    }
}
</script>