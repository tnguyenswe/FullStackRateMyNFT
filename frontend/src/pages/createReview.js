/** @jsxImportSource theme-ui */
// import { Grid, Label, Box, Input, Textarea, Button, Flex, Image } from "theme-ui";
import React from "react";
import Headline from '../components/Headline';
import axios from 'axios';
import { useState, useEffect } from 'react';
import SingleCard from '../components/PreviewCards/SingleCard';
import { useLocation } from "react-router-dom";

import { Flex, Image, Text, Box } from 'theme-ui';
import { CircleWavyCheck } from 'phosphor-react';
import { Link } from "react-router-dom";



const CardLayout = (props) => (<Flex {...props} sx={{ width: ['300px','400px','340px','360px'], height: '400px', borderRadius: '40px', flexDirection: 'column', pb: '30px', overflow: 'hidden', backgroundColor: 'navy40' }}>{props.children}</Flex>)

const CardBackground = ({background, ...props}) => (<Image src={background} sx={{ maxWidth: ['300px','400px','340px','360px'], maxHeight: '200px', height: '200px', minHeight: '240px', width: '100%', objectFit: 'cover', borderRadius: '40px' }} />)

const PrimaryImage = ({primary, ...props}) => (<Flex sx={{alignSelf: 'center', position: 'relative', mt: '-65px', backgroundColor: '#0508104D', borderRadius: '50%', padding: '6px'}}><Image src={primary} sx={{ maxWidth: '110px', maxHeight: '110px', objectFit: 'cover', borderRadius: '50%' }} /></Flex>)

const TextContainer = (props) => (<Flex {...props} sx={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', pt: '10px' }}>{props.children}</Flex>)

const Reviews = (props) => {
    const location = useLocation();
    const CardsData = location.state
    const [filteredReviews, setFilteredReviews] = useState([]);

    return (
        <Flex sx={{flexDirection: 'column'}}>
            {/* <CardLayout>
                <CardBackground background={background}/>
                <PrimaryImage primary={primary} />
                <TextContainer>
                    <Headline sx={{ pb: '10px', textAlign: 'center', fontSize: [3,2,3], fontWeight: '600' }}>{projectName}</Headline>
                    <Flex sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text sx={{ color: 'navy0', pr: '2px', fontSize: [2,1,2], fontWeight: '600' }}>by {creatorName}</Text>
                        <CircleWavyCheck size={20} sx={{ color: 'navy0' }} />
                    </Flex>
                </TextContainer>
            </CardLayout> */}
        </Flex>
    );
};

export default Reviews;