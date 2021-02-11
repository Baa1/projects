<template>
    <b-card no-body>
        <b-card-header>
            <b-nav pills fill>
                <b-nav-item to="/encouragement/best" exact exact-active-class="active">Best</b-nav-item>
                <b-nav-item to="/encouragement/promotion" exact exact-active-class="active">Promotion</b-nav-item>
                <b-nav-item to="/encouragement/salary" exact exact-active-class="active">Salary</b-nav-item>
                <b-nav-item to="/encouragement/sport" exact exact-active-class="active">Sport</b-nav-item>
                <b-nav-item to="/encouragement/penalty" exact exact-active-class="active">Penalty</b-nav-item>
            </b-nav>
        </b-card-header>
        <b-card-body>
            <router-view></router-view>
        </b-card-body>
    </b-card>
</template>

<script>
export default {
    name: 'EncouragementNav'
}
</script>