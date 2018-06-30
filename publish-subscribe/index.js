class PubSub{
	constructor(){
		this.eventList= {};
	}
	on(eventName, handler){
		if( !(eventName in this.eventList) ){
			this.eventList[eventName] = [];
		}
		this.eventList[eventName].push(handler);

		return this;
	}

	emit(eventName, ...data){
		const currentEvent = this.eventList[eventName];

		if(Object.prototype.toString.call(currentEvent) !== '[object Array]'){
			return false;
		}
		currentEvent.forEach( item=>{
			item.apply(null,data);
		})
		return this;
	}
}