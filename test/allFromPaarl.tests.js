describe('allPaarl', function () {
    it('should show you how to use MochaJS allPaarl that takes a parameter string with registration numbers separated with commas and returns all the registration numbers in the string for Paarl.', function () {
        var regNumbers = 'CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864';
        var regNumbers2 = CL 900, CJ 7840, CJ 1230, CN 678 543, CJ 34567, CN 67890, CJ 7864';
        var regNumbersForPaarl = allPaarl(regNumbers);
        
        assert.equal(2, regNumbersForPaarl.length, 'There are 2 Paarl reg numbers.');
        assert.equal('CJ 678 543', regNumbersForPaarl[0]);
        assert.equal('CJ 67890', regNumbersForPaarl[1]);

        assert.equal(4, regNumbersForPaarl.length, 'There are 4 Paarl reg numbers.');
        assert.equal('CJ 7840', regNumbersForPaarl[0]);
        assert.equal('CJ 1230', regNumbersForPaarl[1]);
        assert.equal('CJ 34567', regNumbersForPaarl[2]);
        assert.equal('CJ 7864', regNumbersForPaarl[3]);
        
    });

});