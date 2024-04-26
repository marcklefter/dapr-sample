const {
  DaprServer
} = require('@dapr/dapr');

// ...

const daprServer
  = new DaprServer({
    serverHost: '127.0.0.1',
    serverPort: 5002,

    clientOptions: {
      daprPort: 3502,
    }
  });

// ...

async function main() {
  // TODO:
  //
  // Subscribe to the topic to receive order events.
  //
  // See the documentation for subscribing programmatically: https://docs.dapr.io/developing-applications/building-blocks/pubsub/howto-publish-subscribe/#subscribe-to-topics
}

main();