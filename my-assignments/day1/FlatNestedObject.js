
//given input object
	let sampleData={
    
       "columnDataRegex": "([\\w& \\-\\\\'\\/\\,]|[^\\x00-\\x7F])+",
        "columnDataWhiteListName": "Ethnicity",
        "columnNameRegex": "\\b([a-zA-Z]{0,20}[\\_\\ ])?(Ethnicity)\\b",
        "confidenceFactorConfig": {
            
            "expStrength": 0.8,
            "expressionId": 260,
        },
        "dgValidationFunction": {
            "validationFunctionName": "ValidateEthnicity"
        },

 

        "updatets": 1644899130360
    
}

let outputObj={};
let flatenObj= (obj,name)=>{
	for(let key in obj){
		if(typeof obj[key]=='object')
		{
		    if(name!=='')
			flatenObj(obj[key],name+"_"+key);
			else
			flatenObj(obj[key],key);
		}
		else
		{
		    if(name !== '')
		outputObj[name+"_"+key]=obj[key];
		else
		outputObj[key]=obj[key];
		}
	}
}
flatenObj(sampleData,'');
 console.log(outputObj);