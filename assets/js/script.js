const userID = `LBA-${new Date().getDate()}${new Date().getMonth()}${new Date().getYear()}${new Date().getUTCMilliseconds()}`;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

document.getElementById("inputName").addEventListener("keyup", function(event) {
    validateInputs();
});

document
    .getElementById("inputDepartment")
    .addEventListener("keyup", function(event) {
        validateInputs();
    });

document
    .getElementById("inputPosition")
    .addEventListener("keyup", function(event) {
        validateInputs();
    });

function validateInputs() {
    document.getElementById("downloadBtn").disabled = false;

    var inputName = document.getElementById("inputName").value;
    var inputDepartment = document.getElementById("inputDepartment").value;
    var inputPosition = document.getElementById("inputPosition").value;

    if (
        inputName.length == 0 ||
        inputDepartment.length == 0 ||
        inputPosition.length == 0
    )
        document.getElementById("downloadBtn").disabled = true;
}

function drawBackgroundImage(canvas, ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const img = document.getElementById("lavishbox");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
}

// Receive the uploaded file and render
function handleImage(e) {
    var reader = new FileReader();
    reader.onload = function(event) {
        var img = new Image();
        img.onload = function() {
            const canvas = document.getElementById("canvas");
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 732, 180, 333, 419);
        };
        img.src = event.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
}

function download() {
    var download = document.getElementById("download");
    var image = document
        .getElementById("canvas")
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
    download.setAttribute("href", image);
}

function writeName(canvas, ctx, theName) {
    ctx.font = "35px system-ui";
    ctx.fillText(theName, 350, 360);
}

function writePosition(canvas, ctx, thePosition) {
    ctx.font = "35px system-ui";
    ctx.fillText(thePosition, 360, 400);
}

function writeBranch(canvas, ctx, theBranch) {
    ctx.font = "30px system-ui";
    ctx.fillText(theBranch, 410, 462);
}

function writeId(canvas, ctx, theId) {
    ctx.font = "30px system-ui";
    ctx.fillText(theId, 380, 537);
}

function handleInputName(e) {
    writeName(canvas, ctx, e.target.value);
}
function handleInputDepartment(e) {
    writeBranch(canvas, ctx, e.target.value);
}
function handleInputPosition(e) {
    writePosition(canvas, ctx, e.target.value);
}

onload = function() {
    var imageLoader = document.getElementById("imageLoader");
    imageLoader.addEventListener("change", handleImage, false);

    var inputName = document.getElementById("inputName");
    inputName.addEventListener("input", handleInputName);
    var inputDepartment = document.getElementById("inputDepartment");
    inputDepartment.addEventListener("input", handleInputDepartment, false);
    var inputPosition = document.getElementById("inputPosition");
    inputPosition.addEventListener("input", handleInputPosition, false);

    drawBackgroundImage(canvas, ctx);
    writeId(canvas, ctx, userID);
};

function preventBackspaceHandler(evt) {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    evt = evt || window.event;
    if (evt.keyCode == 8) {
        var imageLoader = document.getElementById("imageLoader");
        imageLoader.addEventListener("change", handleImage, false);

        var inputName = document.getElementById("inputName");
        inputName.addEventListener("input", handleInputName);
        var inputDepartment = document.getElementById("inputDepartment");
        inputDepartment.addEventListener("input", handleInputDepartment, false);
        var inputPosition = document.getElementById("inputPosition");
        inputPosition.addEventListener("input", handleInputPosition, false);

        drawBackgroundImage(canvas, ctx);
        writeId(canvas, ctx, userID);
    }
}

document.onkeydown = preventBackspaceHandler;
