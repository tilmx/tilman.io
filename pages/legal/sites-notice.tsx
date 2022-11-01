import { useTheme } from '@emotion/react'
import Head from 'next/head'
import { Logo } from '../../components/logo'
import { OffsetArea } from '../../components/offset-area'
import { Text, TextSize } from '../../components/text'
import { Size } from '../../components/tokens/size'
import { Space } from '../../components/utils/space'
import { Wrapper } from '../../components/wrapper'
import { Flex, FlexAlignItems } from '../../components/utils/flex'
import { InternalLink } from '../../components/utils/internal-link'
import { ExternalLink } from '../../components/utils/external-link'
import { ChevronRight } from 'lucide-react'

export default function Error404() {
    const theme = useTheme();
    return (
        <div>
            <Head>
                <title>Site's notice</title>
                <meta name="robots" content="noindex" />
            </Head>
            <Wrapper>
                <Space vertical={Size.XL} />
                <Logo />
                <OffsetArea>
                    <Space vertical={Size.XXXL} />
                    <Text size={TextSize.Huge}>Site's notice</Text>
                    <Space vertical={Size.M} />
                    <Text>Tilman Frick</Text>
                    <Text>Breitenfelder Str. 54</Text>
                    <Text>20251 Hamburg</Text>
                    <Space vertical={Size.S} />
                    <Text>(040) 42 104 550</Text>
                    <ExternalLink link='mailto:sayhello@tilman.io'>
                        <Text>sayhello@tilman.io</Text>
                    </ExternalLink>
                    <Space vertical={Size.S} />

                    <Flex alignItems={FlexAlignItems.Center}>
                        <Text size={TextSize.Large} color={theme.colors.textVariant}>
                            <InternalLink link='/'>Back to tilman.io</InternalLink>
                        </Text>
                        <ChevronRight color={theme.colors.textVariant} />
                    </Flex>
                    <Flex alignItems={FlexAlignItems.Center}>
                        <Text size={TextSize.Large} color={theme.colors.textVariant}>
                            <InternalLink link='/legal/privacy-policy'>Privacy Policy</InternalLink>
                        </Text>
                        <ChevronRight color={theme.colors.textVariant} />
                    </Flex>
                </OffsetArea>
                <Space vertical={Size.XXXXXL} />
            </Wrapper>
        </div>
    )
}
