var sendajax;
      (function() {  
        function appendHtml(el, str) {
          var div = document.createElement('div');
          div.innerHTML = str;
          while (div.children.length > 0) {
            el.appendChild(div.children[0]);
          }
        }

        var html ="<div id='age_verification_modal'><div id='age_verification_modal_content'><span class='close'>&times;</span><strong><p id= 'errorIdVerification'></p></strong><label for='age_verification'>Please enter your identity card data.</label><br/><select id='age_verification' name='age_verification' class='sod_select custom'><option value='new_pass'>New Id</option><option value='old_pass'>Old ID</option></select><div id='new_pass' class='pass_div'><span>IDD &lt;&lt; </span><input type='text' class='control_string' size='10' maxlength='10' /><span> &lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt; </span><br><input type='text' class='birth_date' size='7' maxlength='7' /><span> &lt; </span><input type='text' class='expiry_date' size='7' maxlength='7' /><span> D&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt; </span><input type='text' class='perso_check' size='1' maxlength='1' /><span>Last Name &lt;&lt; First Name&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt; </span><br></div><div id='old_pass' class='pass_div'><span>IDD &lt;&lt; Last Name &lt;&lt; First Name &lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt; </span><br><input type='text' class='control_string' size='10' maxlength='10' /><span> D&lt;&lt; </span><input type='text' class='birth_date' size='7' maxlength='7' /><span> &lt; </span><input type='text' class='expiry_date' size='7' maxlength='7' /><span> &lt;&lt;&lt;&lt;&lt; </span> <input type='text' class='perso_check' size='1' maxlength='1' /></div><div id='agb_check'><div class='pull-right'><label class='agb-checkbox-label'><input type='checkbox' name='agb' class='agb-checkbox'><a href='/pages/agb' target='_blank'>I accept the general terms and conditions.</a></label></div></div><div id='age_check'><div class='pull-right'><label class='age-checkbox-label'><input type='checkbox' name='age' class='age-checkbox'>I certify that I am 18 years of age or older.</label></div></div><div id='submitButton'><button type='submit' id='submit' onclick='sendajax()'>OK</button></div></div></div>";
    
          
    appendHtml(document.body, html);  
    
    /* var modal is to show as modal pop up*/
    var modal = document.getElementById('age_verification_modal');
    
    /* modalcontent is the content inside Modal PopUp*/
    var modalContent = document.getElementById('age_verification_modal_content');
    console.log(modal);
    
  /* Close Button on Modal*/
    var span = document.getElementsByClassName('close')[0];    
    
    var submitButton = document.getElementById('submit'); 
   
    function addCssInModal(id) {
      id.style.display = 'none';
      id.style.position = 'fixed'; 
      id.style.zIndex = '100';
      id.style.paddingTop = '100px';
      id.style.left = '0';
      id.style.top = '0';
      id.style.width = '100%';
      id.style.height = '100%'; 
      id.style.overflow = 'auto';
      id.style.backgroundColor = 'rgb(0,0,0)'; 
      id.style.backgroundColor = 'rgba(0,0,0,0.4)'
       
    }
    
     function addCssInModalContent(id){
      id.style.backgroundColor = '#fefefe';
      id.style.margin= 'auto';
      id.style.padding = '20px';
      id.style.border = '1px solid #888';
      id.style.width = '80%';
     }
     function addCssInCloseButton(close){
      close.style.color = '#aaaaaa';
      close.style.float = 'right';
      close.style.fontSize = '28px';
      close.style.fontWeight = 'bold';
      close.style.color.onmouseover = '#000'; 
     }
     
    function addCssInSubmitButton(send){
      send.style.backgroundColor = '#4CAF50';
      send.style.width = 'auto';
      send.style.padding = '10px 18px';
       
    } 
    
    
    /* Adding CSS in modal, modalcontent, close Button*/
    addCssInModal(modal);
    addCssInModalContent(modalContent);
    addCssInCloseButton(span);
    addCssInSubmitButton(submitButton);
    
    /* CSS for Close Button on Mouseover*/
    span.onmouseover = function(){
      this.style.color = '#000';
      this.style.textDecoration = 'none';
      this.style.cursor = 'pointer';
    }
    
    /* CSS for Close Button on Mouse Out*/
    span.onmouseout = function(){
      this.style.color = '#aaaaaa';
      this.style.textDecoration = 'none';
      this.style.cursor = 'pointer';
    } 
    
    /* Hide old Id Div first of all*/
    document.getElementById('old_pass').style.display= 'none';  
    
    document.getElementById('errorIdVerification').style.color='#FA8072';
    
    
    
    document.getElementById('age_verification').onchange = function(){
      var checked = document.getElementById('age_verification').value;
      // hide Elements 
      var elements = document.getElementsByClassName('pass_div');
      for(var i = 0, length = elements.length; i < length; i++) {         
            elements[i].style.display = 'none';         
      }
      // show Elements
      document.getElementById(checked).style.display = 'block';       
    }; 
   
    //When in Checkout Button pressed
    //window.onsubmit = function(e){
    //document.body.onsubmit = function(e){
    document.getElementsByName('checkout')[0].onclick = function (e){   
    //document.getElementsByName('checkout').onclick = function (e){ 
      e.preventDefault();
      modal.style.display = 'block'; 
  };
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = 'none';
    }
    sendajax = function(){
      //e.preventDefault(); 
      var agbChecked = document.getElementsByClassName('agb-checkbox')[0].checked;
      var ageChecked = document.getElementsByClassName('age-checkbox')[0].checked; 
      //alert(agbChecked);
         
      // var ajax = loadDoc();
       if (agbChecked == false || ageChecked == false){
        //e.preventDefault();
        //alert('Bitte bestätigen Sie erst unsere AGBs und Ihr Alter und geben Sie Ihre Ausweisdaten ein (Sie müssen mindestens 18 Jahre alt sein um Ihren Einkauf fortzusetzen).');
         document.getElementById('errorIdVerification').innerHTML = 'Please first confirm our terms and conditions and your age and enter your identity card details (you must be at least 18 years old to continue your purchase).';
       } 
       else {   
         ajaxcall(); 
       }
      //return false;
    };
    
    
    var ajaxcall = function(){
      var verificationMethod = document.getElementById('age_verification').value;                
      var control_string = document.getElementById(verificationMethod).getElementsByClassName('control_string')[0].value.toUpperCase();      
      var birth_date = document.getElementById(verificationMethod).getElementsByClassName('birth_date')[0].value.toUpperCase();
      var expiry_date = document.getElementById(verificationMethod).getElementsByClassName('expiry_date')[0].value.toUpperCase();
      var perso_check = document.getElementById(verificationMethod).getElementsByClassName('perso_check')[0].value.toUpperCase(); 
      var params = '?verificationMethod='+verificationMethod+'&control_string='+control_string+'&birth_date='+birth_date+'&expiry_date='+expiry_date+'&perso_check='+perso_check;
      
      var xhttp;
      xhttp=new XMLHttpRequest();
      if (window.XMLHttpRequest) {
        // code for modern browsers
        xhttp = new XMLHttpRequest();
      } else {
        // code for IE6, IE5
        xhttp = new ActiveXObject('Microsoft.XMLHTTP');
      }
      xhttp.onreadystatechange = function(event) {        
        if (this.readyState == 4 && this.status == 200){ 
          var result = this.responseText;         
          if (result == 'false'){
            document.getElementById('errorIdVerification').innerHTML =
            'Invalid identity card data.';
            //alert('Ungültige Personalausweis Daten!');
         }
          else {            
            //document.getElementById('checkout').submit();                       
            window.location='/checkout';
          }
        }                   
      };
      xhttp.open('GET','https://0524cc71.ngrok.io/verification/check'+params, true);
      //xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); 
      xhttp.send();
    };
       
 })();