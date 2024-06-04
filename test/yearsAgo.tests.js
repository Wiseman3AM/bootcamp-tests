describe('yearsAgo' , function(){
    it('returns how many years it is from a specific year' , function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });

});