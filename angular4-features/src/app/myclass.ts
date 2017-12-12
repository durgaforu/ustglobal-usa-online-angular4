import { Observable } from "rxjs/Observable";

// -> Router Param Map

class MyComponet{

sessionId:Observable<string>;
constructor(private route:ActivatedRoute){}

ngOnInit() {
    
    this.sessionId=this.route;
    .queryParams
    .map(params=>params['session_id']|| 'None');
}   
}