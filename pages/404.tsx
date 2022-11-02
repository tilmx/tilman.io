import { useTheme } from '@emotion/react'
import Head from 'next/head'
import { Logo } from '../components/logo'
import { OffsetArea } from '../components/offset-area'
import { Text, TextSize } from '../components/text'
import { Size } from '../components/tokens/size'
import { Space } from '../components/utils/space'
import { Wrapper } from '../components/wrapper'
import { Flex, FlexAlignItems } from '../components/utils/flex'
import { InternalLink } from '../components/utils/internal-link'
import { ChevronRight } from 'lucide-react'


export default function Error404() {
	const theme = useTheme();
	return (
		<div>
			<Head>
				<title>Site not found</title>
			</Head>
			<Wrapper>
				<InternalLink link='/'>
					<Logo />
				</InternalLink>
				<OffsetArea>
					<Space vertical={Size.XXXXL} />
					<Text size={TextSize.Huge}>Error 404. Mit Liebe verloren.</Text>
					<Space vertical={Size.M} />
					<Flex alignItems={FlexAlignItems.Center}>
						<Text size={TextSize.Regular} color={theme.colors.textVariant}>
							<InternalLink link='/'>Back to tilman.io</InternalLink>
						</Text>
						<ChevronRight color={theme.colors.textVariant} />
					</Flex>
					<Space vertical={Size.XXL} />
					<Text size={TextSize.SuperSmall} color={theme.colors.textVariant}><InternalLink link="/legal/sites-notice">Site's Notice</InternalLink></Text>
					<Text size={TextSize.SuperSmall} color={theme.colors.textVariant} center><InternalLink link="/legal/privacy-policy">Privacy Police</InternalLink></Text>
				</OffsetArea>
				<Space vertical={Size.XXXXXL} />
			</Wrapper>
		</div>
	)
}