describe('isWeekDay', function () {
    it('Finds out if the parameter passed in is a day of the week ', function () {
        assert.equal(isWeekday('Saturday'), false)
    });
    it('Finds out if the parameter passed in is a day of the week ', function () {
        assert.equal(isWeekday('Sunday'), false)
    });
    it('Finds out if the parameter passed in is a day of the week ', function () {
        assert.equal(isWeekday('Monday'), true)
    });
    it('Finds out if the parameter passed in is a day of the week ', function () {
        assert.equal(isWeekday('Tuesday'), true)
    });
    it('Finds out if the parameter passed in is a day of the week ', function () {
        assert.equal(isWeekday('Wednesday'), true)
    });
    it('Finds out if the parameter passed in is a day of the week ', function () {
        assert.equal(isWeekday('Thursday'), true)
    });
    it('Finds out if the parameter passed in is a day of the week ', function () {
        assert.equal(isWeekday('Friday'), true)
    });
});

