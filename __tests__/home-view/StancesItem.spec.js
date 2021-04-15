import { mount } from '@vue/test-utils'
import StancesItem from '@/components/home-view/StancesItem'

let wrapper
beforeEach(() => {
  wrapper = mount(StancesItem, {
    propsData: {
      stanceTitle: 'test-stance',
      stanceText: 'test-stance-text'
    }
  })
})

describe('StancesItem component test', () => {
  it('renders stanceTitle props', () => {
    expect(wrapper.find('.stance-title').text()).toBe('test-stance')
  })

  it('renders stanceText props', () => {
    expect(wrapper.find('.stance-text').text()).toBe('test-stance-text')
  })
})
