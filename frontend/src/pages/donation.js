/** @jsxImportSource theme-ui */
import { Flex, Text } from "theme-ui";
import React from "react";

const About = () => {
    return(
        <Flex sx={{justifyContent: 'center', maxWidth: '100%', mx: '10vw', justifySelf: 'center'}}>
                <Text sx={{fontSize: 3, fontWeight: '700', textAlign: 'center'}}>
                    Thanks for checking out RateMy<span sx={{color: 'navy10'}}>NFT</span>!<br/><br/>
                    If you'd like to donate, feel free to send Ethereum to 0xf0A6B38B6Fb9b676A9C4188100ecb07D297fe8f4!
                </Text>
        </Flex>
    )
}

export default About;