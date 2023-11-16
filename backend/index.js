const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

let config;

try{
  config = require('./config');
} catch(error){
  console.error("Error loading config module");
  config = {}
}

const app = express()

// const db = mysql.createConnection({
//     host: process.env.databaseHost || config.databaseHost,
//     user: process.env.databaseUsername || config.databaseUsername,
//     password: process.env.databasePassword || config.databasePassword,
//     database: process.env.databaseName || config.databaseName

// })
console.log(process.env.DATABASE_URL);

const db = mysql.createConnection(process.env.DATABASE_URL || config.DATABASE_URL)

app.use(express.json());
app.use(cors());

app.get("/createTables", (req, res) => {
  // Define SQL statements to create the 'Collections' and 'Reviews' tables
  const createCollectionsTableSQL = `
    CREATE TABLE IF NOT EXISTS Collections (
      id INT PRIMARY KEY AUTO_INCREMENT,
      projectName VARCHAR(1000),
      projectHref VARCHAR(1000),
      creatorName VARCHAR(1000),
      creatorLink VARCHAR(1000),
      openseaLink VARCHAR(1000),
      background VARCHAR(1000),
      pfp VARCHAR(1000),
      contractAddress VARCHAR(255)
    )
  `;

  const createReviewsTableSQL = `
    CREATE TABLE IF NOT EXISTS Reviews (
      id INT PRIMARY KEY AUTO_INCREMENT,
      rating INT,
      body TEXT,
      author VARCHAR(255),
      contractAddress VARCHAR(255),
      projectName VARCHAR(255)
    )
  `;

   db.query(createCollectionsTableSQL, (err) => {
    if (err) {
      console.error('Error creating Collections table:', err.message);
    } else {
      console.log('Collections table created successfully.');
    }
  });

  db.query(createReviewsTableSQL, (err) => {
    if (err) {
      console.error('Error creating Reviews table:', err.message);
    } else {
      console.log('Reviews table created successfully.');
    }
  });
});

app.get("/insertInitialData", (req, res) => {
  const insertReviewsDataSQL = `
  INSERT INTO Reviews (rating, body, author, contractAddress, projectName)
  VALUES 
  ('5', 'This NFT is awesome', 'CryptoTomYT', "0xed5af388653567af2f388e6224dc7c4b3241c544", 'Azuki'),
  ('5', 'Ikuzo.', 'ZAGABOND', "0xed5af388653567af2f388e6224dc7c4b3241c544", 'Azuki');
  `

  const insertCollectionsDataSQL = `
  INSERT INTO Collections(projectName, projectHref, creatorName, creatorLink, openseaLink, background, pfp, contractAddress)
  VALUES
  ('Bored Ape Yacht Club', 'BoredApeYachtClub', 'BoredApeYachtClub', 'https://opensea.io/BoredApeYachtClub?tab=created',
  'https://opensea.io/collection/boredapeyachtclub', 'https://lh3.googleusercontent.com/i5dYZRkVCUK97bfprQ3WXyrT9BnLSZtVKGJlKQ919uaUB0sxbngVCioaiyu9r6snqfi2aaTyIvv6DHm4m2R3y7hMajbsv14pSZK8mhs=h600',
  'https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s130',
  '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d'),
  ('Clone X - X Takashi Murakami', 'CloneX', 'RTFKTCLONEXTM', 'https://opensea.io/RTFKTCLONEXTM',
   'https://opensea.io/collection/clonex',
   'https://lh3.googleusercontent.com/4elUtz8UyFYDH34vDxd4hpQX8S-EdkFq8s9ombkuQTDBWLwHvsjRM_RXWT2zX8Vt2bAiO2BHslwN57FyTW1JIn_FyFI0BsZfmvmeJQ=h600',
   'https://lh3.googleusercontent.com/XN0XuD8Uh3jyRWNtPTFeXJg_ht8m5ofDx6aHklOiy4amhFuWUa0JaR6It49AH8tlnYS386Q0TW_-Lmedn0UET_ko1a3CbJGeu5iHMg=s168',
   '0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b'),
  ('Azuki', 'Azuki', 'TeamAzuki', 'https://opensea.io/TeamAzuki?tab=created',
   'https://opensea.io/collection/azuki',
   'https://lh3.googleusercontent.com/O0XkiR_Z2--OPa_RA6FhXrR16yBOgIJqSLdHTGA0-LAhyzjSYcb3WEPaCYZHeh19JIUEAUazofVKXcY2qOylWCdoeBN6IfGZLJ3I4A=h600',
   'https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s0',
  '0xed5af388653567af2f388e6224dc7c4b3241c544'
  ),
  ('Pudgy Penguins', 'PudgyPenguins', 'TheIglooCompany', 'https://opensea.io/TheIglooCompany',
   'https://opensea.io/collection/pudgypenguins',
   'https://i.seadn.io/gcs/files/8a26e3de0f309089cbb1e5ab969fc0bc.png?auto=format&dpr=1&w=3840',
   'https://i.seadn.io/gae/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi?auto=format&dpr=1&w=384',
  '0xbd3531da5cf5857e7cfaa92426877b022e612cf8'
  ),
  ('Doodles', 'Doodles', 'Doodles_LLC', 'https://opensea.io/Doodles_LLC',
   'https://opensea.io/collection/doodles-official',
    'https://lh3.googleusercontent.com/svc_rQkHVGf3aMI14v3pN-ZTI7uDRwN-QayvixX-nHSMZBgb1L1LReSg1-rXj4gNLJgAB0-yD8ERoT-Q2Gu4cy5AuSg-RdHF9bOxFDw=h600',
   'https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s168',
  '0x8a90cab2b38dba80c64b7734e58ee1db38b8992e'
  ),
  ( 'Captainz', 'Captainz', '9GAG', 'https://opensea.io/9GAG',
   'https://opensea.io/collection/thecaptainz',
   'https://i.seadn.io/gcs/files/62448fe425d5e5e2bd44ded754865f37.png?auto=format&dpr=1&w=3840',
   'https://i.seadn.io/gcs/files/6df4d75778066bce740050615bc84e21.png?auto=format&dpr=1&w=384',
  '0x769272677fab02575e84945f03eca517acc544cc'
  );
`;

db.query(insertCollectionsDataSQL, (err) => {
  if (err) {
    console.error('Error inserting data', err.message);
  } else {
    res.send('Inserted collections data successfully');
    console.log('Inserted collections data successfully.');
  }
});

db.query(insertReviewsDataSQL, (err) => {
  if (err) {
    console.error('Error inserting data', err.message);
  } else {
    res.send('Inserted reviews data successfully');
    console.log('Inserted reviews data successfully.');
  }
});


})

//You can visit localhost:8800 and see this
app.get("/", (req, res) => {
    res.json("Hello this is the backend")
})

//Query DB for all reviews
app.get("/reviews", (req,res) => {
    const query = "SELECT * FROM Reviews"

    db.query(query, (err,data) => {
        if(err) {return res.json(err)}
        return res.json(data)
    })
})

app.get("/collections", (req,res) => {
  const query = "SELECT * FROM Collections"

  db.query(query, (err, data) => {
    if(err) {return res.json(err)}
    return res.json(data)
  })
})

app.get('/reviews/:contractAddress', (req, res) => {
    const contractAddress = req.params.contractAddress;
  
    const sql = 'SELECT * FROM Reviews WHERE contractAddress = ?';
    db.query(sql, [contractAddress], (err, results) => {
      if (err) {
        return res.status(500).send(err.message);
      }
  
      res.json(results);
    });
  });

app.post("/reviews", (req, res) => {
    const {rating, body, author, contractAddress, projectName} = req.body;
    console.log(req.body);

    const query = "INSERT INTO Reviews (`rating`,`body`,`author`, `contractAddress`, `projectName`) VALUES (?, ?, ?, ?, ?)"
    const values = [rating, body, author, contractAddress, projectName]

    db.query(query, values, (err, data) => {
        if(err){
            return res.json(err);
        }
        return res.json("Review has been created successfully.");
    })
})

//Ideally, this should be a post, but since we aren't sending it any data we just made it a get.
app.get("/createBoilerplateData", (req, res) => {

    const query = "INSERT INTO Reviews (`rating`,`body`,`author`, `contractAddress`, `projectName`) VALUES (?, ?, ?, ?, ?)"
    const values = [5, "Here is a detailed review of this project",
    "elonmusk", "0xed5af388653567af2f388e6224dc7c4b3241c544", "Azuki"]

    db.query(query, values, (err, data) => {
        if(err){
            return res.json(err);
        }
        return res.json("Review has been created successfully.");
    })
})

// Define a route to delete all entries from the Reviews table
app.get('/deleteAllReviews', (req, res) => {
    const sql = 'DELETE FROM Reviews';
  
    db.query(sql, (err, result) => {
      if (err) {
        return res.status(500).send(err.message);
      }
  
      res.send('All entries in the Reviews table have been deleted.');
    });
  });



const port = process.env.PORT || 8800;

app.listen(port, () => {
    console.log("Connected to backend!")
})