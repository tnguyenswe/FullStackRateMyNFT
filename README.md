# Full Stack Rate My NFT

This contains the full source code of the Rate My NFT web application.

This was built with MySQL, Express, Node, and React.

The front end was deployed with Netlify, and the back end was deployed with Heroku.

You can view the fully deployed web app [here](https://main--unrivaled-sable-51f6aa.netlify.app/)

# Running the app

In order to run the app, you will need to run the backend and frontend concurrently.

Here are the following steps for doing so:

```
    git clone https://github.com/tnguyenswe/FullStackRateMyNFT.git
    cd FullStackRateMyNFT
```

If you would like to run this locally, you will need to create config files in the backend and frontend folders.

I've listed example configs under ```/exampleConfigs```, simply create the config files at the proper routes and fill out the values.

After, you will open another terminal window and navigate to the FullStackRateMyNFT folder directory on both windows.

Window 1:

```
    cd backend
    npm install && npm start
```

Window 2:

```
    cd frontend
    npm install && npm start
```

Once you have both windows running the frontend and backend respectively, you will be able to view the app at [localhost:3000](localhost:3000)

You can also access the backend at [localhost:8800](localhost:8800)