<template>
    <b-card no-body>
        <b-card-header>
            <b-nav pills fill>
                <b-nav-item to="/encouragement/best" exact exact-active-class="active">{{locale.BEST}}</b-nav-item>
                <b-nav-item to="/encouragement/promotion" exact exact-active-class="active">{{locale.PROMOTION}}</b-nav-item>
                <b-nav-item to="/encouragement/salary" exact exact-active-class="active">{{locale.SALARY}}</b-nav-item>
                <b-nav-item to="/encouragement/sport" exact exact-active-class="active">{{locale.SPORT}}</b-nav-item>
                <b-nav-item to="/encouragement/penalty" exact exact-active-class="active">{{locale.PENALTY}}</b-nav-item>
            </b-nav>
        </b-card-header>
        <b-card-body>
            <router-view></router-view>
        </b-card-body>
    </b-card>
</template>

<script>
import locale from '../../locale'
export default {
    name: 'EncouragementNav',
    data() {
        return {
            locale
        }
    }
}
</script>