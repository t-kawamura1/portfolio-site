import { mount } from '@vue/test-utils'
import SkillsItem from '@/components/home-view/SkillsItem'

let wrapper
beforeEach(() => {
  wrapper = mount(SkillsItem, {
    propsData: {
      skillTitle: 'test-skill',
      skillImgSrc: '@/assets/test-skill.jpg',
      skillText: 'test-skill-text'
    }
  })
})

describe('SkillsItem component test', () => {
  it('renders skillTitle props', () => {
    expect(wrapper.find('.skill-title').text()).toBe('test-skill')
  })

  it('renders skillImgSrc props', () => {
    expect(wrapper.find('img').attributes('src')).toBe('@/assets/test-skill.jpg')
  })

  it('renders skillText props', () => {
    expect(wrapper.find('.skill-text').text()).toBe('test-skill-text')
  })
})
