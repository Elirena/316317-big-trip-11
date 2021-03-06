import AbstractComponent from "./abstract-component.js";

const createFilter = (filter, isChecked) => {
  const name = filter.item;
  return (
    ` <div class="trip-filters__filter">
          <input 
            id="filter-${name}" 
            class="trip-filters__filter-input  visually-hidden" 
            type="radio" 
            name="trip-filter" 
            value="${name}" 
             ${isChecked ? `checked` : ``}
           >
          <label class="trip-filters__filter-label" for="filter-everything">${name}</label>
      </div>
`);
};

const createFilterTemplate = (filters) => {
  const filtersData = filters.map((item, i) => createFilter(item, i === 0)).join(`\n`);
  return `<form class="trip-filters" action="#" method="get">
             ${filtersData}
              <button class="visually-hidden" type="submit">Accept filter</button>
          </form>`;
};

export default class Filter extends AbstractComponent {
  constructor(filters) {
    super();

    this._filters = filters;
  }

  getTemplate() {
    return createFilterTemplate(this._filters);
  }
}
