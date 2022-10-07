
import WalletConnectProvider from '@walletconnect/web3-provider';
import CoinbaseWalletSDK from '@coinbase/wallet-sdk';

const providerOptions = {

  walletconnect: {

    package: WalletConnectProvider,

    options: {
      rpc: {
        137: 'https://rpc-mainnet.maticvigil.com'
      },
      chainId: 137
    }

  },

  coinbasewallet: {

    package: CoinbaseWalletSDK,
    options: {

      rpc: {
        137: 'https://rpc-mainnet.maticvigil.com'
      },
      chainId: 137

    }

  }

}

export default providerOptions
