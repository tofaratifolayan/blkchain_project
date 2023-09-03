const main = async () => {
  // like a function factory/class that will generate instances of that specific contract
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  // one specific instance of our contract
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log("Transactions deployed to:", transactions.address);
}


const runMain = async () => {
  try {
    //execute and deploy contract
    await main()
    // tells us it went successfully
    process.exit(0)
  } catch (err) {
    console.error(err)
    //tells us there's an error
    process.exit(1)
  }
}

runMain();

//for the contract to be deployed, we need to have some ethereum on our own wallet already because
// everything that you do on the Ethereum network requires something known as gas,
// which is smal fractions of Ethereum used to make something happen