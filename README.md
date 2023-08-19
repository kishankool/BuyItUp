# BuyITUp Mobile App

Welcome to BuyITUp, a mobile app built using React Native and Expo! This app offers a convenient way to browse and select recipes that you can add to your cart. The app also features a secure login system utilizing OTP via SMS. Please note that the OTP sending functionality is powered by a trial Twilio account, so there might be some delays during OTP delivery. Don't worry, if it doesn't work on the first attempt, give it a couple more tries—it's designed to work reliably!


## Table of Contents

-[Operating Instructions](#Operating-Instructions)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation and Setup](#installation-and-setup)

- [Features](#features)
  - [Recipe Listing](#recipe-listing)
  - [Cart Management](#cart-management)
  - [OTP Login](#otp-login)
- [Troubleshooting OTP](#troubleshooting-otp)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

# Operating-Instructions

Follow these simple steps to navigate and use the BuyITUp mobile app seamlessly:

1. **Open the App**

   Launch the BuyITUp app on your mobile device or emulator. The home screen will welcome you with a variety of delicious recipes to explore.

2. **Validate with OTP**

   After opening the app, you'll be prompted to validate your account using OTP (One-Time Password) via SMS. Please be aware that the OTP sending feature is powered by a Twilio trial account, which may experience occasional delays.
   Please enter your number with countrycode for example `+911234567890'
   You may need to repeat this process two or three times if you don't receive the OTP immediately. Rest assured, the OTP validation will work reliably after a few attempts.
   
4. If the screen gets stuck on the loading location screen during OTP validation, follow these steps:
   
   a. Press the "Back" button to return to the validate screen.
   
   b. Once back on the home screen, click on the "Validate OTP" button again.

5. This feature is only availabe in UP for now.

6. **Explore Recipes**

   After successful OTP validation, you'll have access to the recipe list. Browse through the mouthwatering recipes displayed on the screen. Each recipe comes with a detailed description, ingredients list, and cooking instructions.


7. **Add to Cart**

   To add a recipe to your cart, simply follow these steps:

   a. Click on any recipe that piques your interest.
   
   b. On the recipe details screen, you'll find an "Add to Cart" button. Click on it to add the recipe to your cart.

8. **View Cart**

   To view the recipes you've added to your cart, click on view cart.

   

And there you have it! You're all set to explore.

## Getting Started

### Prerequisites

To use this app, make sure you have the following:

- A mobile device or emulator running iOS or Android.
- Node.js and npm installed on your machine.
- Expo CLI installed globally (`npm install -g expo-cli`).

### Installation and Setup

1. Clone this repository to your local machine.
2. Navigate to the project directory: `cd BuyItUp`.
3. Install dependencies: `npm install`.
4. Start the app: `npm start`.
5. Use the Expo app on your mobile device or emulator to scan the QR code from the terminal to run the app.

## Features

### Recipe Listing

Browse through an extensive list of mouthwatering recipes. Each recipe is accompanied by a description and details about the ingredients and cooking process.

### Cart Management

Select your favorite recipes and add them to your cart. The cart keeps track of the recipes you want to try out.

### OTP Login

For a secure and convenient login experience, the app uses OTP via SMS. However, please note that the OTP sending feature is powered by a Twilio trial account. If you experience any delays or issues during the OTP delivery, be patient and try sending the OTP a few times. It will work reliably after a couple of attempts.

## Troubleshooting OTP

Since the OTP sending functionality is from a trial Twilio account, occasional delays may occur. If you don't receive the OTP immediately, try sending it two or three times. This approach has proven effective in ensuring successful OTP delivery.

## Contributing

Contributions to this app are welcome! Feel free to submit pull requests for bug fixes, enhancements, or new features.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

## Contact

If you have any questions, issues, or suggestions, feel free to contact us at kishanmishra389@gmail.com. We appreciate your feedback and hope you enjoy using the BuyITUp app!

