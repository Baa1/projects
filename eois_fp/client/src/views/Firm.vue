<template>
  <div>
    <FirmNav/>
    <AddFirmForm/>
  </div>
</template>

<script>
import FirmNav from '../components/Navs/FirmNav'
import AddFirmForm from '../components/Forms/AddFirmForm'
export default {
    name: 'Firm',
    components: {
      FirmNav,
      AddFirmForm
    }
}
</script>

<style>

</style>