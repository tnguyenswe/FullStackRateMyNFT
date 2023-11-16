/** @jsxImportSource theme-ui */
import { Grid, Label, Box, Input, Textarea, Button, Flex, Image, Text } from "theme-ui";
import React from "react";
import Headline from '../components/Headline';
import axios from 'axios';
import { useLocation, useNavigate } from "react-router-dom";
import { CircleWavyCheck } from 'phosphor-react';
import AppConfig from "../config";



const CardLayout = (props) => (<Flex {...props} sx={{ minWidth: '90vw', maxWidth: '90vw', height: '100%', borderRadius: '40px', flexDirection: 'column', pb: '30px', overflow: 'hidden' }}>{props.children}</Flex>)

const CardBackground = ({ background, ...props }) => (<Image src={background} sx={{ maxHeight: '200px', height: '200px', minHeight: '240px', width: '100%', objectFit: 'cover', borderRadius: '40px' }} />)

const PrimaryImage = ({ primary, ...props }) => (<Flex sx={{ minWidth: '140px', minHeight: '140px', alignSelf: 'start', position: 'relative', mt: ['0px', '-50px'], backgroundColor: '#0508104D', borderRadius: '50%', padding: '6px', ml: ['10px', '60px'], }}><Image src={primary} sx={{ maxWidth: '130px', maxHeight: '130px', objectFit: 'cover', borderRadius: '50%' }} /></Flex>)

const TextContainer = (props) => (<Flex {...props} sx={{ alignSelf: ['center', 'start'], justifyContent: 'center', alignItems: 'start', flexDirection: 'column', pt: '20px', ml: '20px', width: '100%' }}>{props.children}</Flex>)

const Reviews = (props) => {
    const location = useLocation();
    const CardsData = location.state
    const navigate = useNavigate();

    return (
        <Flex sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <CardLayout>
                <CardBackground background={CardsData.background} />
                <Flex sx={{ width: '100%', flexDirection: ['column', null, null, 'row'], mb: '50px' }}>
                    <Flex sx={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <PrimaryImage primary={CardsData.primary} />
                        <TextContainer>
                            <Headline sx={{ pb: '10px', textAlign: 'start', fontSize: 4, fontWeight: '600' }}>{CardsData.projectname}</Headline>
                            <Flex sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Text sx={{ color: 'navy0', pr: '2px', fontSize: 2, fontWeight: '600', textAlign: 'center' }}>by {CardsData.creatorname}</Text>
                                <CircleWavyCheck size={20} sx={{ color: 'navy0' }} />
                            </Flex>
                        </TextContainer>
                    </Flex>
                    <Grid sx={{ gridTemplateColumns: ['1fr 1fr', '1fr 1fr 1fr'], width: ['90%', null, null, '100%'], pt: ['20px', null, null, '0px'], justifySelf: ['center', null, null, 'end'], alignSelf: 'center' }}>
                        <Flex sx={{ flexDirection: 'column', justifyContent: 'center' }}>
                            <Text sx={{ fontSize: 4, fontWeight: '700', textAlign: ['center', null, null, 'start'] }}>
                                {CardsData.totalSupply ? CardsData.totalSupply : "Loading..."}
                            </Text>
                            <Text sx={{ fontSize: 2, color: 'gray50', textAlign: ['center', null, null, 'start'] }}>
                                Total Supply
                            </Text>
                        </Flex>
                        <Flex sx={{ flexDirection: 'column', justifyContent: 'center' }}>
                            <Text sx={{ fontSize: 4, fontWeight: '700', textAlign: ['center', null, null, 'start'] }}>
                                Ξ {CardsData.floorPrice ? (CardsData.floorPrice && CardsData.floorPrice.total && CardsData.floorPrice.total.floor_price.toFixed(2)) : "Loading..."}
                            </Text>
                            <Text sx={{ fontSize: 2, color: 'gray50', textAlign: ['center', null, null, 'start'] }}>
                                Floor Price
                            </Text>
                        </Flex>
                    </Grid>
                </Flex>
            </CardLayout>

            <Flex sx={{
                px: '40px',
                py: '40px',
                backgroundColor: 'navy50',
                flexDirection: 'column',
                width: '90vw',
                height: '100%',
                borderRadius: '20px'
            }}>

                <Text sx={{fontSize: 4, fontWeight: '700', mb: '20px'}}>
                    Write your review
                </Text>

                <Box sx={{height: '2px', width: '100%', backgroundColor: 'navy0', mb: '20px'}} />

                <Box as="form" onSubmit={(e) => {
                    e.preventDefault();
                    axios.post(process.env.backendEndpoint || AppConfig.backendEndpoint + "/reviews",
                    {
                        rating: e.target.rating.value,
                        author: e.target.author.value,
                        body: e.target.body.value, 
                        contractAddress: CardsData.contractaddress,
                        projectName: CardsData.projectname
                    })
                    .then(res => {
                        console.log(res.data);
                        navigate('/');
                    })
                    .catch(error => {
                        console.error('Error adding review:', error);
                    })
                    alert("Your review has been added!");
                    }}>
                    <Label sx={{mb: '4px', fontWeight: '700'}} htmlFor="rating">Rating (1-5)</Label>
                    <Input sx={{mb: '10px'}} name="rating" id="rating"/>

                    <Label sx={{mb: '4px', fontWeight: '700'}} htmlFor="author">Your Twitter handle (without the @)</Label>
                    <Input sx={{mb: '10px'}} name="author" id="author"/>

                    <Label sx={{mb: '4px', fontWeight: '700'}} htmlFor="body">Your Review</Label>
                    <Textarea name="body" id="body" rows={6}></Textarea>

                    <Button>Submit</Button>

                </Box>

            </Flex>
        </Flex>
    );
};

export default Reviews;