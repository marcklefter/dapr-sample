const {
  DaprClient
} = require('@dapr/dapr');

// ...

const daprClient 
  = new DaprClient({
    daprPort: 3501
  });

const STORE_NAME
  = 'statestore';

async function main() {
  const newOrder = {
    id: 'order-1',
    customerId: 'marc@edument.se'
  };

  await daprClient.state.transaction(
    STORE_NAME,
    [
      {
        operation: 'upsert',
        request: {
          key: newOrder.id,
          value: JSON.stringify(newOrder)
        }
      }
    ]
  );
}

// ...

main();