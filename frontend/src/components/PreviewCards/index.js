/** @jsxImportSource theme-ui */
import SingleCard from './SingleCard';
import React from 'react';
import { Grid } from 'theme-ui';
import BAYCLogo from '../../assets/bayc-logo.png';

const CardsData = [
    {
        projectName: 'Bored Ape Yacht Club',
        projectHref: 'BoredApeYachtClub',
        creatorName: 'BoredApeYachtClub',
        creatorLink: 'https://opensea.io/BoredApeYachtClub?tab=created',
        background: 'https://lh3.googleusercontent.com/i5dYZRkVCUK97bfprQ3WXyrT9BnLSZtVKGJlKQ919uaUB0sxbngVCioaiyu9r6snqfi2aaTyIvv6DHm4m2R3y7hMajbsv14pSZK8mhs=h600',
        primary: 'https://lh3.googleusercontent.com/Ju9CkWtV-1Okvf45wo8UctR-M9He2PjILP0oOvxE89AyiPPGtrR3gysu1Zgy0hjd2xKIgjJJtWIc0ybj4Vd7wv8t3pxDGHoJBzDB=s130',
        contractAddress: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
    },
    {
        projectName: 'Clone X - X Takashi Murakami',
        projectHref: 'CloneX',
        creatorName: 'RTFKTCLONEXTM',
        creatorLink: 'https://opensea.io/collection/clonex',
        background: 'https://lh3.googleusercontent.com/4elUtz8UyFYDH34vDxd4hpQX8S-EdkFq8s9ombkuQTDBWLwHvsjRM_RXWT2zX8Vt2bAiO2BHslwN57FyTW1JIn_FyFI0BsZfmvmeJQ=h600',
        primary: 'https://lh3.googleusercontent.com/XN0XuD8Uh3jyRWNtPTFeXJg_ht8m5ofDx6aHklOiy4amhFuWUa0JaR6It49AH8tlnYS386Q0TW_-Lmedn0UET_ko1a3CbJGeu5iHMg=s168',
        contractAddress: '0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b',
    },
    // {
    //     projectName: 'Psychedelics Anonymous Genesis',
    //     creatorName: 'Psychedelics-Anonymous',
    //     creatorLink: 'https://opensea.io/Psychedelics-Anonymous?tab=created',
    //     background: 'https://lh3.googleusercontent.com/Ztbsa_YCs23MJCTLA9DiQUyeO3uSJXRRwEQtoUMF39vhqaxTqrshwU_g1sGRH0XvC7X6w1o1WIR_r7KsO0fNbA8PKQbfiCvBoxcjBw=h600',
    //     primary: 'https://lh3.googleusercontent.com/9VndAx-5SvVdamB8KvABGcw2bdXMdeyEYdhHJ22WMV98C2yS85SDT5rnBtT0zOxVjeJ6KBz2fXKXcYSIXeOc7aGiU4i0Rx9IwaMfO9o=s130'
    // },
    {
        projectName: 'Azuki',
        projectHref: 'Azuki',
        creatorName: 'TeamAzuki',
        creatorLink: 'https://opensea.io/TeamAzuki?tab=created',
        background: 'https://lh3.googleusercontent.com/O0XkiR_Z2--OPa_RA6FhXrR16yBOgIJqSLdHTGA0-LAhyzjSYcb3WEPaCYZHeh19JIUEAUazofVKXcY2qOylWCdoeBN6IfGZLJ3I4A=h600',
        primary: 'https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s0',
        contractAddress: '0xed5af388653567af2f388e6224dc7c4b3241c544',
    },
    {
        projectName: 'Pudgy Penguins',
        projectHref: 'PudgyPenguins',
        creatorName: 'TheIglooCompany',
        creatorLink: 'https://opensea.io/collection/pudgypenguins',
        background: 'https://i.seadn.io/gcs/files/8a26e3de0f309089cbb1e5ab969fc0bc.png?auto=format&dpr=1&w=3840',
        primary: 'https://i.seadn.io/gae/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi?auto=format&dpr=1&w=384',
        contractAddress: '0xbd3531da5cf5857e7cfaa92426877b022e612cf8',
    },
    {
        projectName: 'Doodles',
        projectHref: 'Doodles',
        creatorName: 'Doodles_LLC',
        creatorLink: 'https://opensea.io/collection/doodles-official',
        background: 'https://lh3.googleusercontent.com/svc_rQkHVGf3aMI14v3pN-ZTI7uDRwN-QayvixX-nHSMZBgb1L1LReSg1-rXj4gNLJgAB0-yD8ERoT-Q2Gu4cy5AuSg-RdHF9bOxFDw=h600',
        primary: 'https://lh3.googleusercontent.com/7B0qai02OdHA8P_EOVK672qUliyjQdQDGNrACxs7WnTgZAkJa_wWURnIFKeOh5VTf8cfTqW3wQpozGedaC9mteKphEOtztls02RlWQ=s168',
        contractAddress: '0x8a90cab2b38dba80c64b7734e58ee1db38b8992e',
    },
    {
        projectName: 'CryptoPunks',
        projectHref: 'CryptoPunks',
        creatorName: 'CryptoPunks',
        creatorLink: 'https://opensea.io/collection/cryptopunks',
        background: 'https://lh3.googleusercontent.com/48oVuDyfe_xhs24BC2TTVcaYCX7rrU5mpuQLyTgRDbKHj2PtzKZsQ5qC3xTH4ar34wwAXxEKH8uUDPAGffbg7boeGYqX6op5vBDcbA=h600',
        primary: 'https://lh3.googleusercontent.com/BdxvLseXcfl57BiuQcQYdJ64v-aI8din7WPk0Pgo3qQFhAUH-B6i-dCqqc_mCkRIzULmwzwecnohLhrcH8A9mpWIZqA7ygc52Sr81hE=s168',
        contractAddress: '0xb7f7f6c52f2e2fdb1963eab30438024864c313f6',
    }
];

const PreviewCards = () => {

    return (
        <Grid sx={{ 
            backgroundColor: 'navy50',
            width: '100%',
            gridTemplateColumns: ['1fr', null, '1fr 1fr', '1fr 1fr 1fr'],
            alignItems: 'center',
            justifyItems: 'center',
            py: '20px',
            borderRadius: '40px',
            gridColumnGap: ['10px', '30px', null, '50px'], 
            gridRowGap: ['20px', '60px'] }}>
            {
                CardsData.map((data, i) => {
                    return (<SingleCard
                        key={i}
                        creatorName={CardsData[i].creatorName}
                        projectName={CardsData[i].projectName}
                        background={CardsData[i].background}
                        projectHref={CardsData[i].projectHref}
                        primary={CardsData[i].primary}
                        contractAddress={CardsData[i].contractAddress} />);
                }
                )
            }
        </Grid>
    );
}

export default PreviewCards;