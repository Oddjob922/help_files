jQuery(document).ready(function() {

	jQuery('pre').each(function(i,e) {
		snippet = '<div class="syntax"><a id="highlighter-'+i+'"></a></div>';
		jQuery(this).attr('id', 'pre-'+i).prepend(snippet);
	});

	jQuery('.syntax a').click(function() {
		id = jQuery(this).attr('id').replace('highlighter','pre');
		code = jQuery('#'+id).html();
		wind = window.open('','','height=480,width=640,modal=yes');

		jQuery(wind.document.body).html('<pre>'+code+'</pre>');
		console.log(code);
	});
});

