import React, {useState} from 'react';
import {Grid, Container, Card, Row, Text, Button} from "@nextui-org/react";

interface HeaderProps {
    isSliderOpen: boolean;
    setIsSliderOpen: (isSliderOpen: boolean) => void;
}


function Header({
                    setIsSliderOpen,
                    isSliderOpen
                }: HeaderProps) {

    return (
        <>

            <Container
                css={{
                    m: '0',
                    p: '0',
                }}
            >
                <Card css={{
                    $$cardColor: '$colors$white',
                    w: '100vw',
                }}>
                    <Card.Body>
                        <Row justify="center" align="center">
                            <Button shadow color="gradient"
                                    onPress={() => setIsSliderOpen(!isSliderOpen)}>
                                Click
                            </Button>
                        </Row>
                    </Card.Body>
                </Card>

            </ Container>


        </>
    );
}

export default Header;
