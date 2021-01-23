<template>
    <b-card>
        <b-card-header>
            <b-nav tabs fill>
                <b-nav-item to="/firm/add" exact exact-active-class="active">Add Firm</b-nav-item>
                <b-nav-item to="/firm/all" exact exact-active-class="active">Show Frims</b-nav-item>
            </b-nav>
        </b-card-header>
        <b-card-body>
            <router-view></router-view>
        </b-card-body>
    </b-card>
</template>

<script>
export default {
    name: 'FirmNav'
}
</script>