# Awesome popup
Popup / modal window wordpress plugin

## Installation
1. copy folder to /plugins directory in wordpress
2. activate plugin in WP administration -> installated plugins

## Functionality
- use shortcode [popup]Content here[/popup] anywhere in content area
- use <?php do_shortcode('[popup]Content here[/popup]') ?> in theme template
- you can use multiple shorcodes with different content in one page. 

### Shortcode atts
- value => text of button, that show modal window
- class => html class/es, that will load with button
- btn-style => yes / "" (if button should be prestyled, default value is "" => no)

### Example
[popup value="Registration" class="button button--blue"][contact form shortcode][/popup]
