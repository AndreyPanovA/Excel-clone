export class Excel {
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.components = options.components || []
    }
    getRoot() {
        const $root = document.createElement("div")
        this.components.forEach(Component => {
            const component = new Component()
            // console.log(component)
            $root.insertAdjacentHTML("beforeend", component.toHTML())

        });

        return $root
    }
    render() {
        // console.log(this.$el)
        // const node = document.createElement("h1")
        // node.textContent = "Test"

        // this.$el.append(node)
        this.$el.append(this.getRoot())
    }
}
