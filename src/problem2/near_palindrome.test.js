import {describe, it} from 'node:test'
import {strictEqual} from 'node:assert'
import { minOperationsForNearPalindrome } from './near_palindrome.js'

describe('near_palindrome test', () => {
    describe('when a sequence is already a palindrome or near-palindrome should return 0', () => {
        const palindromesOrNearPalindromesSequences = ['aaa', 'cocoa', 'xxyyzz']
        
        palindromesOrNearPalindromesSequences.forEach(sequence => {
            it(`should return 0 when the sequence is ${sequence}`, () => {
                const result = minOperationsForNearPalindrome(sequence)
        
                strictEqual(result, 0)
            })
        })
    })

    it('should return 4 whe the sequence is abcdefgh', () => {
        const result = minOperationsForNearPalindrome("abcdefgh")

        strictEqual(result, 4)
    })

    it('should return 2 when the sequence is daddy', () => {
        const result = minOperationsForNearPalindrome("daddy")

        strictEqual(result, 2)
    })

    it('should return 1 when the sequence is abc', () => {
        const result = minOperationsForNearPalindrome("abc")

        strictEqual(result, 1)
    })
})