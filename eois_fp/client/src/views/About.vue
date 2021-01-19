<template>
  <div class="About">
      <h4>Общая информация</h4>
      <div>
          <h5>Фамилия</h5>
          <p>{{USER_INFO.surname}}</p>
      </div>
      <div>
          <h5>Имя</h5>
          <p>{{USER_INFO.name}}</p>
      </div>
      <div>
          <h5>Отчество</h5>
          <p>{{USER_INFO.patronymic}}</p>
      </div>
      <div>
          <h5>Дата рождения</h5>
          <p>{{USER_INFO.birthday}}</p>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'About',
    computed: {
        ...mapGetters([
            'USER',
            'USER_INFO'
        ])
    },
    methods: {
        ...mapActions([
            'GET_USER_INFO'
        ]),
    },
    mounted: async function() {
        if (this.USER && this.USER.id > 0) {
            await this.GET_USER_INFO(this.USER.id);
        }
    }
}
</script>
<style>

</style>