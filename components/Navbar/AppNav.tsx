import { Flex, Image, Stack } from '@chakra-ui/react'
import { Web3Provider } from '@ethersproject/providers'
import { ConnectButton, OutlineButton } from '@inverse/components/Button'
import Link from '@inverse/components/Link'
import Logo from '@inverse/components/Logo'
import { ETH_MANTISSA, INV, XINV } from '@inverse/config'
import useEtherSWR from '@inverse/hooks/useEtherSWR'
import { namedAddress } from '@inverse/util'
import { injectedConnector } from '@inverse/util/web3'
import { useWeb3React } from '@web3-react/core'
import { useState } from 'react'

const NAV_ITEMS = [
  {
    label: 'Anchor',
    href: '/anchor',
  },
  {
    label: 'Vaults',
    href: '/vaults',
  },
  {
    label: 'Stabilizer',
    href: '/stabilizer',
  },
  {
    label: 'Stake',
    href: '/stake',
  },
  {
    label: 'Governance',
    href: '/governance',
  },
]

const INVBalance = () => {
  const { account } = useWeb3React<Web3Provider>()
  const { data } = useEtherSWR([
    [INV, 'balanceOf', account],
    [XINV, 'balanceOf', account],
    [XINV, 'exchangeRateStored'],
  ])

  if (!data) {
    return <></>
  }

  const [invBalance, xinvBalance, exchangeRate] = data
  const inv = invBalance / ETH_MANTISSA
  const xinv = (xinvBalance / ETH_MANTISSA) * (exchangeRate / ETH_MANTISSA)

  return <OutlineButton>{`${inv.toFixed(2)} INV (${xinv.toFixed(2)} xINV)`}</OutlineButton>
}

const ETHBalance = () => {
  const { account } = useWeb3React<Web3Provider>()
  const { data: balance } = useEtherSWR(['getBalance', account, 'latest'])

  if (!balance) {
    return <></>
  }
  return <OutlineButton>{`${(balance / ETH_MANTISSA).toFixed(4)} ETH`}</OutlineButton>
}

const AppNavConnect = () => {
  const { account, activate, active } = useWeb3React<Web3Provider>()

  const connect = () => {
    activate(injectedConnector);
    if (typeof window !== "undefined") {
      window.localStorage.setItem('previouslyConnected', JSON.stringify(true))
    }
  }

  return (
    <ConnectButton onClick={() => connect()}>
      {active && account ? `${namedAddress(account)}` : 'Connect'}
    </ConnectButton>
  )
}

export const AppNav = ({ active }: { active?: string }) => {
  const [showMobileNav, setShowMobileNav] = useState(false)
  const { activate } = useWeb3React<Web3Provider>()
  
  if (typeof window !== "undefined") {
    const previouslyConnected = window.localStorage.getItem('previouslyConnected');
    if(previouslyConnected) {
      activate(injectedConnector);
    }
  }

  return (
    <>
      <Flex
        w="full"
        backgroundColor="purple.900"
        borderColor="purple.800"
        borderBottomWidth={showMobileNav ? 0 : 1}
        p={4}
        justify="space-between"
        align="center"
        zIndex="docked"
      >
        <Stack direction="row" align="center" spacing={8}>
          <Link href="/">
            <Logo boxSize={10} />
          </Link>
          <Stack direction="row" align="center" spacing={8} display={{ base: 'none', lg: 'flex' }}>
            {NAV_ITEMS.map(({ label, href }, i) => (
              <Link
                key={i}
                href={href}
                fontWeight="medium"
                color={active === label ? '#fff' : 'purple.200'}
                _hover={{ color: '#fff' }}
              >
                {label}
              </Link>
            ))}
          </Stack>
        </Stack>
        <Stack display={{ base: 'flex', lg: 'none' }} direction="row" align="center">
          <AppNavConnect />
        </Stack>
        <Flex display={{ base: 'flex', lg: 'none' }} w={6} onClick={() => setShowMobileNav(!showMobileNav)}>
          {showMobileNav ? (
            <Image w={4} h={4} src="/assets/cancel.svg" />
          ) : (
            <Image w={6} h={6} src="/assets/hamburger.svg" />
          )}
        </Flex>
        <Stack direction="row" align="center" display={{ base: 'none', lg: 'flex' }}>
          <INVBalance />
          <ETHBalance />
          <AppNavConnect />
        </Stack>
      </Flex>
      {showMobileNav && (
        <Flex w="full" position="absolute" transitionDuration="0.1s" transitionTimingFunction="ease">
          <Stack
            w="full"
            bgColor="purple.900"
            fontWeight="medium"
            spacing={6}
            p={4}
            pt={24}
            borderBottomWidth={1}
            borderColor="purple.800"
          >
            {NAV_ITEMS.map(({ label, href }, i) => (
              <Link key={i} href={href} color={active === label ? '#fff' : 'purple.200'}>
                {label}
              </Link>
            ))}
          </Stack>
        </Flex>
      )}
    </>
  )
}

export default AppNav
