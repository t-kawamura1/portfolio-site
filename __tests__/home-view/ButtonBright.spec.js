import { mount } from '@vue/test-utils'
import ButtonBright from '@/components/home-view/ButtonBright'

let wrapper
beforeEach(() => {
  wrapper = mount(ButtonBright, {
    propsData: {
      buttonText: 'test button bright'
    }
  })
})

describe('ButtonBright component test', () => {
  it('renders buttonText props', () => {
    expect(wrapper.text()).toBe('test button bright')
  })

  it('emits showMoreDetail event', () => {
    wrapper.vm.clickToMore()
    expect(wrapper.emitted().showMoreDetail).toBeTruthy()
  })
})
