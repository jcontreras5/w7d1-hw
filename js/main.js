//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(list,target){
    //Your code goes here
    for(let i=0; i<list.length; i++){
        console.log
        if (target.search(list[i]) != -1){
            console.log (`${list[i]} is a match `)
        } else {
            console.log (`${list[i]} has no match `)
        }
    }
}

findWords(dog_names,dog_string)

//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i=0;i<arr.length;i++){
        if (i == 0 && i%2==0){
            arr.splice(i,1,'even index')
        }else{
            continue
        }
    }
    return arr
}

console.log(replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]