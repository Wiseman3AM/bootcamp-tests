describe('greet' , function(){
    it('should take in a string parameter + name' , function(){
        assert.equal(greet('Bob'), 'Hello, Bob');
        assert.equal(greet('Sam'), 'Hello, Sam');
    });

});