<?php
/*
Plugin Name: Awesome Poop-up
Plugin URI:
Description: Easy way to create popup in wordpress with variable content.
Author: David Zoufalý
Author URI: https://davidzoufaly.cz
Version: 1.4.16.9.2019
Date updated: 
*/

function enqueue_it_all_ap() {
  wp_register_script('popup-scripty', plugin_dir_url( __FILE__ ) . 'js/awesome-popup-scripts.js', array(), '1.0.0', true);
  wp_enqueue_script('popup-scripty');
}

function prefix_add_footer_styles() {
  wp_register_style('popup-styly', plugin_dir_url( __FILE__ ) . 'css/awesome-popup-styles.css');
  wp_enqueue_style('popup-styly');
};
add_action( 'get_footer', 'prefix_add_footer_styles' );

add_action('wp_enqueue_scripts', 'enqueue_it_all_ap');

function popup($atts, $content = null) {
    $a = shortcode_atts( array(
        'value' => 'Nezávazná registrace',
        'class' =>  '',
        'btn-style' => "false",
        'atts' => '',
        'btn' => "true",
    ),
    $atts
  );

  $a['btn-style'] === "true" ? $class = 'popup-button-style' : $class = '';

  if ($a['btn'] === "false") {
    return "<div class='popup-background' id='popup-background'>"."</div>"
  ."<div class='popup-window' id='popup-window'>".do_shortcode($content)."<span class='cross' id='cross' style='background-image: url(".plugin_dir_url( __FILE__ )."gallery/cancel.svg)'></span>"."</div>";
  } else {
    return "<button ".$a['atts']." class='popup-button ".$class." ".$a['class']."' onClick='reply_click(this.id)' id='give-me-popup'>".$a['value']."</button>"
    ."<div class='popup-background' id='popup-background'>"."</div>"
    ."<div class='popup-window' id='popup-window'>".do_shortcode($content)."<span class='cross' id='cross' style='background-image: url(".plugin_dir_url( __FILE__ )."gallery/cancel.svg)'></span>"."</div>";
  }
}
add_shortcode( 'popup', 'popup' );
?>