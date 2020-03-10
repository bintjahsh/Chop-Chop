/*Start of script for login and signin pages*/
 $(document).ready(function(){
         $(".register").click(function(){
            $(".other").show();
            $(".content").hide();
            $(".register").addClass('active');
            $(".login").removeClass('active');
         });
         $(".login").click(function(){
            $(".content").show();
            $(".other").hide();
            $(".login").addClass('active');
            $(".register").removeClass('active');
         });
});
/*End of script for login and signin pages*/