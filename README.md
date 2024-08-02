This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.




## About the project


Page Component
==============

A basic page component that combines the Navbar, App, and Footer components.

Components
----------

* `Navbar`: The navigation bar component.
* `App`: The main application component.
* `Footer`: The footer component.

Features
--------

* Combines the Navbar, App, and Footer components to create a basic page layout.
* Includes separation divs to add space between the components.

Usage
-----

```jsx
import Page from './Page';

const App = () => {
  return (
    <Page>
      <!-- App content here -->
    </Page>
  );
};

Header Component
===============

A reusable header component built with React and Next.js.

Props
-----

* `imageSrc`: The source URL of the image to be displayed.
* `title1`: The first title to be displayed.
* `title2`: The second title to be displayed.
* `description`: The description text to be displayed.
* `link`: The link URL for the call-to-action button.
* `buttonText`: The text to be displayed on the call-to-action button.

Features
--------

* Displays a header section with a title, description, and image.
* Includes a call-to-action button that links to a specified URL.
* Uses Next.js's `Image` component for optimized image rendering.

Usage
-----

```jsx
import Header from './Header';

const imageSrc = 'https://example.com/image.jpg';
const title1 = 'Welcome to Our Website';
const title2 = 'Explore Our Rental Properties';
const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
const link = '/RentalProperties';
const buttonText = 'Get Started';

<Header
  imageSrc={imageSrc}
  title1={title1}
  title2={title2}
  description={description}
  link={link}
  buttonText={buttonText}
/>

Rental Properties
================

A simple rental properties listing application built with React and Next.js.

Features
--------

* Displays a list of rental properties with images, names, addresses, bedroom counts, prices, and descriptions
* Allows users to filter properties by price, location, and bedrooms
* Provides a "Book Now" button to book a property

Components
----------

* `RentalProperties.js`: The main component that displays the list of properties and handles filtering.
* `Property.js`: The individual property component that displays the property details.

State Variables
--------------

* `properties`: The array of rental properties.
* `priceFilter`: The selected price filter.
* `locationFilter`: The selected location filter.
* `bedroomsFilter`: The selected bedrooms filter.
* `showFilters`: A boolean indicating whether the filters are shown or hidden.

Functions
---------

* `handleToggleFilters`: Toggles the visibility of the filters.
* `filteredProperties`: Returns the filtered list of properties based on the selected filters.

Getting Started
---------------

1. Clone the repository: `git clone https://github.com/your-username/rental-properties.git`
2. Install dependencies: `npm install`
3. Start the application: `npm run dev`
4. Open the application in your web browser: `http://localhost:3000`

Booking System
=============

A simple booking system built with React and Next.js.

Features
--------

* Allows users to book properties with a unique ID
* Validates user input for name, mobile number, address, ID proof, and payment method
* Calculates total cost of booked properties
* Displays cart with property details, quantity, and total cost
* Allows users to increase, decrease, or remove properties from cart

Components
----------

* `Booking.js`: The main booking component that handles form submission and cart updates.
* `Cart.js`: The cart component that displays the booked properties and their quantities.

State Variables
--------------

* `name`: The user's name.
* `mobileNumber`: The user's mobile number.
* `address`: The user's address.
* `idProof`: The user's ID proof.
* `paymentMethod`: The selected payment method (card or cash).
* `cardNumber`: The card number (if payment method is card).
* `expirationDate`: The expiration date (if payment method is card).
* `cvv`: The CVV (if payment method is card).
* `cart`: The array of booked properties.
* `bookingDate`: The booking date.
* `errors`: The object containing error messages for each field.
* `submitted`: A boolean indicating whether the form has been submitted.

Functions
---------

* `handleSubmit`: Handles form submission and updates the cart.
* `handleIncreaseQuantity`: Increases the quantity of a booked property.
* `handleDecreaseQuantity`: Decreases the quantity of a booked property.
* `handleRemoveProperty`: Removes a booked property from the cart.

Getting Started
---------------

1. Clone the repository: `git clone https://github.com/your-username/booking-system.git`
2. Install dependencies: `npm install`
3. Start the application: `npm run dev`
4. Open the application in your web browser: `http://localhost:3000`

License
-------

This project is licensed under the MIT License.

Author
------

[Aman Walia]
