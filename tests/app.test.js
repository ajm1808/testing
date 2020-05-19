const app = require('../modules/app');
// test("must return 8 when 5 and 3 are passed", ()=> {
// expect(app.add(5,3)).toBe(8);
// });

// test("should contain jeff", ()=>{
//     expect(app.someNames).toContain("jeff");
// });


test ("must return 0.3 when 0.2 and 0.1 are passed",()=>{
    expect(app.add(0.204,0.1)).toBeCloseTo(0.3);
})

//toBe has to be exact - decimals will mess it up