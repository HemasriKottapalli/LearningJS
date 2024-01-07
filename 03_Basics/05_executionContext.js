//Javascript Execution Context

// code ==> Global Execution Context
/*
    ->Global EC
    ->Function EC
    -> Eval EC
*/
/*
    Phases
---------------
    1. Memory Creation / Creation Phase
    2. Execution Phase
*/

/*
    Example Code:
    let val1 = 10;
    let val2 = 5;
    function addNum(num1, num2){
        let total = num1+num2;
        return total;
    }

    let result1 = addNum(val1, val2);
    let result2 = addNum(2,3);
*/

/*
   1. Global execution phase -> this

   2. Memory Phase
   val1 -> undefined
   val2 -> undefined
   addNum -> defnition
   result1 -> undefined
   result2 -> undefined

   3.Execution Phase
   val1 <- 10
   val2 <- 5
   addNo -> another execution context
            1.Memory phase:
                num1 -> undefined
                num2 -> undefined
                total -> undefined
            2.Execution Context
            num1 <- 10
            num2 <- 5
            total <- 15
            //returns total to Global EC and this Ec gets deleted
    result1 <- 15
    addNo -> another execution context
            1.Memory phase:
                num1 -> undefined
                num2 -> undefined
                total -> undefined
            2.Execution Context
            num1 <- 2
            num2 <- 3
            total <- 5
            //returns total to Global EC and this Ec gets deleted
    result2 <- 5

*/

//FUNCTION CALL STACk
/*
    |            |
    |            |
    |            |
    |____________|
    | Two()      |
    |____________|
    | one()      |
    |__ _________|

    First Two() runs and then one()
    follows LIFO 
 */