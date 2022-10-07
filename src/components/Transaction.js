import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Matic from './Matic'
import axios from "axios"
import providerOptions from '../utils/providerOptions'
import networks from '../utils/network'
import Web3Modal from 'web3modal'
import Web3 from 'web3'



const verify = async (orderId) => {

    try {

        let resp = await axios({
            method: 'get',
            url: `http://209.23.11.57:4000/${orderId}/sqlData`
        })

        return resp

    } catch (error) {
        return error
    }
}


const Transaction = ({ props }) => {

    const [searchParams] = useSearchParams()
    let orderId = searchParams.get('orderid')

    const [web3modal, setWeb3modal] = useState(null)
    const [address, setAddress] = useState(null)
    let [data, setData] = useState({})
    const [err, setErr] = useState(null)
    const [w3, setW3] = useState(null)


    useEffect(() => {

        const newWeb3Modal = new Web3Modal({
            cacheProvider: false, // very important
            providerOptions,

        });

        setWeb3modal(newWeb3Modal)

    }, [])

    async function connectWallet() {
        const provider = await web3modal.connect();
        const w3 = new Web3(provider)
        const chainId = await w3.eth.getChainId()
        if(chainId !== 137) {
            await w3.eth.currentProvider.request({

                method: 'wallet_addEthereumChain',
                params: [
                    {
                        ...networks['polygon']
                    }
                ]

            })
        }
        console.log(chainId)
        setWeb3modal(w3)
        const userAddress = await w3.eth.getAccounts()
        setAddress(userAddress)

    }


    return (

        !address ? <div> <button onClick={connectWallet}> ConnectWallet </button> </div> : <div> {address[0]}</div>



    )
}

export default Transaction