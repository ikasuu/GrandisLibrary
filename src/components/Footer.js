import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import styled from 'styled-components';

import { version, versionName } from '../special/Values';
import { KofiButton } from '../components/Page';

const FooterContainer = styled.footer`
    margin: 10rem 1.5rem 0 1.5rem;
`;

const FooterCol = styled(Col)`
    margin-bottom: 1.5rem;
`;

const FooterText = styled.h6`
    margin-top: 1rem;
`;

const FooterLink = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;

    &:hover{
        text-decoration: underline;
    }
`;

const FooterDisclaimer = styled.p`
    font-size: 0.9rem;
    max-width: 15rem;
    margin-top: 1rem;
`;

const FooterButtonContainer = styled.div`
    margin-top: 1rem;
`;

const FooterButton = styled(Button)`
    width: fit-content !important;
    padding: 0 !important;
    margin-right: 0.5rem;
`;

function Footer() {
    return (
        <FooterContainer>
            <Container>
                <Row>
                    <FooterCol md lg={4}>
                        <FooterButtonContainer>
                            <FooterButton variant="link"><a href="https://discord.gg/d4et8vt9kP" target="_blank" rel="noreferrer noopener"><span className="discord-mini-button"/></a></FooterButton>
                            <FooterButton variant="link"><a href="https://twitter.com/MapleShinnie" target="_blank" rel="noreferrer noopener"><span className="twitter-button"/></a></FooterButton>
                            <FooterButton variant="link"><a href="https://www.youtube.com/channel/UCPiNjGVt9P04a80vEBid3rA" target="_blank" rel="noreferrer noopener"><span className="youtube-button"/></a></FooterButton>
                        </FooterButtonContainer>
                        <FooterText>GMS Ver. {version} [{versionName}]</FooterText>
                        <FooterDisclaimer>Grandis Library is a fan-made resource and is in no way affiliated with Nexon</FooterDisclaimer>
                    </FooterCol>
                    <FooterCol md>
                        <h5><strong>ABOUT</strong></h5>
                        <FooterLink><a href="#/about" className="footer-link">About Us</a></FooterLink>
                        <FooterLink><a href="https://github.com/ikasuu/GrandisLibrary" target="_blank" rel="noreferrer noopener" className="footer-link">GitHub</a></FooterLink>
                        <FooterLink><a href="https://maplestory.io/" target="_blank" rel="noreferrer noopener" className="footer-link">API Source</a></FooterLink>
                        <div><FooterButton variant="link"><a href="https://ko-fi.com/B0B22RS80" target="_blank" rel="noreferrer noopener"><KofiButton/></a></FooterButton></div>
                    </FooterCol>
                    <FooterCol md>
                        <h5><strong>QUICK LINKS</strong></h5>
                        <FooterLink><a href="#/content/progression-guide" className="footer-link">Progression Guide</a></FooterLink>
                        <FooterLink><a href="#/content/level-content-guide" className="footer-link">Level Content Guide</a></FooterLink>
                        <FooterLink><a href="#/content/link-skills" className="footer-link">Link Skills</a></FooterLink>
                    </FooterCol>
                    <FooterCol md>
                        <h5><strong>USEFUL LINKS</strong></h5>
                        <FooterLink><a href="https://maplestory.fandom.com/wiki/" target="_blank" rel="noreferrer noopener" className="footer-link">MapleWiki</a></FooterLink>
                        <FooterLink><a href="https://maplestory.nexon.net/news/59803/maple-guides" target="_blank" rel="noreferrer noopener" className="footer-link">Maple Guides</a></FooterLink>
                        <FooterLink><a href="https://www.reddit.com/r/Maplestory/" target="_blank" rel="noreferrer noopener" className="footer-link">r/MapleStory</a></FooterLink>
                    </FooterCol>
                </Row>
            </Container>
        </FooterContainer>
    );
}

export default Footer
