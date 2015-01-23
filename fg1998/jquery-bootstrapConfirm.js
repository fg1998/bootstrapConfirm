/*
    bootstrapConfirm https://github.com/fg1998/bootstrapConfirm
    Copyright 2015 Fernando Garcia fg1998@gmail.com
*/
var defaults = {
    message: null,
    cancelCallBack: null,
    confirmCallBack: null,
    confirmButtonText: "Confirm",
    cancelButtonText: "Cancel",
    modalId: "bootstrapConfirm"
};


$.fn.bootstrapConfirm = function (options) {

    var settings = $.extend({}, defaults, options);

    $(this).on('click', function (e) {

        var modal = "<div class='modal fade' id='" + settings.modalId + "'> \
                            <div class='modal-dialog'> \
                                <div class='modal-content'> \
                                    <div class='modal-header'> \
                                        <button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button> \
                                        <h4 class='modal-title'>" + settings.message + "</h4> \
                                    </div> \
                                    <div class='modal-footer'> \
                                    <button type='button' class='btn btn-danger' data-dismiss='modal' id='bootstrapConfirmCancelButton'>" + settings.cancelButtonText + "</button> \
                                    <button type='button' class='btn btn-success' data-dismiss='modal' id='bootstrapConfirmConfirmButton'>" + settings.confirmButtonText + "</button> \
                                </div> \
                            </div> \
                        </div> \
                    </div>";


        //Append modal to current document
        $('body').append(modal)

        //Show the modal
        $('#' + settings.modalId).modal("show");

        //Remove modal from DOM after hide, events on cancel/confirm buttons
        $('#' + settings.modalId).on('hidden.bs.modal', function (e) {
            $('#bootstrapConfirm').remove();
        }).on('click', '#bootstrapConfirmCancelButton', function (e) {
            settings.cancelCallBack.call(this)
        }).on('click', '#bootstrapConfirmConfirmButton', function (e) {
            settings.confirmCallBack.call(this)
        })


    });
}