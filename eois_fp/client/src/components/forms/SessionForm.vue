<template>
    <b-form @submit.prevent="addClicked">
        <b-form-group
            :label="locale.DATE_START"
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
                required
            ></b-form-datepicker>
        </b-form-group>

        <b-form-group
            :label="locale.DATE_END"
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
                required
            ></b-form-datepicker>
        </b-form-group>

        <b-button type="submit" variant="primary">{{locale.ADD}}</b-button>

    </b-form>
</template>

<script>
import { mapActions } from 'vuex'
import locale from '../../locale'
export default {
    name: 'ScheduleForm',
    data () {
        return {
            form: {
                date_start: '',
                date_end: ''
            },
            locale
        }
    },
    methods: {
        ...mapActions([
            'ADD_SESSION',
            'GET_SESSIONS'
        ]),
        async addClicked() {
            if (this.form.date_start != '' && this.form.date_end != '') {
                await this.ADD_SESSION(this.form)
                await this.GET_SESSIONS();
            } else {
                alert(this.locale.ALERT);
            }       
        }
    }
}
</script>