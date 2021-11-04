import { UserType } from './../../h8/HW8';

export type InitialStateType = Array<UserType>
type ActionsType = ReturnType<typeof sortActionCreator> | ReturnType<typeof checkActionCreator>

const initialState: InitialStateType = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
] 


export const homeWorkReducer = (state:InitialStateType  = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "sort": {
            const newState = [...state].sort((a:UserType,b:UserType) => {
                if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })

            return action.payload === "up" ? newState :  newState.reverse()
        }
        case "check": {

            return state.filter(p => p.age >= action.payload)
        }
        default: return state
    }
};

export const sortActionCreator = (payload: "up" | "down") => ({type: "sort", payload} as const)
export const checkActionCreator = (payload: number) => ({type: "check", payload} as const)