
function use(...requires) {
    return (ComposedComponent) => {
        let componentWillMount = ComposedComponent.prototype.componentWillMount;
        ComposedComponent.prototype.componentWillMount = function() {
            requires.forEach(r => r.use());
            if (componentWillMount) {
                componentWillMount.apply(this, arguments);
            }
        };

        let componentWillUnmount = ComposedComponent.prototype.componentWillUnmount;
        ComposedComponent.prototype.componentWillUnmount = function() {
            requires.forEach(r => r.unuse());
            if (componentWillUnmount) {
                componentWillUnmount.apply(this, arguments);
            }
        };

        return ComposedComponent;
    };
}


export default use;
