// 1.      შექმენით პროგრამა, რომელიც შეამოწმებს, არის თუ არა კონკრეტული ცვლადის მნიშვნელობა მასივი
let array1 = ['Nika', 'Vaxo', 2005, 19.58, true, false, undefined];
console.log(array1);
//2.      შექმენით პროგრამა, რომელიც გამოიტანს მასივის პირველ ელემენტს
let array2 = ['Nika', 'Vaxo', 2005, 19.58, true, false, undefined];
console.log(array2[0]);
//3.      შექმენით პროგრამა, რომელიც გამოიტანს მასივის ბოლო ელემენტს.
let array3= ['Nika', 'Vaxo', 2005, 19.58, true, false, undefined];
console.log(array3[3]);
//მოცემული გვაქვს შემდეგი მასივები:
 let masivi1 = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
 let slicedArray = masivi1.slice(0, 3);
 console.log(slicedArray);
 //5.      შექმენით პროგრამა, რომელიც შექმნის ობიექტს სტუდენტზე, რომელშიც იქნება ისეთი გასაღებები, როგორიცაა: სახელი, გვარი, ა.შ მაგ: {sakheli: ‘mate’, ‘gvari’: ‘gotua’}, მოახდინეთ ამ ობიექტზე მანიპულირება, მაგ. დაამატეთ ახალი მონაცემი გარდა ამისა წაშალეთ რაიმე მონაცემი და ასევე არსებულ ობიექტში ჩაანაცვლეთ რაიმე ერთი მონაცემი მეორეთი, ეს მოქმედებები განახორციელეთ თანმიმდევრულად. 
 let person = {
      name: "Nika",
      age: 20,
      lastName: "Antelava",
      isMarried: true,
      children: [
        {
            name: "Ako",
            age: 5
        },
        {
           name: "Gio",
           age: 3

        }
    ]
}

console.log(person)
  