import EventPointComponent from "../components/event-point";
import EventEditComponent from "../components/event-edit";
import {render, replace, RenderPosition} from "../utils/render.js";

const Mode = {
  DEFAULT: `default`,
  EDIT: `edit`,
};

export default class EventController {
  constructor(container, onDataChange, onViewChange) {
    this._container = container;

    this._onDataChange = onDataChange;
    this._onViewChange = onViewChange;
    this._mode = Mode.DEFAULT;
    this._eventPointComponent = null;
    this._eventEditComponent = null;

    this._keyPressHandler = this._keyPressHandler.bind(this);
  }

  render(event) {
    const oldEventPointComponent = this._eventPointComponent;
    const oldEventEditComponent = this._eventEditComponent;

    this._eventPointComponent = new EventPointComponent(event);
    this._eventEditComponent = new EventEditComponent(event);

    this._eventPointComponent.setOpenButtonClickHandler(() => {
      this._editFormOpen();
      document.addEventListener(`keydown`, this._keyPressHandler);
    });

    this._eventEditComponent.setSubmitHandler((e) => {
      e.preventDefault();
      this._editFormClose();
    });

    this._eventEditComponent.setAddToFavoriteHandler(() => {
    });

    if (oldEventPointComponent && oldEventEditComponent) {
      replace(this._eventPointComponent, oldEventPointComponent);
      replace(this._eventEditComponent, oldEventEditComponent);
    } else {
      render(this._container, this._eventPointComponent, RenderPosition.BEFOREEND);
    }
  }

  setDefaultView() {
    if (this._mode !== Mode.DEFAULT) {
      this._editFormClose();
    }
  }

  _editFormClose() {
    document.removeEventListener(`keydown`, this._keyPressHandler);
    this._eventEditComponent.reset();
    replace(this._eventPointComponent, this._eventEditComponent);
    this._mode = Mode.DEFAULT;
  }

  _editFormOpen() {
    // this._onViewChange();
    replace(this._eventEditComponent, this._eventPointComponent);
    this._mode = Mode.EDIT;
  }

  _keyPressHandler(e) {
    if (e.keyCode === 27) {
      this._editFormClose(e);
      document.removeEventListener(`keydown`, this._keyPressHandler);
    }
  }


}
