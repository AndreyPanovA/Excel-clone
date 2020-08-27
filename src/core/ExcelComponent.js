import { DomListener } from "./DomListener";

export class ExcelComponent extends DomListener {

    constructor($root, options = {}) {
        super($root, options.listeners)
        this.name = options.name || ""
        // console.log($root, "ExcelComponent")
    }
    //Возвращаяет шаблон компонента
    toHTML() {
        return ""
    }
    init() {
        this.initDOMListeners()

    }
}