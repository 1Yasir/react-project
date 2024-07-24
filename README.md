# React Application
We created this React application to develop different React projects, allowing us to increase our knowledge of React and practice using React props and hooks.

# Password Generator
PasswordGenerator Component
 # What I Did
# Initialized State Variables:

length: Stores the password length.
password: Stores the generated password.
includeNumbers: Checks if numbers should be included in the password.
includeSpecialChars: Checks if special characters should be included in the password.
Created generateRandomPassword Function:

Generates a random password based on the specified length and whether to include numbers and special characters.
Used useEffect Hook:

Automatically generates a new password whenever length, includeNumbers, or includeSpecialChars change.
Rendered the Component:

Displayed the generated password in a read-only input field.
Added a range slider to adjust the password length.
Added checkboxes to include numbers and special characters in the password.
Why I Did It
State Management:

To dynamically control and update the password's length, content, and display.
Password Generation Logic:

To provide a flexible and customizable password generator.
Effect Hook:

To ensure the password updates automatically whenever the user changes any settings.
User Interface:

To give users a simple and interactive way to generate passwords according to their preferences.


# Reusing Logic with Custom Hooks

React comes with several built-in Hooks like useState, useContext, and useEffect. Sometimes, you’ll wish that there was a Hook for some more specific purpose: for example, to fetch data, to keep track of whether the user is online, or to connect to a chat room. You might not find these Hooks in React, but you can create your own Hooks for your application’s needs.

# Custom Hooks: Sharing logic between components 

# Currency Converter

This is a simple Currency Converter application that allows you to convert an amount from one currency to another. The project is built using React and custom hooks.

## Features

- Input field to enter the amount.
- Dropdowns to select the source and target currencies.
- Displays the conversion result.
- Custom scrollbar and max height setting for the currency select options.
