import { mainnet } from '@inverse/config/networks'
import { Token } from '@inverse/types'

// TODO: Clean-up config
const config = mainnet

export const START_BLOCK = 11498340
export const ETH_MANTISSA = 1e18
export const SECONDS_PER_BLOCK = 13.5
export const SECONDS_PER_DAY = 24 * 60 * 60
export const BLOCKS_PER_SECOND = 1 / SECONDS_PER_BLOCK
export const BLOCKS_PER_DAY = BLOCKS_PER_SECOND * SECONDS_PER_DAY
export const DAYS_PER_YEAR = 365
export const BLOCKS_PER_YEAR = BLOCKS_PER_DAY * DAYS_PER_YEAR

// Vaults
export const VAULT_USDC_ETH = config.vaults.vaultUsdcEth
export const VAULT_DAI_WBTC = config.vaults.vaultDaiWbtc
export const VAULT_DAI_YFI = config.vaults.vaultDaiYfi
export const VAULT_DAI_ETH = config.vaults.vaultDaiEth
export const VAULT_TOKENS = Object.values(config.vaults)

// Anchor
export const LENS = config.anchor.lens
export const COMPTROLLER = config.anchor.comptroller
export const ORACLE = config.anchor.oracle
export const STABILIZER = config.anchor.stabilizer
export const TREASURY = config.anchor.treasury

export const ANCHOR_ETH = config.anchor.markets.eth
export const ANCHOR_DOLA = config.anchor.markets.dola
export const ANCHOR_XSUSHI = config.anchor.markets.xsushi
export const ANCHOR_WBTC = config.anchor.markets.wbtc
export const ANCHOR_YFI = config.anchor.markets.yfi
export const ANCHOR_STETH = config.anchor.markets.steth
export const ANCHOR_INVDOLASLP = config.anchor.markets.invdolaslp
export const ANCHOR_DOLA3POOLCRV = config.anchor.markets.dola3poolcrv
export const ANCHOR_TOKENS = Object.values(config.anchor.markets)

// Governance
export const QUORUM_VOTES = 4000
export const GOVERNANCE = config.governance

// Harvester
export const HARVESTER = config.harvester

// Escrow
export const ESCROW = config.escrow

// Tokens
export const INV = config.INV
export const DOLA = config.DOLA
export const DAI = config.DAI
export const USDC = config.USDC
export const WETH = config.WETH
export const YFI = config.YFI
export const XSUSHI = config.XSUSHI
export const WBTC = config.WBTC
export const XINV = config.XINV
export const STETH = config.STETH
export const INVDOLASLP = config.INVDOLASLP
export const DOLA3POOLCRV = config.DOLA3POOLCRV
export const DOLA3CRV = config.DOLA3CRV

// Rewards
export const STAKING_DOLA3CRV = config.staking.dola3crv

export const NAMED_ADDRESSES: { [key: string]: string } = config.namedAddresses

export const TOKENS: { [key: string]: Token } = {
  ETH: {
    address: '',
    name: 'Ether',
    symbol: 'ETH',
    coingeckoId: 'ethereum',
    image: 'https://assets.coingecko.com/coins/images/279/small/ethereum.png',
    decimals: 18,
  },
  [INV]: {
    address: INV,
    name: 'Inverse',
    symbol: 'INV',
    coingeckoId: 'inverse-finance',
    image: '/assets/favicon.png',
    decimals: 18,
  },
  [DOLA]: {
    address: DOLA,
    name: 'Dola',
    symbol: 'DOLA',
    coingeckoId: 'dola-usd',
    image: 'https://assets.coingecko.com/coins/images/14287/small/anchor-logo-1-200x200.png',
    decimals: 18,
  },
  [DAI]: {
    address: DAI,
    name: 'Dai',
    symbol: 'DAI',
    coingeckoId: 'dai',
    image: 'https://assets.coingecko.com/coins/images/9956/small/dai-multi-collateral-mcd.png',
    decimals: 18,
  },
  [USDC]: {
    address: USDC,
    name: 'USD Coin',
    symbol: 'USDC',
    coingeckoId: 'usd-coin',
    image: 'https://assets.coingecko.com/coins/images/6319/small/USD_Coin_icon.png',
    decimals: 6,
  },
  [WETH]: {
    address: WETH,
    name: 'Wrapped Ethereum',
    symbol: 'WETH',
    coingeckoId: 'weth',
    image: 'https://assets.coingecko.com/coins/images/2518/small/weth.png',
    decimals: 18,
  },
  [YFI]: {
    address: YFI,
    name: 'Yearn',
    symbol: 'YFI',
    coingeckoId: 'yearn-finance',
    image: 'https://assets.coingecko.com/coins/images/11849/small/yfi-192x192.png',
    decimals: 18,
  },
  [XSUSHI]: {
    address: XSUSHI,
    name: 'xSUSHI',
    symbol: 'xSUSHI',
    coingeckoId: 'xsushi',
    image: 'https://assets.coingecko.com/coins/images/13725/small/xsushi.png',
    decimals: 18,
  },
  [WBTC]: {
    address: WBTC,
    name: 'Wrapped Bitcoin',
    symbol: 'WBTC',
    coingeckoId: 'wrapped-bitcoin',
    image: 'https://assets.coingecko.com/coins/images/7598/small/wrapped_bitcoin_wbtc.png',
    decimals: 8,
  },
  [STETH]: {
    address: STETH,
    name: 'Lido Staked Ether',
    symbol: 'stETH',
    coingeckoId: 'staked-ether',
    image: 'https://assets.coingecko.com/coins/images/13442/small/steth_logo.png',
    decimals: 18,
  },
  [INVDOLASLP]: {
    address: INVDOLASLP,
    name: 'INV-DOLA SLP',
    symbol: 'INV-DOLA-SLP',
    //coingeckoId: 'staked-ether',
    image: 'https://assets.coingecko.com/coins/images/12271/small/512x512_Logo_no_chop.png',
    decimals: 18,
  },
  [DOLA3POOLCRV]: {
    address: DOLA3POOLCRV,
    name: 'Dola-3pool CRV LP',
    symbol: 'DOLA-3POOL-CRV',
    coingeckoId: 'lp-3pool-curve',
    image: 'https://assets.coingecko.com/coins/images/12972/small/3pool_128.png?1603948039',
    decimals: 18,
  },
  [DOLA3CRV]: {
    address: DOLA3CRV,
    name: 'lp-3pool-curve',
    symbol: '3CRV',
    coingeckoId: 'lp-3pool-curve',
    image: 'https://assets.coingecko.com/coins/images/12972/small/3pool_128.png?1603948039',
    decimals: 18,
  },
}

export const UNDERLYING: { [key: string]: Token } = {
  [ANCHOR_ETH]: TOKENS.ETH,
  [ANCHOR_DOLA]: TOKENS[DOLA],
  [ANCHOR_XSUSHI]: TOKENS[XSUSHI],
  [ANCHOR_WBTC]: TOKENS[WBTC],
  [ANCHOR_YFI]: TOKENS[YFI],
  [ANCHOR_STETH]: TOKENS[STETH],
  [ANCHOR_INVDOLASLP]: TOKENS[INVDOLASLP],
  [ANCHOR_DOLA3POOLCRV]: TOKENS[DOLA3POOLCRV],
  [XINV]: TOKENS[INV],
  [VAULT_USDC_ETH]: TOKENS[USDC],
  [VAULT_DAI_ETH]: TOKENS[DAI],
  [VAULT_DAI_WBTC]: TOKENS[DAI],
  [VAULT_DAI_YFI]: TOKENS[DAI],
  [DOLA3CRV]: TOKENS[DOLA3CRV],
}

export const CONTRACTS: { [key: string]: string } = {
  [ANCHOR_ETH]: 'anETH',
  [ANCHOR_DOLA]: 'anDOLA',
  [ANCHOR_XSUSHI]: 'anXSUSHI',
  [ANCHOR_WBTC]: 'anWBTC',
  [ANCHOR_YFI]: 'anYFI',
  [ANCHOR_STETH]: 'anStETH',
  [ANCHOR_INVDOLASLP]: 'INV-DOLA SLP',
  [ANCHOR_DOLA3POOLCRV]: 'Dola-3pool LP',
  [COMPTROLLER]: 'Comptroller',
  [DAI]: 'Dai',
  [DOLA]: 'DOLA',
  [INV]: 'INV',
  [ORACLE]: 'Oracle',
  [STABILIZER]: 'Stabilizer',
  [VAULT_USDC_ETH]: 'vaultUsdcEth',
  [VAULT_DAI_ETH]: 'vaultDaiEth',
  [VAULT_DAI_WBTC]: 'vaultDaiWbtc',
  [VAULT_DAI_YFI]: 'vaultDaiYfi',
  [XINV]: 'xINV',
  '0xFBAB1B85A145Cd648374aCebf84cDD0247268587': 'Vester',
  '0x926dF14a23BE491164dCF93f4c468A50ef659D5B': 'Timelock',
}

export const VAULT_TREE: { [key: string]: { [key: string]: string } } = {
  [DAI]: {
    ETH: VAULT_DAI_ETH,
    [WBTC]: VAULT_DAI_WBTC,
    [YFI]: VAULT_DAI_YFI,
  },
  [USDC]: {
    ETH: VAULT_USDC_ETH,
  },
}

export const VAULTS: { [key: string]: { from: Token; to: Token } } = {
  [VAULT_DAI_ETH]: {
    from: TOKENS[DAI],
    to: TOKENS.ETH,
  },
  [VAULT_DAI_WBTC]: {
    from: TOKENS[DAI],
    to: TOKENS[WBTC],
  },
  [VAULT_DAI_YFI]: {
    from: TOKENS[DAI],
    to: TOKENS[YFI],
  },
  [VAULT_USDC_ETH]: {
    from: TOKENS[USDC],
    to: TOKENS.ETH,
  },
}
