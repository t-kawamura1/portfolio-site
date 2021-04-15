import { shallowMount } from '@vue/test-utils'
import PortfolioItem from '@/components/home-view/PortfolioItem'

let wrapper
beforeEach(() => {
  wrapper = shallowMount(PortfolioItem, {
    propsData: {
      portfolioImgSrc: '@/assets/test.jpg',
      portfolioTitle: 'test-app',
      portfolioUrl: 'https://testapp.com',
      portfolioText: 'test-app-text'
    },
    stubs: {
      ButtonBright: '<div class="button-bright" @click="$emit(\'showMoreDetail\')">ボタンスタブ</div>'
    }
  })
})

describe('PortfolioItem component test', () => {
  it('renders portfolioImgSrc props', () => {
    expect(wrapper.find('img').attributes('src')).toBe('@/assets/test.jpg')
  })

  it('renders portfolioTitle props', () => {
    expect(wrapper.find('.portfolio-title').text()).toBe('test-app')
  })

  it('renders portfolioUrl props', () => {
    expect(wrapper.find('.portfolio-link').text()).toBe('https://testapp.com')
  })

  it('renders portfolioText props', () => {
    expect(wrapper.find('.portfolio-text').text()).toBe('test-app-text')
  })

  it('calls toPortfolioDetail method when button-bright is clicked', () => {
    const toPortfolioDetail = jest.fn()
    wrapper.setMethods({ toPortfolioDetail })
    wrapper.find('.button-bright').trigger('click')
    expect(toPortfolioDetail).toBeCalled()
  })
})
