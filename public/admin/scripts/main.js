$("#inputfile").fileinput({
    uploadUrl: "http://localhost/Angular/Transaldis_Admin_Angular_v2/app/admin/images/upload.php", // server upload action
    uploadAsync: false,
    maxFileCount: 1,
    dropZoneEnabled:false,
    showRemove:false
});
