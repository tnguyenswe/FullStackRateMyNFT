/** @jsxImportSource theme-ui */
import { Flex, Image, Input, Box } from "theme-ui";
import React from "react";
import Search from '../../assets/search-ic.svg';

const SearchBar = () => {
    const handleClick = (e) => {
        e.target.value = '';
    }

    return (
        <Box as="form">
            <Flex sx={{ alignItems: 'center', justifyContent: 'center', ml: ['0px', null, null, '20px'], mr: ['16rem', null, null, '16rem'], padding: '10px', border: 'solid 1px #7184CF', borderRadius: '6px', backgroundColor: '#080C16', width: ['90%', '80%', '90%'] }}>
                <Image src={Search} alt="Search Icon" sx={{ width: '16px', height: '16px' }} />
                <Input onClick={handleClick} sx={{ border: 'none', padding: '0', outline: 'none', color: 'navy0', pl: '10px' }} defaultValue="Search project" />
            </Flex>
        </Box>
    )
}

export default SearchBar;