import React, { Component } from 'react'
import '../styles/Favorites.css'
import MainPageHeader from '../components/header/MainPageHeader'
import TicketCard from '../components/ticketCard/TicketCard'

class Favorites extends Component {
    render() {
        return (
            <div>
                <MainPageHeader />
                <div className='favorites-container'>
                    <div className='favorites-text-config'>
                        <h1>Passagem de ônibus de São Paulo para Rio de Janeiro</h1>
                        <p>Data de embarque: 08/09/2019</p>
                    </div>
                    <TicketCard />
                </div>      
            </div>
        )
    }
}
export default Favorites;