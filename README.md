# Introduction
To help those who need to proxy Clash of Clans API due to CORS
# Usage
 - Install [NodeJS](https://nodejs.org/en/download), if necessary.
 - Go to (https://developer.clashofclans.com) and register for a developer account, if necessary.
 - Create a new token with an IP that matches your IP.
 - Save the generated token
 - Clone this repo and CD into the directory.
 - Run `npm install` to install dependencies.
 - Run `COC_TOKEN={token from developer.clashofclans.com} npm start`
 
By default, the proxy will run on port 8080.  Use the `COC_PORT` env variable to change the port.

Now, all requests to `localhost:8080` will proxy to (https://api.clashofclans.com) and will include the Authorization header and be CORS enabled.
 
# WARNING

This app should be used to developer small demo apps utilizing the clash of clans API in the browser on your local machine only.  Using the service in production will expose your developer token for open use by ANYBODY.  This is for demostration and development purposes only.


