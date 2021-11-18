<template>
  <div class="home">
    <b-form class="m-5">
      <b-form-group id="kind-group" label="種類"
        ><b-form-select id="kind-select"></b-form-select
      ></b-form-group>
      <b-form-group id="title-group" label="タイトル"
        ><b-form-input id="title-form"></b-form-input
      ></b-form-group>
      <b-form-group id="link-group" label="URLリンク"
        ><b-form-input id="link-form"></b-form-input
      ></b-form-group>
      <b-form-group id="emort-group" label="気持ち"
        ><b-form-select id="emort-form"></b-form-select
      ></b-form-group>
      <b-form-group id="description-group" label="どんなところが"
        ><b-form-textarea id="description-form"></b-form-textarea
      ></b-form-group>
      <b-form-group id="emort-group" label="何を感じたか"
        ><b-form-textarea id="emort-form"></b-form-textarea
      ></b-form-group>
      <b-form-group id="complement-group" label="補足"
        ><b-form-textarea id="complement-form"></b-form-textarea
      ></b-form-group>
      <b-form-row>
        <b-col cols="10"></b-col>
        <b-col cols="2">
          <b-button pill type="submit" variant="primary" class="float-right"
            >感想文をつくる</b-button
          >
        </b-col>
      </b-form-row>
    </b-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class Home extends Vue {}
</script>
