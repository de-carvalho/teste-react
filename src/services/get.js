import request from './request';

const getTickets = () => request.get('/stage-v0/route')

export 
{
    getTickets
};