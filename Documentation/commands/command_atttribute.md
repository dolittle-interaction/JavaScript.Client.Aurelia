---
title: Command Attribute
description: Using the command attribute
keywords: General
author: einari
---
## Background

When you're working with commands, you typically need to fire off these as interaction from a user.
Instead of you having to coordinate this in your view model, you can let the coordination be dealt with for you.
Once you've [installed](../installing.md) and have [configured](../using.md) the plugin, you can start using
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
<button command="{{myCommand}}">Click me</button>
```