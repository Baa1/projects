<template>
  <div>
    <b-form>
        <b-form-group
            label="Date"
            label-size="sm"
            label-cols="2"
            label-for="date"
            content-cols-sm="4"
        >
            <b-form-datepicker  
                locale="ru"
                id="date"
                size="sm"
            ></b-form-datepicker>
        </b-form-group>
        <b-form-group
            label="Time start"
            label-size="sm"
            label-cols="2"
            label-for="time_start"
            content-cols-sm="4"
        >
            <b-form-timepicker 
                locale="ru"
                id="time_start"
                size="sm"
            ></b-form-timepicker>
        </b-form-group>
        <b-form-group
            label="Time end"
            label-size="sm"
            label-cols="2"
            label-for="time_end"
            content-cols-sm="4"
        >
            <b-form-timepicker 
                locale="ru"
                id="time_end"
                size="sm"
            ></b-form-timepicker>
        </b-form-group>
        <b-form-group
            label="Event name"
            label-size="sm"
            label-cols="2"
            label-for="event_name"
            content-cols-sm="4"
        >
            <b-form-input 
                locale="ru"
                id="event_name"
                size="sm"
            ></b-form-input>
        </b-form-group>
        <b-form-group
            label="Event name"
            label-size="sm"
            label-cols="2"
            label-for="event_name"
            content-cols-sm="4"
        >
            <b-form-input 
                locale="ru"
                id="event_name"
                size="sm"
            ></b-form-input>
        </b-form-group>
        <b-form-group
            label="Is common"
            label-size="sm"
            label-cols="2"
            label-for="is_common"
            content-cols-sm="4"
        >
            <b-form-checkbox 
                locale="ru"
                id="is_common"
                size="sm"
            ></b-form-checkbox>
        </b-form-group>
        <b-form-group
            label="Position"
            label-size="sm"
            label-cols="2"
            label-for="position"
            content-cols-sm="4"
        >
            <b-form-select 
                locale="ru"
                id="position"
                size="sm"
            ></b-form-select>
        </b-form-group>
        <b-button variant="primary">Save</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
    name: 'ScheduleForm',
    data () {
        return {
            form: {
                login: '',
                password: '',
                email: '',
                name: '',
                surname: '',
                patronymic: '',
                roleId: 0,
                birthday: ''
            }
        }
    }
}
</script>

<style>

</style>