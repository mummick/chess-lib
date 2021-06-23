export class App {
  private readonly rootElement: HTMLElement;
  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;
  }

  async init(): Promise<void> {
  }

  async start(): Promise<void> {
    await this.init();
    this.rootElement.textContent = 'Chess lib test';
  }
}
