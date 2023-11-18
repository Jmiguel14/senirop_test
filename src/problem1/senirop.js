/* 
    Write a program that prints the numbers from 1 to 100. 
    For multiples of three, print the word “Senir” instead of the number. 
    For multiples of five, print the word “Op” instead of the number. 
    For numbers which are multiples of both three and five, print “Senir Op” instead of the number.
*/

export default function senirop(limit = 100) {
    for(let i = 1; i<=limit; i++){
        if(i%3==0 && i%5==0){
            console.log('Senir Op')
            continue
        }
        if(i%3 == 0){
            console.log('Senir')
            continue
        }
        if(i%5 == 0){
            console.log('Op')
            continue
        }
        console.log(i)
    }
}