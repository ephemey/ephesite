<?php
if(!empty($_POST['password'])) { 
    if(md5('blah@#$'.sha1('3NhNj8&'.$_POST['password']) ) =='dc20cd2168038a1b4d2436b56b7cd61a' ) {
    header("Location: http://www.ephesite.co.uk/main"); /* Redirect here if the password is correct */
    }
    else {
        header("Location: http://www.ephesite.co.uk"); /* Return here if the password ain't correct */
    }   
}
else {
    header("Location: http://www.ephesite.co.uk"); /* Return here if the field is empty */
}
?>