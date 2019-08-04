<?php
/*
Plugin Name: Awesome Poop-up
Plugin URI:
Description: Easy way to create popup in wordpress with variable content.
Author: David Zoufalý
Author URI:
Version: 1.1
*/

function enqueue_it_all() {
  wp_register_style('popup-styly', plugin_dir_url( __FILE__ ) . 'css/awesome-popup-styles.css');
  wp_enqueue_style('popup-styly');

  wp_register_script('popup-scripty', plugin_dir_url( __FILE__ ) . 'js/awesome-popup-scripts.js', array(), '1.0.0', true);
  wp_enqueue_script('popup-scripty');
}

add_action('wp_enqueue_scripts', 'enqueue_it_all');

function popup($atts, $content = null) {
    $a = shortcode_atts( array(
        'value' => 'Nezávazná registrace',
        'class' =>  null
    ),

    $atts
  );
    return "<button class='popup-button ".$a['class']."' onClick='reply_click(this.id)' id='give-me-popup'>".$a['value']."</button>"
    ."<div class='popup-background' id='popup-background'>"."</div>"
    ."<div class='popup-window' id='popup-window'>".do_shortcode($content)."<img class='cross' id='cross' src='".plugin_dir_url( __FILE__ ).'gallery/cancel.svg'."'>"."</div>";
}

add_shortcode( 'popup', 'popup' );
?>