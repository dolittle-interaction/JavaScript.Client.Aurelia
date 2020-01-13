/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { a_command_custom_attribute } from './given/a_command_custom_attribute';

describe('when element gets clicked and command is set', () => {
    const context = new a_command_custom_attribute();

    beforeEach(() => {
        context.element.onclick!({} as MouseEvent);
    });

    it('should pass the command along to handle', () => (context.commandCoordinator.handle as sinon.SinonStub).calledWith(context.command).should.be.true);
});
