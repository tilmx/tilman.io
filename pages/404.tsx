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
import { Color } from '../components/tokens'

export default function Error404() {
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
						<Text size={TextSize.Regular} color={Color.TextVariant}>
							<InternalLink link='/'>Back to tilman.io</InternalLink>
						</Text>
						<ChevronRight color={Color.TextVariant} />
					</Flex>
					<Space vertical={Size.XXL} />
					<Text size={TextSize.SuperSmall} color={Color.TextVariant}><InternalLink link="/legal/sites-notice">Site's Notice</InternalLink></Text>
					<Text size={TextSize.SuperSmall} color={Color.TextVariant} center><InternalLink link="/legal/privacy-policy">Privacy Police</InternalLink></Text>
				</OffsetArea>
				<Space vertical={Size.XXXXXL} />
			</Wrapper>
		</div>
	)
}
