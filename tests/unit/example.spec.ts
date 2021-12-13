import { shallowMount } from "@vue/test-utils";
import KansouForms from "@/components/KansouForms.vue";
import BootstrapVue, { BFormInput } from "bootstrap-vue";
import Vue from "vue";

Vue.use(BootstrapVue);

describe("KansouForms.vue", () => {
  it("必須入力項目に関するテスト", () => {
    const wrapper = shallowMount(KansouForms);
    expect(wrapper.findAllComponents(BFormInput).at(0).classes()).toContain(
      "is-invalid"
    );
  });
});
