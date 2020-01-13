import React from 'react'
import '../header/MainPageHeader.css'
import { format } from 'date-fns'

class MainPageHeader extends React.Component {
    constructor() {
        super();
        this.state = { data: [] }
    }
    componentDidMount() {
        const sidebar = document.getElementById("sidebar");
        const sidebarTrigger = document.getElementById("sidebar__trigger");
        const sidebarClose = document.getElementById("sidebar__close");
        sidebar.classList.add('isClosed');
        sidebarTrigger.addEventListener('click', () => {
            sidebar.classList.remove('isClosed');
        })
        sidebarClose.addEventListener('click', () => {
            sidebar.classList.add('isClosed');
        })

        this.setState({ data: JSON.parse(localStorage.getItem('data1')) })
    }

    deleteFavorite(obj) {
        var node = document.getElementById(obj);
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    }
    render() {
        return (
            <div>
                <div className="d-flex justify-end" >
                    <div className="hamburguerMenu" id="sidebar">
                        <div className='link-to pointer' id="sidebar__close">Passagens favoritas <i class="fas fa-angle-double-right"></i></div>
                        {
                            localStorage.getItem('data1')
                                ?
                                this.state.data.map((res) => {
                                    return (
                                        <div className="container__viagens" id={res.objectId}>
                                            <div>
                                                <p><sapn className="bolder">Origem:</sapn> {res.Origin}</p>
                                                <p><sapn className="bolder">Destino:</sapn> {res.Destination}</p>
                                                <p><sapn className="bolder">Embarque:</sapn> {format(new Date(res.DepartureDate.iso), 'dd/MM/yyyy')}</p>
                                            </div>
                                            <div className="d-flex justify-space-around">
                                                <div>
                                                    <p className="value">R$ {res.Price}</p>
                                                    <p><small>{res.BusClass}</small></p>
                                                </div>
                                                <div className="ml-2">
                                                    <i onClick={() => this.deleteFavorite(res.objectId)} class="fas fa-trash"></i>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                                :
                                <p id="texto">Você não tem passagens favoritadas</p>
                        }
                    </div>
                </div>
                <nav className='pattern-navbar flex'>
                    <i class="fas fa-bars"></i>
                    <div className='nav-container flex'>
                        <i class="fas fa-heart"></i>
                        <div className='link-to pointer' id="sidebar__trigger">Passagens favoritas</div>
                    </div>
                </nav>


            </div>
        )
    }
}
export default MainPageHeader;