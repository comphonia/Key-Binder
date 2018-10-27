    $(function() {
        Start();
    });

function Start() {
    $('.addBtn').click(function () {
        EnterBindMode();
    });

}

var inBindMode = false;
var tempKey=[];
var storedKeys = []; // store[key] json name,id,class

//Add form
var bindElement = '<div class="row binderBlock">\
                <div class="col-auto mb-2 binder">\
                    <input type="text" class="form-control mr-3" id="binderId" placeholder="Key name">\
                </div>\
                <span class="kbtn bg-success binder" onclick="AddKey()"> <i class="fa fa-check"></i></span> <span class="currElement binder"></span>\
            </div>';
//Key Form
var keyElement = '<div class="row keyBlock">\
                <div class="col-auto mb-2">\
                    <input type="text" class="form-control mr-3" id="" placeholder="Key name" disabled>\
                </div>\
                <span class="kbtn bg-danger" onclick="RemoveKey()"> <i class="fa fa-times"></i></span>\
            </div>';


function AddElement() {
    $('#item-list').append(bindElement);
}

function AddKey() {
    $('.binderBlock').before(keyElement);
    storedKeys.push({name:"{name}",class:tempKey[0].class,id: tempKey[0].id});
    tempKey.pop();
    console.log(storedKeys);
    
    
   
}

function RemoveKey()
{
    $('keyBlock').remove();   
}

function EnterBindMode() {
    if (!inBindMode) {
        inBindMode = true;
        console.log('bind');
        AddElement();
        $('html').addClass('crosshair');
        $('.addBtn').addClass('bg-danger');
        GetClickedElement();
    } else ExitBindMode();
}

function ExitBindMode() {
    if (inBindMode) {
        inBindMode = false;
        console.log('exit bind');
        $('.noclick').css('pointer-events','nonw');
        $('html').removeClass('crosshair');
        $('.addBtn').removeClass('bg-danger');
        $('.binderBlock').detach();
    }
}

function GetClickedElement() {
    let counter =0;
    $("body").click(function (event) {
        if (counter === 0) {
            counter++;
        } else if (counter === 1) {
            counter++;
            $(".currElement").html("clicked: " + event.target.classList);
            console.log(event.target.classList);
            console.log(event.target.getAttribute('id'));
            tempKey.push({class: event.target.classList[0],id: event.target.getAttribute('id')});
            $('html').removeClass('crosshair');
           $('.noclick').css('pointer-events','all');
            console.log(counter);
        }

    });
}
