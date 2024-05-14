import {Request, Response} from 'express'
import UserService from '../services/UserService'

let hacerpedido = async (req:Request, res: Response)=>{
    try{
        const {
            idPedido,
        } = req.body
        const result: any = await UserService.verificarEstado(idPedido);
        console.log(result);
        
        if(result[0].length>0){
            return res.status(201).json({
                status: 'Obtenido Correctamente', estado:result
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