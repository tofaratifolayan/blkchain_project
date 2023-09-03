// https://eth-sepolia.g.alchemy.com/v2/oG49zegYHvWsUEgpTKKZ-bDBbX2sx7Yp

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/oG49zegYHvWsUEgpTKKZ-bDBbX2sx7Yp',
      accounts: [ '8b9756618c9e9a6796200a077167ec89c91a3fec99b46923bb6e1f92525ca7ba' ]
    }
  }
}