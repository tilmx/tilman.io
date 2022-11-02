import * as React from 'react';
import styled from '@emotion/styled'
import { Text, TextSize } from './text';
import { Size } from './tokens/size';
import { useTheme } from './tokens/theme';
import { ChevronRight } from 'lucide-react';
import { Animation } from './utils/animation';
import { ExternalLink } from './utils/external-link';
import { Flex, FlexAlignItems, FlexJustifyContent } from './utils/flex';
import { Space } from './utils/space';

const StyledContainer = styled.div`
    display: relative;
    padding: ${Size.XS} ${Size.S};
    margin: 0 -${Size.S};
    border-radius: ${Size.XXS};
    transition: background .1s;
    cursor: pointer;

    &:active {
        background: ${props => props.theme.colors.backgroundVariant};
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
    const theme = useTheme();

    return (
        <Animation>
            <ExternalLink link={props.link}>
                <StyledContainer>
                    <Flex alignItems={FlexAlignItems.Center} justifyContent={FlexJustifyContent.SpaceBetween}>
                        <Flex alignItems={FlexAlignItems.Center}>
                            <StyledServiceImage src={props.image} alt={props.alt} />
                            <Space horizontal={Size.XS} />
                            <Text size={TextSize.Regular}>{props.text}</Text>
                        </Flex>
                        <ChevronRight color={theme.colors.text} />
                    </Flex>
                </StyledContainer>
            </ExternalLink>
        </Animation>
    )
}
