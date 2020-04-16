/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/event-edit.js":
/*!**************************************!*\
  !*** ./src/components/event-edit.js ***!
  \**************************************/
/*! exports provided: eventEdit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventEdit", function() { return eventEdit; });
/* harmony import */ var _data_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/events */ "./src/data/events.js");


const eventEdit = (eventEdition) => {
  // const {type, date, offers, price, duration, isChecked} = eventEdition;
  const {description, destination, type, date, offer, price, duration} = eventEdition;

  const transfer = [`taxi`, `bus`, `train`, `ship`, `transport`, `drive`, `flight`];
  const activity = [`check-in`, `sightseeing`, `restaurant`];


  const getEventType = (name) => {
    return `<div class="event__type-item">
      <input id="event-type-${name}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value=${name}>
      <label class="event__type-label  event__type-label--${name}" for="event-type-${name}-1">${name}</label>
    </div>`;
  };
  const getOfferItem = (item, isChecked) => {
    return `<div class="event__offer-selector">
                <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked=${isChecked || false}>
                   <label class="event__offer-label" for="event-offer-luggage-1">
                  <span class="event__offer-title">${item.name}</span>
                 +
               €&nbsp;<span class="event__offer-price">${item.price}</span>
            </label>
         </div>`;
  };

  return `<form class="event  event--edit" action="#" method="post">
                    <header class="event__header">
                      <div class="event__type-wrapper">
                        <label class="event__type  event__type-btn" for="event-type-toggle-1">
                          <span class="visually-hidden">Choose event type</span>
                          <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
                        </label>
                        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">
                        <div class="event__type-list">
                          <fieldset class="event__type-group">
                            <legend class="visually-hidden">Transfer</legend>
                            
                            {transfer}
                            
                          </fieldset>
                          <fieldset class="event__type-group">
                            <legend class="visually-hidden">Activity</legend>

                         {activity}
                            
                          </fieldset>
                        </div>
                      </div>

                      <div class="event__field-group  event__field-group--destination">
                        <label class="event__label  event__type-output" for="event-destination-1">
                          type
                        </label>
                        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Chamonix" list="destination-list-1">
                        
                        <datalist id="destination-list-1">
                         ${ _data_events__WEBPACK_IMPORTED_MODULE_0__["destinations"].map((item) => `<option value=${item} key=${item}>${item}</option>`)}
                        </datalist>

                      </div>

                      <div class="event__field-group  event__field-group--time">
                        <label class="visually-hidden" for="event-start-time-1">
                          From
                        </label>
                        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value=${date || `18/03/19 12:25`}>
                        —
                        <label class="visually-hidden" for="event-end-time-1">
                          To
                        </label>
                        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value=${date || `18/03/19 13:35`}>
                      </div>

                      <div class="event__field-group  event__field-group--price">
                        <label class="event__label" for="event-price-1">
                          <span class="visually-hidden">Price</span>
                          €
                        </label>
                        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value=${price || 160}>
                      </div>

                      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                      <button class="event__reset-btn" type="reset">Delete</button>

                      <input id="event-favorite-1" class="event__favorite-checkbox  visually-hidden" type="checkbox" name="event-favorite" checked=${isChecked || false}}
                      <label class="event__favorite-btn" for="event-favorite-1">
                        <span class="visually-hidden">Add to favorite</span>
                        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
                        </svg>
                      </label>

                      <button class="event__rollup-btn" type="button">
                        <span class="visually-hidden">Open event</span>
                      </button>
                    </header>

                    <section class="event__details">
                      <section class="event__section  event__section--offers">
                        <h3 class="event__section-title  event__section-title--offers">Offers</h3>

                        <div class="event__available-offers">
<!--                        {offers.map()}-->
                        </div>
                      </section>
                    </section>
                  </form>`;
};


/***/ }),

/***/ "./src/components/event-form.js":
/*!**************************************!*\
  !*** ./src/components/event-form.js ***!
  \**************************************/
/*! exports provided: createEventForm, eventForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEventForm", function() { return createEventForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventForm", function() { return eventForm; });
const createEventForm = (event) => {
  const {description, destination, type, date, offer, price, duration} = event;

  console.log(description);

  return `<li class="trip-events__item">
                  <div class="event">
                    <div class="event__type">
                      <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
                    </div>
                    <h3 class="event__title">${type} in ${destination}</h3>

                    <div class="event__schedule">
                      <p class="event__time">
                        <time class="event__start-time" datetime="${date.from}">${date.from.getHours()}:${date.from.getMinutes()}</time>
                        —
                        <time class="event__end-time" datetime="${date.to}">${date.to.getHours()}:${date.to.getMinutes()}</time>
                      </p>
                      <p class="event__duration">${duration} часов</p>
                    </div>

                    <p class="event__price">
                      €&nbsp;<span class="event__price-value">${price}</span>
                    </p>

                    <h4 class="visually-hidden">Offers:</h4>
                    <ul class="event__selected-offers">
                      <li class="event__offer">
                        <span class="event__offer-title">${offer[0]}</span>
                        +
                        €&nbsp;<span class="event__offer-price">${offer[1]}</span>
                       </li>
                    </ul>

                    <button class="event__rollup-btn" type="button">
                      <span class="visually-hidden">Open event</span>
                    </button>
                  </div>
                </li>`;
};

const eventForm = (events) => {
  const eventData = events.map((item) => createEventForm(item)).join(`\n`);
  return ` ${eventData} `;
};



/***/ }),

/***/ "./src/components/filter.js":
/*!**********************************!*\
  !*** ./src/components/filter.js ***!
  \**********************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
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

const filter = (filters) => {
  const filtersData = filters.map((item, i) => createFilter(item, i === 0)).join(`\n`);
  return `<form class="trip-filters" action="#" method="get">
             ${filtersData}
              <button class="visually-hidden" type="submit">Accept filter</button>
          </form>`;
};





/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! exports provided: price, tripInfo, menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _price_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./price.js */ "./src/components/price.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "price", function() { return _price_js__WEBPACK_IMPORTED_MODULE_0__["price"]; });

/* harmony import */ var _trip_info_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trip-info.js */ "./src/components/trip-info.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tripInfo", function() { return _trip_info_js__WEBPACK_IMPORTED_MODULE_1__["tripInfo"]; });

/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/components/menu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return _menu_js__WEBPACK_IMPORTED_MODULE_2__["menu"]; });











/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/*! exports provided: menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return menu; });
const menu = () => {
  return `<nav class="trip-controls__trip-tabs  trip-tabs">
  <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
  <a class="trip-tabs__btn" href="#">Stats</a>
  </nav>`;
};




/***/ }),

/***/ "./src/components/price.js":
/*!*********************************!*\
  !*** ./src/components/price.js ***!
  \*********************************/
/*! exports provided: price */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "price", function() { return price; });
const price = () => {
  return `<p class="trip-info__cost">
              Total: €&nbsp;<span class="trip-info__cost-value">1230</span>
           </p>`;
};




/***/ }),

/***/ "./src/components/sort.js":
/*!********************************!*\
  !*** ./src/components/sort.js ***!
  \********************************/
/*! exports provided: sort */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sort", function() { return sort; });
const createSort = (sort, isChecked) => {
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

const sort = (sorts) => {
  const sortData = sorts.map((item, i) => createSort(item, i === 0)).join(`\n`);
  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
            ${sortData}
          </form>`;
};



/***/ }),

/***/ "./src/components/trip-info.js":
/*!*************************************!*\
  !*** ./src/components/trip-info.js ***!
  \*************************************/
/*! exports provided: tripInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tripInfo", function() { return tripInfo; });
const tripInfo = () => {
  return `<div class="trip-info__main">
              <h1 class="trip-info__title">Amsterdam — Chamonix — Geneva</h1>

              <p class="trip-info__dates">Mar 18&nbsp;—&nbsp;20</p>
           </div>`;
};




/***/ }),

/***/ "./src/data/events.js":
/*!****************************!*\
  !*** ./src/data/events.js ***!
  \****************************/
/*! exports provided: destinations, offers, generateEvent, generateEvents, eventEditData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destinations", function() { return destinations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offers", function() { return offers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateEvent", function() { return generateEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateEvents", function() { return generateEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventEditData", function() { return eventEditData; });
/* harmony import */ var _place_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./place-description */ "./src/data/place-description.js");


const types = [`Taxi`, `Bus`, `Train`, `Ship`, `Transport`, `Drive`, `Flight`, `Check`, `Sightseeing`, `Restaurant`];
const destinations = [`Amsterdam`, `Geneva`, `Chamonix`];
const offers = [
  [`Add luggage`, 30],
  [`Switch to comfort class`, 100],
  [`Add meal`, 15],
  [`Choose seats`, 5],
  [`Travel by train`, 40]
];

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);
  return array[randomIndex];
};

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const getRandomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const generateEvent = () => {
  const picture = `http://picsum.photos/248/152?r=${Math.random()}`;
  const description = Object(_place_description__WEBPACK_IMPORTED_MODULE_0__["getDescription"])();
  const destination = getRandomArrayItem(destinations);
  const offer = getRandomArrayItem(offers);
  const type = getRandomArrayItem(types);
  const price = getRandomIntegerNumber(20, 200);

  const randomDay = getRandomDate(new Date(2020, 1, 1), new Date());
  const futureDay = new Date();
  futureDay.setTime(randomDay.getTime() + (getRandomIntegerNumber(2, 20) * 60 * 60 * 1000));

  const date = {
    from: randomDay,
    to: futureDay
  };

  const duration = Math.abs(date.to.getHours() - date.from.getHours());

  return {
    picture,
    description,
    destination,
    offer,
    type,
    date,
    price,
    duration,
  };
};

const generateEvents = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateEvent);
};

const eventEditData = () => {
  return {
    types,
    destinations,
    offers,
  };
};





/***/ }),

/***/ "./src/data/filter-values.js":
/*!***********************************!*\
  !*** ./src/data/filter-values.js ***!
  \***********************************/
/*! exports provided: generateFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilters", function() { return generateFilters; });
const filterValues = [
  `everything`, `future`, `past`
];

const generateFilters = () => {
  return filterValues.map((item) => {
    return {
      item,
    };
  });
};



/***/ }),

/***/ "./src/data/place-description.js":
/*!***************************************!*\
  !*** ./src/data/place-description.js ***!
  \***************************************/
/*! exports provided: getDescription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDescription", function() { return getDescription; });
const descriptions = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);
  return array[randomIndex];
};

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};


const getDescription = () => {
  const randomDescription = [];
  const descriptionLength = getRandomIntegerNumber(1, 5);
  for (let i = 0; i <= descriptionLength; i++) {
    randomDescription.push(getRandomArrayItem(descriptions));
  }
  return randomDescription;
};



/***/ }),

/***/ "./src/data/sort-values.js":
/*!*********************************!*\
  !*** ./src/data/sort-values.js ***!
  \*********************************/
/*! exports provided: generateSorts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateSorts", function() { return generateSorts; });
const sortValues = [
  `day`, `event`, `time`, `price`, `offers`
];

const generateSorts = () => {
  return sortValues.map((item) => {
    return {
      item,
    };
  });
};



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/index.js */ "./src/components/index.js");
/* harmony import */ var _components_sort_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sort.js */ "./src/components/sort.js");
/* harmony import */ var _data_sort_values__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/sort-values */ "./src/data/sort-values.js");
/* harmony import */ var _components_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/filter.js */ "./src/components/filter.js");
/* harmony import */ var _data_filter_values__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data/filter-values */ "./src/data/filter-values.js");
/* harmony import */ var _components_event_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/event-form */ "./src/components/event-form.js");
/* harmony import */ var _data_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data/events */ "./src/data/events.js");
/* harmony import */ var _components_event_edit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/event-edit */ "./src/components/event-edit.js");




const sorts = Object(_data_sort_values__WEBPACK_IMPORTED_MODULE_2__["generateSorts"])();



const filters = Object(_data_filter_values__WEBPACK_IMPORTED_MODULE_4__["generateFilters"])();



const EVENT_COUNT = 15;
const events = Object(_data_events__WEBPACK_IMPORTED_MODULE_6__["generateEvents"])(EVENT_COUNT);


const eventEdition = Object(_data_events__WEBPACK_IMPORTED_MODULE_6__["generateEvents"])(1);

function renderElements(container, position, element) {
  container.insertAdjacentHTML(position, element);
}


window.onload = function () {
  const tripMain = window.document.getElementsByClassName(`trip-main`)[0];
  renderElements(tripMain, `afterbegin`, Object(_components_index_js__WEBPACK_IMPORTED_MODULE_0__["price"])());
  renderElements(tripMain, `afterbegin`, Object(_components_index_js__WEBPACK_IMPORTED_MODULE_0__["tripInfo"])());

  const tripControls = window.document.getElementsByClassName(`trip-controls`)[0];
  renderElements(tripControls, `beforeend`, Object(_components_index_js__WEBPACK_IMPORTED_MODULE_0__["menu"])());
  renderElements(tripControls, `beforeend`, Object(_components_filter_js__WEBPACK_IMPORTED_MODULE_3__["filter"])(filters));

  const tripEvents = window.document.getElementsByClassName(`trip-events`)[0];
  renderElements(tripEvents, `beforeend`, Object(_components_sort_js__WEBPACK_IMPORTED_MODULE_1__["sort"])(sorts));

  renderElements(tripEvents, `beforeend`, Object(_components_event_edit__WEBPACK_IMPORTED_MODULE_7__["eventEdit"])(events));
  renderElements(tripEvents, `beforeend`, Object(_components_event_form__WEBPACK_IMPORTED_MODULE_5__["eventForm"])(eventEdition));
};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map