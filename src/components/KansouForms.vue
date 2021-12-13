<template>
  <b-form class="m-5">
    <b-form-group id="kind-group" label="種類">
      <b-form-select id="kind-select" v-model="form.kind" />
    </b-form-group>
    <b-form-group id="title-group" label="タイトル"
      ><b-form-input
        id="title-form"
        data-test="title"
        v-model="form.title"
        :state="title"
      />
    </b-form-group>
    <b-form-group id="link-group" label="URLリンク"
      ><b-form-input id="link-form" v-model="form.link" />
    </b-form-group>
    <b-form-group id="emort-group" label="気持ち"
      ><b-form-select id="emort-form" v-model="form.emort" />
    </b-form-group>
    <b-form-group id="description-group" label="どんなところが"
      ><b-form-textarea
        id="description-form"
        v-model="form.description"
        :state="description"
      />
    </b-form-group>
    <b-form-group id="emotion-group" label="何を感じたか"
      ><b-form-textarea id="emotion-form" v-model="form.emotion" />
    </b-form-group>
    <b-form-group id="complement-group" label="補足"
      ><b-form-textarea id="complement-form" v-model="form.complement" />
    </b-form-group>
    <b-form-row>
      <b-col cols="10" />
      <b-col cols="2">
        <b-button pill type="submit" variant="primary" class="float-right">
          感想文をつくる
        </b-button>
      </b-col>
    </b-form-row>
  </b-form>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class KansouForms extends Vue {
  form = {
    kind: null,
    title: "",
    link: "",
    emort: "",
    description: "",
    emotion: "",
    complement: "",
  };

  get title(): boolean {
    return this.form.title !== "";
  }

  get description(): boolean {
    return this.form.description !== "";
  }
}
</script>
