import { FrameworkConfiguration } from 'aurelia-framework';
import { LeakyInput } from "./leaky-input";

export function configure(config: FrameworkConfiguration) {
  config.globalResources([LeakyInput]);
}
