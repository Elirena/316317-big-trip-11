import AbstractComponent from "./abstract-component.js";

const generateDayList = () => {
  return `<ul></ul>`;
};

export default class DayList extends AbstractComponent {
  getTemplate() {
    return generateDayList();
  }
}
