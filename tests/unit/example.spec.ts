import { shallowMount } from "@vue/test-utils";
import KansouForms from "@/components/KansouForms.vue";
import BootstrapVue from "bootstrap-vue";
import Vue from "vue";

Vue.use(BootstrapVue);

describe("KansouForms.vue", () => {
  it("テストが動くこと", () => {
    const wrapper = shallowMount(KansouForms);
    expect(wrapper.exists()).toBeTruthy();
  });
});
