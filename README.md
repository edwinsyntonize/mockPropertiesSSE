# SSE express :satellite:
[Server Sent Events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events) middleware implementation for [express](http://expressjs.com/)

# Install
`npm install`
OR
`yarn`

The package requires `express`, because it was created directly for the framework. Also it utilizes `ES6` features, so be sure that `node` v18.0+ is installed.

`````````

On the client side you can listen to a message through `EventSource` instance:

```javascript
let eventSource = new EventSource('http://localhost:8080/updates');

eventSource.addEventListener('connected', (e) => {
    console.log(e.data.welcomeMsg);
    // => Hello world!
});

// listens to all the messages. The only way to catch unnamed events (with no `event` name set)
eventSource.onmessage = message => {
  console.log(message);
};
```

> **Important!** Don't forget to check out browser compatibility of `EventSource`. At the moment it doesn't implemented in any versions of IE.
