/*function createProject(){
    /*var queryURL="https://api.clubhouse.io/api/v2/projects?token=";
    var token="5db2beec-faf0-4652-a40f-0f0e22b27b46";
    

    project={
        name: "foo"
    }


    $.ajax({
        contentType: 'application/json;charset=utf-8',
        data :JSON.stringify(project),
        type:"POST",
        url: queryURL+token,
        datatype:'json',

        error: function (request, textStatus, errorThrown) {
            alert(errorThrown);
   
       },
        success: function(response){console.log(response);}
    
      })
      var queryURL2="https://api.clubhouse.io/api/v2/categories?token=";
    $.ajax({
       url:queryURL2+token,
       method:"GET"
    }).then(function(response){
        console.log("Categories:"+response);

    });*/

   /* project={
        name: "test",
        description: "test"
    }*/
    
   /* function getToken(){
        var OAuth = require('@zalando/oauth2-client-js');
        var basecamp = new OAuth.Provider({
            id: 'basecamp',   // required
            authorization_url: "https://launchpad.37signals.com/authorization/token "// required
        });

       // Create a new request
        var request = new OAuth.Request({
            client_id: 'my_client_id',  // required
            redirect_uri: 'http://my.server.com/auth-answer'
        });
        
        // Give it to the provider
        var uri = google.requestToken(request);
        
        // Later we need to check if the response was expected
        // so save the request
        google.remember(request);
        
        // Do the redirect
        window.location.href = uri;
    }*/
  /*  var accountNo="4314725";
    var accountNo2="4314062";
    
    var code="aab16437";
    var queryURL="https://3.basecampapi.com/";

    /*let client = new JSO({
        providerID: "basecamp",
        client_id: "a42f32e6cda42c9a82e3b96a2f495c78a441ca1c",
        client_secret: "e448bd9a18a49a182e29eb70008e342090e2de14",
        redirect_uri: "https://github.com/Jonathynlee/CDSBusinessHealthApp", // The URL where you is redirected back, and where you perform run the callback() function.
        authorization: "https://launchpad.37signals.com/authorization",
        scopes: { request: ["https://www.googleapis.com/auth/userinfo.profile"]}
    })*/
    
   /* jQuery.ajaxPrefilter(function(options) {
        if (options.crossDomain && jQuery.support.cors) {
            options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
        }
    });
    $.ajax({
        contentType: 'application/json;charset=utf-8',
        beforeSend: function(xhr) { 
            if(this.url.crossDomain&& jQuery.support.cors){
                this.url= 'https://cors-anywhere.herokuapp.com/'+this.url;
            }
            xhr.setRequestHeader("Authorization","Bearer "+btoa(code)); 
            //xhr.setRequestHeader("User-Agent"," CDS Business Health Project (aysenunlu@gmail.com)");
          },
        processData:false, 
        data : JSON.stringify(project),
        type:"POST",
        url: queryURL+accountNo+"/projects.json",
        datatype:'json',

        error: function (request, textStatus, errorThrown) {
            alert(errorThrown);
   
       },
        success: function(response){console.log(response);}
    
      })
}
createProject();*/
member={
    id:"",
    name:"",
    email:"",
    personableType:"",
    title:"",
    bio:"",
    avatarURL:""
}

////////////////////////////WILL BE READ FROM API//////////////////////
var mem1=new Object({id:"E1",name:"Aysen",email:"aysenunlu@gmail.com",personableType:"user",title:"engineer",bio:"",avatarURL:""})
var mem2=new Object({id:"E2",name:"Demet",email:"demet@gmail.com",personableType:"user",title:"sales person",bio:"",avatarURL:""})
var mem3=new Object({id:"E3",name:"Melisa",email:"melisa@gmail.com",personableType:"user",title:"engineer",bio:"",avatarURL:""})
var mem4=new Object({id:"E4",name:"Fatih",email:"fatihunlu@gmail.com",personableType:"user",title:"manager",bio:"",avatarURL:""})

var memList=[mem1,mem2,mem3,mem4];


//////////////////////////////////////////////////////
/////////////////////////////////////////////////////
memInfo={
    id:"",
    count:0
}
PInfo={
    project:"",
    member:null
}
membersofProjects=[];
membersofTasks=[];

////Those two functions are for displaying asignees when project button is clicked
function find(k,asgn,completed){
    for (var i=0;i<membersofTasks.length;i++){
        if (membersofTasks[i].id==asgn){
            if(!completed){
                membersofTasks[i].count++;
                return 1;
            }
        }
    }
    return -1;
}

function getAllPeopleOnProject(){
    for (var i=0;i<Projects.length;i++){
        for (var j=0;j<Projects[i].tasks.length;j++){
            for (var k=0;k<Projects[i].tasks[j].asignees.length;k++){
                var task=Projects[i].tasks[j];
                if(find(i,task.asignees[k],task.completed)==-1){
                            if(!task.completed){
                                var o=new Object();
                                o.id=task.asignees[k];
                                o.count=1;
                                membersofTasks.push(o);
                            }
                            else{
                                var o=new Object();
                                o.id=task.asignees[k];
                                o.count=0;
                                membersofTasks.push(o);
                                
                            }
                }
               
            }
            
        }
        var p=new Object();
        p.project=Projects[i].id;
        p.member=membersofTasks;
        membersofProjects.push(p);
        //console.log(membersofTasks);
        membersofTasks=[];
    }
    console.log(membersofProjects);
} 
/////////////////////////////////////////////////////////////

task1={
    id:"20",
    status:"active",
    title:"task 1",
    type:"todo",
    completed:false,
    asignees:["E1","E2","E3","E4"],
    completionSUbscribers:["A","B","C","D"],
    startsOn:"01/12/1999",
    endsOn:"01/02/2000",

}
task2={
    id:"12",
    status:"active",
    title:"task 2",
    type:"todo",
    completed:false,
    asignees:["E1","E2","E3"],
    completionSUbscribers:["A","B","C","D"],
    startsOn:"01/12/1999",
    endsOn:"01/02/2000",

}
task3={
    id:"11",
    status:"active",
    title:"task 3",
    type:"todo",
    completed:false,
    asignees:["E2","E3"],
    completionSUbscribers:["A","B","C","D"],
    startsOn:"01/12/1999",
    endsOn:"01/02/2000",

}
Project1={
    id:"1",
    name:"Project1",
    startTime:"01/12/1999",
    endTime:"03/05/2012",
    tasks:[task1,task2,task3],
    status:"overdue", //onschedule, behind, overdue
    priority: "medium" //medium, low. high
}

task3={
    id:"12",
    status:"active",
    title:"task 3",
    type:"todo",
    completed:false,
    asignees:["E2","E3"],
    completionSUbscribers:["A","B","C","D"],
    startsOn:"01/12/1999",
    endsOn:"01/02/2000",

}
task4={
    id:"13",
    status:"active",
    title:"task 4",
    type:"todo",
    completed:false,
    asignees:["E2","E3","E1"],
    completionSUbscribers:["A","B","C","D"],
    startsOn:"01/12/1999",
    endsOn:"01/02/2000"
}
Project2={
    id:"2",
    name:"Project2",
    startTime:"01/12/1999",
    endTime:"03/05/2020",
    tasks:[task3,task4],
    status:"on schedule", //onschedule, behind, overdue
    priority: "high" //medium, low. high
}


task5={
    id:"14",
    status:"active",
    title:"task 4",
    type:"todo",
    completed:true,
    asignees:["E1"],
    completionSUbscribers:["A","B","C","D"],
    startsOn:"01/12/1999",
    endsOn:"01/02/2000"
}
Project3={
    id:"3",
    name:"Project3",
    startTime:"01/12/1999",
    endTime:"03/05/2019",
    tasks:[task5],
    status:"falling behind", //onschedule, behind, overdue
    priority: "low" //medium, low. high
}
Projects=[Project1,Project2,Project3];
///VIEW MEMBER INFO OF A PROJECT//////////
 function viewMember(index){
     var project=membersofProjects[index];
     $("#mbody").empty();
     for (var j=0;j<project.member.length;j++){ 
        var memberID=project.member[j].id;
        var memberAvatarUrl="";
        var memberName="";
        var memberEmail="";
        var memberPersonableType="";
        var memberTitle="";

        var member=findMember(memberID);
        console.log(memberID);
        console.log(member);
        memberAvatarUrl=member.avatarURL;
        memberName=member.name;
        memberEmail=member.email;
        memberPersonableType=member.personableType;
        memberTitle=member.title;
    
        var row=$("<tr>");
        var img=$("<img>").attr("src",memberAvatarUrl);
        var imgIndex= $("<th scope='row'>"+img+"</th>");
        row.append(imgIndex);

        var data1=$("<td>");
        data1.append("<span>"+memberID+"</span>");
        $(row).append(data1);
  
        data1=$("<td>");
        data1.append("<span>"+memberName+"</span>");
        $(row).append(data1);

        data1=$("<td>");
        data1.append("<span>"+memberEmail+"</span>");
        $(row).append(data1);

        data1=$("<td>");
        data1.append("<span>"+memberPersonableType+"</span>");
        $(row).append(data1);

        data1=$("<td>");
        data1.append("<span>"+memberTitle+"</span>");
        $(row).append(data1);

        $("#mbody").append(row);
        
     }   
 }
////FIND Employee with Employee id////////////////////////////
function findMember(mID){
    for (var i=0;i<memList.length;i++){
        var m=memList[i]
        if (m.id==mID){
            var memberName=m.name;
            //return memberName;
            return m;
        }
    }
}
/////////////resize modal////////////
$('#myModal2').on('show', function () {
    $(this).find('.modal-body').css({
           width:'auto', //probably not needed
           height:'auto', //probably not needed 
           'max-height':'100%'
    });
});
//////////When Project Button is Clicked the asignees and number of tasks that are open will be listed.////////
function viewTasks(index){
   
   var project=membersofProjects[index];
   $("#tbody").empty();
   for (var j=0;j<project.member.length;j++){ 
    var numTask=project.member[j].count;
    var memberID=project.member[j].id;
    var memberName="";

    //access member name
    memberName=findMember(memberID).name;
    
      var row=$("<tr>");
      var index= $("<th scope='row'>"+memberID+"</th>");
      row.append(index);
      var data1=$("<td>");
      data1.append("<span>"+memberName+"</span>");
      $(row).append(data1);

      data1=$("<td>");
      data1.append("<span>"+numTask+"</span>");
      $(row).append(data1);
      $("#tbody").append(row);
       
    }



}
////////////////////////////////////////////////////////////////
//VIEW PROJECTS,THEIR STATUS AND PRIORITY
function viewProjects(){
   
    for (var i=0;i<Projects.length;i++){
        
      var row=$("<tr>");
      var index= $("<th scope='row'>"+Projects[i].id+"</th>");
      row.append(index);
      var str="viewTasks("+i+")";

      var button=$("<button class='btn btn-info btn-block' data-toggle='modal' data-target='#myModal' onclick='"+str+"'" +"id='titleButton"+i+"'>"+Projects[i].name+"</button>");
      var data1=$("<td>");
      data1.append(button);
      $(row).append(data1);
      
      str="viewMember("+i+")";
      button=$("<button class='btn btn-info btn-block' data-toggle='modal' data-target='#myModal2' onclick='" +str+"'"+"id='memberButton"+i+"'>"+"Members"+"</button>");
      data1=$("<td>");
      data1.append(button);
      $(row).append(data1);
      ///////////////////////////////////////////////
      if (Projects[i].status=="on schedule"){
         button=$("<button class='btn btn-success btn-block' id='statusButton"+i+"'>"+Projects[i].status+"</button>");
      }
      else if(Projects[i].status=="falling behind"){
          button=$("<button class='btn btn-warning btn-block' id='statusButton"+i+"'>"+Projects[i].status+"</button>");
      }
      else if(Projects[i].status=="overdue"){
        button=$("<button class='btn btn-danger btn-block' id='statusButton"+i+"'>"+Projects[i].status+"</button>");
      }
      data1=$("<td>");
      data1.append(button);
      $(row).append(data1);
      ///////////////////////////////////////////////
      if (Projects[i].priority=="low"){
        button=$("<button class='btn btn-success btn-block' id='priorityButton"+i+"'>"+Projects[i].priority+"</button>");
      }
      else if(Projects[i].priority=="medium"){
         button=$("<button class='btn btn-warning btn-block' id='priorityButton"+i+"'>"+Projects[i].priority+"</button>");
      }
     else if(Projects[i].priority=="high"){
       button=$("<button class='btn btn-danger btn-block' id='priorityButton"+i+"'>"+Projects[i].priority+"</button>");
     }
     data1=$("<td>");
     data1.append(button);
     $(row).append(data1);
     ///////////////////////////////////////////////

      $("#pbody").append(row);
       

     

    }
}

viewProjects();
getAllPeopleOnProject();
