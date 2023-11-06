/** @jsxImportSource theme-ui */
import { Grid, Label, Box, Input, Textarea, Button, Flex, Image, Text } from "theme-ui";
import React from "react";
import Headline from '../../src/components/Headline';
import ReviewBoxes from '../../src/components/ReviewBoxes';
import axios from 'axios';
import { useState, useEffect } from 'react';
import SingleCard from '../components/PreviewCards/SingleCard';
import { useLocation, Link } from "react-router-dom";
import { CircleWavyCheck } from 'phosphor-react';


const CardHref = (props) => (<Box state={{ projectName: props.projectName, background: props.background, primary: props.primary, creatorName: props.creatorName, projectHref: props.projectHref, contractAddress: props.contractAddress }} {...props} sx={{ textDecoration: 'none', color: 'inherit' }}>{props.children}</Box>)

const CardLayout = (props) => (<Flex {...props} sx={{ minWidth: '90vw', maxWidth: '90vw', height: '100%', borderRadius: '40px', flexDirection: 'column', pb: '30px', overflow: 'hidden' }}>{props.children}</Flex>)

const CardBackground = ({ background, ...props }) => (<Image src={background} sx={{ maxHeight: '200px', height: '200px', minHeight: '240px', width: '100%', objectFit: 'cover', borderRadius: '40px' }} />)

const PrimaryImage = ({ primary, ...props }) => (<Flex sx={{ minWidth: '140px', minHeight: '140px', alignSelf: 'start', position: 'relative', mt: ['0px', '-50px'], backgroundColor: '#0508104D', borderRadius: '50%', padding: '6px', ml: ['10px', '60px'], }}><Image src={primary} sx={{ maxWidth: '130px', maxHeight: '130px', objectFit: 'cover', borderRadius: '50%' }} /></Flex>)

const TextContainer = (props) => (<Flex {...props} sx={{ alignSelf: ['center', 'start'], justifyContent: 'center', alignItems: 'start', flexDirection: 'column', pt: '20px', ml: '20px', width: '100%' }}>{props.children}</Flex>)

const Reviews = (props) => {
    const location = useLocation();
    const CardsData = location.state
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);
    const [totalSupply, setTotalSupply] = useState(null);
    const [reviews, setReviews] = useState([]);

    console.log("Lol", totalSupply);


    useEffect(() => {
        const fetchReviews = async () => {
            try{
                const response = await axios.get(`http://localhost:8800/reviews/${CardsData.contractAddress}`)
                setReviews(response.data);
            }catch(err){
                console.log(err);
            }
        }

        const fetchData = async () => {
            try {
                const response = await axios.get(`https://ethereum-rest.api.mnemonichq.com/marketplaces/v1beta2/floors/${CardsData.contractAddress}`, {
                    headers: {
                        accept: 'application/json',
                        'X-API-Key': 'EdhMSty77ltcuF7ydGGckqEb6suBBHzbdrVWxnLmK1nFlavP'
                    }
                });
                setResponseData(response.data);
            } catch (error) {
                setError(error);
            }
        };

        const fetchTotalSupply = async () => {
            const url = "https://purple-indulgent-sunset.quiknode.pro/0d28244ac219511bda5d028018f8463586ab67ac/";

            const payload = {
                id: 67,
                jsonrpc: "2.0",
                method: "qn_fetchNFTsByCollection",
                params: [{
                    collection: CardsData.contractAddress,
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
        fetchData();
        fetchTotalSupply();
    }, []);



    return (
        <Flex sx={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <CardHref projectHref={CardsData.projectHref} projectName={CardsData.projectName} background={CardsData.background} primary={CardsData.primary} creatorName={CardsData.creatorName} contractAddress={CardsData.contractAddress}>
                <CardLayout>
                    <CardBackground background={CardsData.background} />
                    <Flex sx={{ width: '100%', flexDirection: ['column', null, null, 'row'], mb: '50px' }}>
                        <Flex sx={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                            <PrimaryImage primary={CardsData.primary} />
                            <TextContainer>
                                <Headline sx={{ pb: '10px', textAlign: 'start', fontSize: 4, fontWeight: '600' }}>{CardsData.projectName}</Headline>
                                <Flex sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Text sx={{ color: 'navy0', pr: '2px', fontSize: 2, fontWeight: '600', textAlign: 'center' }}>by {CardsData.creatorName}</Text>
                                    <CircleWavyCheck size={20} sx={{ color: 'navy0' }} />
                                </Flex>
                            </TextContainer>
                        </Flex>
                        <Grid sx={{ gridTemplateColumns: ['1fr 1fr', '1fr 1fr 1fr'], width: ['90%', null, null, '100%'], pt: ['20px', null, null, '0px'], justifySelf: ['center', null, null, 'end'], alignSelf: 'center' }}>
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

                            <Flex sx={{ flexDirection: 'column', justifyContent: 'center' }}>
                                <Text sx={{ fontSize: 4, fontWeight: '700', textAlign: ['center', null, null, 'start'] }}>
                                    Ξ {responseData ? (responseData && responseData.price && responseData.price.totalNative) : "Loading..."}
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
                                }} to={`/createReview/${CardsData.projectHref}`} state={{projectName: CardsData.projectName, background: CardsData.background, primary: CardsData.primary, creatorName: CardsData.creatorName, projectHref: CardsData.projectHref, contractAddress: CardsData.contractAddress}} {...CardsData} >
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
                            review => (
                                <ReviewBoxes 
                                rating={review.rating}
                                body={review.body}
                                author={review.author}
                                projectName={review.projectName}
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