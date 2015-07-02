"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function use() {
    for (var _len = arguments.length, requires = Array(_len), _key = 0; _key < _len; _key++) {
        requires[_key] = arguments[_key];
    }

    return function (ComposedComponent) {
        var componentWillMount = ComposedComponent.prototype.componentWillMount;
        ComposedComponent.prototype.componentWillMount = function () {
            requires.forEach(function (r) {
                return r.use();
            });
            if (componentWillMount) {
                componentWillMount.apply(this, arguments);
            }
        };

        var componentWillUnmount = ComposedComponent.prototype.componentWillUnmount;
        ComposedComponent.prototype.componentWillUnmount = function () {
            requires.forEach(function (r) {
                return r.unuse();
            });
            if (componentWillUnmount) {
                componentWillUnmount.apply(this, arguments);
            }
        };

        return ComposedComponent;
    };
}

exports["default"] = use;
module.exports = exports["default"];
