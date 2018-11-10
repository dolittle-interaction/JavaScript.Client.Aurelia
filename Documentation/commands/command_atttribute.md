---
title: Command Attribute
description: Using the command attribute
keywords: General
author: einari
---
## Background

When you're working with commands, you typically need to fire off these as interaction from a user.
Instead of you having to coordinate this in your view model, you can let the coordination be dealt with for you.
Once you've [installed](../../installing) and have [configured](../../using) the plugin, you can start using
the command attribute on elements that typically are clickable. Assuming you have a command instance in your
view model sitting as a property that can be accessed in the view in the binding context:

View model:

```javascript
import { MyCommand } from './MyCommand';

export class ViewModel {
    constructor() {
        this.myCommand = new MyCommand();
    }
}
```

This can then be hooked up using the command attribute as follows:

```html
<button command.bind="myCommand">Click me</button>
```

## Lifecycle callbacks

Commands have a certain lifecycle associated with the handling of them. These can be hooked in on the custom attribute to point
to methods in your binding context, typically your viewmodel.

### Before

The before callback gets called before the `command` is to be handled. You can hook it up easily as follows:

```html
<button command="command.bind: myCommand; before.bind: beforeHandling">Click me</button>
```

On your view model you'd have, as an argument to the callback you'll get the command instance:

```javascript
import { MyCommand } from './MyCommand';

export class ViewModel {
    constructor() {
        this.myCommand = new MyCommand();
    }

    beforeHandling(command) {
        /*
            Add things to the command before it is sent
        */
    }
}
```

### Success

The success callback gets called after the `command` has been handled and is considered a success. You can hook it up easily as follows:

```html
<button command="command.bind: myCommand; success.bind: commandSuccess">Click me</button>
```

On your view model you'd have, as an argument to the callback you'll get the command result object:

```javascript
import { MyCommand } from './MyCommand';

export class ViewModel {
    constructor() {
        this.myCommand = new MyCommand();
    }

    commandSuccess(commandResult) {
        /*
            Handle success
        */
    }
}
```

### Failed

The failed callback gets called after the `command` has been handled and is considered failed. You can hook it up easily as follows:

```html
<button command="command.bind: myCommand; failed.bind: commandFailed">Click me</button>
```

On your view model you'd have, as an argument to the callback you'll get the command result object:

```javascript
import { MyCommand } from './MyCommand';

export class ViewModel {
    constructor() {
        this.myCommand = new MyCommand();
    }

    commandFailed(commandResult) {
        /*
            Handle failure
        */
    }
}
```

### Error

The error callback gets called if there is a problem handling the `command`, for instance connectivity or similar. You can hook it up easily as follows:

```html
<button command="command.bind: myCommand; error.bind: commandError">Click me</button>
```

On your view model you'd have, as an argument to the callback you'll get the command result object:

```javascript
import { MyCommand } from './MyCommand';

export class ViewModel {
    constructor() {
        this.myCommand = new MyCommand();
    }

    commandError(commandResult) {
        /*
            Handle error
        */
    }
}
```
