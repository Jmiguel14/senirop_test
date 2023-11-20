import {describe, it} from 'node:test'
import {deepEqual} from 'node:assert'
import { bicycleLock } from './bicycleLock.js'

describe('bicycleLock test', () => {
    it('should return an empty array if the input has already unique values', () => {
        const response = bicycleLock([1, 2, 3, 5, 7])

        deepEqual(response, [])
    })

    it("should return ['-'] when the input is [8, 8, 0, 9]", () => {
        const expectedOutput = ['-'] 
        
        const response = bicycleLock([8, 8, 0, 9])

        deepEqual(response, expectedOutput)
    })

    it("should return ['-', '>', '>', '-', '-' ] when the input is [0, 1, 0, 2, 0]", () => {
        const expectedOutput = ['-', '>', '>', '-', '-' ]

        const response = bicycleLock([0, 1, 0, 2, 0])

        deepEqual(response, expectedOutput)
    })

    it("should return an empty array of actions when the lock is of only one dial", () => {
        const response = bicycleLock([9])

        deepEqual(response, [])
    })
})