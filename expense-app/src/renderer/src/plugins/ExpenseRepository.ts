import { AxiosStatic } from "axios";
import { Expense } from "@renderer/models/Expense";
import { throws } from "assert";
export class ExpenseRepository {
    private axios: AxiosStatic
    constructor(axios){
        this.axios = axios
    }
    public async retrieveAll(): Promise<Expense[]>{
        const res = await this.axios.get('/expenses')
        if((await res).status === 200){
            return res.data
        }else{
            throw Error()
        }
    }
}