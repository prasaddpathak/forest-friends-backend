const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const nftController = require('./js/nft');


const app = express();

app.set('host', '127.0.0.1');
app.set('port', 8081);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/listAll', nftController.listAll);
app.get('/getOwnerNFTs', nftController.getOwnerNFTs);
app.post('/createOwnerNFT', nftController.createOwnerNFT); 
app.get('/getResearcherNFTs', nftController.getResearcherNFTs); 



app.listen(app.get('port'), () => {
    console.log('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
    console.log('  Press CTRL-C to stop\n');
  });

module.exports = app;
