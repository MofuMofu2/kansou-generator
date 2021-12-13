import { mount } from "@vue/test-utils";
import KansouForms from "@/components/KansouForms.vue";
import BootstrapVue from "bootstrap-vue";
import Vue from "vue";

Vue.use(BootstrapVue);

describe("KansouForms.vue", () => {
  it("必須入力項目に関するテスト", () => {
    const wrapper = mount(KansouForms);
    // この探索方法ではclassは探せない
    // expect(wrapper.findAllComponents(BFormInput).at(0).classes()).toContain(
    //   "is-invalid"
    // );

    // タイトルが空の場合、エラーフォームの見た目になることをテスト
    expect(wrapper.find('[data-test="title"]').classes()).toContain(
      "is-invalid"
    );

    // 説明文が空の場合、エラーフォームの見た目になることをテスト
    expect(wrapper.find('[data-test="description"]').classes()).toContain(
      "is-invalid"
    );
  });
});
