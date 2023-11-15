/** @jsxImportSource theme-ui */
import React from "react";
import { Box, Flex, Image, Text, Link } from "theme-ui";
import Xlogo from '../../assets/x-logo.png';
import Star from '../../assets/star.png';

const ReviewBoxes = (props) => {
    const stars = [];

    for (let i = 0; i < props.rating; i++) {
        stars.push(<Image
            key={i}
            src={Star}
            alt="Star" 
            sx={{maxWidth: '16px'}}/>)
    }

    return (
        <Flex sx={{ backgroundColor: 'navy50', px: '30px', py: '30px', borderRadius: '10px', mb: '20px' }}>
            <Flex sx={{ flexDirection: 'column' }}>
                <Text sx={{ fontWeight: '700', fontSize: 3, mb: '12px' }}>Rating</Text>
                <Box>{stars}</Box>
            </Flex>

            <Box sx={{height: '100px', width: '2px', backgroundColor: 'navy0', mx: '20px'}} />

            <Flex sx={{ flexDirection: 'column' }}>
                <Text
                    sx={{
                        color: 'navy0',
                        fontWeight: '700',
                        fontSize: 3,
                        mb: '10px'
                    }}>
                    Project Name: {props.projectname}
                </Text>

                <Text sx={{ fontSize: 2, fontWeight: '700', mb: '10px' }}>
                    {props.body}
                </Text>

                <Link href={`https://www.x.com/${props.author}`} sx={{ textDecoration: 'none', color: 'white' }}>
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