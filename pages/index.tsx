import { useTheme } from '@emotion/react'
import Head from 'next/head'
import { Image } from '../components/image'
import { Logo } from '../components/logo'
import { OffsetArea } from '../components/offset-area'
import { Text, TextSize } from '../components/text'
import { Size } from '../components/tokens/size'
import { Link } from '../components/utils/link'
import { Space } from '../components/utils/space'
import { Wrapper } from '../components/wrapper'

export default function Home() {
	const theme = useTheme();
	return (
		<div>
			<Head>
				<title>Tilman Frick</title>
				<meta name="description" content="Tilman Frick is a digital designer currently based in Hamburg, Germany. Working at Tomorrow, but available for selected freelance projects." />
			</Head>
			<Wrapper>
				<Space vertical={Size.XL} />
				<Logo />
				<OffsetArea>
					<Space vertical={Size.XXXL} />
					<Text size={TextSize.Huge}>Tilman Frick is a digital designer and music producer currently based in Hamburg, Germany.</Text>
					<Space vertical={Size.M} />
					<Text size={TextSize.Large} color={theme.colors.textVariant}>Working at <Link link='https://tomorrow.one'>Tomorrow</Link>, the first European company to combine mobile banking and sustainable finances. Available for selected freelance projects.</Text>
				</OffsetArea>
				<Space vertical={Size.XXXXL} />

				<Image image='images/tilman.jpg' />
				<Space vertical={Size.XXXS} />
				<Text size={TextSize.Small} color={theme.colors.textVariant} style={{ textAlign: 'right' }}>&copy; Foto: Jan Brinkmann</Text>
				<Space vertical={Size.XXXXL} />

				<OffsetArea>
					<Text size={TextSize.Huge}>By focussing on simplicity and considering the smallest details, I create what empowers us all in our lifes — emotions.</Text>
				</OffsetArea>
				<Space vertical={Size.XXXXL} />
			</Wrapper>
		</div>
	)
}
