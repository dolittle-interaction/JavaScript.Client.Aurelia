/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { CommandCoordinator, ICommand, CommandResponse } from '@dolittle/commands';
import { bindable, customAttribute, autoinject,  } from 'aurelia-framework';

/**
 * Represents a custom attribute that can be used to connect a command to supported elements
 */
@autoinject
@customAttribute('command')
export class CommandCustomAttribute  {
    value!: ICommand
    @bindable({ primaryProperty: true }) command!: ICommand;
    @bindable before!: <TCommand extends ICommand>(command: TCommand) => void;
    @bindable success!: (commandResponse: CommandResponse) => void;
    @bindable failed!: (commandResponse: CommandResponse) => void;
    @bindable error!: (error: Error) => void;

    /**
     * Initializes a new instance of {CommandCustomAttribute}
     * @param {HTMLElement} _element The element that has the attribute
     * @param {CommandCoordinator} _commandCoordinator The {CommandCoordinator} used to coordinate the commands
     */
    constructor(private _element: HTMLElement, private _commandCoordinator: CommandCoordinator) { }

    bind() {
        this._element.onclick = () => {
            try {
                if (!this.command && this.value) this.command = this.value;
                if (typeof this.before === "function") this.before(this.command);
                this._commandCoordinator.handle(this.command)
                    .then(commandResponse => {
                        if (commandResponse.success) {
                            if (typeof this.success === "function") this.success(commandResponse);
                        } else {
                            if (typeof this.failed === "function") this.failed(commandResponse);
                        }
                    })
                    .catch((error: Error) => {
                        if (typeof this.error === "function") this.error(error);
                    });
            } catch (error) {
                if (typeof this.error === "function") this.error(error);
            }
        };
    }
}
