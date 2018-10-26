function Start() {
    $('.addBtn').click(function () {
        EnterBindMode();
    });

}

var inBindMode = false;

var bindElement = '<div class="col-auto mb-2 binder"> \
            <input type="text" class="form-control mr-3" \ id="" placeholder="Key name" > \
            </div> \
            <span class="kbtn bg-success binder" onClick=AddKey()> <i class="fa fa-check"></i></span> <span class="currElement binder"></span>';

function AddElement() {
    $('#item-list').append(bindElement);
}

function EnterBindMode() {
    if (!inBindMode) {
        console.log('bind');
        AddElement();
        inBindMode = true;
        $('html').addClass('crosshair');
        $('.addBtn').addClass('bg-danger');
        GetClickedElement();
    } else ExitBindMode();
}

function ExitBindMode() {
    if (inBindMode) {
        inBindMode = false;
        console.log('exit bind');
        $('html').removeClass('crosshair');
        $('.addBtn').removeClass('bg-danger');
        $('.binder').detach();
    }
}

function GetClickedElement() {
    $("body").click(function (event) {
        console.log(event.target.classList);
        $(".currElement").html("clicked: " + event.target.classList);
    });
}
