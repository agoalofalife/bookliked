import {ADD_TOKEN, REMOVE_TOKEN, LOAD_AUTH} from './../../../store/actions/constants'
import auth from './../../../store/reducers/auth'
import deepFreeze from 'deep-freeze'

describe("auth Reducer", () => {
    it("ADD_TOKEN success", () => {
        const state = {};
        let token = Math.random().toString(36).substring(7)
        const action = {
            type:ADD_TOKEN,
            token:token,
        };
        deepFreeze(state)
        deepFreeze(action)
        const results = auth(state, action)
        expect(results)
            .toEqual({
                isAuth:true,
                load:false,
                token:token
            })
    })
    it("REMOVE_TOKEN success", () => {
        const state = {};
        const action = {
            type:REMOVE_TOKEN,
        };
        deepFreeze(state)
        deepFreeze(action)
        const results = auth(state, action)
        expect(results)
            .toEqual({
                load:false,
                isAuth:false,
                token:null
            })
    })
    it("LOAD_AUTH success", () => {
        const state = {};
        const action = {
            type:LOAD_AUTH,
            load:true
        };
        deepFreeze(state)
        deepFreeze(action)
        const results = auth(state, action)
        expect(results)
            .toEqual({
                load:true,
            })
    })
});