<template>
	<div id="app">
		<Navigaton/>
		<router-view/>
	</div>
</template>

<script>
import Navigaton from '../src/components/Navigation.vue'
export default {
	components: {
		Navigaton
	}
}
</script>

<style>
	#app {
		margin: 0;
		padding: 0;
		background-color: dimgray;
	}
</style>