/** @jsxImportSource theme-ui */
import { Grid, Box, Flex, Image, Text } from "theme-ui";
import React from "react";
import Headline from '../../src/components/Headline';
import ReviewBoxes from '../../src/components/ReviewBoxes';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";
import { CircleWavyCheck } from 'phosphor-react';
import AppConfig from "../config";


const CardHref = (props) => (<Box state={{ projectname: props.projectname, background: props.background, primary: props.primary, creatorname: props.creatorname, projecthref: props.projecthref, contractaddress: props.contractaddress }} {...props} sx={{ textDecoration: 'none', color: 'inherit' }}>{props.children}</Box>)

const CardLayout = (props) => (<Flex {...props} sx={{ minWidth: '90vw', maxWidth: '90vw', height: '100%', borderRadius: '40px', flexDirection: 'column', pb: '30px', overflow: 'hidden' }}>{props.children}</Flex>)

const CardBackground = ({ background, ...props }) => (<Image src={background} sx={{ maxHeight: '200px', height: '200px', minHeight: '240px', width: '100%', objectFit: 'cover', borderRadius: '40px' }} />)

const PrimaryImage = ({ primary, ...props }) => (<Flex sx={{ minWidth: '140px', minHeight: '140px', alignSelf: 'start', position: 'relative', mt: ['0px', '-50px'], backgroundColor: '#0508104D', borderRadius: '50%', padding: '6px', ml: ['10px', '60px'], }}><Image src={primary} sx={{ maxWidth: '130px', maxHeight: '130px', objectFit: 'cover', borderRadius: '50%' }} /></Flex>)

const TextContainer = (props) => (<Flex {...props} sx={{ alignSelf: ['center', 'start'], justifyContent: 'center', alignItems: 'start', flexDirection: 'column', pt: '20px', ml: '20px', width: '100%' }}>{props.children}</Flex>)

const Reviews = (props) => {
    const location = useLocation();
    const CardsData = location.state
    const [totalSupply, setTotalSupply] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [floorPrice, setFloorPrice] = useState(0);

    useEffect(() => {
        const fetchReviews = async () => {
            try{
                const response = await axios.get(process.env.backendEndpoint || AppConfig.backendEndpoint + `/reviews/${CardsData.contractaddress}`)
                setReviews(response.data);
            }catch(err){
                console.error(err);
            }
        }


        const fetchFloorPrice = async () => {
            const openseaLink = CardsData.opensealink;
            const parts = openseaLink.split('/');
            const openseaprojectname = parts[parts.length - 1];

            const url = `https://api.opensea.io/api/v2/collections/${openseaprojectname}/stats`

            try{
                const response = await axios.get(url, {
                    headers: {
                        accept: 'application/json',
                        'X-API-Key': process.env.openseaAPIKey || AppConfig.openseaAPIKey
                    }
                });
                setFloorPrice(response.data);


            }catch (error){
                console.error(error);
            }
        }

        const fetchTotalSupply = async () => {
            const url = process.env.quiknodeEndpoint || AppConfig.quiknodeEndpoint;

            const payload = {
                id: 67,
                jsonrpc: "2.0",
                method: "qn_fetchNFTsByCollection",
                params: [{
                    collection: CardsData.contractaddress,
                    omitFields: ["traits"],
                    page: 1,
                    perPage: 10,
                }]
            };

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });

                const data = await response.json();
                setTotalSupply(data.result.totalItems);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchReviews();
        fetchTotalSupply();
        fetchFloorPrice();
    }, [CardsData.contractaddress, CardsData.opensealink]);



    return (
        <Flex sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <CardHref projecthref={CardsData.projecthref} projectname={CardsData.projectname} background={CardsData.background} primary={CardsData.primary} creatorname={CardsData.creatorname} contractaddress={CardsData.contractaddress}>
                <CardLayout>
                    <CardBackground background={CardsData.background} />
                    <Flex sx={{ width: '100%', flexDirection: ['column', null, null, 'row'], mb: '50px' }}>
                        <Flex sx={{ width: '100%', alignItems: 'center', justifyContent: 'center', my: ['20px', '0px']}}>
                            <PrimaryImage primary={CardsData.primary} />
                            <TextContainer>
                                <Headline sx={{ pb: '10px', textAlign: 'start', fontSize: 4, fontWeight: '600' }}>{CardsData.projectname}</Headline>
                                <Flex sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Text sx={{ color: 'navy0', pr: '2px', fontSize: 2, fontWeight: '600', textAlign: 'center' }}>by {CardsData.creatorname}</Text>
                                    <CircleWavyCheck size={20} sx={{ color: 'navy0' }} />
                                </Flex>
                            </TextContainer>
                        </Flex>
                        <Grid sx={{ gridTemplateColumns: ['1fr', '1fr 1fr 1fr'], width: ['90%', null, null, '100%'], pt: ['20px', null, null, '0px'], justifySelf: ['center', null, null, 'end'], alignSelf: 'center' }}>
                            <Flex sx={{ flexDirection: 'column', justifyContent: 'center'}}>
                                <Text sx={{ fontSize: 4, fontWeight: '700', textAlign: ['center', null, null, 'start'] }}>
                                    {totalSupply ? totalSupply : "Loading..."}
                                </Text>
                                <Text sx={{ fontSize: 2, color: 'gray50', textAlign: ['center', null, null, 'start'] }}>
                                    Total Supply
                                </Text>
                            </Flex>

                            {/* <Flex sx={{ flexDirection: 'column' }}>
                                <Text sx={{ fontSize: 4, fontWeight: '700', textAlign: ['center', null, null, 'start'] }}>
                                    6.4k
                                </Text>
                                <Text sx={{ fontSize: 2, color: 'gray50', textAlign: ['center', null, null, 'start'] }}>
                                    Total Holders
                                </Text>
                            </Flex>

                            <Flex sx={{ flexDirection: 'column' }}>
                                <Text sx={{ fontSize: 4, fontWeight: '700', textAlign: ['center', null, null, 'start'] }}>
                                    644.1k
                                </Text>
                                <Text sx={{ fontSize: 2, color: 'gray50', textAlign: ['center', null, null, 'start'] }}>
                                    Total Volume
                                </Text>
                            </Flex> */}

                            <Flex sx={{ flexDirection: 'column', justifyContent: 'center', my: ['10px', '0px'] }}>
                                <Text sx={{ fontSize: 4, fontWeight: '700', textAlign: ['center', null, null, 'start'] }}>
                                    Ξ {floorPrice ? (floorPrice && floorPrice.total && floorPrice.total.floor_price.toFixed(2)) : "Loading..."}
                                    
                                    {/* {responseData ? (responseData && responseData.price && responseData.price.totalNative) : "Loading..."} */}
                                </Text>
                                <Text sx={{ fontSize: 2, color: 'gray50', textAlign: ['center', null, null, 'start'] }}>
                                    Floor Price
                                </Text>
                            </Flex>

                            <Link sx={{
                                    borderRadius: '100px',

                                    background: 'linear-gradient(95.41deg, #3B5AD5 0%, #2745C3 100%)',
                                    minWidth: '40px',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    alignSelf: 'center',
                                    justifySelf: 'center',
                                    textDecoration: 'none', 
                                    color: 'inherit'
                                }} to={`/createReview/${CardsData.projecthref}`} state={{projectname: CardsData.projectname, background: CardsData.background, primary: CardsData.primary, creatorname: CardsData.creatorname, projecthref: CardsData.projecthref, contractaddress: CardsData.contractaddress, floorPrice: floorPrice, totalSupply: totalSupply}} {...CardsData} >
                                <Box sx={{
                                    borderRadius: '100px',
                                    px: '24px',
                                    py: '10px',
                                    background: 'linear-gradient(95.41deg, #3B5AD5 0%, #2745C3 100%)',
                                    minWidth: '40px',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    alignSelf: 'center',
                                    justifySelf: 'center'
                                }}>
                                    <Text sx={{fontWeight: '700', whiteSpace: 'nowrap'}}>Write Review</Text>
                                </Box>
                            </Link>
                        </Grid>
                    </Flex>

                    <Box>
                        {reviews.map(
                            (review, index) => (
                                <ReviewBoxes
                                key={index} 
                                rating={review.rating}
                                body={review.body}
                                author={review.author}
                                projectname={review.projectName}
                                />
                            )
                        )}
                    </Box>
                </CardLayout>
            </CardHref>
        </Flex>
    );
};

export default Reviews;