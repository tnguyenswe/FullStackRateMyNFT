/** @jsxImportSource theme-ui */
import React from 'react';
import PreviewCards from '../PreviewCards';
import {Flex} from 'theme-ui';
import Headline from '../Headline';

const Body = () => {
    return(
        <Flex sx={{px: ['30px', '50px'], justifyContent: 'center', flexDirection: 'column', alignItems: ['center',null, 'start'], textAlign: 'start', overflow: 'hidden'}}>
            <Headline scale="h3" sx={{fontSize: ['36px', '48px'], fontWeight: '600', pb: '50px'}}>✨ Top Projects</Headline>
            <PreviewCards />
        </Flex>
    )
}

export default Body;