# FullRateMyNFT

# Running the app

In order to run the app, you will need to run the backend and frontend concurrently.

Here are the following steps for doing so:

```
    git clone https://github.com/tnguyenswe/FullStackRateMyNFT.git
    cd FullStackRateMyNFT
```

Here, you will want to open another terminal window and navigate to the FullStackRateMyNFT folder directory on both windows.

Window 1:

```
    cd backend
    npm start
```

If this does not work, you will need to delete the node_modules folder and package-lock.json file. Then do the following:

```
    
    npm install
    npm start
```

Window 2:

```
    cd frontend
    npm start
```

If this does not work, you will need to delete the node_modules folder and package-lock.json file. Then do the following:

```
    npm install
    npm start
```

Once you have both windows running the frontend and backend respectively, you will be able to view the app at localhost:3000