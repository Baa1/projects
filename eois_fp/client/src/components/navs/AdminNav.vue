<template>
    <b-card no-body>
        <b-card-header>
            <b-nav pills fill>
                <b-nav-item to="/admin/session" exact exact-active-class="active">{{locale.SESSION}}</b-nav-item>
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
    name: 'AdminNav',
    data() {
        return {
            locale
        }
    }
}
</script>