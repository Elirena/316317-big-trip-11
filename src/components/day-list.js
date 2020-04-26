import {createElement} from "../utils.js";

const generateDayList = () => {
  return `<div><ul></ul></div>`;
};

export default class DayList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return generateDayList();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
