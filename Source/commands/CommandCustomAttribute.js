/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { bindable, customAttribute, inject } from 'aurelia-framework';
import { CommandCoordinator } from '@dolittle/commands';

/**
 * Represents a custom attribute that can be used to connect a command to supported elements
 */
@inject(Element, CommandCoordinator)
@customAttribute('command')
export class CommandCustomAttribute {
    @bindable({ primaryProperty: true }) command;

    /**
     * Initializes a new instance of {CommandCustomAttribute}
     * @param {HTMLElement} element The element that has the attribute
     * @param {CommandCoordinator} commandCoordinator The {CommandCoordinator} used to coordinate the commands
     */
    constructor(element, commandCoordinator) {
        this._element = element;
        this._commandCoordinator = commandCoordinator;
    }

    commandChanged(command) {
        this._element.onclick = () => {
            this._commandCoordinator.handle(command).then(commandResult => {

            });
        };
    }
}