import {describe, it} from 'node:test'
import {deepStrictEqual, strictEqual} from 'node:assert'
import senirop from './senirop.js'

describe('senirop test', () => {
    it('should call the log method 100 times by default', (context) => {
        const mockedLog = context.mock.method(console, 'log', () => ({}))

        senirop()

        const logCalls = mockedLog.mock.calls

        strictEqual(logCalls.length, 100)
    })

    it('when limit is equal to 5 should write the word Senir and Op once', (context) => {
        const expectedOutput = [1, 2, 'Senir', 4, 'Op']
        const mockedLog = context.mock.method(console, 'log', () => ({}))
        
        senirop(5)

        const result = mockedLog.mock.calls.map(call => call.arguments[0])

        deepStrictEqual(result, expectedOutput)
    })

    it('when limit is equal to 15 should write only once the word Senir Op', (context) => {
        const mockedLog = context.mock.method(console, 'log', () => ({}))
        
        senirop(15)

        const result = mockedLog.mock.calls.map(call => call.arguments[0]).filter(word => word == 'Senir Op')

        strictEqual(result.length, 1)
    })
})