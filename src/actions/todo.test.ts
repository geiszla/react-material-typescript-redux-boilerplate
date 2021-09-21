import * as todo from "./todo"
// @ponicode
describe("todo.addTodo", () => {
    test("0", () => {
        let callFunction: any = () => {
            todo.addTodo({ id: 56784, text: "foo bar", completed: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            todo.addTodo({ id: "a1969970175", text: "Foo bar", completed: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            todo.addTodo({ id: 12, text: "foo bar", completed: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            todo.addTodo({ id: 12345, text: "foo bar", completed: true })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            todo.addTodo({ id: 987650, text: "Foo bar", completed: false })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            todo.addTodo({ id: Infinity, text: "", completed: true })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("todo.uncompleteTodo", () => {
    test("0", () => {
        let callFunction: any = () => {
            todo.uncompleteTodo("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            todo.uncompleteTodo(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            todo.uncompleteTodo(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            todo.uncompleteTodo(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            todo.uncompleteTodo(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            todo.uncompleteTodo(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("todo.deleteTodo", () => {
    test("0", () => {
        let callFunction: any = () => {
            todo.deleteTodo(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            todo.deleteTodo("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            todo.deleteTodo(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            todo.deleteTodo(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            todo.deleteTodo(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            todo.deleteTodo(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})
