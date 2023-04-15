<header class="banner flex justify-between items-center py-4">
  <div class="flex items-center">
    <a class="brand" href="{{ home_url('/') }}">
      @if ( function_exists( 'the_custom_logo' ) )
      {!! the_custom_logo() !!}
      @endif
    </a>
    @if (has_nav_menu('primary_navigation'))
    <nav class="nav-primary flex ml-4" aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}">
      {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav flex', 'echo' => false]) !!}
    </nav>
    @endif
  </div>
  <div class="header__button">
    <a href="#" class="button">Button</a>
  </div>

</header>