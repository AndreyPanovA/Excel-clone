export class DomListener {
    constructor($root, listeners = []) {
        if (!$root) {
            throw new Error(`No $root provided for DomListener`)
        }
        this.$root = $root // тот элемент, на который мы будем вешать события из других компонентов, как я думаю, его мы передаем из excelComponent
        this.listeners = listeners
        // console.log($root, 'test')
    }
    initDOMListeners() {
        console.log(this.listeners, "cool")

    }
    removeDOMListeners() {

    }
}