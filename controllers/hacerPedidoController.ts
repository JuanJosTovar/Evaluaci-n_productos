import {Request, Response} from 'express'
import Pedido from '../Dto/PedidoDto'
import UserService from '../services/UserService'

let hacerpedido = async (req:Request, res: Response)=>{
    try{
        const {
            idProducto,
            direccion,
            nombre,
            email,
        } = req.body
        let estado = ''
        const result: any = await UserService.crearPedido(new Pedido(idProducto,direccion,nombre,email,estado));
        console.log(result);
        
        if(result.encontrado){
            return res.status(201).json({
                status: 'Pedido exitoso'
            })
        }
        return res.status(401).json({
            status: 'Pedido fallido'
        })
    }catch(error: any){
        return res.status(401).json({
            status: 'Debe ingresar datos'
        })
    }
}

export default hacerpedido;