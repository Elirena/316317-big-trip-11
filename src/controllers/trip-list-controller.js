import {render, RenderPosition} from "../utils/render";
import PointController from '../controllers/point-controller';
import DayComponent from "../components/day";
import DayListComponent from '../components/day-list';
import SortComponent from "../components/sort";
import NoEventsComponent from "../components/no-events.js";
import PointController, {Mode as PointControllerMode, EmptyTask} from "./point-controller.js";

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


export default class TripListController {
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
    this._onFilterChange = this._onFilterChange.bind(this);

    this._pointsModel.setFilterChangeHandler(this._onFilterChange);
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

  _removePoints() {
    this._showedPointControllers.forEach((pointController) => pointController.destroy());
    this._showedPointControllers = [];
  }

  _updatePoints(count) {
    this._removePoints();
    this._renderPoints(this._pointsModel.getPoints().slice(0, count));
    this._renderLoadMoreButton();
  }
  _onViewChange() {
    this._showedPointControllers.forEach((it) => it.setDefaultView());
  }

  _onDataChange(eventController, oldData, newData) {
    // if (oldData === EmptyTask) {
    //   this._creatingTask = null;
    //   if (newData === null) {
    //     taskController.destroy();
    //     this._updateTasks(this._showingTasksCount);
    //   } else {
    //     this._tasksModel.addTask(newData);
    //     taskController.render(newData, TaskControllerMode.DEFAULT);
    //
    //     if (this._showingTasksCount % SHOWING_TASKS_COUNT_BY_BUTTON === 0) {
    //       const destroyedTask = this._showedTaskControllers.pop();
    //       destroyedTask.destroy();
    //     }
    //
    //     this._showedTaskControllers = [].concat(taskController, this._showedTaskControllers);
    //     this._showingTasksCount = this._showedTaskControllers.length;
    //
    //     this._renderLoadMoreButton();
    //   }
    // } else if (newData === null) {
    //   this._tasksModel.removeTask(oldData.id);
    //   this._updateTasks(this._showingTasksCount);
    // } else {
    //   const isSuccess = this._tasksModel.updateTask(oldData.id, newData);
    //
    //   if (isSuccess) {
    //     taskController.render(newData, TaskControllerMode.DEFAULT);
    //   }
  }

  _onSortTypeChange(sortType) {
    const sortedPoints = getSortedPoints(this._pointsModel.getPoints(), sortType, 0);

    this._removePoints();
    this._renderPoints(sortedPoints);
  }

  _onFilterChange() {
    this._updatePoints();
  }
}


