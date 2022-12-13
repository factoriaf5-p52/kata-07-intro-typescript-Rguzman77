interface Resault {
    periodLength: number;
    trainingDays: number;
    target: number;
    averageTime: number;
    succes: boolean;
    rating: number;
    ratingDescription: string
}

let dailyExerciseHours  = [3,0,2,4.5,0,3,1];
let targetAmountHours = 2

function averageHours(dailyExerciseHours:Array<number>){

    return dailyExerciseHours.reduce((ac:number, el:number)=>ac+el, 0)/dailyExerciseHours.length;
}
console.log(averageHours(dailyExerciseHours))

function periodLength(dailyExerciseHours:Array<number>){
    return dailyExerciseHours.length
}

function trainingDays(dailyExerciseHours:Array<number>){
    let newTrainingDays=dailyExerciseHours.filter((element)=>{
        return element>0;
    }).length;
    return newTrainingDays   
}

console.log(trainingDays(dailyExerciseHours))