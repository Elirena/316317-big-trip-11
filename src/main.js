import {render, RenderPosition} from "./utils.js";

import MenuComponent from './components/menu';
import SortComponent from './components/sort';
import TripPriceComponent from "./components/trip-price";
import TripInfoComponent from './components/trip-info';
import FilterComponent from './components/filter';
import EventEditComponent from './components/event-edit';
import EventPointComponent from './components/event-point';
import DayListComponent from './components/day-list';
import DayComponent from './components/day';
import NoEventsComponent from "./components/no-events.js";

import {generateSorts} from './data/sort-values';
const sorts = generateSorts();

import {generateFilters} from './data/filter-values';
const filters = generateFilters();

import {generateEvents} from './data/events';

const price = 1200;

const EVENT_COUNT = 20;
const events = generateEvents(EVENT_COUNT);

const renderEventPoint = (eventListElement, event) => {
  const editFormOpen = () => {
    eventListElement.replaceChild(eventEditComponent.getElement(), eventPointComponent.getElement());
    document.addEventListener(`keydown`, keyPressHandler);
  };

  const editFormClose = (e) => {
    e.preventDefault();
    eventListElement.replaceChild(eventPointComponent.getElement(), eventEditComponent.getElement());
  };

  const keyPressHandler = (e) => {
    if (e.keyCode === 27) {
      editFormClose(e);
      document.removeEventListener(`keydown`, keyPressHandler);
    }
  };

  const eventPointComponent = new EventPointComponent(event);
  eventPointComponent.setOpenButtonClickHandler(editFormOpen);

  const eventEditComponent = new EventEditComponent(event);
  const editForm = eventEditComponent.getElement();

  editForm.addEventListener(`submit`, (e) => {
    editFormClose(e);
    document.removeEventListener(`keydown`, keyPressHandler);
  });

  render(eventListElement, eventPointComponent.getElement(), RenderPosition.BEFOREEND);
};

const renderDay = (dayElement, dayComponent) => {
  const eventListElement = dayComponent.getElement().querySelector(`.trip-events__list`);

  render(dayElement, dayComponent.getElement(), RenderPosition.BEFOREEND);

  dayComponent.getDay().forEach((event) => {
    renderEventPoint(eventListElement, event);
  });
};

const renderDayList = (dayListElement, dayList) => {
  const groupByDay = events.reduce((acc, event) => {
    const date = event.date.from.getDate();
    const month = event.date.from.getMonth();
    const year = event.date.from.getFullYear();
    const key = `${date}-${month}-${year}`;

    acc[key] = acc[key] || [];
    acc[key] = [...acc[key], event];

    return acc;
  }, {});
  const dayElement = dayList.querySelector(`ul`);

  render(dayListElement, dayList, RenderPosition.BEFOREEND);

  Object.values(groupByDay)
    .forEach((day, index) => {
      renderDay(dayElement, new DayComponent(day, index));
    });
};


onload = function () {
  const tripMain = document.getElementsByClassName(`trip-main`)[0];
  render(tripMain, new TripPriceComponent(price).getElement(), RenderPosition.AFTERBEGIN);
  render(tripMain, new TripInfoComponent().getElement(), RenderPosition.AFTERBEGIN);

  const tripControls = document.getElementsByClassName(`trip-controls`)[0];
  render(tripControls, new MenuComponent().getElement(), RenderPosition.BEFOREEND);
  render(tripControls, new FilterComponent(filters).getElement(), RenderPosition.BEFOREEND);

  const tripEvents = document.getElementsByClassName(`trip-events`)[0];

  if (events.length === 0) {
    render(tripEvents, new NoEventsComponent().getElement(), RenderPosition.BEFOREEND);
  } else {
    const dayListComponent = new DayListComponent();

    render(tripEvents, new SortComponent(sorts).getElement(), RenderPosition.BEFOREEND);
    renderDayList(tripEvents, dayListComponent.getElement(), RenderPosition.BEFOREEND);
  }
};
