import React, { Component } from 'react'
import './TicketInformation.css'

class Tickets extends Component {
    render() {
        return(
            <div className='ticket-container'>
                    <div className='border-color'></div>
                        <div className='ticket-infos'>
                            <div className='ticket-border-config'>
                                <p>Saída</p>
                                <p>Embarque/Desembarque</p>
                                <p>Duração</p>
                                <p>Classe</p>
                                <p>Preço</p>
                            </div>
                        </div>
            </div>
        )
    }
}
export default Tickets; 

