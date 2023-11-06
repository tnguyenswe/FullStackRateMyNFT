/** @jsxImportSource theme-ui */
import React from "react";
import { Grid, Label, Box, Input, Textarea, Button, Flex, Image, Text, Link } from "theme-ui";
import Xlogo from '../../assets/x-logo.png';


const ReviewBoxes = (props) => {
    return (
        <Flex sx={{ backgroundColor: 'navy50', px: '10px', py: '30px', borderRadius: '10px', mb: '20px', flexDirection: 'column' }}>


            <Flex sx={{ flexDirection: 'column' }}>
                <Text
                    sx={{
                        color: 'navy0',
                        fontWeight: '700',
                        fontSize: 3,
                        mb: '10px'
                    }}>
                    Project Name: {props.projectName}
                </Text>

                <Text sx={{ fontSize: 2, fontWeight: '700', mb: '10px' }}>
                    {props.body}
                </Text>

                <Link href={`x.com/${props.author}`} sx={{textDecoration: 'none', color: 'white'}}>
                    <Flex>
                        <Image src={Xlogo} sx={{ maxWidth: '20px', mr: '6px' }} />
                        <Text sx={{ fontWeight: '700', textDecoration: 'none' }}>{props.author}</Text>
                    </Flex>
                </Link>


            </Flex>

        </Flex>
    )
}

export default ReviewBoxes;