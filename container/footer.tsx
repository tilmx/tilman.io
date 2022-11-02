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
            <WidthLimiter>
                <Space vertical={Size.XXL} />
                <Text size={TextSize.SuperSmall} color={theme.colors.textVariant} center><InternalLink link="/legal/sites-notice">Site's Notice</InternalLink></Text>
                <Text size={TextSize.SuperSmall} color={theme.colors.textVariant} center><InternalLink link="/legal/privacy-policy">Privacy Police</InternalLink></Text>
                <Space vertical={Size.XXL} />
            </WidthLimiter>
        </Wrapper>
    )
}
