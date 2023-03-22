# LogHive.SDK.Javascript
This javascript libary is a SDK for the LogHive event and log service. 
LogHive is a log and event service specifically designed for software applications such as apps, websites, or services.
With LogHive, push notifications can be sent to the web browser or to a mobile device, or the log messages can be analyzed in a separate dashboard.

Checkout the NPM: [![npm](https://img.shields.io/npm/v/loghive.svg)](https://www.npmjs.com/package/loghive)

Licence: MIT

# Contents
1. [General](#general)
2. [Requirements](#requirements)
3. [Documentation](#documentation)
3. [Installation](#installation)

## General
Integration is very easy, a simple REST command is all that's needed to store your event in our database.
This libary packs the http client into a nuget package. So you can push an event with just two lines of code.

## Requirements
To use this API you need an API key.  You can register for a free API key at [https://app.loghive.app](https://app.loghive.app).

## Documentation
A full documentation is available under [https://docs.loghive.app/](https://docs.loghive.app/).

## Installation
```sh
npm install --save loghive
```

### Import Library
```js
import { LogHive } from 'loghive';
```

### Initialize Client
With the following code, you init the http client with your personal API key:
```js
const logging = new LogHive({ 
  key: 'your-personal-api-key',
  project: 'yourprojectname'
});
```

### Publish Event
```js
logging.addEvent({
    group: "yourgroupname",
    event: "your-event-name",
    description: "descripton",
    notify: true
});
```

### Publish Insight
```js
logging.addInsight({
  insight: "your-insight-name",
  value: 100
});
```

### Online/Offline State
```js
logging.setSystemOnline({
  system: "your-system-name"
});

logging.setSystemOffline({
  system: "your-system-name"
});

```