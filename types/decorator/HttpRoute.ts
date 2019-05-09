namespace Fari {
	//http://blog.wolksoftware.com/decorators-metadata-reflection-in-typescript-from-novice-to-expert-part-3
	function HttpRoute(...args : any[]) {
		console.log(args)
	  switch(args.length) {
	    case 1:
	      return httpRouteClass.apply(this, args);
	    case 2:
	      // return logProperty.apply(this, args);
	    case 3:
	      if(typeof args[2] === "number") {
	        return httpParameterClass.apply(this, args);
	      }
	      return httpMethodClass.apply(this, args);
	    default:
	      throw new Error("Decorators are not valid here!");
	  }
	}

	function httpRouteClass(){}

	function httpPropertyClass(){}

	function httpParameterClass(){}

	function httpMethodClass(){}
}