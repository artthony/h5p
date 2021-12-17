H5P.Citations = (function ($) {
    function Citations(params, id) {
        this.id = id;
        H5P.EventDispatcher.call(this);
        this.params = params;
        this.instance = H5P.newRunnable(this.params.content, id);
    }

    Citations.prototype = Object.create(H5P.EventDispatcher.prototype);
    Citations.prototype.constructor = Citations;

    Citations.prototype.attach = function ($container) {
        var self = this;
        self.instance.attach($container);
        $container.addClass('h5p-citations');
    };

    return Citations;
})(H5P.jQuery);