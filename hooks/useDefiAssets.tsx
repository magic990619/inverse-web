import { DeFiAsset } from '@inverse/types'

type DeFiAssets = {
  defiAssets: DeFiAsset[]
}

export const useDefiAssets = (): DeFiAssets => {
  const data = [
    {
      name: "Aave",
      logo: "https://assets.coingecko.com/coins/images/12645/thumb/AAVE.png?1601374110",
      description: "Open source, decentralized, non-custodial liquidity protocol.",
      chain: "Multichain",
      category: "Lending",
      tvl: 15880000000,
      apy: 10.63
    },
    {
      name: "Maker",
      logo: "https://assets.coingecko.com/coins/images/1364/thumb/Mark_Maker.png?1585191826",
      description: "Decentralized credit platform on Ethereum that supports Dai.",
      chain: "Ethereum",
      category: "Lending",
      tvl: 15460000000,
      apy: 5.42
    },
    {
      name: "Curve Finance",
      logo: "https://assets.coingecko.com/coins/images/12124/thumb/Curve.png?1597369484",
      description: "Decentralized exchange liquidity pool on Ethereum designed for extremely efficient stablecoin trading.",
      chain: "Multichain",
      category: "DEXes",
      tvl: 14320000000,
      apy: 1.18
    },
    {
      name: "Compound",
      logo: "https://assets.coingecko.com/coins/images/10775/thumb/COMP.png?1592625425",
      description: "Algorithmic money market protocol on Ethereum that lets users earn interest or borrow assets against collateral.",
      chain: "Ethereum",
      category: "Lending",
      tvl: 11040000000,
      apy: 0.99
    },
    {
      name: "Uniswap",
      logo: "https://assets.coingecko.com/coins/images/12504/thumb/uniswap-uni.png?1600306604",
      description: "Fully decentralized on-chain protocol for token exchange on Ethereum that uses liquidity pools instead of order books.",
      chain: "Ethereum",
      category: "DEXes",
      tvl: 6920000000,
      apy: 2.70
    },
    {
      name: "Yearn.Finance",
      logo: "https://assets.coingecko.com/coins/images/11849/thumb/yfi-192x192.png?1598325330",
      description: "Decentralized ecosystem of aggregators that utilize lending services.",
      chain: "Ethereum",
      category: "Assets",
      tvl: 4570000000,
      apy: 1.86
    },
  ]

  return {
    defiAssets: data
  }
}
