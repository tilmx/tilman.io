import * as React from 'react';
import styled from '@emotion/styled'
import { Text, TextSize } from './text';
import { Size, useTheme } from './tokens';
import { ChevronRight } from 'lucide-react';
import { Animation, Flex, FlexAlignItems, FlexJustifyContent, Link, Space } from './utils';

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

export const Banner: React.FunctionComponent<{ text: string; image: string; link: string; }> = props => {
    const theme = useTheme();

    return (
        <Animation>
            <Link link={props.link}>
                <StyledContainer>
                    <Flex alignItems={FlexAlignItems.Center} justifyContent={FlexJustifyContent.SpaceBetween}>
                        <Flex alignItems={FlexAlignItems.Center}>
                            <StyledServiceImage src={props.image} />
                            <Space horizontal={Size.XS} />
                            <Text size={TextSize.Large}>{props.text}</Text>
                        </Flex>
                        <ChevronRight color={theme.colors.text} />
                    </Flex>
                </StyledContainer>
            </Link>
        </Animation>
    )
}
