# System Design for Developers - Dapr 
In this exercise, you will employ [Dapr](https://dapr.io/) to implement the [Transactional Outbox](https://microservices.io/patterns/data/transactional-outbox.html) pattern. 

> The sample application is implemented using the JavaScript - follow the documentation for your language-preferred Dapr SDK.

## Prerequisites
Ensure that Dapr is installed in your local environment:

*   [Install Dapr CLI](https://docs.dapr.io/getting-started/install-dapr-cli/)

*   [Init Dapr locally](https://docs.dapr.io/getting-started/install-dapr-selfhost/)

## Overview
The sample application contains two services - Order and Payment. When an order is created (and persisted), a message (event) will simultaneously be published to be consumed by Payment.

Dapr contains [built-in support](https://docs.dapr.io/developing-applications/building-blocks/state-management/howto-outbox/) for the Transactional Outbox pattern.

> The Dapr `statestore` and `pubsub` components will both utilize Redis.

### Component Configuration
The `statestore` configuration must be modified to enable the transactional outbox:

*   Locate the default components folder (e.g. for Linux/MacOS, it's under `~/.dapr`).

*   Open up the `statestore.yaml` file and add the *required* [Outbox metadata fields](https://docs.dapr.io/developing-applications/building-blocks/state-management/howto-outbox/#metadata-fields).

    > Name the topic to which events are published `newOrder`.

### Payment Service
In `exercise/payment`:

*   Install dependencies via `npm install`.

*   Complete the `TODO`s.

*   Run the service with a Dapr sidecar:

        dapr run --app-id payment --app-port 5002 --dapr-http-port 3502 npm start

## Order Service
In `exercise/order`:

*   Install dependencies via `npm install`.

*   Complete the `TODO`s.

*   Run the service with a Dapr sidecar:

        dapr run --app-id order --dapr-http-port 3501 npm start

You should now see the published event logged in the terminal window for Payment.