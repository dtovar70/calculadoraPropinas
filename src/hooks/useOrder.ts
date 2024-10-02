import { useState } from "react"
import type { OrderItem } from "../types"
export default function useOrder(){

    const [order, setOrder] = useState<OrderItem[]>([]); //indicando que si quiero un arreglo pero que tenga las propidades que le paso en ese type
    const [total, setTotal] = useState(0);
    const [auth, setAuth] = useState(false);

    return{

    }
}