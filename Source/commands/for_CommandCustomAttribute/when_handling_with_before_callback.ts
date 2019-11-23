/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { a_command_custom_attribute } from './given/a_command_custom_attribute';
import sinon from 'sinon';

describe('when handling with before callback', () => {
    let context = new a_command_custom_attribute();

    beforeEach(() => {
    (context.commandResponse as any).success = false;
        context.attribute.before = sinon.stub();
        context.element.onclick!({} as MouseEvent);
    });

    it('should call before callback with command', () => (context.attribute.before as sinon.SinonStub).calledWith(context.command).should.be.true);
});

