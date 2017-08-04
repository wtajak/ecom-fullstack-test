# Photobox Full Stack JS test

This test is designed for potential full stack developers to demonstrate their coding skills. It's intended to be done in less than 90 minutes. We're mainly interested in seeing how you approach this problem and how far you'll get.

### Deliverable

Your task is to create part of a listing page for the products that you receive from an API. The data for the listing page can be accessed via `/api/products` (see. /api folder).

Please return at minimum a component, a test using `jest`. Feel free to import any modules that you feel you require or make any changes you deem necesary.

This is what a single product card should look like:

![listing page product card example](/src/images/design.png)

Behaviour of product cards at differen't breakpoints:
- Mobile (> 320px screen < 480px): one product card per row
- Tablet (> 480 px screen < 768 px): two product cards per row
- Desktop (> 768 px): three product cards per row

The product cards should be contained within 1024px and be aligned in the centre.

## Main commands
``` bash
# Install the dependencies
yarn install

# Run website in dev (hot reload) mode ( http://localhost:3000 )
yarn dev

# Run the unit tests
yarn test
```

## Other useful commands
``` bash
# Create a development build
yarn build:dev

# Create a production build
yarn build:prod

# Serve content from build folder
yarn serve
```