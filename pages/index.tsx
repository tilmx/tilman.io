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

<Space vertical={Size.XXXXXL} />


			{/*


	<section class="cases">
		<div class="cases-item cases-item--alva">
			<div class="limit">
				<div class="cases-item-hero">
					<p>Co-Founder &amp; Product Lead</p>
					<h2>Meet Alva</h2>
					<p>A radically new digital design tool built for cross-functional product teams. Alva lets you design interactive products based on the same components your engineers are using for production websites.</p>
					<a href="https://meetalva.io" class="button" target="_blank">Explore on meetalva.io</a>
				</div>
				<img src="images/case-alva.png" class="cases-item-image">
			</div>
		</div>
		<div class="cases-item cases-item--ezb">
			<div class="limit">
				<div class="cases-item-hero">
					<p>Branding, Digital Design &amp; Development</p>
					<h2>Einzimmer Küche Bar</h2>
					<p>Einzimmer Küche Bar is a minimalistic restaurant with focus on exceptional quality cuisine based in Nuremberg, Germany.</p>
					<a href="http://einzimmerkuechebar.de" class="button" target="_blank">Explore einzimmerkuechebar.de</a>
				</div>
				<img src="images/case-ezb.png" class="cases-item-image">
			</div>
		</div>
		<div class="cases-item cases-item--ed">
			<div class="limit">
				<div class="cases-item-hero">
					<p>Digital Design</p>
					<h2>elbdudler</h2>
					<p>elbdudler is a social media agency based in Hamburg that works on creative concepts and integrated communication strategies.</p>
					<a href="https://elbdudler.de" class="button" target="_blank">Explore elbdudler.de</a>
				</div>
				<img src="images/case-ed.jpg" class="cases-item-image">
			</div>
		</div>
		<div class="cases-item cases-item--wb">
			<div class="limit">
				<div class="cases-item-hero">
					<p>Branding, Digital Design, Development</p>
					<h2>Wutburger</h2>
					<a href="https://burger.tilman.io" class="button" target="_blank">Explore burger.tilman.io</a>
				</div>
			</div>
		</div>
	</section>
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
