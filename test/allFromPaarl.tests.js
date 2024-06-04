describe('allPaarl', function () {
    it('should show you how to use MochaJSallPaarl that takes a parameter string with registration numbers separated with commas and returns all the registration numbers in the string for Paarl.', function () {
        var regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';

        var regNumbersForPaarl = allPaarl(regNumbers);
        
        assert.equal(2, regNumbersForPaarl.length, 'There are 2 Paarl reg numbers.');
        assert.equal('CJ 678 543', regNumbersForPaarl[0]);
        assert.equal('CJ 67890', regNumbersForPaarl[1]);
        
    });

});