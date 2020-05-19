const appclass = require('../modules/appclass');

// test("should increase health by 1",()=>{
//     expect(appclass.ann.health).toBe(100);
//     appclass.ann.increaseHealth();
//     expect(appclass.ann.health).toBe(101);
// })

// test("should decrease health by 1",()=>{
//     expect(appclass.ann.health).toBe(101);
//     appclass.ann.decreaseHealth();
//     expect(appclass.ann.health).toBe(100);
// })

// test("should return my feelings about Ann",()=>{
//     appclass.ann.getName();
//     expect(appclass.ann.getName()).toContain("dick");
// })

// test("check songs",()=>{
//     expect(appclass.ann.getSongs()).toContain("nothing happened");
// })

describe("Increase and decrease of health",()=>{
    test("should increase health by 1",()=>{
        expect(appclass.ann.health).toBe(100);
        appclass.ann.increaseHealth();
        expect(appclass.ann.health).toBe(101);
    })
    
    test("should decrease health by 1",()=>{
        expect(appclass.ann.health).toBe(101);
        appclass.ann.decreaseHealth();
        expect(appclass.ann.health).toBe(100);
    })
})

