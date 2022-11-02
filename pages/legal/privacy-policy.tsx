import { useTheme } from '@emotion/react'
import Head from 'next/head'
import { Logo } from '../../components/logo'
import { OffsetArea } from '../../components/offset-area'
import { Text, TextSize } from '../../components/text'
import { Size } from '../../components/tokens/size'
import { Space } from '../../components/utils/space'
import { Wrapper } from '../../components/wrapper'
import { Flex, FlexAlignItems } from '../../components/utils/flex'
import { InternalLink } from '../../components/utils/internal-link'
import { ExternalLink } from '../../components/utils/external-link'
import { ChevronRight } from 'lucide-react'

export default function PrivacyPolicy() {
    const theme = useTheme();
    return (
        <div>
            <Head>
                <title>Privacy Policy</title>
                <meta name="robots" content="noindex" />
            </Head>
            <Wrapper>
                <Space vertical={Size.XL} />
                <InternalLink link='/'>
                    <Logo />
                </InternalLink>
                <OffsetArea>
                    <Space vertical={Size.XXXL} />
                    <Text size={TextSize.Huge}>Privacy Policy</Text>
                    <Space vertical={Size.M} />

                    <Text>Data Protection Declaration</Text>

                    <Space vertical={Size.L} />
                    <Text size={TextSize.Large}>General Information</Text>
                    <Text>
                        As being responsible for this website, we take the protection of your personal data very seriously. We treat your personal data confidentiality in particular in accordance with the statutory data protection regulations. By using this website, various personal data is collected. Personal data is data that you can be personally identified with. This data protection declaration describes which data we collect and for what we use it. It also explains how and for what purpose this is done. We would like to point out that data transmission over the Internet (e.g. communication by e-mail) can have security gaps. A complete protection of data against access by third parties is not possible.
                    </Text>
                    <Text>Our website  may be used without entering personal information. Different rules may apply to  certain services on our site, however, and are explained separately below. We  collect personal information from you (e.g. name, address, email address,  telephone number, etc.) in accordance with the provisions of German data  protection statutes. Information is considered personal if it can be associated  exclusively to a specific natural person. The legal framework for data  protection may be found in the German Federal Data Protection Act (BDSG) and the  Telemedia Act (TMG). The provisions below serve to provide information as to  the manner, extent and purpose for collecting, using and processing personal  information by the provider.</Text>

                    <Space vertical={Size.L} />
                    <Text size={TextSize.Large}>Responsible for the website</Text>
                    <Space vertical={Size.S} />
                    <Text>
                        Tilman Frick<br />
                        Breitenfelder Str. 54<br />
                        20251 Hamburg<br />
                        Germany
                    </Text>

                    <Space vertical={Size.L} />
                    <Text size={TextSize.Large}>Responsible for data protection</Text>
                    <Space vertical={Size.S} />
                    <Text>
                        Tilman Frick<br />
                        Breitenfelder Str. 54<br />
                        20251 Hamburg<br />
                        Germany<br />
                        sayhello@tilman.io
                    </Text>

                    <Space vertical={Size.L} />
                    <Text size={TextSize.Large}>Visiting our webiste</Text>
                    <Space vertical={Size.S} />
                    <Text>By visiting our website we process certain data of our visitors. What kind of data, on which legal basis, for what purpose and for how long we process, please read our subsequent data privacy policy.</Text>

                    <Space vertical={Size.S} />

                    <Text>Providing our website</Text>
                    <Space vertical={Size.S} />

                    <Text>By loading our webpage, some data is being stored in a web server protocol file:
                        <ul>
                            <li>Date and time of the request for the load of the web page</li>
                            <li>Size of the data package being transmitted within the connection</li>
                            <li>Type and version of the used browser as well as your IP address</li>
                        </ul>
                    </Text>
                    <Text>Furthermore, we store the following information:

                        <ul>
                            <li>HTTP Method</li>
                            <li>Host name</li>
                            <li>URI of the request</li>
                            <li>HTTP Response Code</li>
                            <li>Referrer</li>
                            <li>User-Agent</li>
                            <li>Result, Edge Request-ID</li>
                            <li>Host Header, HTTP-Protocol, Time to first byte, x-forward header, SSL-Protocol and SSL cypher, Protocol version, FLE-Status, FLE encrypted fields.</li>
                        </ul>
                    </Text>

                    <Text>The legal base for the processing of your IP address is Art. 6, para. 1, lit. f) GDPR. Our legitimate interest to store this data is based on the following purposes:</Text>

                    <Text>
                        <ul>
                            <li>ensure a seamless connection establishment</li>
                            <li>ensure the smooth usage of our website / application</li>
                            <li>technical analysis of the system security and stability</li>
                        </ul>
                    </Text>

                    <Text>Your IP address is generally not stored, we especially do not use it for analysing personal data. A full storage of the IP address would only happen so that we can track technical errors or hacker attacks. Our web servers are configured in a way that your IP address is deleted in a timely manner after your visit of our site.</Text>

                    <Space vertical={Size.S} />

                    <Text>Cloudflare</Text>
                    <Space vertical={Size.S} />

                    <Text>Cloudflare is a cloud service provider and content delivery network. Here we host and operate our website. Legal basis for using Cloudflare on our website is the privacy shield framework (<a href="https://www.privacyshield.gov/participant?id=a2zt0000000GnZKAA0&amp;status=Active)">https://www.privacyshield.gov/participant?id=a2zt0000000GnZKAA0&amp;status=Active)</a>. We may process your personal data until our legitimate interest ceases to exist.</Text>
                    <Text>For more details of Cloudflare’s privacy and security processes, please visit <a href="https://www.cloudflare.com/security-policy/">https://www.cloudflare.com/security-policy/</a>.</Text>

                    <Space vertical={Size.L} />
                    <Text size={TextSize.Large}>Rights according to legal data protection regulations</Text>
                    <Space vertical={Size.S} />
                    <Text>You have the right to request information, correction, deletion or blocking of your personal data. As far as you should request
                        deletion of your personal data stored by us, we will execute your request without undue delay, unless legal duties for documentation
                        or storage apply. You can object to the usage of your personal data for advertising or market research purposes or revoke
                        given opt-ins at any time.</Text>
                    <Text>In case we process personal data of you, you are so called “affected” within the meaning of the General Data Protection Regulation
                        (GDPR) and you have the following rights vis-à-vis the controller:</Text>
                    <Text>
                        <ul>
                            <li>Right to information according to Art. 15 GDPR</li>
                        </ul>
                    </Text>
                    <Text>You have the right to get information for free about your personal data stored by us at any time. Furthermore, you have the
                        right to have your data provided to us transferred to yourself or a third party at any time.</Text>
                    <Text>
                        <ul>
                            <li>
                                <Text>Right to correct any information that is inaccurate or incomplete according to Art. 16 GDPR</Text>
                            </li>
                            <li>
                                <Text>Right to Deletion according to Art. 17 GDPR</Text>
                            </li>
                            <li>
                                <Text>Right to limitation of processing according to Art. 18 GDPR</Text>
                            </li>
                        </ul>
                    </Text>

                    <Text>At your request, we will correct, block or delete the personal data stored about you, provided that other statutory regulations
                        (e.g. obligations to store data from the German Commercial Code) do not prevent this.</Text>
                    <Text>
                        <ul>
                            <li>Right to data transferability according to Art. 20 GDPR</li>
                        </ul>
                    </Text>

                    <Text>You have the right to get information about your personal data for free in a structured, current and readable format</Text>
                    <Text>
                        <ul>
                            <li>Right of contradiction/revocation of permission according to Art. 21 GDPR</li>
                        </ul>
                    </Text>

                    <Text>If you have given us your consent to process your personal data, you can revoke this at any time</Text>
                    <Text>
                        <ul>
                            <li>Right of complaint to the national supervisory authority according to Art. 13 para. 2 lit. d) GDPR</li>
                        </ul>
                    </Text>
                    <Text>Without prejudice to any other administrative or judicial remedy, you have the right of appeal to a supervisory authority,
                        in particular in the Member State where you reside, work or suspect of infringement, if you believe that the processing
                        of personal data concerning you is contrary to the GDPR.</Text>
                    <Text>The supervisory authority to which the complaint has been lodged shall inform the complainant of the status and results of
                        the complaint, including the possibility of a judicial remedy according to Art. 78 GDPR.</Text>
                    <Text>In order to process your request (please mail:
                        <a href="sayhello@tilman.io">sayhello@tilman.io</a>), we are obliged to check your identity carefully. Please understand that we reserve
                        the right - depending on the criticality of the data - to request further information or proof of identity. This serves
                        in particular to protect your personal data from unauthorized access by third parties. We would like to point out that we
                        reserve the right not to process requests that are received inappropriately frequently or without corresponding proof of
                        identity. We will inform you of this in writing (via E-Mail).</Text>

                    <Space vertical={Size.L} />
                    <Text size={TextSize.Large}>Children</Text>
                    <Space vertical={Size.S} />
                    <Text>Persons under 16 should not send us personal data without the consent of their parents or persons with parental power. We
                        ask for no personal data from children and adolescents, nor do we collect such information nor pass it on to third parties.</Text>

                    <Space vertical={Size.L} />
                    <Text size={TextSize.Large}>Use Of Cookies</Text>
                    <Space vertical={Size.S} />
                    <Text>Cookies are small text files that are stored on your computer and saved by your browser. Cookies do not cause any damage
                        to your computer and do not contain any viruses. Our cookies remain stored on your terminal for a certain period of time.</Text>
                    <Text>In your browser settings, you can determine whether you want to be informed merely about the setting of a cookie, whether
                        you want to grant or exclude permission either for individual cases or for cookies in general, or whether you want cookies
                        to be automatically deleted when your browser is closed. Disabling cookies may limit the functionality of this website.</Text>
                    <Text>Cookies, which are necessary for the execution of the electronic communication process or for the provision of certain functions
                        desired by you, are stored on the basis of Art. 6 para. 1 lit. f) GDPR. The website operator has a legitimate interest
                        in the storage of cookies for technically error-free and optimized provision of his services. If other cookies (e.g. cookies
                        for analyzing your surfing behavior) are stored, they are handled separately under the analysis service used.</Text>
                    <Text>Our cookies remain on your computer for a certain period of time enabling our cloud provider to recognize your computer
                        behind a shared IP-address space on the basis of the logged data (visit to our website including date and time, browser
                        type, operating system) in order to provide end user security.</Text>
                    <Space vertical={Size.S} />

                    <Text>Cloudflare</Text>
                    <Space vertical={Size.S} />

                    <Text>
                        <a href="https://support.cloudflare.com/hc/en-us/articles/200170156-What-does-the-Cloudflare-cfduid-cookie-do-">https://support.cloudflare.com/hc/en-us/articles/200170156-What-does-the-Cloudflare-cfduid-cookie-do-</a>
                    </Text>

                    <Space vertical={Size.L} />
                    <Text size={TextSize.Large}>Link to third parties</Text>
                    <Space vertical={Size.S} />
                    <Text>Embedding of external platforms</Text>
                    <Space vertical={Size.S} />
                    <Text>You will find links to other websites on this website, directly or indirectly by means of links. The legal basis for such
                        processing is our legitimate interest pursuant to Art. 6 para. 1 lit. f) GDPR. We may process your personal data until
                        our legitimate interest ceases to exist.</Text>
                    <Text>We hereby expressly distance ourselves from all contents of these sites to which links are established and do not adopt
                        these contents as our own. We do not have any influence on changes of the linked content. Our website may contain links
                        to other providers’ websites, which are not covered by this data protection policy. To the extent that the use of websites
                        of other providers involves the capture, processing and use of personal data, please refer to the data protection policy
                        of the relevant provider.</Text>
                    <Text>Version: May 2018</Text>

                    <Space vertical={Size.XXXL} />

                    <Flex alignItems={FlexAlignItems.Center}>
                        <Text size={TextSize.Regular} color={theme.colors.textVariant}>
                            <InternalLink link='/'>Back to tilman.io</InternalLink>
                        </Text>
                        <ChevronRight color={theme.colors.textVariant} />
                    </Flex>
                    <Flex alignItems={FlexAlignItems.Center}>
                        <Text size={TextSize.Regular} color={theme.colors.textVariant}>
                            <InternalLink link='/legal/sites-notice'>Site's Notice</InternalLink>
                        </Text>
                        <ChevronRight color={theme.colors.textVariant} />
                    </Flex>
                </OffsetArea>
                <Space vertical={Size.XXXXXL} />
            </Wrapper>
        </div>
    )
}
