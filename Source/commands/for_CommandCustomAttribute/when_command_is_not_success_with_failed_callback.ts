/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { a_command_custom_attribute } from './given/a_command_custom_attribute';
import sinon from 'sinon';

describe('when command is not success with failed callback', () => {
    let context = new a_command_custom_attribute();

    beforeEach(() => {
        (context.commandResponse as any).success = false;
        context.attribute.success = sinon.stub();
        context.attribute.failed = sinon.stub();
        context.element.onclick!({} as any);
    });

    it('should call failed callback with command result', () => (context.attribute.failed as sinon.SinonStub).calledWith({commandResult: context.commandResponse}).should.be.true);
    it('should not call success callback with command result', () => (context.attribute.success as sinon.SinonStub).called.should.be.false);
});

