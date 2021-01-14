<template>
    <ul>
        <li>
            <router-link
                :to="{
                    name: 'home'
                }"
            >
                Home
            </router-link>
        </li>
        <li>
            <router-link
                :to="{
                    name: 'login'
                }"
            >
                Log In
            </router-link>
        </li>
        <li>
            Baa1
        </li>
        <li>
            <router-link
                :to="{
                    name: 'about'
                }"
            >
                About
            </router-link>
        </li>
        <li>
            <a href="#">
                Log Out
            </a>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'Navigation'
}
</script>