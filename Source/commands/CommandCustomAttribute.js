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
    @bindable before;
    @bindable success;
    @bindable failed;
    @bindable error;

    /**
     * Initializes a new instance of {CommandCustomAttribute}
     * @param {HTMLElement} element The element that has the attribute
     * @param {CommandCoordinator} commandCoordinator The {CommandCoordinator} used to coordinate the commands
     */
    constructor(element, commandCoordinator) {
        this._element = element;
        this._commandCoordinator = commandCoordinator;
    }

    bind() {
        this._element.onclick = () => {
            try {
                if (!this.command && this.value) this.command = this.value;
                if (typeof this.before == "function") this.before(this.command);
                this._commandCoordinator
                    .handle(this.command)
                    .then(commandResult => {
                        if (commandResult.success) {
                            if (typeof this.success == "function") this.success(commandResult);
                        } else {
                            if (typeof this.failed == "function") this.failed(commandResult);
                        }
                    })
                    .catch(error => {
                        if( typeof this.error == "function" ) this.error(error);
                    });
            } catch (ex) {
                if( typeof this.error == "function" ) this.error(ex);
            }
        };
    }
}
