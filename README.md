# SCOL Block Explorer based off github.com/etherparty/explorer

![SCOL Block Explorer Screenshot](https://i.imgur.com/8dPnAct.jpg)

## Demo

[https://explorer.ethorbit.com/](https://explorer.ethorbit.com/)

## License

The code in this branch is licensed under GPLv3 (see LICENSE file)
Feel free to modify or reuse the code here.

## Reddit

Discuss this project at: [Reddit Page on /r/ethreum](https://www.reddit.com/r/ethereum/comments/7lwft2/new_ethereum_block_explorer_updated_version_of/)

## Donations

SCOL Address: T5bqbK3pcoybpovTXu3K7yDeLiaQbK4TvX
SCOL SM Address: 0x2bb6ddf9752a896329e4211d8df0ab27f93e0ded

## Dependencias:
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt install -y nodejs
npm install -g npm 
sudo npm install -g bower
npm upgrade

## Installation

```
git clone https://github.com/juanpabloabadiamedina/explorer-2
npm install
bower install
npm start
```

Make sure to install geth as well for the ETH explorer to be able to function. Then run:
```
geth --rpc --rpcaddr localhost --rpcport 8545 --rpcapi "web3,eth" --rpccorsdomain "http://localhost:8000"
```

Then visit http://localhost:8000 in your browser of choice after you npm start the explorer

## Updates since original etherpaty/explorer base:

- Regular Expressions completed for Addresses, Block #s, and Transacions IDs (aka Search works great)
- The theme is based off Bootstrap V3 for responsive design.
- You can easily change from a cosmo or light theme utilizing https://bootswatch.com
- There is a basic API implemented now as well as well as a Ethereum Blockchain Information page
- Realtime ETH/USD Price Ticker
- Realtime Ethereum Hashrate
- Address Pages are integrated with Shapeshift to easily send a payment to an address.
- Responsive design
- Fontawesome Icons
- Block Time Averages
- Gas Prices/Limits
- Total/Current Difficulty
- Realtime latest blocks and recent transactions
- Other random blockchain info stats were added

_If you want to disable auto refresh/auto new block show, just comment line no 13-22 at: [app/scripts/controllers/mainController.js](https://github.com/juanpabloabadiamedina/explorer-2/blob/master/app/scripts/controllers/mainController.js)_
