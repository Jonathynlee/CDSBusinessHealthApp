
console.log("test")
var accountID = "3736340";
var clientID="f83106024123731e9dd7114e6a6361bd81ba241f";
var clientSecret="0a18b9b736b153a492513183f1992346f094b8c7";
//var clientID = "6016c6aa882dfbed2b5349ef0cc816220eaf02c6";
//var clientSecret = "b8e579f7c6bdc759b3016264dfcad65e1ae23ddb";
// var redirectURI = "http://127.0.0.1:5500/callTest.html";
var redirectURI = "https://jonathynlee.github.io/CDSBusinessHealthApp/ProjectView/index.html";
var token;
var queryURL = "https://3.basecampapi.com/";
var code;
jQuery.ajaxPrefilter(function (options) {
    if (options.crossDomain && jQuery.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

function authorize() {

    console.log("authorization")
    window.location = "https://launchpad.37signals.com/authorization/new?type=web_server&client_id=" + clientID + "&redirect_uri=" + redirectURI;
}

function getCode() {
    console.log("getting code ...")
    code = getUrlParameter('code');
    console.log(code)
}
function getToken() {
    $.ajax({

        type: "POST",
        url: "https://launchpad.37signals.com/authorization/token?type=web_server&client_id=" + clientID + "&redirect_uri=" + redirectURI + "&client_secret=" + clientSecret + "&code=" + code,
        success: function (response) {
            console.log(response)
            token = response.access_token;
            console.log(token)
            createProject();
        }
    })
}


function createProject() {

    $.ajax({
        contentType: 'application/json;charset=utf-8',

        //processData:false, 

        type: "GET",
        headers: {
            "Authorization": "Bearer " + token
        },
        url: queryURL + accountID + "/projects.json",
        datatype: 'json',

        error: function (request, textStatus, errorThrown) {
            alert(errorThrown);

        },
        success: function (response) {
            //for(var i=0;i< response.length;i++){
            /*  var div = $("<div>");
              var currentData = response[i];
              currentName = currentData.name;
              div.html("Project "+i +": "+ currentName);
              $("body").append(div);*/
            //}
            console.log(response);
            console.log(response.length);
        }
    });

}
getCode();

if (!code) {
    authorize();
} else {
    
    getToken();
    createProject();
}


member = {
    id: "",
    name: "",
    email: "",
    personableType: "",
    title: "",
    bio: "",
    avatarURL: ""
}

////////////////////////////WILL BE READ FROM API//////////////////////
var mem1 = new Object({ id: "E1", name: "Aysen", email: "aysenunlu@gmail.com", personableType: "user", title: "engineer", bio: "", avatarURL: "" })
var mem2 = new Object({ id: "E2", name: "Demet", email: "demet@gmail.com", personableType: "user", title: "sales person", bio: "", avatarURL: "" })
var mem3 = new Object({ id: "E3", name: "Melisa", email: "melisa@gmail.com", personableType: "user", title: "engineer", bio: "", avatarURL: "" })
var mem4 = new Object({ id: "E4", name: "Fatih", email: "fatihunlu@gmail.com", personableType: "user", title: "manager", bio: "", avatarURL: "" })

var memList = [mem1, mem2, mem3, mem4];


//////////////////////////////////////////////////////
/////////////////////////////////////////////////////
memInfo = {
    id: "",
    count: 0
}
PInfo = {
    project: "",
    member: null
}
membersofProjects = [];
membersofTasks = [];

////Those two functions are for displaying asignees when project button is clicked
function find(k, asgn, completed) {
    for (var i = 0; i < membersofTasks.length; i++) {
        if (membersofTasks[i].id == asgn) {
            if (!completed) {
                membersofTasks[i].count++;
                return 1;
            }
        }
    }
    return -1;
}

function getAllPeopleOnProject() {
    for (var i = 0; i < Projects.length; i++) {
        for (var j = 0; j < Projects[i].tasks.length; j++) {
            for (var k = 0; k < Projects[i].tasks[j].asignees.length; k++) {
                var task = Projects[i].tasks[j];
                if (find(i, task.asignees[k], task.completed) == -1) {
                    if (!task.completed) {
                        var o = new Object();
                        o.id = task.asignees[k];
                        o.count = 1;
                        membersofTasks.push(o);
                    }
                    else {
                        var o = new Object();
                        o.id = task.asignees[k];
                        o.count = 0;
                        membersofTasks.push(o);

                    }
                }

            }

        }
        var p = new Object();
        p.project = Projects[i].id;
        p.member = membersofTasks;
        membersofProjects.push(p);
        //console.log(membersofTasks);
        membersofTasks = [];
    }
    console.log(membersofProjects);
}
/////////////////////////////////////////////////////////////

task1 = {
    id: "20",
    status: "active",
    title: "task 1",
    type: "todo",
    completed: false,
    asignees: ["E1", "E2", "E3", "E4"],
    completionSUbscribers: ["A", "B", "C", "D"],
    startsOn: "01/12/1999",
    endsOn: "01/02/2000",

}
task2 = {
    id: "12",
    status: "active",
    title: "task 2",
    type: "todo",
    completed: false,
    asignees: ["E1", "E2", "E3"],
    completionSUbscribers: ["A", "B", "C", "D"],
    startsOn: "01/12/1999",
    endsOn: "01/02/2000",

}
task3 = {
    id: "11",
    status: "active",
    title: "task 3",
    type: "todo",
    completed: false,
    asignees: ["E2", "E3"],
    completionSUbscribers: ["A", "B", "C", "D"],
    startsOn: "01/12/1999",
    endsOn: "01/02/2000",

}
Project1 = {
    id: "1",
    name: "Project1",
    startTime: "01/12/1999",
    endTime: "03/05/2012",
    tasks: [task1, task2, task3],
    status: "overdue", //onschedule, behind, overdue
    priority: "medium" //medium, low. high
}

task3 = {
    id: "12",
    status: "active",
    title: "task 3",
    type: "todo",
    completed: false,
    asignees: ["E2", "E3"],
    completionSUbscribers: ["A", "B", "C", "D"],
    startsOn: "01/12/1999",
    endsOn: "01/02/2000",

}
task4 = {
    id: "13",
    status: "active",
    title: "task 4",
    type: "todo",
    completed: false,
    asignees: ["E2", "E3", "E1"],
    completionSUbscribers: ["A", "B", "C", "D"],
    startsOn: "01/12/1999",
    endsOn: "01/02/2000"
}
Project2 = {
    id: "2",
    name: "Project2",
    startTime: "01/12/1999",
    endTime: "03/05/2020",
    tasks: [task3, task4],
    status: "on schedule", //onschedule, behind, overdue
    priority: "high" //medium, low. high
}


task5 = {
    id: "14",
    status: "active",
    title: "task 4",
    type: "todo",
    completed: true,
    asignees: ["E1"],
    completionSUbscribers: ["A", "B", "C", "D"],
    startsOn: "01/12/1999",
    endsOn: "01/02/2000"
}
Project3 = {
    id: "3",
    name: "Project3",
    startTime: "01/12/1999",
    endTime: "03/05/2019",
    tasks: [task5],
    status: "falling behind", //onschedule, behind, overdue
    priority: "low" //medium, low. high
}
Projects = [Project1, Project2, Project3];
///VIEW MEMBER INFO OF A PROJECT//////////
function viewMember(index) {
    var project = membersofProjects[index];
    $("#mbody").empty();
    for (var j = 0; j < project.member.length; j++) {
        var memberID = project.member[j].id;
        var memberAvatarUrl = "";
        var memberName = "";
        var memberEmail = "";
        var memberPersonableType = "";
        var memberTitle = "";

        var member = findMember(memberID);
        console.log(memberID);
        console.log(member);
        memberAvatarUrl = member.avatarURL;
        memberName = member.name;
        memberEmail = member.email;
        memberPersonableType = member.personableType;
        memberTitle = member.title;

        var row = $("<tr>");
        var img = $("<img>").attr("src", memberAvatarUrl);
        var imgIndex = $("<th scope='row'>" + img + "</th>");
        row.append(imgIndex);

        var data1 = $("<td>");
        data1.append("<span>" + memberID + "</span>");
        $(row).append(data1);

        data1 = $("<td>");
        data1.append("<span>" + memberName + "</span>");
        $(row).append(data1);

        data1 = $("<td>");
        data1.append("<span>" + memberEmail + "</span>");
        $(row).append(data1);

        data1 = $("<td>");
        data1.append("<span>" + memberPersonableType + "</span>");
        $(row).append(data1);

        data1 = $("<td>");
        data1.append("<span>" + memberTitle + "</span>");
        $(row).append(data1);

        $("#mbody").append(row);

    }
}
////FIND Employee with Employee id////////////////////////////
function findMember(mID) {
    for (var i = 0; i < memList.length; i++) {
        var m = memList[i]
        if (m.id == mID) {
            var memberName = m.name;
            //return memberName;
            return m;
        }
    }
}
/////////////resize modal////////////
$('#myModal2').on('show', function () {
    $(this).find('.modal-body').css({
        width: 'auto', //probably not needed
        height: 'auto', //probably not needed 
        'max-height': '100%'
    });
});
//////////When Project Button is Clicked the asignees and number of tasks that are open will be listed.////////
function viewTasks(index) {

    var project = membersofProjects[index];
    $("#tbody").empty();
    for (var j = 0; j < project.member.length; j++) {
        var numTask = project.member[j].count;
        var memberID = project.member[j].id;
        var memberName = "";

        //access member name
        memberName = findMember(memberID).name;

        var row = $("<tr>");
        var index = $("<th scope='row'>" + memberID + "</th>");
        row.append(index);
        var data1 = $("<td>");
        data1.append("<span>" + memberName + "</span>");
        $(row).append(data1);

        data1 = $("<td>");
        data1.append("<span>" + numTask + "</span>");
        $(row).append(data1);
        $("#tbody").append(row);

    }



}
////////////////////////////////////////////////////////////////
//VIEW PROJECTS,THEIR STATUS AND PRIORITY
function viewProjects() {

    for (var i = 0; i < Projects.length; i++) {

        var row = $("<tr>");
        var index = $("<th scope='row'>" + Projects[i].id + "</th>");
        row.append(index);
        var str = "viewTasks(" + i + ")";

        var button = $("<button class='btn btn-info btn-block' data-toggle='modal' data-target='#myModal' onclick='" + str + "'" + "id='titleButton" + i + "'>" + Projects[i].name + "</button>");
        var data1 = $("<td>");
        data1.append(button);
        $(row).append(data1);

        str = "viewMember(" + i + ")";
        button = $("<button class='btn btn-info btn-block' data-toggle='modal' data-target='#myModal2' onclick='" + str + "'" + "id='memberButton" + i + "'>" + "Members" + "</button>");
        data1 = $("<td>");
        data1.append(button);
        $(row).append(data1);
        ///////////////////////////////////////////////
        if (Projects[i].status == "on schedule") {
            button = $("<button class='btn btn-success btn-block' id='statusButton" + i + "'>" + Projects[i].status + "</button>");
        }
        else if (Projects[i].status == "falling behind") {
            button = $("<button class='btn btn-warning btn-block' id='statusButton" + i + "'>" + Projects[i].status + "</button>");
        }
        else if (Projects[i].status == "overdue") {
            button = $("<button class='btn btn-danger btn-block' id='statusButton" + i + "'>" + Projects[i].status + "</button>");
        }
        data1 = $("<td>");
        data1.append(button);
        $(row).append(data1);
        ///////////////////////////////////////////////
        if (Projects[i].priority == "low") {
            button = $("<button class='btn btn-success btn-block' id='priorityButton" + i + "'>" + Projects[i].priority + "</button>");
        }
        else if (Projects[i].priority == "medium") {
            button = $("<button class='btn btn-warning btn-block' id='priorityButton" + i + "'>" + Projects[i].priority + "</button>");
        }
        else if (Projects[i].priority == "high") {
            button = $("<button class='btn btn-danger btn-block' id='priorityButton" + i + "'>" + Projects[i].priority + "</button>");
        }
        data1 = $("<td>");
        data1.append(button);
        $(row).append(data1);
        ///////////////////////////////////////////////

        $("#pbody").append(row);




    }
}

//viewProjects();
//getAllPeopleOnProject();


