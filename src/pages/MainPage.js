import React, { Component } from 'react'
import '../styles/MainPage.css'
import MainPageHeader from '../components/header/MainPageHeader';
import TicketCard from '../components/ticketCard/TicketCard';

class MainPage extends Component {
    render() {
        return (
            <div className='teste'>
                <MainPageHeader />
                <div className='mainPage-config'>
                    <div className='mainPage-container'>
                        <h1>Passagem de ônibus de São Paulo para Rio de Janeiro</h1>
                        <p>Data de embarque: 08/09/2019</p>
                    </div>
                    <div className='first-ticket-card'>
                            <TicketCard />
                    </div>
                </div>
            </div>
        )
    }
}
export default MainPage;