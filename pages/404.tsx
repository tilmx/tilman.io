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


export default function Home() {
	const theme = useTheme();
	return (
		<div>
			<Head>
				<title>Seite nicht gefunden</title>
			</Head>
			<Wrapper>
				<Space vertical={Size.XL} />
				<Logo />
				<OffsetArea>
					<Space vertical={Size.XXXL} />
					<Text size={TextSize.Huge}>Fehler 404. Mit Liebe verloren.</Text>
					<Space vertical={Size.M} />
					<Flex alignItems={FlexAlignItems.Center}>
						<Text size={TextSize.Large} color={theme.colors.textVariant}>
							<InternalLink link='/'>Back to tilman.io</InternalLink>
						</Text>
						<ChevronRight color={theme.colors.textVariant} />
					</Flex>
				</OffsetArea>
				<Space vertical={Size.XXXXXL} />
			</Wrapper>
		</div>
	)
}
