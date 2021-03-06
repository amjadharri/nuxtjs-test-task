export const AppNavbar = () => import('../../components/AppNavbar.vue' /* webpackChunkName: "components/app-navbar" */).then(c => wrapFunctional(c.default || c))
export const BodyWrapper = () => import('../../components/BodyWrapper.vue' /* webpackChunkName: "components/body-wrapper" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const Widget = () => import('../../components/Widget.vue' /* webpackChunkName: "components/widget" */).then(c => wrapFunctional(c.default || c))
export const WidgetDetails = () => import('../../components/WidgetDetails.vue' /* webpackChunkName: "components/widget-details" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
