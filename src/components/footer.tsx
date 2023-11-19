import styled from '@emotion/styled';
import { Size } from './tokens/size';
import { Text } from './text';
import type { FunctionComponent } from 'react';

const StyledFooter = styled.div`
    max-width: 1080px;
    margin: ${Size.XXXL} auto;
    display: flex;
    gap: ${Size.M};
`;

const StyledLink = styled.a`
    color: unset;
    text-decoration: unset;
`;

export const Footer: FunctionComponent = () => {
    return (
        <StyledFooter>
            <StyledLink href="/legal/sites-notice">
                <Text>Site's notice</Text>
            </StyledLink>
            <StyledLink href="/legal/privacy-policy">
                <Text>Privacy Policy</Text>
            </StyledLink>
        </StyledFooter>
    );
};
