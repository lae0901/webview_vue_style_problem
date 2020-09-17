<!-- App.vue   -->

<template>
	<div id="app">
		<h1>h1 demo</h1>
		<h3>h3 demo</h3>
        <div>
            <span class="bash">visual studio code</span>
        </div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

@Component({
    components: { }
})

export default class App extends Vue {}
</script>

<style>

h1 {
	text-align: center;
}

.bash {
    font-size:3em;
    color:red;
}
</style>
