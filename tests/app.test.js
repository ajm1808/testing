const app = require('../modules/app');
test("must return 8 when 5 and 3 are passed", ()=> {
expect(app.add(5,3)).toBe(8);
});

test("should contain jeff", ()=>{
    expect(app.someNames).toContain("jeff");
});