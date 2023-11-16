/** @jsxImportSource theme-ui */
import SingleCard from './SingleCard';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid } from 'theme-ui';
import AppConfig from '../../config';

const PreviewCards = () => {
    const [queryData, setQueryData] = useState([]);

    useEffect(() => {
        const queryDatabase = async () => {
            const response = await axios.get("https://noderatemynft-2aee21b93305.herokuapp.com/collections");
            setQueryData(response.data);
        }
        queryDatabase();
    },
        [])


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
            gridRowGap: ['20px', '60px']
        }}>
            {queryData.map((data, i) => {
                return (<SingleCard
                    key={i}
                    creatorname={queryData[i].creatorName}
                    projectname={queryData[i].projectName}
                    background={queryData[i].background}
                    projecthref={queryData[i].projectHref}
                    primary={queryData[i].pfp}
                    contractaddress={queryData[i].contractAddress}
                    opensealink={queryData[i].openseaLink} />);
            })}
        </Grid>
    );
}

export default PreviewCards;