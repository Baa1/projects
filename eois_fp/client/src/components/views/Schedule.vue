<template>
    <b-container>
        <b-row>
            <b-col>
                <b-calendar locale="ru"></b-calendar>
            </b-col>
            <b-col>
                <ScheduleForm/>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import ScheduleForm from '../forms/ScheduleForm'
export default {
    name: 'Schedule',
    components: {
        ScheduleForm
    }
}
</script>

<style>

</style>