// let convert = require('../app.js') // Specify function location. 

// require the built-in "assertion" library
let assert = require('assert');

// create a group of tests (ShoppingCart)
describe('ShoppingCart General', function() {
    // Nested/underlying Groups of tests
    // Sub-Test Group 1
    describe('functionNameForTestGoesHere', function() {
        // A string explanation of what we are testing
        it('StringExplanationGoesHere', function() {
            // Actual test / Code/Logic Goes here
            // Side Note: assert.equal means = (actual, expected) 
            // Individual Test 1
            assert.equal()
        });
        it('StringExplanationGoesHere', function() {
            // Individual Test 2
            assert.equal()
        });
        it('StringExplanationGoesHere', function() {
            // Individual Test 3
            assert.equal()
        });
    });
    describe('functionNameForTestGoesHere', function() {
        // Sub-Test Group 2
        it('StringExplanationGoesHere', function() {
            // Actual test / Code/Logic Goes here 
            // Individual Test 1
            assert.equal()
        });
        it('StringExplanationGoesHere', function() {
            // Individual Test 2
            assert.equal()
        });
        it('StringExplanationGoesHere', function() {
            // Individual Test 3
            assert.equal()
        });
    });
});



// For tomorrow, Find and Examine Cart-Logic, then Write tests acording.
// Functions in Cart.js ?.


// let convert = {};
// module.exports = convert;  
// Above is used in another file to convert the require here. eg. import.