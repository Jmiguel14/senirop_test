/*
    
You have a bicycle lock. The locking mechanism consists of several dials. 
Each dial contains the digits 0-9 in a cycle, in this order. 
From each dial exactly one digit is visible.
Each dial can be rotated in either direction:
Rotating the dial one step in the positive direction (denoted '+') increments the digit shown.

E.g., if the dial currently shows 4 and you make the '+' rotation, the dial will now show 5. 
After the digit 9 comes the digit 0 again.
Rotating the dial one step in the negative direction (denoted '-') does the opposite.

E.g., the '-' rotation will change a dial showing 5 into a dial showing 4, and it will change a dial showing 0 into a dial showing 9.

Your finger is currently on the leftmost dial. You can use it to rotate the dial it's on. 

You can also move your finger one dial to the right (denoted '>') or one dial to the left (denoted '<'). 
You can only move your finger if the destination dial actually exists.

You are given the int[] dials. 
The elements of dials are the digits currently shown on the dials of your lock, from the left to the right.

You would like to scramble your lock into a state where all of the digits shown on the dials are mutually distinct. 

Find any sequence of at most 100 actions that accomplishes this goal, and return it as a String[].
 
Definition
    

Class:
BicycleLock
Method:
makeDistinct
Parameters:
int[]
Returns:
String
Method signature:
String makeDistinct(int[] dials)
(be sure your method is public)

Notes
-
You are not required to minimize the number of operations.
 
Constraints
-
dials will contain between 1 and 10 elements, inclusive.
-
Each element of dials will be between 0 and 9, inclusive.
 
0)

{3, 2, 7}

Returns: ""

All dials already show distinct numbers, so we do not have to do anything at all.

1)


{8, 8, 0, 9}


Returns: ">+++"

Our solution moves the finger to the second dial and then rotates it three times in the positive direction. This changes the lock from its initial state 8809 into 8909, then 8009, and finally 8109, which is a valid final state.
There are many other valid solutions. The most efficient one is to simply rotate the first dial once in the negative direction, changing the lock to 7809.

2)

{9}

Returns: "+++--+-"

Again, we do not have to do anything, but we can. Remember that any solution that consists of at most 100 actions will be accepted.

3)

{0, 1, 0, 2, 0}

Returns: ">>>>-<+<+++++"

The returned solution produces the dial values {0, 1, 5, 3, 9} in the end.
*/

export function bicycleLock(dials = []){
    let actions = []
    for(let i in dials){
        const restDials = dials.filter((_, idx) => idx.toString() !== i)
        
        while(restDials.includes(dials[i])){
            let incrementedValue = (dials[i] + 1) % 10
            let decrementedValue = (dials[i] - 1 + 10) % 10
            
            let includesIncrementedDial = restDials.includes(incrementedValue)

            if(!includesIncrementedDial){
                dials[i] = incrementedValue
                actions.push('+')
            } else {
                dials[i] = decrementedValue
                actions.push('-')
            } 
        }
        
        const uniques = new Set([...dials])

        if(uniques.size == dials.length) return actions

        actions.push('>')
    }

    return actions
}
