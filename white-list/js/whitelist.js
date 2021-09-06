 
 
function ValidateIP() {

var len = document.getElementsByClassName("js-text-full").length - 1; 
 
var ipname = new Array();
var enves = new Array();
var envesvalue = new Array();
 
var enves = document.getElementsByClassName("form-radio") ;

for(var i=0; i< len; i++)
{
 ipname[i]  = $(' input[data-drupal-selector="edit-field-request-ip-'+i+'-subform-field-ip-0-value"] ').val();  
}
 
for(var j=0; j< enves.length; j++)
{
   if (enves[j].checked )  { 
       envesvalue[j] = enves[j].value; }
}
 
envesvalue = envesvalue.filter(Boolean)
 $clientnamev = {{ drupal_token('current-user:account-name') }} ;
 //alert(ipname+"----"+envesvalue);
 if ( $clientnamev !="sysadmin")  {
var data = {"clientname":"{{ drupal_token('current-user:account-name') }}","ip":(ipname),"environments":(envesvalue),"email":"{{ drupal_token('current-user:mail') }}","firstname":"{{ drupal_token('personalization:fn') }}"};
 $.ajax({
            url:'http://10.33.6.43:9001/drupal/gitlab/add',
            type: 'post',
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded',
            success: function (data) {
             console.log( "the feedback from your API: " + data );
            },
            data:JSON.stringify( data )
        });                    
         }

		 
   


function ValidateIPdel() {
var ipes3;
var enves3 ;
ipes3 = document.getElementById("edit-field-ip-request-delete-0-value").value ;
   
if(document.getElementById('edit-field-env-sandbox').checked) {
    enves3 =   'Sandbox' ;
}
else if
(document.getElementById('edit-field-env-production').checked) {
enves3 =  'Production' ;
}

  alert(ipes3+enves3);
 
  var data3 = {"clientname":"{{ drupal_token('current-user:account-name') }}","ip":(ipes3),"environments":(enves3),"email":"{{ drupal_token('current-user:mail') }}","firstname":"{{ drupal_token('personalization:fn') }}"};
 $.ajax({
            url:'http://10.33.6.43:9001/drupal/gitlab/delete',
            type: 'post',
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded',
            success: function (data3) {
            
            },
            data:JSON.stringify( data3 )
        }); 
		
}

function ValidateIPedit() {
 

ipes  = document.getElementById("edit-field-old-ip-0-value").value+","+document.getElementById("edit-field-new-ip-0-value").value  ;
 
   
if(document.getElementById('edit-field-envedit-sandbox').checked) { 
    enves =   'Sandbox' ;
}
else if
(document.getElementById('edit-field-envedit-production').checked) {
enves =  'Production' ;
}

  alert('Your Request Sent');
  
  var data = {"clientname":"{{ drupal_token('current-user:account-name') }}","ip": ipes,"environments":(enves),"email":"{{ drupal_token('current-user:mail') }}","firstname":"{{ drupal_token('personalization:fn') }}"};
 $.ajax({
            url:'http://10.33.6.43:9001/drupal/gitlab/edit',
            type: 'post',
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded',
            success: function (data) {
            
            },
            data:JSON.stringify( data )
        });   
 

		
}

       $(document).ready(function() {
	   
	    var xn = document.getElementsByClassName("node-whitelistip-edit-form").length;
		var xn2 = document.getElementsByClassName("node-whitelistip-form").length;
		
	    var xd = document.getElementsByClassName("node-whitelistdel-form").length;
		var xd2 = document.getElementsByClassName("node-whitelistdel-edit-form").length;  

		var xe = document.getElementsByClassName("node-whitelistedit-form").length;
		var xe2 = document.getElementsByClassName("node-whitelistedit-edit-form").length;  		
		 
	   if (xd > 0 || xd2 > 0 )  {    $("#edit-submit").on('click', ValidateIPdel) ;}
	   
	   if (xn > 0 || xn2 > 0 )  {    $("#edit-submit").on('click', ValidateIP) ;}
	   
	   if (xe > 0 || xe2 > 0 )  {    $("#edit-submit").on('click', ValidateIPedit) ;}
  
    }); 


