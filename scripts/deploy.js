const hre = require("hardhat")
const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(                   
    ["Neil", "Taylor", "Bonham"],       // Names
    ["QmNMCNok48ZPyBEbkzvLdxZ3vDfKpRiKbNmF6QLAnCMqaq", // Images
    "QmVHd9N2ZrBqym2izo3u5LMm87oAGFSxYbj5KjRsgV7Tm3", 
    "QmeMRt4Q1KdQHMfc6gYassqqJ9LJeLomQeTmGU38KRYBci"],
    [100, 200, 300],                    
    [100, 50, 25],
    "Dave Grohl", //Boss Name
    "QmaQ1dgXWAZybUpbwHK7gRWy1UbozzayaWzvQyKAz9954K", // Boss image
    10000, // Boss hp
    50, // Boss Attack damage                      
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);
};
  
const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();