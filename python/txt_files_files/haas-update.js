//JS for Case Studies and Whitepapers view
(function($){
    function cs_wp_selector() {
        $('.view-case-studies-white-papers .views-widget .form-radios .form-item input').each(function() {
            $this = $(this);
            if($this.is(':checked')) {
                $this.siblings().addClass('active');
            }
        });
    }

    $(document).ready(function() {
        cs_wp_selector();
    });
    $(document).ajaxComplete(function(){
        cs_wp_selector();
    });
})(jQuery);