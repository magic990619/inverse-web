export type Token = {
  address: string
  name: string
  symbol: string
  coingeckoId: string
  image: string
  decimals: number
}

export type Market = {
  token: string
  underlying: Token
  supplyApy: number
  borrowApy: number
  rewardApy: number
  liquidity: number
  collateralFactor: number
  reserveFactor: number
  totalBorrows: number
  totalReserves: number
  supplied: number
  borrowable: boolean
}

export type Proposal = {
  id: number
  title: string
  description: string
  proposer: string
  etaTimestamp: number
  startTimestamp: number
  endTimestamp: number
  startBlock: number
  endBlock: number
  forVotes: number
  againstVotes: number
  canceled: boolean
  executed: boolean
  status: ProposalStatus
  functions: ProposalFunction[]
  voters: ProposalVote[]
}

export enum ProposalStatus {
  pending = 'Pending',
  active = 'Active',
  canceled = 'Canceled',
  defeated = 'Defeated',
  succeeded = 'Succeeded',
  queued = 'Queued',
  expired = 'Expired',
  executed = 'Executed',
}

export type ProposalFunction = {
  target: string
  signature: string
  callData: string
}

export type ProposalVote = {
  id: number
  voter: string
  support: boolean
  votes: number
}

export type Delegate = {
  address: string
  ensName: string
  votingPower: number
  delegators: Delegator[]
  votes: ProposalVote[]
}

export type Delegator = string

export type SWR = {
  isLoading?: boolean
  isError?: any
}

export type DeFiAsset = {
  name: string
  logo: string
  description: string
  chain: string
  category: string
  tvl: number
  apy: number
}
