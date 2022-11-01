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
import { StaticImageData } from 'next/image';

interface CaseProps {
	topline: string;
	title: string;
	description: string;
	button: string;

	link: string;
	image: StaticImageData;
	imageAlt: string;
	backgroundColor: string;

	noNegativeMargin?: boolean;
	smartphoneScreen?: boolean;
}

export const Case: React.FunctionComponent<CaseProps> = props => {
	const theme = useTheme();

	return (
		<BackgroundColor color={props.backgroundColor} style={{ marginTop: props.noNegativeMargin ? undefined : '-'+Size.XXL }}>
			<Wrapper>
				{!props.noNegativeMargin && <Space vertical={Size.XXL} />}
				<Space vertical={Size.XXXXL} />
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
				<Image image={props.image} alt={props.imageAlt} style={{ width: props.smartphoneScreen ? '70%' : '100%', maxWidth: props.smartphoneScreen ? '360px' : undefined, borderRadius: '3px', boxShadow: !props.smartphoneScreen ? '0 0 50px rgba(0, 0, 0, 0.3)' : undefined, margin: '0 auto' }} />
			</Wrapper>
		</BackgroundColor>
	)
}
