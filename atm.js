
	var HundredNotes,twoThousandNotes,fiveHundredNotes,twoHundredNotes;

	var  totaltwoThousandNotes,totalfiveHundredNotes,totaltwoHundredNotes,totalHundredNotes , total;


	function atmBackend(){
		 HundredNotes = parseInt(document.getElementById("HundredNotes").value);
		 twoThousandNotes = parseInt(document.getElementById("twoThousandNotes").value);
		 fiveHundredNotes = parseInt(document.getElementById("fiveHundredNotes").value);
		 twoHundredNotes = parseInt(document.getElementById("twoHundredNotes").value);
		
		
		totaltwoThousandNotes = 2000 * twoThousandNotes;
		totalfiveHundredNotes = 500 * fiveHundredNotes;
		totaltwoHundredNotes = 200 * twoHundredNotes;
		totalHundredNotes = 100 * HundredNotes;
		
		document.getElementById("one").innerHTML = "Rs."+totaltwoThousandNotes;
		document.getElementById("two").innerHTML = "Rs."+totalfiveHundredNotes;
	    document.getElementById("three").innerHTML ="Rs."+totaltwoHundredNotes;
	    document.getElementById("four").innerHTML = "Rs."+totalHundredNotes;
		
		total = totaltwoThousandNotes + totalfiveHundredNotes + totaltwoHundredNotes + totalHundredNotes;
		document.getElementById("add").innerHTML = total;
	}


	function atmFrontend(){
		var amount = parseInt(document.getElementById("totalAmount").value);
		var quotient,remainder;
		var upperLimit = 20000;
		if((amount >=100) && (amount % 100 == 0) && (amount<=upperLimit)){
		
			while(amount>0){
				if((amount>=2000) && (twoThousandNotes>0)){
						quotient = amount / 2000; 
						if(quotient < twoThousandNotes){
							
							twoThousandNotes = twoThousandNotes - quotient ;
							remainder = amount % 2000;
						}
						else{
							restAmt = twoThousandNotes - quotient; 
							twoThousandNotes = twoThousandNotes - (quotient-restAmt)
							remainder = amount % 2000 + (twoThousandNotes * restAmt);
						}
						amount = remainder;	
				}
				
				if((amount>=500) && (fiveHundredNotes >0)){
					quotient = amount / 500;
					if(quotient < fiveHundredNotes){
						
					}
					else{
						
					}
					
				}
				
				if((amount>=200) && (twoHundredNotes >0)){
					quotient = amount / 200;
					if(quotient < fiveHundredNotes){
						
					}
					else{
						
					}
				}
				
				if((amount>=200) && (HundredNotes >0)){
					quotient = amount / 100;
					if(quotient < fiveHundredNotes){
						
					}
					else{
						
					}
				}
				
				
			}//while closed
			
		
		}
		else{
			alert("condition false");
		} 
		
	}