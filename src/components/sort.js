import {createElement} from "../utils.js";

export const createSortTemplate = (sorts) => {
  const sortData = sorts.map((item, i) => createSortType(item, i === 0)).join(`\n`);
  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
            ${sortData}
          </form>`;
};

const createSortType = (sort, isChecked) => {
  const sortName = sort.item;
  return (
    `<div class="trip-sort__item  trip-sort__item--${sortName}">
        <input 
            id="sort-${sortName}" 
            class="trip-sort__input visually-hidden" 
            type="radio" 
            name="trip-sort" 
            value="sort-${sortName}"
            ${isChecked ? `checked` : ``}
        />
         <label class="trip-sort__btn" for="sort-${sortName}">
            ${sortName}
              <svg class="trip-sort__direction-icon" width="8" height="10" viewBox="0 0 8 10">
                <path d="M2.888 4.852V9.694H5.588V4.852L7.91 5.068L4.238 0.00999987L0.548 5.068L2.888 4.852Z"/>
             </svg>
         </label>       
       </div>
`);
};


export default class Sort {
  constructor(sorts) {
    this._sorts = sorts;
  }

  getTemplate() {
    return createSortTemplate(this._sorts);
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
