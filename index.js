var multiply = function(num1, num2){
	return num1*num2
}

function random (){
	let total = Number.parseInt((Math.random() * 10 +1) , 10);
    //total = Number.parseInt(total, 10)
	return(total);
}


let num3 = Number();
let num4 = Number();

function mod (){
    num3 = 14;
    num4 = 5;
    return (num3 % num4);
}


// describe('index.js', function() {
//     describe('multiply', function() {
//       it("is an equation whose multiplied results will equal 62", function() {
//         expect(num1).to.be.a('number')
//         expect(num2).to.be.a('number')
//         expect(multiply).to.eq(62)
//       });
//     });
//     describe('random', function() {
//       it("generates a random integer greater than 0", function() {
//         expect(Number.isInteger(random)).to.be.true
//         expect(random).to.not.eq(0)
//       });
//     });
//     describe('mod', function() {
//       it("is an equation that calculates a remainder that is equal to 4", function() {
//         expect(num3).to.be.a('number')
//         expect(num4).to.be.a('number')
//         expect(mod).to.eq(4)
//       });
//     });
//     describe('max', function() {
//       it("will return 20 as the highest number in the set", function() {
//         expect(max).to.eq(20)
//       });
//     });
//   });