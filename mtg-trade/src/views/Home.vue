<template>
    <div class="home">
        <AuthorizationForm/>
    </div>
</template>

<script>
import AuthorizationForm from '../components/forms/AuthorizationForm'

export default {
    name: 'Home',
    components: {
        AuthorizationForm
    }
}
</script>
