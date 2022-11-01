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
import { Case } from '../container/case'

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

			<Case
				topline='Co-Founder & Product Lead'
				title='Meet Alva'
				description='A radically new digital design tool built for cross-functional product teams. Alva lets you design interactive products based on the same components your engineers are using for production websites.'
				button='Explore on GitHub'
				link='https://github.com/meetalva'
				image='images/case-alva.png'
				backgroundColor='#E24772'
			/>
			<Case
				topline='Branding, Digital Design & Development'
				title='Einzimmer Küche Bar'
				description='Einzimmer Küche Bar is a minimalistic restaurant with focus on exceptional quality cuisine based in Nuremberg, Germany.'
				button='Explore einzimmerkuechebar.de'
				link='http://einzimmerkuechebar.de/'
				image='images/case-ezb.png'
				backgroundColor='#69757f'
			/>
			<Case
				topline='Digital Design'
				title='elbdudler Website'
				description='elbdudler is a social media agency based in Hamburg that works on creative concepts and integrated communication strategies.'
				button='Explore elbdudler.de'
				link='https://elbdudler.de/'
				image='images/case-ed.jpg'
				backgroundColor='#e5B4a6'
			/>

			<Space vertical={Size.XXXXXL} />


			{/*


	
  <footer>
		<div class="limit">
			<div class="footer-content">
				<h3>Get in touch</h3>
				<p>
					Tilman Frick<br> (040) 42 104 550<br>
					<a href="mailto:sayhello@tilman.io">sayhello@tilman.io</a>
				</p>
				<a href="sitesnotice.html" class="sitesnotice">Site’s Notice</a>
				<a href="privacypolicy.html" class="sitesnotice">Privacy Police</a>
			</div>
		</div>
	</footer>

  */}

		</div>
	)
}
