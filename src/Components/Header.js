import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class Header extends Component {
    render() {
        return (
            <header style={{ display: 'flex', justifyContent: 'space-between', height: '85px', alignItems: 'center', fontSize: '30px', background: 'navy', color: 'white' }}>
                <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
                    <i>Logo</i>
                </Link>
                <div style={{ display: 'flex', width: '70%', justifyContent: 'space-evenly' }}>
                    <Link to='/group' style={{ textDecoration: 'none', color: 'white' }}>
                        <h2>Number</h2>
                    </Link>
                    <Link to='/activities' style={{ textDecoration: 'none', color: 'white' }}>
                        <h2>Type of Activities</h2>
                    </Link>
                    <Link to='/calendar' style={{ textDecoration: 'none', color: 'white' }}>
                        <h2>Calendar</h2>
                    </Link>
                    <Link to='/deals' style={{ textDecoration: 'none', color: 'white' }}>
                        <h2>Deals</h2>
                    </Link>
                </div>

                <h2 style={{ width: '10%', textAlign: 'right', padding: 10 }}>Location</h2>
                {/* how to get the location of the user */}
            </header>
        )
    }
}

export default Header