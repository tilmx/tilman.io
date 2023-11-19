import styled from '@emotion/styled';
import Head from 'next/head'
import { Size } from '../components/tokens/size';
import Button from '../components/button';
import { Text, TextSize } from '../components/text';

const StyledWrapper = styled.div`
	max-width: 1080px;
    margin: 0 auto;
`;

const StyledContent = styled.div`
	margin: ${Size.XXXXXL} auto;

    > p {
        margin: ${Size.L} 0;
    }
`;

export default function Home() {
    return (
        <>
            <Head>
                <title>Tilman Frick</title>
                <meta name="description" content="Tilman Frick is a digital designer and music producer currently based in Hamburg, Germany. Working at Tomorrow, but available for selected freelance projects." />
            </Head>
            <StyledWrapper>
                <StyledContent>
                    <Text size={TextSize.Large}>Hej <span style={{ opacity: .5 }}>/</span></Text>
                    <Text size={TextSize.Large}>I'm Tilman. A product person. I feel at home at the intersection of design, product management, and engineering. Between art and technology. Between big strategies and tiny details.</Text>
                    <Text size={TextSize.Large}>Twenty-four-seven, curious. Always seeking to push the boundaries of what's possible. Believing in the power of design to make a positive impact.</Text>
                    <Text size={TextSize.Large}>That's who I am.</Text>
                    <Text size={TextSize.Large}>— Tilman</Text>
                </StyledContent>
            </StyledWrapper>
        </>
    )
}
