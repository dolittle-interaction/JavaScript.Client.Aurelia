/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { a_command_custom_attribute } from './given/a_command_custom_attribute';
import sinon from 'sinon';
import { ICommand } from '@dolittle/commands';

describe('when command coordinator throws exception with error callback', () => {
    const context = new a_command_custom_attribute();
    const exception = 'something went wrong';

    beforeEach(done => {
        context.commandCoordinator.handle = (command: ICommand) => {
            return new Promise((resolve, reject) => {
                throw exception;

            });
        };

        (context.commandResponse as any).success = true;
        context.attribute.error = sinon.stub();
        context.element.onclick!({} as MouseEvent);
        setTimeout(function() {
            done();
          }, 100);
    });

    it('should call error callback with exception', () => (context.attribute.error as sinon.SinonStub).calledWith({error: exception}).should.be.true);
});
