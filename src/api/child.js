var _ = require('../util')

/**
 * Create a child instance that prototypally inherits
 * data on parent. To achieve that we create an intermediate
 * constructor with its prototype pointing to parent.
 *
 * @param {Object} opts
 * @param {Function} [BaseCtor]
 * @return {Kdu}
 * @public
 */

exports.$addChild = function (opts, BaseCtor) {
  BaseCtor = BaseCtor || _.Kdu
  opts = opts || {}
  var ChildKdu
  var parent = this
  // transclusion context
  var context = opts._context || parent
  var inherit = opts.inherit !== undefined
    ? opts.inherit
    : BaseCtor.options.inherit
  if (inherit) {
    var ctors = context._childCtors
    ChildKdu = ctors[BaseCtor.cid]
    if (!ChildKdu) {
      ChildKdu = function KduComponent (options) {
        this.constructor = ChildKdu
        this._init(options)
      }
      ChildKdu.options = BaseCtor.options
      ChildKdu.linker = BaseCtor.linker
      ChildKdu.prototype = context
      ctors[BaseCtor.cid] = ChildKdu
    }
  } else {
    ChildKdu = BaseCtor
  }
  opts._parent = parent
  opts._root = parent.$root
  var child = new ChildKdu(opts)
  return child
}
