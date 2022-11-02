import Head from 'next/head'
import { Headphones } from 'lucide-react'
import { Releases } from '../../data/releases';
import { useRouter } from 'next/router';
import { Cover, Banner, Center, Flex, Size, Space, Text, TextSize, Wrapper, ExternalLink, WidthLimiter, Color } from '../../components';
import { Footer } from '../../container/footer';


export default function Dimensions() {
  const router = useRouter()
  const { release } = router.query;
  const content = Releases.find(releaseItem => releaseItem.id === release);

  return (
    <>
      <Head>
        <title>{content ? `Tilman Frick — ${content.title}` : 'Tilman Frick'}</title>
      </Head>
      {content &&
        <>
          <Wrapper>
            <WidthLimiter width={Size.XXXXXL} center>
              <Space vertical={Size.XXL} />
              <ExternalLink link={content.links.spotify}>
                <Cover image={content.image} />
              </ExternalLink>
              <Space vertical={Size.L} />
              <Text size={TextSize.Small} color={Color.TextVariant} sansserif>Open the single on …</Text>
              <Space vertical={Size.XXXS} />
              {content.links.spotify && <Banner text="Spotify" alt="Spotify Logo" link={content.links.spotify} image="/images/music/service/spotify.svg" />}
              {content.links.appleMusic && <Banner text="Apple Music" alt="Apple Music Logo" link={content.links.appleMusic} image="/images/music/service/apple-music.svg" />}
              {content.links.itunes && <Banner text="iTunes" alt="iTunes Logo" link={content.links.itunes} image="/images/music/service/itunes.svg" />}
              {content.links.deezer && <Banner text="Deezer" alt="Deezer Logo" link={content.links.deezer} image="/images/music/service/deezer.svg" />}
              <Space vertical={Size.XL} />
              <Center horizontal>
                <Headphones color={Color.TextVariant} size={Size.S} />
              </Center>
              <Space vertical={Size.XXS} />
              <Flex>
                <Space horizontal={Size.XL} />
                <Text size={TextSize.Small} color={Color.TextVariant} center>All music made with love in Hamburg</Text>
                <Space horizontal={Size.XL} />
              </Flex>
            </WidthLimiter>
          </Wrapper>
          <Footer />
        </>
      }
    </>
  )
}
