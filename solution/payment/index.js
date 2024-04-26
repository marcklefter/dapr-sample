const {
  DaprServer
} = require('@dapr/dapr');

// ...

const daprServer
  = new DaprServer({
    serverHost: '127.0.0.1',
    serverPort:
      5002,

    clientOptions: {
      daprPort: 3502,
    }
  });

const PUBSUB_NAME
  = 'pubsub';

const PUBSUB_TOPIC
  = 'newOrder';
// ...

async function main() {
  daprServer.pubsub.subscribe(
    PUBSUB_NAME,
    PUBSUB_TOPIC,
    data => console.log("Subscriber received: " + JSON.stringify(data))
  );

  await daprServer.start();
}

main();