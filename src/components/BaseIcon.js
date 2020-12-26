class Svg {
  constructor(icon) {
    let div = document.createElement('div')
    div.innerHTML = require('@/assets/icons/' + icon + '.svg')

    console.log(require('@/assets/icons/' + icon + '.svg'))

    let fragment = document.createDocumentFragment()
    fragment.appendChild(div)

    this.svg = fragment.querySelector('svg')
  }

  classes() {
    const baseClasses = ['fill-current', 'inline-block', 'align-baseline', 'align-with-text', '-mb-3']

    baseClasses.forEach(item => this.svg.classList.add(item))

    return this
  }

  width(width) {
    if (width) {
      this.svg.setAttribute('width', width)
    }

    return this
  }

  height(height) {
    if (height) {
      this.svg.setAttribute('height', height)
    }

    return this
  }

  toString() {
    return this.svg.outerHTML
  }
}

export default {
  name: 'SvgInline',

  props: {
    name: { type: String, required: true},
    height: {type: String, default: '18'},
    width: {type: String, default: '18'},
  },

  render(createElement) {
    return createElement('div', {
      domProps: {
        innerHTML: new Svg(this.name)
          .classes()
          .width(this.width)
          .height(this.height),
      },
    })
  },
}
