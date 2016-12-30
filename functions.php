<?php
add_action('wp_enqueue_scripts', 'twentyseventeen_child_enqueue_scripts');
function twentyseventeen_child_enqueue_scripts(){
	wp_enqueue_script('main-js', get_stylesheet_directory_uri() . '/dist/js/main.min.js', [], wp_get_theme()->get('Version'), true);
	wp_register_script('livereload', 'http://127.0.0.1' . ':35729/livereload.js?snipver=1', null, false, true);
	wp_enqueue_script('livereload');
	wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css', [],  wp_get_theme()->get('Version'));
	wp_enqueue_style('main-style', get_stylesheet_directory_uri() . '/dist/css/main.min.css', ['parent-style'], wp_get_theme()->get('Version'));
	wp_enqueue_style('style',  get_stylesheet_directory_uri() . '/style.css',
    ['parent-style, main-style'], wp_get_theme()->get('Version'));
}
