import AbstractComponent from "./abstract-component.js";

export const SortType = {
  DAY: `day`,
  EVENT: `event`,
  TIME: `time`,
  PRICE: `price`,
  OFFERS: `offers`
};


export const createSortTemplate = () => {
  const sortData = Object.values(SortType).map((type, i) => createSortType(type, i === 0)).join(`\n`);
  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
            ${sortData}
          </form>`;
};

const createSortType = (sortName, isChecked) => {
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


export default class Sort extends AbstractComponent {
  constructor() {
    super();

    this._currenSortType = SortType.DAY;
  }

  getTemplate() {
    return createSortTemplate();
  }

  getSortType() {
    return this._currenSortType;
  }

  setSortTypeChangeHandler(handler) {
    this.getElement().addEventListener(`click`, (e) => {
      e.preventDefault();

      if (e.target.tagName !== `A`) {
        return;
      }

      const sortType = e.target.dataset.sortType;

      if (this._currenSortType === sortType) {
        return;
      }

      this._currenSortType = sortType;

      handler(this._currenSortType);
    });
  }
}
