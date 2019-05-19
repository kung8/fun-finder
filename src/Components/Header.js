import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Header extends Component {
    render() {
        return (
            <Head>
                <Link to='/' style={{ textDecoration: 'none', color: 'white', width: '5%'}}>
                    <i style={{ fontFamily: 'cursive', marginLeft: 20 }}>ff ff</i>
                </Link>
                <div style={{ display: 'flex', width: '85%', justifyContent: 'space-evenly' }}>
                    {/* <Link to='/group' style={{ textDecoration: 'none', color: 'white' }}>
                        <h2>Party Size</h2>
                    </Link> */}
                    <Link to='/category' style={{ textDecoration: 'none', color: 'white' }}>
                        <h2>Category</h2>
                    </Link>
                    <Link to='/calendar' style={{ textDecoration: 'none', color: 'white' }}>
                        <h2>Calendar</h2>
                    </Link>
                    <Link to='/dining' style={{ textDecoration: 'none', color: 'white' }}>
                        <h2>Dining</h2>
                    </Link>
                    <Link to='/events' style={{ textDecoration: 'none', color: 'white' }}>
                        <h2>Events</h2>
                    </Link>
                    <Link to='/deals' style={{ textDecoration: 'none', color: 'white' }}>
                        <h2>Deals</h2>
                    </Link>
                </div>

                <h2 style={{ width: '10%', textAlign: 'right', marginRight: 20 }}>Location</h2>
                {/* how to get the location of the user */}
                {/* how will users be able to upload */}
                {/* I will want people to create an account if they are to be able to like/create events/post/activities */}
            </Head>
        )
    }
}

export default Header

const Head = styled.header `
    width: 100vw;
    display: flex;
    justify-content: space-between;
    height: 85px;
    align-items: center;
    font-size: 30px;
    background: navy;
    color: white;
`

const Logo = styled.i`

`