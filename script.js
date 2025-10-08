const api= "https://sheets.googleapis.com/v4/spreadsheets/1JV1pWO6WGtR1VGTUmY3q_-z3xmMq3INGixfE-15TXpI/values/map?key=AIzaSyADu4Sf8XhOLoFiIglyiJGWfB2AgJry3bE"


window.onload = function(){
    // fetch seat status tatus 
    fetch(api).then(response=>{
        // console.log(response);
        return response.json();
    }).then(data=>{
        console.log(data);
        var seatMap = data.values;

        floorDiv = this.document.createElement('div');
        let count = 1;
        while(count < seatMap.length){
            let seatNumber = seatMap[count][0];
            let seatStatus = seatMap[count][1];

            //seat image
            seatImage = this.document.createElement('img');
            seatImage.src = 'img/Seat.png';
            seatImage.alt = 'seat image';
            seatImage.classList.add('img-container-seat')

            //reserved image
            reservedImage = this.document.createElement('img');
            reservedImage.src = 'img/reserved-img.png';
            reservedImage.alt = 'reserved';
            reservedImage.classList.add('img-container-reserved')
              
            
            //seatbox
            newSeatBox = this.document.createElement('div');
            newSeatBox.classList.add("seatbox");
            newSeatBox.appendChild(seatImage);
            if(seatStatus==='Reserved'){
                newSeatBox.appendChild(reservedImage);
            }
            
            //seat number
            newSeatNumberContainer = this.document.createElement('div');
            newSeatNumberContainer.classList.add('seat-number')
            newSeatNumberContainer.innerHTML =seatNumber;
            
            
            //table container div
            newTableContainer = this.document.createElement('div');
            newTableContainer.classList.add('table-container')
            newTableContainer.appendChild(newSeatBox);
            newTableContainer.appendChild(newSeatNumberContainer);


            floorDiv.appendChild(newTableContainer);

            //aligning seats
            //first 20 seats
            if(count<=10){
                this.document.getElementById('row_9').appendChild(newTableContainer);
            } else if(count <= 20){
                this.document.getElementById('row_8').appendChild(newTableContainer);
            } else if(count <= 30){
                this.document.getElementById('row_7').appendChild(newTableContainer);
            } else if(count <= 40){
                this.document.getElementById('row_5').appendChild(newTableContainer);
            } else if(count <= 50){
                this.document.getElementById('row_3').appendChild(newTableContainer);
            } else {
                this.document.getElementById('row_1').appendChild(newTableContainer);
            }

            

            count++;
        }
        
        console.log(floorDiv);
        this.document.getElementById('dynamic-Map').appendChild(floorDiv);
        // this.document.getElementById('dynamic-Map').innerHTML = floorDiv;

    })
}