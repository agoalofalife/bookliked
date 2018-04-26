import storeFactory from './../../store/index'
import {addTokenAction} from './../../store/actions/auth'

describe("addTokenAction", () => {
    let store
    let token = "cqom"
    beforeAll(() => {
        store = storeFactory()
        store.dispatch(addTokenAction(token))
    })

    it("should add a new token", () => {
        expect(store.getState().auth.token).toBe(token)
    })
    it("should set the load is false", () => {
        expect(store.getState().auth.load).toBe(false)
    })
    it("should set the isAuth is true", () => {
        expect(store.getState().auth.isAuth).toBe(true)
    })
})