import Link from "next/link";
import { Fragment } from "react";
import { Cover, Animation, Size, Space, Text, TextSize, useTheme, WidthLimiter, Wrapper } from "../../components";
import { Footer } from "../../container/footer";
import { Releases } from "../../data/releases"

export default function Home() {
  const theme = useTheme();

  return (
    <>
      <Wrapper>
        <WidthLimiter width={Size.XXXXXL} center>
          <Space vertical={Size.XXL} />

          <Text size={TextSize.Regular} center sansserif>Tilman Frick</Text>
          <Space vertical={Size.XXXS} />
          <Text size={TextSize.SuperSmall} color={theme.colors.textVariant} sansserif center>All releases</Text>
          <Space vertical={Size.L} />
          {Releases.map(release =>
            <Fragment key={release.id}>
              <Link href={'/music/' + release.id}>
                <Cover image={release.image} />
                <Space vertical={Size.S} />
              </Link>
            </Fragment>
          )}
        </WidthLimiter>
      </Wrapper>
      <Footer />
    </>
  )
}
