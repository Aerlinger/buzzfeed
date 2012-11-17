function message_welcome1() {
    var unique_id = $.gritter.add({
        // (string | mandatory) the heading of the notification
        title:'Welcome to Buzzfeed',
        // (string | mandatory) the text inside the notification
        text:"Feel free to look around, and don't forget to tell your friends!",
        // (string | optional) the image to display on the left
        image:'img/avatar.jpg',
        // (bool | optional) if you want it to fade out on its own or just sit there
        sticky:false,
        // (int | optional) the time you want it to be alive for before fading out
        time:'',
        // (string | optional) the class name you want to apply to that specific message
        class_name:'my-sticky-class'
    });
}

function message_welcome2() {
    var unique_id = $.gritter.add({
        // (string | mandatory) the heading of the notification
        title:'Tell your friends about Buzzfeed!',
        // (string | mandatory) the text inside the notification
        text:'Buzzfeed works on all devices, computers, tablets and smartphones. Buzzfeed has lots of great features. Try It!',
        // (string | optional) the image to display on the left
        image:'img/avatar.jpg',
        // (bool | optional) if you want it to fade out on its own or just sit there
        sticky:false,
        // (int | optional) the time you want it to be alive for before fading out
        time:'',
        // (string | optional) the class name you want to apply to that specific message
        class_name:'my-sticky-class'
    });
}

function message_welcome3() {
    var unique_id = $.gritter.add({
        // (string | mandatory) the heading of the notification
        title:'Share Buzzfeed!',
        // (string | mandatory) the text inside the notification
        text:'Get all your data in one place.',
        // (string | optional) the image to display on the left
        image:'img/avatar.jpg',
        // (bool | optional) if you want it to fade out on its own or just sit there
        sticky:false,
        // (int | optional) the time you want it to be alive for before fading out
        time:'',
        // (string | optional) the class name you want to apply to that specific message
        class_name:'gritter-light'
    });
}

$(document).ready(function () {
    //setTimeout("message_welcome1()", 5000);
    //setTimeout("message_welcome2()", 10000);
    //setTimeout("message_welcome3()", 15000);
});