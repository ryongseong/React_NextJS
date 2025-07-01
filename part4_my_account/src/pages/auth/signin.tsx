import {
  ClientSafeProvider,
  LiteralUnion,
  getProviders,
  signIn,
} from 'next-auth/react'
import { BuiltInProviderType } from 'next-auth/providers'

import Flex from '@shared/Flex'
import Text from '@shared/Text'
import Button from '@shared/Button'
import Spacing from '@shared/Spacing'

function SignInPage({
  providers,
}: {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  >
}) {
  return (
    <div>
      <Spacing size={100} />
      <Flex direction="column" align="center">
        <Text bold={true}>My Account</Text>
        <Spacing size={80} />
        <ul>
          {Object.values(providers).map((provider) => (
            <li key={provider.id}>
              <Button onClick={() => signIn(provider.id, { callbackUrl: '/' })}>
                {provider.name} Login
              </Button>
            </li>
          ))}
        </ul>
      </Flex>
    </div>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}

export default SignInPage
