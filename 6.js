const event1 = ["01:15","02:00"] 
const event2 = ["02:00","03:00"]
const events = event1.concat(event2)
for(let i = 0; i < events.length; i++){
    if(events[i] == events[i+1]){
        console.log('Ошибка, два события в ' + events[i])
    }
}
