import * as React from 'react';
import styled from '@emotion/styled'
import { Animation, Flex, Space, FlexAlignItems, FlexJustifyContent, InternalLink } from '../components/utils';
import { Cover } from '../components/cover';
import { Releases } from '../data/releases';
import { Wrapper } from '../components/wrapper';
import { Size, useTheme } from '../components/tokens';
import { Text, TextSize } from '../components/text';
import { ChevronRight } from 'lucide-react';

const StyledTeaser = styled.div`
    background-color: ${props => props.theme.colors.text};
    border-radius: ${Size.S};
    transition: background-color .2s, transform .2s;

    &:hover {
        background-color: ${props => props.theme.colors.accent};
        transform: scale(1.05);
    } 
`

export const MusicTeaser: React.FunctionComponent = () => {
    const theme = useTheme();
    const latestRelease = Releases.find(release => release.id === 'dimensions');
    return (
        <>
            {latestRelease &&
                <InternalLink link={'./music/' + latestRelease.id}>
                    <Animation>
                        <StyledTeaser>
                            <Wrapper>
                                <Space vertical={Size.L} />
                                <Flex justifyContent={FlexJustifyContent.SpaceBetween} alignItems={FlexAlignItems.Center}>
                                    <Flex alignItems={FlexAlignItems.Center}>
                                        <div style={{ width: '120px', flexShrink: .4 }}>
                                            <Cover image={latestRelease?.image} />
                                        </div>
                                        <Space horizontal={Size.M} />
                                        <div>
                                            <Text color={theme.colors.background} sansserif>Listen to the Tilman Frick's new single »{latestRelease.title}«</Text>
                                            <Space vertical={Size.XXS} />
                                            <Text size={TextSize.SuperSmall} color={theme.colors.background} style={{ opacity: '.5' }} sansserif>Available on all major streaming platforms</Text>
                                            <Space vertical={Size.XS} />
                                        </div>
                                    </Flex>
                                        <Space horizontal={Size.XXS} />
                                    <div>
                                        <ChevronRight color={theme.colors.background} />
                                        <Space vertical={Size.XS} />
                                    </div>
                                </Flex>
                                <Space vertical={Size.M} />
                            </Wrapper>
                        </StyledTeaser>
                    </Animation>
                </InternalLink>
            }
        </>
    )
}