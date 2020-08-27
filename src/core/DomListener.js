import { capitalize } from "./utils"

export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error(`No $root provided for DomListener`)
        }
        this.$root = $root // тот элемент, на который мы будем вешать события из других компонентов, как я думаю, его мы передаем из excelComponent
        this.listeners = listeners
        // console.log($root, 'test')
        // console.log($root, "DomListener")
    }
    initDOMListeners() {
        // console.log(this.listeners, "cool")
        this.listeners.forEach((listener) => {
            // console.log(listener)
            const method = getMethodName(listener)
            if (!this[method]) {
                throw new Error(`method ${method} is not implemented in ${this.name || ""}`)
            }

            this.$root.on(listener, this[method].bind(this))
        })
    }
    removeDOMListeners() {

    }
}
function getMethodName(eventName) {
    return "on" + capitalize(eventName)
}