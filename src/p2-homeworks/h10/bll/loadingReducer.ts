type InitStateType = {
    isLoading: boolean
}
const initState = {
    isLoading: false
}

export const loadingReducer = (state:InitStateType = initState, action: ActionTypes): InitStateType => { // fix any
    switch (action.type) {
        case 'SET-LOADING': {
            return {...state, isLoading: action.value}
        }
        default: return state
    }
}

type LoadingType = ReturnType<typeof loadingAC>
export const loadingAC = (value: boolean) => ({type: "SET-LOADING", value }) as const 

type ActionTypes = LoadingType