const api= "https://sheets.googleapis.com/v4/spreadsheets/1JV1pWO6WGtR1VGTUmY3q_-z3xmMq3INGixfE-15TXpI/values/map?key=AIzaSyADu4Sf8XhOLoFiIglyiJGWfB2AgJry3bE"


window.onload = function(){
    // fetch seat status tatus 
    fetch(api).then(response=>{
        // console.log(response);
        return response.json();
    }).then(data=>{
        console.log(data);
        var seatMap = data.values;

        const mapDiv = this.document.createElement('div');
        let count = 1;
        while(count <= seatMap.length){
            let seatNumber = data[count][0];
            let seatStatus = data[count][1];
            
            mapDiv

            count++;
        }
    })
}