import React from 'react';
import { UserType } from '../../HW8';
import {homeWorkReducer, InitialStateType} from "../homeWorkReducer";

let initialState: UserType[];

beforeEach(() => {
    initialState = [
        {_id: 0, name: "Кот", age: 3},
        {_id: 1, name: "Александр", age: 66},
        {_id: 2, name: "Коля", age: 16},
        {_id: 3, name: "Виктор", age: 44},
        {_id: 4, name: "Дмитрий", age: 40},
        {_id: 5, name: "Ирина", age: 55},
    ]
});

test("sort name up", () => {
    const newState = homeWorkReducer(initialState, {type: "sort", payload: "up"});


    console.log(newState);
    expect(newState[0].name).toBe("Александр");
    expect(newState[5].name).toBe("Кот");
});
test("sort name down", () => {
    const newState = homeWorkReducer(initialState, {type: "sort", payload: "down"});


    expect(newState[0]._id).toBe(0);
    expect(newState[5]._id).toBe(1);

});
test("check age 18", () => {
    const newState = homeWorkReducer(initialState, {type: "check", payload: 18});

    expect(newState.lenght).toBe(4);

});
