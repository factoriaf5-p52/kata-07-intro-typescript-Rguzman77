function calculateBMI(height,weight) {
       
        let bmi = (weight / ((height * height)/ 10000)).toFixed(2);

  
        if (bmi < 18.6) console.log( `Under Weight : ${bmi}`);
  
        else if (bmi >= 18.6 && bmi < 24.9) 
           console.log(`Normal : ${bmi}`);
  
        else console.log(`Over Weight : ${bmi}`);
    }
calculateBMI(180,74)