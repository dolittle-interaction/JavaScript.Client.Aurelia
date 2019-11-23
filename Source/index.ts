/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { PLATFORM } from 'aurelia-pal';
import { FrameworkConfiguration } from 'aurelia-framework';

export * from './commands/CommandCustomAttribute';
export function configure(config: FrameworkConfiguration) {
    config.globalResources(PLATFORM.moduleName('./commands/CommandCustomAttribute'));
}