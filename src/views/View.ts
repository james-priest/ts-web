// import { User } from '../models/User';

interface ModelForView {
  // on: (eventName: string, callback: () => void) => void;
  on(eventName: string, callback: () => void): void;
}

export abstract class View<T extends ModelForView> {
  abstract eventsMap(): { [key: string]: () => void };
  abstract template(): string;

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on('change', () => this.render());
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (const eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment
        .querySelectorAll(selector)
        .forEach((element) =>
          element.addEventListener(eventName, eventsMap[eventKey])
        );
    }
  }

  render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    // templateElement.content
    //   .querySelector('button')
    //   .addEventListener('click', this.onButtonClick);
    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
