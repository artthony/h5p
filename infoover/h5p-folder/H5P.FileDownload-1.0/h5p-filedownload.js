H5P.FileDownload = (function ($) {
    function FileDownload(params, id) {
        this.id = id;
        H5P.EventDispatcher.call(this);
        this.params = $.extend({}, {
            uploadedFile: null,
            fileName: "UploadedFile"
        }, params);
    }

    FileDownload.prototype = Object.create(H5P.EventDispatcher.prototype);
    FileDownload.prototype.constructor = FileDownload;

    FileDownload.prototype.attach = function ($container) {
        var self = this;

        var filePath = "";
        if (self.params.uploadedFile) {
            filePath = H5P.getPath(self.params.uploadedFile.path, self.id);
        }
        var displayText = filePath ? self.params.fileName + '.' + filePath.split('.').slice(-1)[0] : "No file given!";

        var $fileButton = $('<a>', {
            'class': 'h5p-file-button',
            'html': displayText,
            'target': filePath ? '_blank' : null,
            'href': filePath
        });

        var $downarrow = $('<i>', {
            'class': 'h5p-down-arrow',
            'html': "Download file:"
        })

        var $buttonWrapper = $('<div>', {
            'class': 'h5p-button-wrapper'
        }).append($downarrow).append($fileButton);

        $container.addClass('h5p-filedownload').append($buttonWrapper);
    };

    return FileDownload;
})(H5P.jQuery);