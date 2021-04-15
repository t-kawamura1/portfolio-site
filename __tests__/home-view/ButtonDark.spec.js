import { mount } from '@vue/test-utils'
import ButtonDark from '@/components/home-view/ButtonDark'

let wrapper
beforeEach(() => {
  wrapper = mount(ButtonDark, {
    propsData: {
      buttonText: 'test button dark'
    }
  })
})

describe('ButtonDark component test', () => {
  it('renders buttonText props', () => {
    expect(wrapper.text()).toBe('test button dark')
  })

  it('emits scrollTo event', () => {
    wrapper.vm.clickToScroll()
    expect(wrapper.emitted().scrollTo).toBeTruthy()
  })
})
