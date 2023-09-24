import React from 'react'
import styled from 'styled-components'

const NavStyles = styled.div
`
        height: 50px;
        top: 0;
        z-index: 15;
        width: 90%;
        position: fixed;
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        padding: 1.5rem 5%;
    
    img{
        height: 3rem;
    }

    li,a {
        color: white;
        font-weight: bold;
        font-size: 1rem;
        text-decoration: none;
    }

    ul li{
        cursor: pointer;
        list-style: none;
        display: inline-block;
        padding-left: 30px;
    }

`

export default NavStyles