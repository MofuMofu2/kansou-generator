import { shallowMount } from "@vue/test-utils";
import KansouForms from "@/components/KansouForms.vue";

describe("KansouForms.vue", () => {
  it("テストが動くこと", () => {
    const wrapper = shallowMount(KansouForms);
    expect(wrapper.exists()).toBeTruthy();
  });
});
