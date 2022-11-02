import * as React from 'react';
import styled from '@emotion/styled'
import { Text, TextSize } from './text';
import { Size } from './tokens/size';
import { ChevronRight } from 'lucide-react';
import { Animation } from './utils/animation';
import { ExternalLink } from './utils/external-link';
import { Flex, FlexAlignItems, FlexJustifyContent } from './utils/flex';
import { Space } from './utils/space';
import { Color } from './tokens';

const StyledContainer = styled.div`
    display: relative;
    padding: ${Size.XS} ${Size.S};
    margin: 0 -${Size.S};
    border-radius: ${Size.XXS};
    transition: background .1s;
    cursor: pointer;
    text-decoration: none;

    &:active, &:hover {
        background: ${Color.BackgroundVariant};
    }
`

const StyledServiceImage = styled.img`
    display: block;
    width: ${Size.M};
    margin: 0;
    padding: 0;
    border: none;
`

export const Banner: React.FunctionComponent<{ text: string; image: string; alt: string; link: string; }> = props => {
    return (
        <Animation>
            <ExternalLink link={props.link} noHighlighting>
                <StyledContainer>
                    <Flex alignItems={FlexAlignItems.Center} justifyContent={FlexJustifyContent.SpaceBetween}>
                        <Flex alignItems={FlexAlignItems.Center}>
                            <StyledServiceImage src={props.image} alt={props.alt} />
                            <Space horizontal={Size.XS} />
                            <Text size={TextSize.Regular} sansserif style={{ textDecoration: 'none' }}>{props.text}</Text>
                        </Flex>
                        <ChevronRight color={Color.Text} />
                    </Flex>
                </StyledContainer>
            </ExternalLink>
        </Animation>
    )
}
