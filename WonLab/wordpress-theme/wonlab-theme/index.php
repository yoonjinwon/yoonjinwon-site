<?php
get_header();
?>

<main class="container">
  <section class="section">
    <?php if (have_posts()) : ?>
      <?php while (have_posts()) : the_post(); ?>
        <h1><?php the_title(); ?></h1>
        <?php the_content(); ?>
      <?php endwhile; ?>
    <?php else : ?>
      <p>Nothing here yet.</p>
    <?php endif; ?>
  </section>
</main>

<?php
get_footer();

