

const networks = {

    polygon: {
  
      chainId: `0x${Number(137).toString(16)}`,
      chainName: `Polygon mainnet`,
  
      nativeCurrency: {
  
        name: `MATIC`,
        symbol: `MATIC`,
        decimals: 18
  
      },
  
      rpcUrls: ['https://rpc-mainnet.maticvigil.com/'],
      blockExplorerUrls: [`https://polygonscan.com/`]
  
    },
  
  }

export default networks