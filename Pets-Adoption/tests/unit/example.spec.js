import { shallowMount } from '@vue/test-utils'
import Home from "@/views/Home.vue";


describe('Home.vue', () => {
  it("reveals h1 tag", () => {
    const wrapper = shallowMount(Home);
    expect(
      wrapper.find('h1').text()).toEqual
      ('Adopt a new best friend');

    
  });
});
