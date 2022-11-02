import { useTheme } from '@emotion/react'
import Head from 'next/head'
import { Image } from '../components/image'
import { Logo } from '../components/logo'
import { OffsetArea } from '../components/offset-area'
import { Text, TextSize } from '../components/text'
import { Size } from '../components/tokens/size'
import { ExternalLink } from '../components/utils/external-link'
import { Space } from '../components/utils/space'
import { WidthLimiter } from '../components/width-limiter'
import { Wrapper } from '../components/wrapper'
import { Case } from '../container/case'
import { BackgroundColor } from '../components/background-color'
import { InternalLink } from '../components/utils/internal-link'

import ImageTilman from '../public/images/tilman.jpg';
import ImageCaseTom from '../public/images/case-tom.png';
import ImageCaseAlva from '../public/images/case-alva.png';
import ImageCaseEd from '../public/images/case-ed.jpg';
import ImageCaseEzb from '../public/images/case-ezb.png';
import { Footer } from '../container/footer'

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
					<Text size={TextSize.Regular} color={theme.colors.textVariant}>Working at <ExternalLink link='https://tomorrow.one'>Tomorrow</ExternalLink>, the first European company to combine mobile banking and sustainable finances. Available for selected freelance projects.</Text>
				</OffsetArea>
				<Space vertical={Size.XXXXL} />

				<Image image={ImageTilman} alt="Portrait of Tilman in front of shipping containers" />
				<Space vertical={Size.XXXS} />
				<Text size={TextSize.Small} color={theme.colors.textVariant} style={{ textAlign: 'right' }}>&copy; Foto: Jan Brinkmann</Text>
				<Space vertical={Size.XXXXL} />

				<OffsetArea>
					<Text size={TextSize.Huge}>By focussing on simplicity and considering the smallest details, I create what empowers us all in our lifes — emotions.</Text>
				</OffsetArea>
				<Space vertical={Size.XXXXXL} />
			</Wrapper>

			<Case
				noNegativeMargin
				topline='Lead Product Designer'
				title='Tomorrow'
				description='The company is the first European stakeholder to combine mobile banking and sustainable finances. Since March 2019, the social business from Hamburg has been offering its current account and already has over 120,000 customers. Its long-term aim is to create a digital platform focused on finances with a positive impact.'
				button='Explore tomorrow.one'
				link='https://tomorrow.one'
				image={ImageCaseTom}
				imageAlt="Screenshot of Tomorrow App"
				backgroundColor='#FF916E'
				smartphoneScreen
			/>
			<Case
				topline='Co-Founder & Product Lead'
				title='Meet Alva'
				description='A radically new digital design tool built for cross-functional product teams. Alva lets you design interactive products based on the same components your engineers are using for production websites.'
				button='Explore on GitHub'
				link='https://github.com/meetalva'
				image={ImageCaseAlva}
				imageAlt="Screenshot of Design Tool Alva"
				backgroundColor='#E24772'
			/>
			<Case
				topline='Branding, Digital Design & Development'
				title='Einzimmer Küche Bar'
				description='Einzimmer Küche Bar is a minimalistic restaurant with focus on exceptional quality cuisine based in Nuremberg, Germany.'
				button='Explore einzimmerkuechebar.de'
				link='http://einzimmerkuechebar.de/'
				image={ImageCaseEzb}
				imageAlt="Screenshot of the Website of Einzimmer Küche Bar"
				backgroundColor='#69757f'
			/>
			<Case
				topline='Digital Design'
				title='elbdudler Website'
				description='elbdudler is a social media agency based in Hamburg that works on creative concepts and integrated communication strategies.'
				button='Explore elbdudler.de'
				link='https://elbdudler.de/'
				image={ImageCaseEd}
				imageAlt="Screenshot of the Website of elbdudler"
				backgroundColor='#e5B4a6'
			/>
			<BackgroundColor color={theme.colors.background} style={{ marginTop: '-' + Size.XXL }}>
				<Space vertical={Size.XXXXXL} />
			</BackgroundColor>
			<Wrapper>
				<WidthLimiter>
					<Text color={theme.colors.textVariant} center>Get in touch</Text>
					<Space vertical={Size.M} />
					<Text center>Tilman Frick</Text>
					<Text center>(040) 42 104 550</Text>
					<Text center><ExternalLink link="mailto:sayhello@tilman.io">sayhello@tilman.io</ExternalLink></Text>
					</WidthLimiter>
					</Wrapper>
					<Footer />
		</div>
	)
}
