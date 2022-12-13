export function calculateBmi(height:number,weight:number){
       
    let bmi = (weight / ((height * height)/ 10000));


    if (bmi < 18.6) return ( `Under Weight`);

    else if (bmi >= 18.6 && bmi < 24.9) 
       return (`Normal-healthy `);

    else return (`Over Weight`);

}
console.log(calculateBmi(180, 74))