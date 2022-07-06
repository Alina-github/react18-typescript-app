import React, {useState} from 'react';
import {Grid, Container, Card, Row, Text, Col} from "@nextui-org/react";

interface MainContentProps {
    isSliderOpen?: boolean;
}


function MainContent(props: MainContentProps) {

    const Slider = () => (
        <Container fluid>
            <Card css={{
                $$cardColor: '$colors$purple300',
                h: 'calc(100vh - 80px)',
            }}>
                <Card.Body>
                    <Row justify="center" align="center">
                        <Text
                            h6
                            weight="bold"
                            css={{
                                textGradient: "45deg, $blue600 -20%, $pink600 50%",
                                m: 0,
                            }}
                        >
                            Content
                        </Text>
                    </Row>
                </Card.Body>
            </Card>
        </ Container>
    )

    return (

        <Container gap={0} fluid>
            <Row  gap={0}>
                {props.isSliderOpen && (
                    <Col>
                        <Slider/>
                    </Col>)
                }

                <Col>
                    <Card css={{

                        $$cardColor: '$colors$purple50',
                        h: 'calc(100vh - 80px)',
                    }}>
                        <Card.Body>
                            <Text
                                h6
                                weight="bold"
                                css={{
                                    textGradient: "45deg, $blue600 -20%, $pink600 50%",
                                    m: 0,
                                }}
                            >
                               Media Block
                            </Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default MainContent;
