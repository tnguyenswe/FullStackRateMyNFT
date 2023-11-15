/** @jsxImportSource theme-ui */
import { Flex, Text, Image, Box, Grid } from "theme-ui";
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Ethereum from '../../assets/ethereum-ic.svg';
import Ellipse from '../../assets/ellipse-2.png';
import Line from '../../assets/line-1.png';

const NavBar = (props) => {
    const [navState, setNavState] = useState('home');

    const clickAbout = () => {
        setNavState('about')
    }

    const clickHome = () => {
        setNavState('home')
    }

    const clickDonate = () => {
        setNavState('donate')
    }

    return (
        <Grid
            sx={(theme) => ({
                justifyItems: "center",
                alignItems: "center",
                width: "100%",
                minHeight: "60px",
                height: '100%',
                gridTemplateColumns: ['3fr 1fr', '1fr 1fr'],
                py: ["40px", "60px"],
                position: "relative",
                mb: '2rem',
                px: ['30px', '50px']
            })}
        >
            <Flex sx={{ alignItems: 'center', alignSelf: 'start', justifySelf: 'start' }}>
                <Link onClick={clickHome} to="/" sx={{ textDecoration: 'none', color: 'inherit', justifySelf: 'start', display: 'flex' }}>
                    <Text sx={{ fontWeight: '700', fontSize: 4 }}>RateMy<Text sx={{ fontWeight: '700', fontSize: 4, color: 'navy10', mr: '10px' }}>NFT</Text></Text>
                </Link>
                {/* <SearchBar /> */}
            </Flex>
            <Flex sx={{ alignItems: 'center', alignSelf: 'end', justifySelf: 'end', display: 'flex' }}>
                <Grid sx={{
                    gridTemplateColumns: '1fr 1fr',
                    gridGap: '0',
                    maxWidth: '180px',
                    display: ['none', null, null, 'grid']
                }}>
                    {(navState === "about") ?
                        <Link to="/about" sx={{ textDecoration: 'none', color: '#CDCDCD4D' }}>
                            <Flex sx={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'start', height: '100%', pr: '30px' }}>
                                <Text sx={{ color: 'white10', pb: '6px' }}>About</Text>
                                <Image src={Ellipse} alt="Ellipse" sx={{ width: '4px', height: '4px', mb: '-10px', }} />
                            </Flex>
                        </Link>
                    :
                        <Link onClick={clickAbout} to="/about" sx={{ textDecoration: 'none', color: '#CDCDCD4D' }}>
                            <Flex sx={{justifyContent: 'center', pr: '30px'}}>
                            <Text sx={{}}>About</Text>
                            </Flex>
                        </Link>
                    }  

                    {(navState === "home") ?
                    (<Link to="/" sx={{ textDecoration: 'none', color: '#CDCDCD4D' }}>
                        <Flex sx={{ flexDirection: 'column', alignItems: 'center', height: '100%' }}>
                            <Text sx={{ color: 'white10', pb: '6px', minWidth: '100px' }}>Top Projects</Text>
                            <Image src={Ellipse} alt="Ellipse" sx={{ width: '4px', height: '4px', mb: '-10px', }} />
                        </Flex>
                    </Link>) :
                    <Link onClick={clickHome} to="/" sx={{ textDecoration: 'none', color: '#CDCDCD4D' }}>
                        <Flex>
                            <Text sx={{minWidth: '100px'}}>Top Projects</Text>
                        </Flex>
                    </Link>
                    }
                </Grid>
                <Image src={Line} sx={{ mr: '20px', ml: '10px', display: ['none', null, null, 'flex'] }} />

                <Link onClick={clickDonate} to="/donation" sx={{textDecoration: 'none', color: 'white10'}}>
                    <Box sx={{
                        display: ['none','flex'],
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontWeight: '700',
                        fontSize: 2,
                        py: '10px',
                        px: '20px',
                        borderRadius: '20px',
                        minWidth: '200px',
                        background: 'linear-gradient(95.41deg, #3B5AD5 0%, #2745C3 100%)',
                    }}>Send A Donation
                <Image src={Ethereum} alt="Ethereum" sx={{ pl: '10px', maxHeight: '17px' }} />
                    </Box>
                </Link>
                <Flex sx={{
                    ml: '10px',
                    borderRadius: '50%',
                    minWidth: '40px',
                    minHeight: '40px',
                    alignSelf: 'center',
                    justifySelf: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#3E848D'
                }}>
                    <Image src={props.userImage} sx={{ borderRadius: '50%', width: '36px', height: '36px' }} />
                </Flex>
            </Flex>
        </Grid>
    );
};

export default NavBar;