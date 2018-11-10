/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { a_command_custom_attribute } from './given/a_command_custom_attribute';

describe('when command coordinator throws exception with error callback', () => {
    let context = new a_command_custom_attribute();
    const exception = "something went wrong";

    (beforeEach(() => {
        context.commandCoordinator.handle = (command) => {
            throw exception;
        };

        context.commandResult.success = true;
        context.attribute.error = sinon.stub();
        context.element.onclick();
    }));

    it('should call error callback with exception', () => context.attribute.error.calledWith(exception).should.be.true);
});