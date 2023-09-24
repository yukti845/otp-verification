# otp-verification

This is a simple OTP (One-Time Password) verification application built with Node.js, React, and Twilio for sending and verifying OTPs. It utilizes the Twilio service to send OTPs to user-provided phone numbers and verifies the OTPs entered by users.

## Features

- Users can enter their country code and phone number to receive an OTP.
- OTPs are sent to users via SMS using the Twilio service.
- Users are redirected to a Verify OTP screen to enter the OTP received.
- OTPs entered by users are verified against the sent OTP.

## Tech Stack

- **Backend**: Node.js
- **Frontend**: React
- **Twilio Service**: Used for sending and verifying OTPs
- **UI Framework**: Tailwind CSS

## Getting Started

Follow these steps to set up and run the OTP verification application:

### Prerequisites

- Node.js and npm installed on your machine.
- Twilio account with API credentials.
- React development environment set up.

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone <repository-url>

2. Navigate to the project directory:
   cd otp-verification-app
   
3. Install backend dependency
  cnpm install

4. Install client dependencies:
  cd client
  npm install
