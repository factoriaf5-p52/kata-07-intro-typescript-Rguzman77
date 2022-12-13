
import {calculateBmi} from "./bmiCalculator"

describe("Calculate BMI #9.1", () => {
    test("calculateBmi has to be a function", () => {
        expect(typeof calculateBmi).toBe("function");});
        
    test("Has to return Underweight", () => {
        expect(calculateBmi(180,30)).toBe(`Under Weight`)});
    test("Has to return Normal - healthy", () => {
        expect(calculateBmi(180,74)).toBe(`Normal-healthy `)});
    test("Has to return Overweight", () => {
        expect(calculateBmi(180,170)).toBe(`Over Weight`)});
        ;});