import styled from '@emotion/styled';
import Head from 'next/head'
import { Size } from '../components/tokens/size';
import { Text, TextSize } from '../components/text';
import { FunctionComponent, ReactNode } from 'react';
import ExportedImage from 'next-image-export-optimizer';
import TilmanImage from '../public/images/tilman.jpg';
import { Button } from '../components/button';
import { Breakpoint } from '../components/tokens/breakpoint';

const StyledContent = styled.div`
	margin: ${Size.XXXXXL} auto;
    padding: 0 ${Size.M};
    max-width: 1080px;

    > p {
        margin: ${Size.L} 0;
    }
`;

const StyledPortfolio = styled.div`
    margin: 0 auto ${Size.XXXXXL};
    padding: 0 ${Size.M};
    max-width: 1280px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${Size.M};

    ${Breakpoint.Tablet} {
        grid-template-columns: 1fr;
    }
`;

const StyledCard = styled.a<{ color: string; }>`
    background: ${props => props.color};
    padding: ${Size.XL};
    border-radius: ${Size.M};
    min-height: 420px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: unset;
    text-decoration: unset;
`;

const StyledTopbar = styled.div`
    display: flex;
    justify-content: space-between;
`;

const StyledCardHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${Size.S};
`;

const Card: FunctionComponent<{ url: string; title: string; years: string; role: string; description: string; color: string; }> = props => (
    <StyledCard href={props.url} target="_blank" color={props.color}>
        <Text size={TextSize.Large}>{props.title}</Text>
        <StyledCardHeader>
            <Text>{props.description}</Text>
            <StyledTopbar>
                <Text mono>{props.role}</Text>
                <Text mono>{props.years}</Text>
            </StyledTopbar>
        </StyledCardHeader>
    </StyledCard>
);

const StyledImage = styled(ExportedImage)`
    width: 100%;
    height: auto;
    border-radius: ${Size.M};
`;

const StyledPortfolioColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${Size.M};
`;

export default function Home() {
    return (
        <>
            <Head>
                <title>Tilman Frick</title>
                <meta name="description" content="Tilman Frick is a digital designer and music producer currently based in Hamburg, Germany. Working at Tomorrow, but available for selected freelance projects." />
            </Head>
            <StyledContent>
                <Text size={TextSize.Huge} serif>Hej <span style={{ opacity: .3 }}>/</span></Text>
                <Text size={TextSize.Huge} serif>I'm Tilman. A product person. I feel at home at the intersection of design, product management, and engineering. Between art and technology. Between big strategies and tiny details.</Text>
                <Text size={TextSize.Huge} serif>Twenty-four-seven curious. Always seeking to push the boundaries of what's possible. Believing in the power of design to make a positive impact.</Text>
                <Text size={TextSize.Huge} serif>That's who I am.</Text>
                <Text size={TextSize.Huge} serif>— T</Text>
            </StyledContent>
            <StyledPortfolio>
                <StyledPortfolioColumn>
                    <Card url="https://tomorrow.one" years="2019+" title="Tomorrow" role="#Lead Product Designer" description="The first European company to combine mobile banking and sustainable finances. Best rated finance app in Germany with over 120,000 customers." color="#FF916E" />
                    <Card url="https://github.com/meetalva/alva" years="2016-2019" title="Alva" role="#Creator, #Product Lead" description="A radically new digital design tool built for cross-functional product teams. Alva lets you design interactive products based on the same components your engineers are using for production websites." color="#E24772" />
                </StyledPortfolioColumn>
                <StyledPortfolioColumn>
                    <StyledImage src={TilmanImage} alt="Picture of Tilman" sizes={`(max-width: xpx) calc(100vw - ${Size.M} * 2), 628px`} />
                    <Card url="https://invisiblehotels.com" years="2023+" title="Invisible Hotels" role="#Idea, #Design, #Code" description="A personal collection of all the lovely, minimalistic, and fancy hotels & apartments where we stayed already — or would love to." color="#108A5F" />
                    <Card url="https://tilman.io" /*TODO*/ years="2022+" title="Music" role="#Producer" description="" color="#0C2EF9" />
                </StyledPortfolioColumn>
            </StyledPortfolio>
            <StyledContent>
                <Text size={TextSize.Large} serif>Currently working at Tomorrow. Previously Accenture Interactive, SinnerSchrader, elbdudler. But available for selected freelance projects.</Text>
                <Button text='Get in touch' />
            </StyledContent>
        </>
    )
}
