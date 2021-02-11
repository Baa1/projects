<template>
    <div>
        <FirmForm/>
        <h3>{{locale.FIRMS_LIST}}</h3>
        <FirmsList/>
    </div>
</template>

<script>
import FirmsList from '../lists/FirmsList'
import FirmForm from '../forms/FirmForm'
import locale from '../../locale'
export default {
    name: 'SessionCard',
    components: {
        FirmForm,
        FirmsList
    },
    data() {
        return {
            locale
        }
    }
}
</script>