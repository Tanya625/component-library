/* eslint-disable max-len */
/** ***Voyager Select Custom component*******/
const CONST_SELECT_OPTIONS = 'options';
const CONST_SELECT_NAME = 'name';
const CONST_SELECT_SELECTED_OPTION = 'selected-option';
const CONST_SELECT_NAMESPACE = 'voyager-select';
class Select extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({
            mode: 'open',
        });
        this.options = this.getAttribute(CONST_SELECT_OPTIONS);
        this.selectedOption = this.getAttribute(CONST_SELECT_SELECTED_OPTION);
        this.name = this.getAttribute(CONST_SELECT_NAME);
    }

    attributeChangedCallback(atrName, oldValue, newValue) {
        switch (atrName) {
        case CONST_SELECT_OPTIONS:
            this.options = newValue || CONST_SELECT_OPTIONS;
            break;
        case CONST_SELECT_SELECTED_OPTION:
            this.selectedOption = newValue || CONST_SELECT_SELECTED_OPTION;
            break;
        case CONST_SELECT_NAME:
            this.name = newValue || CONST_SELECT_NAME;
            break;
        }
    }

    static get observedAttributes() {
        return [CONST_SELECT_OPTIONS, CONST_SELECT_SELECTED_OPTION, CONST_SELECT_NAME];
    }

    connectedCallback() {
        this.options = this.options.split(',');
        let template = `
            <style>
            @import "./assets/styles/select.css";
            </style>
            <div class="select-box-container">
            <select class="selectbox" name="${this.name}">`;
        for (let i = 0; i < this.options.length; i++) {
            if (this.selectedOption == this.options[i]) {
                template += `<option value="${this.options[i]}" selected>
                ${this.options[i]}
                </option>`;
            } else {
                template += `<option value="${this.options[i]}">
                ${this.options[i]}
                </option>`;
            }
        }
        template += '</select></div>';
        this.shadow.innerHTML = template;
    }
}

window.customElements.define(CONST_SELECT_NAMESPACE, Select);
