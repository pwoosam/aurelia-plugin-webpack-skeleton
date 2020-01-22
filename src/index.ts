import {FrameworkConfiguration} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';

export * from './elements/hello-world';

export function configure(config: FrameworkConfiguration) {
  // Register HTML with webpack
  PLATFORM.moduleName('./elements/hello-world.html');

  config.globalResources([
    PLATFORM.moduleName('./elements/hello-world')
  ]);
}
