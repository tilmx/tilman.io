import * as React from 'react';
import { Text, TextSize } from '../components/text';
import { Size } from '../components/tokens/size';
import { useTheme } from '../components/tokens/theme';
import { Space } from '../components/utils/space';
import { InternalLink, WidthLimiter, Wrapper } from '../components';

export const Footer: React.FunctionComponent = () => {
    const theme = useTheme();

    return (
        <Wrapper>
            <WidthLimiter center>
                <Space vertical={Size.XXL} />
                <Text size={TextSize.SuperSmall} color={theme.colors.textVariant} center sansserif>
                    <InternalLink link="/legal/sites-notice">Site's Notice</InternalLink> — <InternalLink link="/legal/privacy-policy">Privacy Policy</InternalLink>
                </Text>
                <Space vertical={Size.XXL} />
            </WidthLimiter>
        </Wrapper>
    )
}
