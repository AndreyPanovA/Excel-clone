import { $ } from "../../core/dom"

export class Excel {
    // Просто выводит HTML =  render, он собирает данные из всех компонентов и выводит 
    constructor(selector, options) {
        this.$el = document.querySelector(selector)
        this.components = options.components || []
    }
    getRoot() {
        // Начало
        const $root = $.create("div", "excel")
        // const $root = document.createElement("div")
        // $root.classList.add("excel")
        // Конец
        this.components.forEach(Component => {
            // Начало
            const $el = $.create("div", Component.className)
            //  const $el = document.createElement("div") // внутрь него будем складывать наш шаблон
            // $el.classList.add(Component.className) // присваиваем базовый класс нашему контейнеру
            // Конец
            const component = new Component($el) // наследник от Excel компонента
            $el.innerHTML = component.toHTML()
            $root.append($el)
            //  

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
