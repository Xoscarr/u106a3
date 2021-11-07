let important = false;
let formVisible = true;

function toggleImportant(){
   if(!important){
    $("#iImportant").removeClass("far").addClass("fas");
    important = true;
} else {
    $("#iImportant").removeClass("fas").addClass("far");
    important = false;
}
}
 
function saveTask(){
    console.log("Saving Task");

    //read values from the form
    let title = $("#txtTitle").val();    
    let desc = $("#txtDescription").val();
    let date = $("#txtDate").val();
    let location=  $("#txtLocation").val();
    let invitee = $("#txtInvitee").val();


    console.log(title,important, desc, date, location, invitee,);

    //create a Task object
    let task = new Task(important, title, desc, date, location, invitee)
    //console log the object
    console.log(task);
    displayTask(task);

    clearForm();

}
/**
 * create displayTask function 
 * that recieves task object
 * and console logs the tile of the recieved task 
 */

function displayTask(task){
    console.log(task.title);
    
    let syntax = `<div class="task"> 
    <i class="far fa-star"></i>
    <div class="description">
    <h5><b>${task.title}</b></h5>
    <p>${task.description}</p>
    <p>${task.date}</p>
    <p>${task.invitee}</p>
    <label class="location">${task.location}</label>
    <button class="btn btn-sm btn-info"> Done </button>
    </div>`;

    $("#pendingList").append(syntax);



}


function clearForm(){
    $("#txtTitle").val("");
    $("#txtDescription").val("");
    $("#txtDate").val("");
    $("#txtLocation").val("");
    $("#txtInvitee").val("");
}

    
    


function toggleForm(){
    if(formVisible){
        $("#section-form").slideUp(300);
    formVisible = false;

    } else{
        $("#section-form").slideDown(300);
        formVisible= true;

        
    }
    // hide #section-form
    
    
}

function init() {
    console.log("task manager");

  // load data 

  // hook events 
  $("#iImportant").click(toggleImportant);
  $("#btnSave").click(saveTask);
  $("#btnTasks").click(toggleForm);
      
  }



window.onload = init;