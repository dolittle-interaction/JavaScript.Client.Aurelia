---
title: Get started
description: The home of the Aurelia Client Support
keywords: General
author: einari
weight: 1
repository: https://github.com/dolittle-interaction/JavaScript.Client.Aurelia
aliases:
    - /interaction/aurelia/aurelia-client/get_started/
    - /interaction/aurelia/aurelia-client/bridge/
---

When using [Aurelia](https://aurelia.io) as your frontend framework and want to have the building blocks from Dolittle more
accessible. This project gives you that.

The source code for this can be found [here](https://github.com/dolittle-interaction/JavaScript.Client.Aurelia).

## Installing

The bridge is installed as an Aurelia plugin using NPM package:

```shell
$ npm i @dolittle/aurelia
```

or

```shell
$ yarn add @dolittle/aurelia
```

## Using

Once you've [installed](../installing) it, you can simply use the plugin by configuring it during your
setup of Aurelia, typically found in your `main.js` file.

```javascript
import { PLATFORM } from 'aurelia-pal';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin(PLATFORM.moduleName('@dolittle/aurelia')); // Add Dolittle plugin

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
```
