const enhancer = require('./enhancer.js');
// test away!

//Dummy Data_______________________________________________________________________
let fullEnhancement = {
    name: 'Full Enhancement and Durability Points',
    enhancement: 20,
    durability: 100
}

let halfEnhancement = {
    name: 'Half Enhancement and Durability Points',
    enhancement: 10,
    durability: 50
}
let fifteenEnhancement = {
    name: 'Fifteen Enhancement and Durability Points',
    enhancement: 15,
    durability: 15
}
let AlmostFullEnhancement = {
    name: 'Full Enhancement and Durability Points',
    enhancement: 19,
    durability: 99
}
//_________________________________________________________________________________

describe('enhancer.js', () => {
    describe('enhancer', () => {
        describe('succeed(item)', () => {
            // -The item's enhancement increases by 1.
            // -***If the item enhancement level is 20, the enhancement level is not changed.
            // -The durability of the item is not changed.
            it('succeed item testing', () => {
                //full
                expect(enhancer.succeed(fullEnhancement).enhancement).toBe(20);
                expect(enhancer.succeed(fullEnhancement).durability).toBe(100);
                //half
                expect(enhancer.succeed(halfEnhancement).enhancement).toBe(11);
                expect(enhancer.succeed(halfEnhancement).durability).toBe(50);
            }) 
        });
        describe('fail(item)', () => {
            // -***If the item's enhancement is less than 15, the durability of the item is decreased by 5.
            // -***If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
            // -***If the item's enhancement level is greater than 16, the enhancement level decreases by 1
                    // (17 goes down to 16, 18 goes down to 17).
            it('fail item testing', () => {
                //enhancement under 15
                expect(enhancer.fail(halfEnhancement).durability).toBe(45);
                //enhancement === 15
                expect(enhancer.fail(fifteenEnhancement).durability).toBe(5);
                //enhancement over 15
                expect(enhancer.fail(fullEnhancement).enhancement).toBe(19);
                expect(enhancer.fail(AlmostFullEnhancement).durability).toBe(89);
            })
        })
    })
})




