import { mount } from '@vue/test-utils'
import NavListItem from '@/components/shared/NavListItem'

let wrapper
beforeEach(() => {
  wrapper = mount(NavListItem, {
    propsData: {
      navListItemName: 'TEST'
    }
  })
})

describe('NavListItem component test', () => {
  it('renders navListItemName props', () => {
    expect(wrapper.text()).toBe('TEST')
  })

  it('emits scrollTo event', () => {
    wrapper.vm.clickToScroll()
    expect(wrapper.emitted().scrollTo).toBeTruthy()
  })
})
