import Head from 'next/head'
import { Text, TextSize } from '../../components/text';
import styled from '@emotion/styled';
import { Footer } from '../../components/footer';
import { Size } from '../../components/tokens/size';
import { Color } from '../../components/tokens/colors';

const StyledWrapper = styled.div`
    max-width: 1080px;
    margin: 0 auto;
`;

const StyledIntro = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${Size.M};
    margin-top: ${Size.XXXXL};
`;

const StyledContent = styled.div`
    margin-top: ${Size.XL};
    display: flex;
    flex-direction: column;
    gap: ${Size.XXS};
`;


export default function SitesNotice() {
    return (
        <>
            <Head>
                <title>Site’s notice</title>
                <meta name="robots" content="noindex" />
                <meta name="theme-color" content={Color.Background} />
            </Head>
            <StyledWrapper>
                <StyledIntro>
                    <Text size={TextSize.Huge} serif>
                        Site’s notice
                    </Text>
                </StyledIntro>
                <StyledContent>
                    {process.env.NEXT_PUBLIC_SITESNOTICE_ADDRESS?.split(', ').map((text, i) =>
                        <Text size={TextSize.Large} serif key={i}>{text}</Text>
                    )}
                    <br />
                    <Text size={TextSize.Large} serif>{process.env.NEXT_PUBLIC_SITESNOTICE_EMAIL}</Text>
                    <Text size={TextSize.Large} serif>{process.env.NEXT_PUBLIC_SITESNOTICE_PHONE}</Text>
                </StyledContent>
            </StyledWrapper>
            <Footer />
        </>
    )
}
