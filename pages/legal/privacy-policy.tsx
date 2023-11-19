import Head from 'next/head'
import { Color } from '../../components/tokens/colors';
import styled from '@emotion/styled';
import { Size } from '../../components/tokens/size';
import { Text, TextSize } from '../../components/text';
import { Footer } from '../../components/footer';

const StyledWrapper = styled.div`
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: ${Size.L};
    margin-top: ${Size.XXXXL};
`;

export default function PrivacyPolicy() {
    return (
        <>
            <Head>
                <title>Privacy Policy</title>
                <meta name="robots" content="noindex" />
            </Head>
            <StyledWrapper>
                <Text size={TextSize.Huge} serif>
                    Privacy Policy
                </Text>
                <Text size={TextSize.Large}>Data Protection Declaration</Text>
                <Text size={TextSize.Large}>General Information</Text>
                <Text>
                    As being responsible for this website, we take the protection of your personal data very seriously. We treat your personal data confidentiality in particular in accordance with the statutory data protection regulations. By using this website, various personal data is collected. Personal data is data that you can be personally identified with. This data protection declaration describes which data we collect and for what we use it. It also explains how and for what purpose this is done. We would like to point out that data transmission over the Internet (e.g. communication by e-mail) can have security gaps. A complete protection of data against access by third parties is not possible.
                </Text>
                <Text>Our website  may be used without entering personal information. Different rules may apply to  certain services on our site, however, and are explained separately below. We  collect personal information from you (e.g. name, address, email address,  telephone number, etc.) in accordance with the provisions of German data  protection statutes. Information is considered personal if it can be associated  exclusively to a specific natural person. The legal framework for data  protection may be found in the German Federal Data Protection Act (BDSG) and the  Telemedia Act (TMG). The provisions below serve to provide information as to  the manner, extent and purpose for collecting, using and processing personal  information by the provider.</Text>
                <Text size={TextSize.Large}>Responsible for the website</Text>
                <Text>
                    {process.env.NEXT_PUBLIC_SITESNOTICE_ADDRESS}
                </Text>
                <Text size={TextSize.Large}>Responsible for data protection</Text>
                <Text>
                    {process.env.NEXT_PUBLIC_SITESNOTICE_ADDRESS} <br />
                    {process.env.NEXT_PUBLIC_SITESNOTICE_EMAIL}
                </Text>
                <Text size={TextSize.Large}>Visiting our website</Text>
                <Text>By visiting our website we process certain data of our visitors. What kind of data, on which legal basis, for what purpose and for how long we process, please read our subsequent data privacy policy.</Text>
                <Text>Providing our website</Text>
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
                <Text>This website is hosted by All-Inkl (Neue Medien Münnich, owner René Münnich, Hauptstraße 68, 02742 Friedersdorf). Details can be found in their privacy policy: https://all-inkl.com/datenschutzinformationen/. The legal base is Art. 6, para. 1, lit. f) GDPR. </Text>
                <Text>Plausible Tracking</Text>
                <Text>
                    We run Plausible Analytics to collect some anonymous usage data for statistical purposes. The goal is to track overall trends in our website traffic, it is not to track individual visitors. All the data is in aggregate only. No personal data is collected.
                </Text>
                <Text>
                    Data collected includes referral sources, top pages, visit duration, information from the devices (device type, operating system, country and browser) used during the visit and more. You can see full details in their <a href="https://plausible.io/data-policy" rel="noreferrer">data policy</a>.
                </Text>

                <Text size={TextSize.Large}>Rights according to legal data protection regulations</Text>
                <Text>You have the right to request information, correction, deletion or blocking of your personal data. As far as you should request
                    deletion of your personal data stored by us, we will execute your request without undue delay, unless legal duties for documentation
                    or storage apply. You can object to the usage of your personal data for advertising or market research purposes or revoke
                    given opt-ins at any time.</Text>
                <Text>In case we process personal data of you, you are so called “affected” within the meaning of the General Data Protection Regulation
                    (GDPR) and you have the following rights vis-à-vis the controller:</Text>
                <ul>
                    <li>
                        <Text>Right to information according to Art. 15 GDPR</Text>
                    </li>
                </ul>
                <Text>You have the right to get information for free about your personal data stored by us at any time. Furthermore, you have the
                    right to have your data provided to us transferred to yourself or a third party at any time.</Text>
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
                <Text>At your request, we will correct, block or delete the personal data stored about you, provided that other statutory regulations
                    (e.g. obligations to store data from the German Commercial Code) do not prevent this.</Text>
                <ul>
                    <li>
                        <Text>Right to data transferability according to Art. 20 GDPR</Text>
                    </li>
                </ul>
                <Text>You have the right to get information about your personal data for free in a structured, current and readable format</Text>
                <ul>
                    <li>
                        <Text>Right of contradiction/revocation of permission according to Art. 21 GDPR</Text>
                    </li>
                </ul>
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
                <Text>In order to process your request (please mail: {process.env.NEXT_PUBLIC_SITESNOTICE_EMAIL}), we are obliged to check your identity carefully. Please understand that we reserve
                    the right - depending on the criticality of the data - to request further information or proof of identity. This serves
                    in particular to protect your personal data from unauthorized access by third parties. We would like to point out that we
                    reserve the right not to process requests that are received inappropriately frequently or without corresponding proof of
                    identity. We will inform you of this in writing (via E-Mail).</Text>
                <Text size={TextSize.Large}>Children</Text>
                <Text>Persons under 16 should not send us personal data without the consent of their parents or persons with parental power. We
                    ask for no personal data from children and adolescents, nor do we collect such information nor pass it on to third parties.</Text>
            </StyledWrapper>
            <Footer />
        </>
    )
}
