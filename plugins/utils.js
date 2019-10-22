import Vue from 'vue'
import _ from 'lodash'
import charming from 'charming'

Vue.mixin({
  methods: {
    trim(...selector) {
      if (selector && !_.isNil(selector) && !_.isEmpty(selector)) {
        selector.forEach((item) => {
          const element = document.querySelector(`${item}`)
          if (element) {
            element.innerHTML = element.textContent.trim()
          }
        })
      }
    },
    isExisted(object) {
      if (object && !_.isNil(object) && !_.isEmpty(object)) {
        return true
      } else {
        return false
      }
    },
    isMobile() {
      const element = document.querySelector('.is-mobile')
      let isMobile = false
      if (element) {
        const display = window.getComputedStyle(element).display
        if (display === 'block') {
          isMobile = true
        }
      }
      return isMobile
    },
    charmingText(taglineSelector, titleSelector) {
      if (this.isExisted(taglineSelector) && this.isExisted(titleSelector)) {
        this.trim(taglineSelector, titleSelector)
        charming(document.querySelector(taglineSelector))
        charming(document.querySelector(titleSelector), {
          split(string) {
            return string.split(/(\s+)/)
          }
          // setClassName: function(index) {
          //   return `char${index}`
          // }
        })
      }
    }
  }
})
