/** @jsxImportSource theme-ui */
import { Grid, Label, Box, Input, Textarea, Button, Flex, Image, Text } from "theme-ui";
import React from "react";

const About = () => {
    return(
        <Flex sx={{justifyContent: 'center', maxWidth: '100%', mx: '10vw', justifySelf: 'center'}}>
                <Text sx={{fontSize: 3, fontWeight: '700'}}>
                    Hey there! Welcome to RateMy<span sx={{color: 'navy10'}}>NFT</span>.<br/><br/>
                    This is a platform developed for the purpose of allowing people to review NFT projects. <br/>
                    Users are able to read reviews and leave their own reviews as well! <br/>
                    More features will be built over time, but for now there are only those core features.
                </Text>
        </Flex>
    )
}

export default About;