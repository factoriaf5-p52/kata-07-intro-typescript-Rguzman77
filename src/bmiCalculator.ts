let height:number
let weight:number
let bmi:number

const calculateBmi=(height:number,weight:number) =>{
       
    let bmi = (weight / ((height * height)/ 10000));


    if (bmi < 18.6) console.log( `Under Weight : ${bmi}`);

    else if (bmi >= 18.6 && bmi < 24.9) 
       console.log(`Normal : ${bmi}`);

    else console.log(`Over Weight : ${bmi}`);
}
console.log(calculateBmi(180, 74))