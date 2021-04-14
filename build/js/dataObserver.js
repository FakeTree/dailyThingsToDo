function InputChecker(){
    this.observer = []
}

InputChecker.prototype = {
    Subscribe: function(fn){
        this.observer.push(fn)
    },
    Unsubscribe: function(fnToReturn){
        this.observer = this.observer.filter(fn =>{
        if(fn!=fnToRemove) return true;
        })
    },
    Fire: function(){
        this.observer.forEach(fn=>{
            fn.call();
        })
    }
}

const subject = new InputChecker();

const setSubs = ((arrayOfFn)=>{
    
})();

subject.Fire();