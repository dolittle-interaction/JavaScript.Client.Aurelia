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
    value!: ICommand;
    @bindable({ primaryProperty: true }) command!: ICommand;
    @bindable before!: <TCommand extends ICommand>(options: {command: TCommand}) => void;
    @bindable success!: (options: {commandResult: CommandResponse}) => void;
    @bindable failed!: (options: {commandResult: CommandResponse}) => void;
    @bindable error!: (options: {error: Error}) => void;

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
                if (typeof this.before === 'function') this.before({command: this.command});
                this._commandCoordinator.handle(this.command)
                    .then(commandResult => {
                        if (commandResult.success) {
                            if (typeof this.success === 'function') this.success({commandResult});
                        } else {
                            if (typeof this.failed === 'function') this.failed({commandResult});
                        }
                    })
                    .catch((error: Error) => {
                        if (typeof this.error === 'function') this.error({error});
                    });
            } catch (error) {
                if (typeof this.error === 'function') this.error({error});
            }
        };
    }
}
