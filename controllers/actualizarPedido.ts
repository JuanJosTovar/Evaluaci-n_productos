import {Request, Response} from 'express'
import UserService from '../services/UserService'

let hacerpedido = async (req:Request, res: Response)=>{
    try{
        const {
            idPedido,
            estado
        } = req.body
        const result: any = await UserService.actualizar(idPedido,estado);
        if(result.encontrado){
            return res.status(201).json({
                status: 'Actualizacion exitosa'
            })
        }
        return res.status(401).json({
            status: 'Actualizacion fallida'
        })
    }catch(error: any){
        return res.status(401).json({
            status: 'Debe ingresar datos'
        })
    }
}

export default hacerpedido;