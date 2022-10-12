export class View {
    #element;

    constructor(selector) {
        const element = document.querySelector(selector);
        if (element) {
            this.#element = element;
        } else {
            throw Error(`Selector ${selector} doesn't exist in DOM`);
        }
    }

    update(model) {
        let template = this.template(model);
        this.#element.innerHTML = template;
    }
    
    template(){
        
    }
}