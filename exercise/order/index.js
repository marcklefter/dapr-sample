const {
  DaprClient
} = require('@dapr/dapr');

// ...

const daprClient 
  = new DaprClient({
    daprPort: 3501
  });

async function main() {
  // TODO:
  // 
  // Create and persist a new order object (with a property `id` of type string, and any optional fields) 
  // in the statestore.
  //
  // See the documentation for an example for performing state transactions (that will implicitly utilize the Transactional Outbox):
  // https://docs.dapr.io/developing-applications/building-blocks/state-management/howto-get-save-state/#perform-state-transactions
}

// ...

main();