import * as React from 'react';
import { Text, TextSize } from '../components/text';
import { Size } from '../components/tokens/size';
import { useTheme } from '../components/tokens/theme';
import { Space } from '../components/utils/space';
import { ExternalLink } from '../components/utils/link';
import { Center } from '../components/utils/center';

export const Footer: React.FunctionComponent = () => {
    const theme = useTheme();

    return (
        <>
            <Space vertical={Size.XXL} />
            {[
                { label: "Site's notice", link: "https://tilman.io/sitesnotice.html" },
                { label: "Privacy Policy", link: "https://tilman.io/privacypolicy.html" },
            ].map((item, i) =>
                <Center horizontal key={i}>
                    <ExternalLink link={item.link}>
                        <Text size={TextSize.Small} color={theme.colors.textVariant} center>{item.label}</Text>
                    </ExternalLink>
                </Center>
            )}
            <Space vertical={Size.L} />
        </>
    )
}
