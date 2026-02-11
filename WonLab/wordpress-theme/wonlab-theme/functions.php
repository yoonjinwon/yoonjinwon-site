<?php

declare(strict_types=1);

function wonlab_setup(): void
{
    add_theme_support('title-tag');
}
add_action('after_setup_theme', 'wonlab_setup');

function wonlab_enqueue_assets(): void
{
    // Fonts.
    wp_enqueue_style(
        'wonlab-fonts',
        'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
        [],
        null
    );

    // Main site CSS (ported from the static site).
    wp_enqueue_style(
        'wonlab-site',
        get_stylesheet_directory_uri() . '/site.css',
        ['wonlab-fonts'],
        filemtime(get_stylesheet_directory() . '/site.css')
    );

    // Scripts (ported from the static site).
    wp_enqueue_script(
        'wonlab-media',
        get_stylesheet_directory_uri() . '/media.js',
        [],
        filemtime(get_stylesheet_directory() . '/media.js'),
        true
    );
    wp_enqueue_script(
        'wonlab-publications',
        get_stylesheet_directory_uri() . '/publications.js',
        [],
        filemtime(get_stylesheet_directory() . '/publications.js'),
        true
    );

    $base = trailingslashit(get_stylesheet_directory_uri());
    wp_localize_script('wonlab-media', 'WONLAB_THEME', ['baseUrl' => $base]);
    wp_localize_script('wonlab-publications', 'WONLAB_THEME', ['baseUrl' => $base]);
}
add_action('wp_enqueue_scripts', 'wonlab_enqueue_assets');

function wonlab_resource_hints(array $urls, string $relation_type): array
{
    if ($relation_type !== 'preconnect') {
        return $urls;
    }
    $urls[] = 'https://fonts.googleapis.com';
    $urls[] = ['href' => 'https://fonts.gstatic.com', 'crossorigin' => 'anonymous'];
    return $urls;
}
add_filter('wp_resource_hints', 'wonlab_resource_hints', 10, 2);
