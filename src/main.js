import {render, RenderPosition} from "./utils/render.js";

import MenuComponent from './components/menu';
import TripPriceComponent from "./components/trip-price";
import TripInfoComponent from './components/trip-info';
import FilterController from "./controllers/filter-controller.js";
import DayListComponent from './components/day-list';

import TripListController from "./controllers/trip-list-controller";
import PointsModel from "./models/points.js";

import {generateEvents} from './data/events';

const price = 1200;

const EVENT_COUNT = 20;
const events = generateEvents(EVENT_COUNT);

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);
render(siteHeaderElement, new SiteMenuComponent(), RenderPosition.BEFOREEND);

onload = function () {
  const tripMain = document.getElementsByClassName(`trip-main`)[0];
  render(tripMain, new TripPriceComponent(price), RenderPosition.AFTERBEGIN);
  render(tripMain, new TripInfoComponent(), RenderPosition.AFTERBEGIN);

  const tripControls = document.getElementsByClassName(`trip-controls`)[0];
  render(tripControls, new MenuComponent(), RenderPosition.BEFOREEND);

  const filterController = new FilterController(siteMainElement, PointsModel);
  filterController.render();

  const tripEvents = document.getElementsByClassName(`trip-events`)[0];

  const dayListComponent = new DayListComponent();
  const tripController = new TripListController(dayListComponent);

  render(tripEvents, dayListComponent, RenderPosition.BEFOREEND);
  tripController.render(events);
};
