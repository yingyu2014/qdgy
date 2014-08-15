<?php
// Removing left sidebar of Twenty forteen theme
function remove_left_siderbar(){

	unregister_sidebar( 'sidebar-1' );
}
add_action( 'widgets_init', 'remove_left_siderbar', 11 );

// Removing commnets defalts of Twenty forteen theme
function yourtheme_init() {
	add_filter('comment_form_defaults','yourtheme_comments_form_defaults');
}
add_action('after_setup_theme','yourtheme_init');

function yourtheme_comments_form_defaults($default) {
	unset($default['comment_notes_after']);
	return $default;
}


?> 