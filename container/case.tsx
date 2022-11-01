import * as React from 'react';
import { Text, TextSize } from '../components/text';
import { BackgroundColor } from '../components/background-color';
import { Space } from '../components/utils/space';
import { Size } from '../components/tokens/size';
import { Wrapper } from '../components/wrapper';
import { useTheme } from '../components/tokens/theme';
import { WidthLimiter } from '../components/width-limiter';
import { Button } from '../components/button';
import { Center } from '../components/utils/center';
import { Image } from '../components/image';

interface CaseProps {
	topline: string;
	title: string;
	description: string;
	button: string;

	link: string;
	image: string;
	backgroundColor: string;
}

export const Case: React.FunctionComponent<CaseProps> = props => {
	const theme = useTheme();

	return (
		<BackgroundColor color={props.backgroundColor} style={{ marginTop: '-'+Size.XXL }}>
			<Wrapper>
				<Space vertical={Size.XXXXXL} />
				<WidthLimiter>
					<Text size={TextSize.Regular} color={theme.colors.textVariant} center>{props.topline}</Text>
					<Space vertical={Size.XXS} />
					<Text size={TextSize.Huge} color={theme.colors.background} center>{props.title}</Text>
					<Space vertical={Size.M} />
					<Text size={TextSize.Regular} color={theme.colors.background} center>{props.description}</Text>
				</WidthLimiter>
				<Space vertical={Size.XL} />
				<Center horizontal>
					<Button link={props.link} textColor={props.backgroundColor}>{props.button}</Button>
				</Center>
				<Space vertical={Size.XXXL} />
				<Image image={props.image} style={{ borderRadius: '3px', boxShadow: '0 0 50px rgba(0, 0, 0, 0.3)' }} />
			</Wrapper>
		</BackgroundColor>
	)
}
