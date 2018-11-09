/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { CommandCustomAttribute } from '../../CommandCustomAttribute';
import { Command } from '@dolittle/commands';

export class a_command_custom_attribute {
    constructor() {
        this.commandResult = {
            success: true
        };
        this.element = sinon.stub();
        this.commandCoordinator = {
            handle: sinon.stub().returns({
                then: (callback) => {
                    callback(this.commandResult);
                }
            })
        }

        this.command = new Command();
        this.attribute = new CommandCustomAttribute(this.element, this.commandCoordinator);
        this.attribute.command = this.command;
        this.attribute.bind();
    }
}