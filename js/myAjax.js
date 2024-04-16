$(document).ready(function(){

//Ajax code to Insert data
$("#btnAdd").click(function(e){
    e.preventDefault();
    // console.log("added successful");

    let id = $('#stId').val();
    let nm = $('#nameId').val();
    let em = $('#emailId').val();
    let ps = $('#passwordId').val();

    // if(nm === '' || em === '' || ps === '') {
    //     $('#msg').html("يرجى ملء جميع الحقول");
    //     return; 
    // }
           
    if(nm === ''){
        $('#msg').html("Please Enter Your Name")
        return;
    }
    
    if(!/^[a-zA-Z]+$/.test(nm)) {
        $('#msg').html("Please Enter True Name")
        return;
    }

    if(em  === ''){
        $('#msg').html("Please Enter Your Email")
        return;
    }
    if(ps === ''){
        $('#msg').html("Please Enter Your Password")
        return;
    }

    if(ps.length < 8) {
        $('#msg').html("يجب أن تتكون كلمة المرور من 8 أحرف على الأقل");
        return; 
    }
     
    let mydata = {id: id ,name: nm , email: em , password: ps};

    $.ajax({
             url: 'insert.php',
             method:'post',
             data: mydata ,
             success: function(data){
                // console.log(data);
                $('#msg').html(data);
                show_data();
             }
    })
    $('#myform')[0].reset(); //resst form to emty
    $('#stId').val('');
    $('#nameId').focus();

});


//Ajax code to Reade data
 
function show_data() {
    let output='';
    $.ajax({
        url: 'retrieve.php',
        method: 'get',
        dataType: 'json',
        success: function(data){
            //  console.log(data[0].name);
             for(i=0;i<data.length;i++){
                output+="<tr> <td>"+data[i].id +"</td>  <td>"+ data[i].name+"</td>  <td>"+data[i].email+"</td>  <td>"+ data[i].password+"</td>"+
                  "<td> <button class='btn btn-warning' id='btnedit' data-sid="+data[i].id+">Edit</button> <button class='btn btn-danger' id='btndel' data-sid="+data[i].id+">Delete</button></td></tr>";
             }
             $('#tbody').html(output);
        }
    })
}



//Ajax code to Delete data

$('#tbody').on("click" , "#btndel" , function(){
    console.log("deleted");
    let id = $(this).attr('data-sid');
    let mythis = this; 
    console.log(id);
    let mydata = {id : id};
    $.ajax({
        url : 'delete.php',
        method: 'post',
        data : mydata,
        success: function(data){
            // console.log(data);
            $('#msg').html(data);
             $(mythis).closest('tr').fadeOut(500);
        }
    })
})


//Ajax code to Edit data

$('#tbody').on("click" , "#btnedit" , function(){
    let id = $(this).attr('data-sid');
    console.log("editing");
    
    let mydata = {id : id};

    $.ajax({
        url : 'edit.php',
        method : 'post',
        data : mydata,
        dataType : 'json', 
        success : function(data){
               console.log(data);
               $('#stId').val(data.id);
               $('#nameId').val(data.name);
               $('#emailId').val(data.email);
               $('#passwordId').val(data.password);
               $('#msg').html("Editing...");
        }
    })
});

show_data();

});

function myfun1(){
    let given = $('#mytxt').val();
    mydata = {name : given};
    let output="";
    $.ajax({
        url : 'search.php',
        dataType : 'json',
        method : 'post',
        data : mydata,
        success : function (data) {
            console.log(data);
            for(i=0;i<data.length;i++){
                output+="<tr> <td>"+data[i].id +"</td>  <td>"+ data[i].name+"</td>  <td>"+data[i].email+"</td>  <td>"+ data[i].password+"</td>"+
                  "<td> <button class='btn btn-warning' id='btnedit' data-sid="+data[i].id+">Edit</button> <button class='btn btn-danger' id='btndel' data-sid="+data[i].id+">Delete</button></td></tr>";
             }
             $('#tbody').html(output);
        }
        
    })
}