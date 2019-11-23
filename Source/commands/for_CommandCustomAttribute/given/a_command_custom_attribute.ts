/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import 'reflect-metadata';
import { Command, CommandResponse, CommandCoordinator, ICommand } from '@dolittle/commands';
import { Guid } from '@dolittle/core';
import { CommandCustomAttribute } from '../../CommandCustomAttribute';
import sinon from 'sinon';

export class a_command_custom_attribute {
    commandResponse: CommandResponse
    element: HTMLElement
    commandCoordinator: CommandCoordinator
    command: ICommand
    attribute: CommandCustomAttribute
    constructor() {
        this.commandResponse = {
            success: true
        } as CommandResponse;
        this.element = sinon.stub() as any;
        this.commandCoordinator = {
            handle: sinon.stub().returns({
                then: (callback: (commandResponse: CommandResponse) => void) => {
                    callback(this.commandResponse);
                }
            })
        }

        this.command = new Command(Guid.create());
        this.attribute = new CommandCustomAttribute(this.element, this.commandCoordinator);
        this.attribute.command = this.command;
        this.attribute.bind();
    }
}