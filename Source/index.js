import { PLATFORM } from 'aurelia-pal';

export * from './commands';

export function configure(config) {
    config.globalResources(PLATFORM.moduleName('./commands/CommandCustomAttribute'));
}