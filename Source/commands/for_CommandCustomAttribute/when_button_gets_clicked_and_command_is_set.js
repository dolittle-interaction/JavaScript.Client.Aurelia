/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { CommandCustomAttribute } from '../CommandCustomAttribute';
import { Command } from '@dolittle/commands';

describe("when button gets clicked and command is set", () => {
    let attribute = null;
    let element = null;
    let commandCoordinator = null;
    let command = null;

    (beforeEach(() => {
        element = sinon.stub();
        commandCoordinator = {
            handle: sinon.stub().returns({
                then: sinon.stub()
            })
        }
        command = new Command();
        attribute = new CommandCustomAttribute(element, commandCoordinator);
        attribute.value = command;
        attribute.bind();

        element.onclick();
    }));

    it("should pass the command along to handle", () => commandCoordinator.handle.calledWith(command).should.be.true);
});