import { Router, RouterConfiguration } from "aurelia-router";

export class App {
  public message: string = 'Hello World!';
  public router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      { route: ["", "home"], moduleId: "home", title: "home", name: "home", nav: true },
      { route: "second", moduleId: "second", title: "second", name: "second", nav: true }
    ]);

    this.router = router;
  }
}
