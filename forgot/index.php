<!DOCTYPE HTML>
<html lang="en">
	<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width">
    <meta name="viewport" content="initial-scale=1, maximum-scale=1,  minimum-scale=1, user-scalable=no">
	<meta name="author" content="Plot Guru, Inc">
	<meta name="keywords" content="password, forgot, reset, plotguru, plotgurupassword, netflix, plotguruapp, youtube, App, Questions, Predictions">
	<meta name="description" content="Forgot Password - Plot Guru - Watch Netflix. Answer real-time trivia. Are you the Plot Guru?">
	<meta property="og:image" content="../assets/icon3.png">
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://wwww.plotguru.com/forgot">
	<meta property="og:title" content="Forgot Password - Plot Guru">
	<meta property="og:site_name" content="Plot Guru, Inc">
	<meta property="og:description" content="Forgot Password - Plot Guru - Watch Netflix. Answer real-time trivia. Are you the Plot Guru?">
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@plotguru" />
	<meta name="twitter:title" content="Forgot Password - Plot Guru - Watch Netflix. Answer real-time trivia. Are you the Plot Guru?" />
	<meta name="twitter:description" content="Forgot Password - Plot Guru - Watch Netflix. Answer real-time trivia. Are you the Plot Guru?" />
	<meta name="twitter:image" content="../assets/icon3.png" />
	<title>Forgot Password - Plot Guru</title> 
	<link rel="shortcut icon" type="image/ico" href="../assets/favicon.ico"/>
	<link rel="stylesheet" href="../css/normalize.css">  
	<link rel="stylesheet" href="../css/main.css">   
	<link rel="stylesheet" href="css/reset.css">  
</head>
<body>
        <header class="container">
	        <a href="http://www.plotguru.com" class="nav_logo"></a> 
	     		<nav class="navbar">  
			     		     <a class="navs links" href="http://www.plotguru.com/blog.html">BLOG</a>
			     		     <a class="navs links" href="http://www.plotguru.com/press.html">PRESS</a>
			     		     <a class="navs links" href="http://www.plotguru.com/terms">TERMS</a>
			     		     <a class="navs links" href="http://www.plotguru.com/about.html">ABOUT</a>
			     		     <a class="navs links" href="http://www.plotguru.com/contact.html">CONTACT</a>
			     		     <a id="twitter" class="navs social" href="http://twitter.com/plotguru"></a>
			     		     <a id="fb" class="navs social" href="http://www.facebook.com/PlotGuru"></a>
			     		     <a id="ins" class="navs social" href="http://instagram.com/plot.guru/"></a>
			     		     <button id="menu" class="navs" href="#"></button>
	     		</nav> 
	    </header>
	    <h1 class="title">Forgot Your Password?</h1>
	    <article>
	    <p class="forgot">No worries! Enter the email you signed up to Plot Guru with, and we'll send you instructions to reset your password.</p>   
	        <form method="post" id="form1" name="forgot"> 
			<input id="email" class="email" type="email" name="EMAIL" value="Email Address" onfocus="if(this.value==this.defaultValue)this.value='';" onblur="if(this.value=='')this.value=this.defaultValue;">
			<input class="btns" id="submit" type="submit" name="send" value="Send">
		    </form>
        </article> 
        <br><br> 
<!--<pre>
// <?php
// if (isset($_POST['send'])) {
//    $json = json_encode($_POST);
    // code here...
// }
// ?>    
</pre> -->
</body>
	<script src="../js/jquery-1.10.1.min.js"></script> 
	<script>
  /* $(function(){  
	var a = $('email').val();
	$.ajax({
       type:"POST",
       url:"https://www.plotguru.info:8443/v1/user/update/password", 
       dataType: 'json',
       async: false, 
       data: a, 
       crossDomain: true, 
       cache:false,
       error: function(){
       	alert("Not a registered email adress");
       },
       success: function(data){ 
       }
	}); */

$('#submit').click(function() {
    window.location.href = "http://www.plotguru.com/password_reset" ;
});
$("#menu").click(function(){  
  if ( $('.links').css('visibility') == 'hidden' ) {
    $('.navbar').css('height', '500px');
    $('.links').css('visibility','visible');
  } else {
    $('.links').css('visibility','hidden');
    $('.navbar').css('height', '100%');
}
});
})
	</script>
	<script async>
		 (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga'); 
			  ga('create', 'UA-38451886-3', 'auto');
			  ga('send', 'pageview', location.pathname);
    </script>
</html>