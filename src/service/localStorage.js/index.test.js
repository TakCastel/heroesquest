const index = require("./index")
// @ponicode
describe("index.saveCharacter", () => {
    test("0", () => {
        let callFunction = () => {
            index.saveCharacter("text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.saveCharacter("application/data")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.saveCharacter("left_chat_member")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.saveCharacter("html")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.saveCharacter("voice")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.saveCharacter(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
