import { mount } from '@vue/test-utils'
import StancesFigureItem from '@/components/home-view/StancesFigureItem'

let wrapper
beforeEach(() => {
  wrapper = mount(StancesFigureItem, {
    data() {
      return {
        keywordList: ['test-keyword'],
        keywordTextList: ['test-keyword-text'],
        showKeyword: 'initial-keyword',
        showKeywordText: 'initial-text'
      }
    },
    methods: {
      changeKeywordBox(mouseoverKeyword, mouseoverKeywordText) {
        this.showKeyword = mouseoverKeyword;
        this.showKeywordText = mouseoverKeywordText;
      }
    }
  })
})

describe('StancesFigureItem component test', () => {
  it('renders keywordList[0] in top-element of figure', () => {
    expect(wrapper.find('.top').text()).toBe('test-keyword')
  })

  it('show the keyword in keyword-box when top-element of figure is mouse-over', (done) => {
    wrapper.find('.top').trigger('mouseover')
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('.show-keyword').text()).toBe('test-keyword')
      done()
    })
  })

  it('show the keywordText in keyword-box when top-element of figure is mouse-over', (done) => {
    wrapper.find('.top').trigger('mouseover')
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('.show-keyword-text').text()).toBe('test-keyword-text')
      done()
    })
  })
})
