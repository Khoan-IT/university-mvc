$("#tab-students").DataTable({
    dom: "Bfrtip",
    responsive: true,
    lengthChange: false,
    autoWidth: false,
    language: {
        url: "https://cdn.datatables.net/plug-ins/1.10.25/i18n/Vietnamese.json",
    },
    buttons: [
        {
            text: "Thêm mới",
            action: function (e, dt, node, config) {
                window.location.href = "/students/add";
            },
        },
    ],
    columnDefs: [
        {
            targets: 7,
            orderable: false,
        },
    ],
});
