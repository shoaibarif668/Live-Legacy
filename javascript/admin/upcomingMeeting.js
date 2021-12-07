//Get Upcoming Meetings && Show Meetings's List On Admin Dashboard
let tableData = "" //Table Data To be mapped to html

const getUpcomingMeetings = () =>{
    axios
    .get(`${baseUrl}/api/admin/meetings-management/upcoming-meetings`)
    .then((response)=>{
        if(response.status === 200){
            for (let i=0;i<response.data.data.length;i++){
                    let data = response.data.data[i]
                    
                    tableData+="<tr>";
                        tableData += "<td>" + data.userName + "</td>";
                        tableData += "<td>" + data.userEmail + "</td>";
                        tableData += "<td>" + data.topic + "</td>";
                        tableData += `<td> ${data.startTime.split("T")[0]} ${data.startTime.split("T")[1].split("Z")[0]} </td>`;
                        tableData += "<td>" + data.agenda + "</td>";
                        tableData += "<td>" + data.startUrl + "</td>";
                        tableData += "<td>" + data.joinUrl + "</td>";
                        tableData += "<td>" + data.hostId + "</td>";
                        tableData += "<td>" + data.hostEmail + "</td>";
                        tableData += "<td>" + data.password + "</td>";
                    tableData += "</tr>";
            }
            $('#meeting__test__body').append(tableData); //tbody where the data is appended
        }
    })
}
getUpcomingMeetings();

