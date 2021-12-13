<template>
  <div class="home"><kansou-forms /></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import KansouForms from "../components/KansouForms.vue";

@Component({
  components: { KansouForms },
})
export default class Home extends Vue {}
</script>
