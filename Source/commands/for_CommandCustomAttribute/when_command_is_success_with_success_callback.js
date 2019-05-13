/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { a_command_custom_attribute } from './given/a_command_custom_attribute';

describe('when command is not success with failed callback', () => {
  let context = new a_command_custom_attribute();

  beforeEach(() => {
    context.commandResult.success = true;
    context.attribute.success = sinon.stub();
    context.attribute.failed = sinon.stub();
    context.element.onclick();
  });

  it('should call success callback with command result', () => context.attribute.success.calledWith({ commandResult: context.commandResult }).should.be.true);
  it('should not call failed callback with command result', () => context.attribute.failed.called.should.be.false);
});
