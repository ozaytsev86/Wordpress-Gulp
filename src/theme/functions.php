<?php

//Load parent theme styles
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );

function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}

//Load vendor styles
add_action('wp_enqueue_scripts', 'load_example_style');

function load_example_style () {
  wp_register_style('example', get_stylesheet_directory_uri() . '/assets/css/example.css');
  wp_enqueue_style('example');
}

//Load vendor scripts
add_action('wp_enqueue_scripts', 'load_example_script');

function load_example_script () {
  wp_register_script('example', get_stylesheet_directory_uri() . '/assets/js/example.js', array('jquery'));
  wp_enqueue_script('example');
}

//Load theme languages
load_child_theme_textdomain( 'myAwesomeTheme', get_stylesheet_directory() . '/languages' );

?>
