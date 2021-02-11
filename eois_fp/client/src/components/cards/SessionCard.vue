<template>
    <div>
        <SessionForm/>
        <h3>{{locale.SESSIONS_LIST}}</h3>
        <SessionsList/>
    </div>
</template>

<script>
import SessionsList from '../lists/SessionsList'
import SessionForm from '../forms/SessionForm'
import locale from '../../locale'
export default {
    name: 'SessionCard',
    components: {
        SessionForm,
        SessionsList
    },
    data() {
        return {
            locale
        }
    }
}
</script>