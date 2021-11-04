import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import { useDispatch, useSelector } from 'react-redux';
import { AppStoreType } from './bll/store';
import { loadingAC } from './bll/loadingReducer';

function HW10() {
    // useSelector, useDispatch
    const dispatch = useDispatch()

    const loading = useSelector((state: AppStoreType) => state.loading.isLoading)


    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr />
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div><img src={"https://inkazan.ru/images/commons/ajax_loader.gif"} height={"50px"}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }


        </div>
    )
}

export default HW10
