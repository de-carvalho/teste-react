import React, { Component } from 'react'
import './TicketCard.css'
import { getTickets } from '../../services/get'
import Tickets from '../ticketsInformations/TicketInformations';
import { format } from 'date-fns'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class TicketCard extends Component {
    constructor() {
        super();
        this.state = { allTickets: [], data: [], n: '', number: 1 };
    }

    componentDidMount = async () => {
        const get = await getTickets()
        this.setState({ allTickets: get.data.results })
    }

    pegaId(obj) {
        document.getElementById(obj).style.display = 'none'
        document.getElementById(`novo-${obj}`).style.display = 'block'
        for (let i = 0; i < this.state.allTickets.length; i++) {
            const element = this.state.allTickets[i];
            if (element.objectId === obj) {
                this.state.data.push(element)
                localStorage.setItem('data', JSON.stringify(this.state.data))
                localStorage.setItem('data1', JSON.stringify(this.state.data))

            }
        }
        localStorage.setItem('id', obj)
        this.setState({ n: this.state.number++ })
    }

    confirm = () => {

        toast.success(`${this.state.n} passagens adicionadas como favoritas com sucesso`);
        this.setState({ n: '0' })
        this.setState({ number: 1 })
        var json = JSON.parse(localStorage.getItem('data'))
        for (let i = 0; i < json.length; i++) {
            console.log(json[i].objectId);
            var card = document.getElementById(`card${json[i].objectId}`)
            card.parentNode.removeChild(card);
        }

        localStorage.removeItem('data')


    }

    remove = (obj) => {
        document.getElementById(obj).style.display = 'block'
        document.getElementById(`novo-${obj}`).style.display = 'none'
        this.setState({ n: this.state.number-- })
       
    }


    render() {
        return (
            <div className='all-cards'>
                <div className='d-flex justify-around'>
                    <div className="column">
                        <ToastContainer
                            position="top-left"
                        />
                        <Tickets />
                        {
                            this.state.allTickets.map((res) => {

                                return (
                                    <div className='card-config mb-2' id={`card${res.objectId}`} key={res.objectId}>
                                        <div className='image-teste'></div>
                                        <div className='card-content'>
                                            <p className=" text time"><span className="bold">{format(new Date(res.DepartureDate.iso), 'HH:mm')}</span><br />{format(new Date(res.ArrivalDate.iso), 'HH:mm')} </p>
                                            <p className=" text viagem">{res.Destination}<br /> {res.Origin}</p>
                                            <p className=" text daracao">duração</p>
                                            <p className=" text class">{res.BusClass}</p>
                                            <p className=" text preco"><span className="bold">R$ {res.Price}</span></p>
                                            <button className='select-btn' id={res.objectId} onClick={() => this.pegaId(res.objectId)}>ESCOLHER</button>
                                            <button className='fvrt-btn'  id={`novo-${res.objectId}`} onClick={() => this.remove(res.objectId)}>ESCOLHIDO<i class="fas fa-check"></i></button>
                                            {/*este botão deve aparecer no lugar do outro quando o usuário selecionar a passagem que tem interesse */}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div>
                        <div className=" filter-box column">
                            <div className="row">
                                <div className='d-flex justify-around'>
                                    <div className="row">
                                        <h3>Classe</h3>
                                        <div className='convencional chck-config1'>
                                            <input type='checkbox' className='checkmark' name='option1' value='convencional' />
                                            <label for='convencional'>Convencional</label>
                                        </div>
                                        <div className='executivo chck-config'>
                                            <input type='checkbox' className='checkmark' name='option2' value='executivo' />
                                            <label for='executivo'>Executivo</label>
                                        </div>
                                        <div className='semi-leito chck-config'>
                                            <input type='checkbox' className='checkmark' name='option3' value='semi-leito' />
                                            <label for='semi-leito'>Semi-Leito</label>
                                        </div>
                                        <div className='leito chck-config'>
                                            <input type='checkbox' className='checkmark' name='option4' value='leito' />
                                            <label for='leito'>Leito</label>
                                        </div>

                                    </div>

                                    <div className=''>
                                        <h4>Preço máximo</h4>
                                        <p>R$ aqui vai o preço</p>
                                    </div>
                                </div>
                            </div>
                            <h4>Saída</h4>
                            <div className='madrugada chck-config-departure'>
                                <input type='checkbox' className='checkmark' name='departure-option1' value='madrugada' />
                                <label for='madrugada'>Madrugada - (00h00 - 05h59)</label>
                            </div>
                            <div className='manha chck-departure'>
                                <input type='checkbox' className='checkmark' name='departure-option2' value='manha' />
                                <label for='manha'>Manhã - (06h00 - 11h59)</label>
                            </div>
                            <div className='tarde chck-config-departure'>
                                <input type='checkbox' className='checkmark' name='departure-option3' value='tarde' />
                                <label for='tarde'>Tarde - (12h00 - 17h59)</label>
                            </div>
                            <div className='noite chck-config'>
                                <input type='checkbox' className='checkmark' name='departure-option4' value='noite' />
                                <label for='noite'>Noite - (18h00 - 23h00)</label>
                            </div>
                        </div>

                        <div className='fvrt-box'>
                            <div className='p-fvrt-box-config'>
                                {this.state.n ? this.state.n : '0 '}
                            </div>
                            <p className='fvrt-box-txt'>Passagens selecionadas</p>
                            <button onClick={() => this.confirm()} className='select-btn confirm-fvrts mb-2'>CONFIRMAR FAVORITOS</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default TicketCard;