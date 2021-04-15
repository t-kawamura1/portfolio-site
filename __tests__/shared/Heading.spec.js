import { mount } from '@vue/test-utils'
import Heading from '@/components/shared/Heading'

let wrapper
beforeEach(() => {
  wrapper = mount(Heading, {
    propsData: {
      heading: 'test-heading'
    }
  })
})

describe('Heading component test', () => {
  it('renders heading props', () => {
    console.log(wrapper.html())
    expect(wrapper.text()).toBe('test-heading')
  })
})
