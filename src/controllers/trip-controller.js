import {render, RenderPosition} from "../utils/render";
import PointController from '../controllers/point-controller';
import DayComponent from "../components/day";
import DayListComponent from '../components/day-list';
import SortComponent from "../components/sort";
import NoEventsComponent from "../components/no-events.js";


const renderEventPoint = (eventListElement, event, onDataChange, onViewChange) => {
  const eventController = new PointController(eventListElement, onDataChange, onViewChange);
  eventController.render(event);

  return eventController;
};

const renderDay = (dayElement, dayComponent) => {
  const eventListElement = dayComponent.getElement().querySelector(`.trip-events__list`);

  render(dayElement.getElement(), dayComponent, RenderPosition.BEFOREEND);

  dayComponent.getDay().forEach((event) => {
    renderEventPoint(eventListElement, event);
  });
};

const renderDayList = (dayListElement, dayList, events) => {
  const groupByDay = events.reduce((acc, event) => {
    const date = event.date.from.getDate();
    const month = event.date.from.getMonth();
    const year = event.date.from.getFullYear();
    const key = `${date}-${month}-${year}`;

    acc[key] = acc[key] || [];
    acc[key] = [...acc[key], event];

    return acc;
  }, {});

  render(dayListElement, dayList, RenderPosition.BEFOREEND);

  Object.values(groupByDay)
    .forEach((day, index) => {
      renderDay(dayList, new DayComponent(day, index));
    });
};


export default class TripController {
  constructor(container) {
    this._container = container;

    this._events = [];
    this._showedEventControllers = [];
    this._noEventsComponent = new NoEventsComponent();
    this._sortComponent = new SortComponent();
    this._dayComponent = new DayComponent();
    this._dayListComponent = new DayListComponent();

    this._onDataChange = this._onDataChange.bind(this);
    this._onViewChange = this._onViewChange.bind(this);

  }

  render(events) {
    const container = this._container.getElement();

    if (events.length === 0) {
      render(container, this._noEventsComponent, RenderPosition.BEFOREEND);
    } else {
      render(container, this._sortComponent, RenderPosition.BEFOREEND);
      renderDayList(container, this._dayListComponent, events);
    }

    // const newEvents = renderEvents(taskListElement, sortedTasks, this._onDataChange, this._onViewChange);
    // this._showedEventControllers = newEvents;
  }

  _onViewChange() {
    this._showedEventControllers.forEach((it) => it.setDefaultView());
  }

  _onDataChange(eventController, oldData, newData) {
    const index = this._events.findIndex((it) => it === oldData);

    if (index === -1) {
      return;
    }

    this._events = [].concat(this._events.slice(0, index), newData, this._events.slice(index + 1));

    eventController.render(this._events[index]);
  }

}


