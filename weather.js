function weather(){
    var key ='923016e92321e0c6671c5e0a65006d65';
    var c=document.getElementById("cityName").value;
    console.log(c);
    var unit='metric';
    
      fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + c+ '&appid=' + key+ '&units=' + unit)  
      .then(function(resp) { return resp.json() }) 
      .then(function(data) {
        table=document.createElement("TABLE");
        row=table.insertRow(-1)
        cellH1=row.insertCell(-1)
        cellH2=row.insertCell(-1)
        cellH3=row.insertCell(-1)
        cellH1.innerHTML="DATE"
        cellH2.innerHTML="MIN"
        cellH3.innerHTML="MAX"
    
          data.list.forEach((day)=>{
          row1=table.insertRow(-1);
          cell1=row1.insertCell(-1)
          cell2=row1.insertCell(-1)
          cell3=row1.insertCell(-1)
          cell1.innerHTML=day.dt_txt
          cell2.innerHTML=day.main.temp_min
          cell3.innerHTML=day.main.temp_min
      })
        var divtab=document.getElementById("restable");
        divtab.append(table);
        //console.log(data.list[0].main.);
      })
      .catch(function(err) {
        console.log(err);
      });
    }
    