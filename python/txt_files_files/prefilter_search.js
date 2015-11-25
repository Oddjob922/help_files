function prefilter_select($filter) {
    $selected_option = jQuery('#search-block-form div.filter-display div.filter-dropdown li.'+$filter);
    $filter_text = $selected_option.text()
    
    if($filter == 'email-apps') {
        $filter_val = 1;
    } else if($filter == 'cloud-hosting') {
        $filter_val = 2;
    } else {
        $filter_val = null;
    }

    $selected_option.addClass('active')
        .siblings().removeClass('active');
    
    jQuery('#search-block-form input.prefilter-field').val($filter_val);
    jQuery('#search-block-form div.filter-display span').text($filter_text);
    $selected_option.parent('div.filter-dropdown').toggle();
}

function prefilter_show() {
    jQuery('#search-block-form div.filter-display div.filter-dropdown').toggle();
}