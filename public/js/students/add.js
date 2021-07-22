$("#sel-faculty").select2({
    theme: "bootstrap4",
});

$("#form-add-student").submit(function (e) {
    e.preventDefault();

    // Write code to check if student id is existed!
    // Camel case
    var studentId = $("input[name='id']").val();
    var form = $(this);

    // AJAX
    $.post("/students/checkId", { id: studentId }, function (data, status) {
        if (data.status == "FOUND") alert("Đã tồn tại mã số sinh viên này!");
        else form.unbind("submit").submit();
    });
});
