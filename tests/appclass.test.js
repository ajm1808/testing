const appclass =require("..modules/appclass.js");

test("test should increase health by 1",()=>{
    expect(appclass.ann.health).toBe(100);
    appclass.ann,increaseHealth();
    expect(appclass.ann.health).toBe(101);
});