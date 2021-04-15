import { mount } from '@vue/test-utils'
import ToTopButton from '@/components/shared/ToTopButton'

describe('ToTopButton component test', () => {
  it('emits scrollTo event', () => {
    const wrapper = mount(ToTopButton)
    wrapper.vm.clickToScroll()
    expect(wrapper.emitted().scrollTo).toBeTruthy()
  })
})
