import {render, RenderPosition, replace} from "../utils/render";
import EventPointComponent from "../components/event-point";
import EventEditComponent from "../components/event-edit";
import DayComponent from "../components/day";
import DayListComponent from '../components/day-list';
import SortComponent from "../components/sort";
import NoEventsComponent from "../components/no-events.js";

const renderEventPoint = (eventListElement, event) => {
  const editFormOpen = () => {
    replace(eventEditComponent, eventPointComponent);
    document.addEventListener(`keydown`, keyPressHandler);
  };

  const editFormClose = (e) => {
    e.preventDefault();
    replace(eventPointComponent, eventEditComponent);
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
  eventEditComponent.setSubmitHandler((e) => {
    editFormClose(e);
    document.removeEventListener(`keydown`, keyPressHandler);
  });


  render(eventListElement, eventPointComponent, RenderPosition.BEFOREEND);
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

    this._noEventsComponent = new NoEventsComponent();
    this._sortComponent = new SortComponent();
    this._dayComponent = new DayComponent();
    this._dayListComponent = new DayListComponent();
  }

  render(events) {
    const container = this._container.getElement();

    if (events.length === 0) {
      render(container, this._noEventsComponent, RenderPosition.BEFOREEND);
    } else {
      render(container, this._sortComponent, RenderPosition.BEFOREEND);
      renderDayList(container, this._dayListComponent, events);
    }


  }
}


