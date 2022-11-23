var _ = require('../util')

module.exports = {

  isLiteral: true,

  bind: function () {
    var vm = this.el.__kdu__
    if (!vm) {
      process.env.NODE_ENV !== 'production' && _.warn(
        'k-ref should only be used on a component root element.'
      )
      return
    }
    // If we get here, it means this is a `k-ref` on a
    // child, because parent scope `k-ref` is stripped in
    // `k-component` already. So we just record our own ref
    // here - it will overwrite parent ref in `k-component`,
    // if any.
    vm._refID = this.expression
  }
}
