// =============================================================================
// JS/ADMIN/X-CUSTOMIZER-CONTROLS.JS
// -----------------------------------------------------------------------------
// Show/hide Customizer controls as needed.
// =============================================================================

// =============================================================================
// TABLE OF CONTENTS
// -----------------------------------------------------------------------------
//   01. Preloader, Dynamic Font Weights, and Updating Message
//   02. Individual Sections
//       a. Stacks
//       b. Integrity
//       c. Renew
//       d. Icon
//       e. Ethos
//       f. Typography
//       g. Buttons
//       h. Header
//       i. Footer
//       j. Blog
//       k. Portfolio
//       l. WooCommerce
//   03. Informational Elements
// =============================================================================

// Preloader, Dynamic Font Weights, and Updating Message
// =============================================================================

jQuery(window).load(function() {

  jQuery('#x-customizer-preloader').delay(850).fadeOut('slow');

  function is_part_of_object( needle, object ) {
    for( var i in object ) {
      if ( object[i] === needle ) {
        return (true);
      }
    }
    return (false);
  }

  function loadVariants(selectField) {

    var _dataID         = selectField.data('customize-setting-link').replace(/family/, "weight");
    var _font           = jQuery('option:selected', selectField).val();
    var _customFont     = jQuery('select[data-customize-setting-link="x_body_font_family"] option:selected').val();
    var _variants       = _wpCustomizeSettings.settings['x_list_font_weights']['value'][_font];
    var _customVariants = _wpCustomizeSettings.settings['x_list_font_weights']['value'][_customFont];
    var _latoVariant    = _wpCustomizeSettings.settings['x_list_font_weights']['value']['Lato'];

    if (jQuery('input[data-customize-setting-link="x_custom_fonts"]').is(':checked')) {
      jQuery('input[name="_customize-radio-'+_dataID+'"]').each(function() {
        if ( !is_part_of_object(jQuery(this).val(), _variants) ) {
          jQuery(this).parent().hide();
        } else {
          jQuery(this).parent().show();
        }
      });
    } else {
      jQuery('input[name="_customize-radio-'+_dataID+'"]').each(function() {
        if ( !is_part_of_object(jQuery(this).val(), _latoVariant) ) {
          jQuery(this).parent().hide();
        } else {
          jQuery(this).parent().show();
        }
      });
    }
  }

  var checkedTrigger = jQuery('#customize-control-x_custom_fonts input');

  jQuery('select[data-customize-setting-link]').each(function() {
    loadVariants(jQuery(this));
  }).on('change', function() {
    loadVariants(jQuery(this));
  });

  if (!checkedTrigger.is(':checked')) {
    loadVariants(jQuery('select[data-customize-setting-link]'));
  }

  checkedTrigger.change( function() {
    if (checkedTrigger.is(':checked')) {
      loadVariants(jQuery('select[data-customize-setting-link]'));
    } else if (!checkedTrigger.is(':checked')) {
      loadVariants(jQuery('select[data-customize-setting-link]'));
    }
  });

});

jQuery(document).ready(function($) {

  var previewElem = $( '#customize-preview' );

  previewElem.prepend( '<div class="x-updating">Updating</div>' );

  setInterval( function() {
    var loadingElem = $( '#customize-preview .x-updating' );
    if ( previewElem.children( 'iframe' ).length > 1 ) {
      loadingElem.fadeIn( 'fast' );
    } else {
      loadingElem.fadeOut( 'fast' );
    }
  }, 1000 );

});



// Individual Sections
// =============================================================================

//
// Stacks.
//

jQuery(document).ready(function($) {

  var integrityTrigger = $( '#customize-control-x_stack input[value="integrity"]' );
  var integrityOptions = $( '#accordion-section-x_customizer_section_integrity' );

  var renewTrigger = $( '#customize-control-x_stack input[value="renew"]' );
  var renewOptions = $( '#accordion-section-x_customizer_section_renew' );

  var iconTrigger = $( '#customize-control-x_stack input[value="icon"]' );
  var iconOptions = $( '#accordion-section-x_customizer_section_icon' );

  var ethosTrigger = $( '#customize-control-x_stack input[value="ethos"]' );
  var ethosOptions = $( '#accordion-section-x_customizer_section_ethos' );

  var group = $( '#customize-control-x_stack input' );

  if ( integrityTrigger.is( ':checked' ) ) {
    integrityOptions.css( 'display', 'block' );
    renewOptions.css( 'display', 'none' );
    iconOptions.css( 'display', 'none' );
    ethosOptions.css( 'display', 'none' );
  }

  if ( renewTrigger.is( ':checked' ) ) {
    integrityOptions.css( 'display', 'none' );
    renewOptions.css( 'display', 'block' );
    iconOptions.css( 'display', 'none' );
    ethosOptions.css( 'display', 'none' );
  }

  if ( iconTrigger.is( ':checked' ) ) {
    integrityOptions.css( 'display', 'none' );
    renewOptions.css( 'display', 'none' );
    iconOptions.css( 'display', 'block' );
    ethosOptions.css( 'display', 'none' );
  }

  if ( ethosTrigger.is( ':checked' ) ) {
    integrityOptions.css( 'display', 'none' );
    renewOptions.css( 'display', 'none' );
    iconOptions.css( 'display', 'none' );
    ethosOptions.css( 'display', 'block' );
  }

  group.change( function() {
    if ( $(this).val() === 'integrity' ) {
      integrityOptions.css( 'display', 'block' );
      renewOptions.css( 'display', 'none' );
      iconOptions.css( 'display', 'none' );
      ethosOptions.css( 'display', 'none' );
    } else if ( $(this).val() === 'renew' ) {
      integrityOptions.css( 'display', 'none' );
      renewOptions.css( 'display', 'block' );
      iconOptions.css( 'display', 'none' );
      ethosOptions.css( 'display', 'none' );
    } else if ( $(this).val() === 'icon' ) {
      integrityOptions.css( 'display', 'none' );
      renewOptions.css( 'display', 'none' );
      iconOptions.css( 'display', 'block' );
      ethosOptions.css( 'display', 'none' );
    } else if ( $(this).val() === 'ethos' ) {
      integrityOptions.css( 'display', 'none' );
      renewOptions.css( 'display', 'none' );
      iconOptions.css( 'display', 'none' );
      ethosOptions.css( 'display', 'block' );
    }
  });

});


//
// Integrity.
//

jQuery(document).ready(function($) {

  var integrityLightTrigger = $( '#customize-control-x_integrity_design input[value="light"]' );
  var integrityLightOptions = [ '#customize-control-x_integrity_light_bg_color', '#customize-control-x_integrity_light_bg_image_pattern', '#customize-control-x_integrity_light_bg_image_full', '#customize-control-x_integrity_light_bg_image_full_fade' ];

  var integrityDarkTrigger = $( '#customize-control-x_integrity_design input[value="dark"]' );
  var integrityDarkOptions = [ '#customize-control-x_integrity_dark_bg_color', '#customize-control-x_integrity_dark_bg_image_pattern', '#customize-control-x_integrity_dark_bg_image_full', '#customize-control-x_integrity_dark_bg_image_full_fade' ];

  var integrityBlogHeaderTrigger = $( '#customize-control-x_integrity_blog_header_enable input' );
  var integrityBlogHeaderOptions = [ '#customize-control-x_integrity_blog_title', '#customize-control-x_integrity_blog_subtitle' ];

  var integrityShopHeaderTrigger = $( '#customize-control-x_integrity_shop_header_enable input' );
  var integrityShopHeaderOptions = [ '#customize-control-x_integrity_shop_title', '#customize-control-x_integrity_shop_subtitle' ];

  var group = $( '#customize-control-x_integrity_design input' );

  if ( integrityLightTrigger.is( ':checked' ) ) {
    for ( i = 0; i < integrityDarkOptions.length; i++ ) {
      $( integrityDarkOptions[i] ).css( 'display', 'none' );
    }
  }

  if ( integrityDarkTrigger.is( ':checked' ) ) {
    for ( i = 0; i < integrityLightOptions.length; i++ ) {
      $( integrityLightOptions[i] ).css( 'display', 'none' );
    }
  }

  if ( ! integrityBlogHeaderTrigger.is( ':checked' ) ) {
    for ( i = 0; i < integrityBlogHeaderOptions.length; i++ ) {
      $( integrityBlogHeaderOptions[i] ).css( 'display', 'none' );
    }
  }

  if ( ! integrityShopHeaderTrigger.is( ':checked' ) ) {
    for ( i = 0; i < integrityShopHeaderOptions.length; i++ ) {
      $( integrityShopHeaderOptions[i] ).css( 'display', 'none' );
    }
  }

  group.change( function() {
    if ( $(this).val() === 'light' ) {
      for ( i = 0; i < integrityLightOptions.length; i++ ) {
        $( integrityLightOptions[i] ).css( 'display', 'block' );
        $( integrityDarkOptions[i] ).css( 'display', 'none' );
      }
    } else if ( $(this).val() === 'dark' ) {
      for ( i = 0; i < integrityDarkOptions.length; i++ ) {
        $( integrityLightOptions[i] ).css( 'display', 'none' );
        $( integrityDarkOptions[i] ).css( 'display', 'block' );
      }
    }
  });

  integrityBlogHeaderTrigger.change( function() {
    if ( integrityBlogHeaderTrigger.is( ':checked' ) ) {
      for ( i = 0; i < integrityBlogHeaderOptions.length; i++ ) {
        $( integrityBlogHeaderOptions[i] ).css( 'display', 'block' );
      }
    } else {
      for ( i = 0; i < integrityBlogHeaderOptions.length; i++ ) {
        $( integrityBlogHeaderOptions[i] ).css( 'display', 'none' );
      }
    }
  });

  integrityShopHeaderTrigger.change( function() {
    if ( integrityShopHeaderTrigger.is( ':checked' ) ) {
      for ( i = 0; i < integrityShopHeaderOptions.length; i++ ) {
        $( integrityShopHeaderOptions[i] ).css( 'display', 'block' );
      }
    } else {
      for ( i = 0; i < integrityShopHeaderOptions.length; i++ ) {
        $( integrityShopHeaderOptions[i] ).css( 'display', 'none' );
      }
    }
  });

});


//
// Renew.
//

jQuery(document).ready(function($) {

  var renewTopbarTrigger = $('#customize-control-x_topbar_display input');
  var renewTopbarOptions = [ '#customize-control-x_renew_topbar_text_color', '#customize-control-x_renew_topbar_link_color_hover', '#customize-control-x_renew_topbar_background' ];

  var renewLogobarTrigger = $('#customize-control-x_logo_navigation_layout input[value="inline"]');
  var renewLogobarOptions = [ '#customize-control-x_renew_logobar_background' ];

  var renewEntryIconTrigger = $('#customize-control-x_renew_entry_icon_position input[value="creative"]');
  var renewEntryIconOptions = [ '#customize-control-x_renew_entry_icon_position_horizontal', '#customize-control-x_renew_entry_icon_position_vertical' ];

  var groupLogobarTrigger    = $('#customize-control-x_logo_navigation_layout input');
  var groupEntryIconPosition = $('#customize-control-x_renew_entry_icon_position input');

  if (!renewTopbarTrigger.is(':checked')) {
    for (i = 0; i < renewTopbarOptions.length; i++) {
      $(renewTopbarOptions[i]).css('display', 'none');
    }
  }

  if (renewLogobarTrigger.is(':checked')) {
    for (i = 0; i < renewLogobarOptions.length; i++) {
      $(renewLogobarOptions[i]).css('display', 'none');
    }
  }

  if (!renewEntryIconTrigger.is(':checked')) {
    for (i = 0; i < renewEntryIconOptions.length; i++) {
      $(renewEntryIconOptions[i]).css('display', 'none');
    }
  }

  renewTopbarTrigger.change( function() {
    if ($(this).is(':checked')) {
      for (i = 0; i < renewTopbarOptions.length; i++) {
        $(renewTopbarOptions[i]).css('display', 'block');
      }
    } else if (!$(this).is(':checked')) {
      for (i = 0; i < renewTopbarOptions.length; i++) {
        $(renewTopbarOptions[i]).css('display', 'none');
      }
    }
  });

  groupLogobarTrigger.change( function() {
    if ($(this).val() === 'stacked') {
      for (i = 0; i < renewLogobarOptions.length; i++) {
        $(renewLogobarOptions[i]).css('display', 'block');
      }
    } else if ($(this).val() === 'inline') {
      for (i = 0; i < renewLogobarOptions.length; i++) {
        $(renewLogobarOptions[i]).css('display', 'none');
      }
    }
  });

  groupEntryIconPosition.change( function() {
    if ($(this).val() === 'creative') {
      for (i = 0; i < renewEntryIconOptions.length; i++) {
        $(renewEntryIconOptions[i]).css('display', 'block');
      }
    } else if ($(this).val() === 'standard') {
      for (i = 0; i < renewEntryIconOptions.length; i++) {
        $(renewEntryIconOptions[i]).css('display', 'none');
      }
    }
  });

});


//
// Icon.
//

jQuery(document).ready(function($) {

  var typeTrigger1 = $('#customize-control-x_icon_post_standard_colors_enable input');
  var typeTrigger2 = $('#customize-control-x_icon_post_image_colors_enable input');
  var typeTrigger3 = $('#customize-control-x_icon_post_gallery_colors_enable input');
  var typeTrigger4 = $('#customize-control-x_icon_post_video_colors_enable input');
  var typeTrigger5 = $('#customize-control-x_icon_post_audio_colors_enable input');
  var typeTrigger6 = $('#customize-control-x_icon_post_quote_colors_enable input');
  var typeTrigger7 = $('#customize-control-x_icon_post_link_colors_enable input');

  var typeOption1  = $('#customize-control-x_icon_post_standard_color');
  var typeOption2  = $('#customize-control-x_icon_post_standard_background');
  var typeOption3  = $('#customize-control-x_icon_post_image_color');
  var typeOption4  = $('#customize-control-x_icon_post_image_background');
  var typeOption5  = $('#customize-control-x_icon_post_gallery_color');
  var typeOption6  = $('#customize-control-x_icon_post_gallery_background');
  var typeOption7  = $('#customize-control-x_icon_post_video_color');
  var typeOption8  = $('#customize-control-x_icon_post_video_background');
  var typeOption9  = $('#customize-control-x_icon_post_audio_color');
  var typeOption10 = $('#customize-control-x_icon_post_audio_background');
  var typeOption11 = $('#customize-control-x_icon_post_quote_color');
  var typeOption12 = $('#customize-control-x_icon_post_quote_background');
  var typeOption13 = $('#customize-control-x_icon_post_link_color');
  var typeOption14 = $('#customize-control-x_icon_post_link_background');

  if (!typeTrigger1.is(':checked')) {
    typeOption1.css('display', 'none');
    typeOption2.css('display', 'none');
  }

  if (!typeTrigger2.is(':checked')) {
    typeOption3.css('display', 'none');
    typeOption4.css('display', 'none');
  }

  if (!typeTrigger3.is(':checked')) {
    typeOption5.css('display', 'none');
    typeOption6.css('display', 'none');
  }

  if (!typeTrigger4.is(':checked')) {
    typeOption7.css('display', 'none');
    typeOption8.css('display', 'none');
  }

  if (!typeTrigger5.is(':checked')) {
    typeOption9.css('display', 'none');
    typeOption10.css('display', 'none');
  }

  if (!typeTrigger6.is(':checked')) {
    typeOption11.css('display', 'none');
    typeOption12.css('display', 'none');
  }

  if (!typeTrigger7.is(':checked')) {
    typeOption13.css('display', 'none');
    typeOption14.css('display', 'none');
  }

  typeTrigger1.change( function() {
    if (typeTrigger1.is(':checked')) {
      typeOption1.css('display', 'block');
      typeOption2.css('display', 'block');
    } else {
      typeOption1.css('display', 'none');
      typeOption2.css('display', 'none');
    }
  });

  typeTrigger2.change( function() {
    if (typeTrigger2.is(':checked')) {
      typeOption3.css('display', 'block');
      typeOption4.css('display', 'block');
    } else {
      typeOption3.css('display', 'none');
      typeOption4.css('display', 'none');
    }
  });

  typeTrigger3.change( function() {
    if (typeTrigger3.is(':checked')) {
      typeOption5.css('display', 'block');
      typeOption6.css('display', 'block');
    } else {
      typeOption5.css('display', 'none');
      typeOption6.css('display', 'none');
    }
  });

  typeTrigger4.change( function() {
    if (typeTrigger4.is(':checked')) {
      typeOption7.css('display', 'block');
      typeOption8.css('display', 'block');
    } else {
      typeOption7.css('display', 'none');
      typeOption8.css('display', 'none');
    }
  });

  typeTrigger5.change( function() {
    if (typeTrigger5.is(':checked')) {
      typeOption9.css('display', 'block');
      typeOption10.css('display', 'block');
    } else {
      typeOption9.css('display', 'none');
      typeOption10.css('display', 'none');
    }
  });

  typeTrigger6.change( function() {
    if (typeTrigger6.is(':checked')) {
      typeOption11.css('display', 'block');
      typeOption12.css('display', 'block');
    } else {
      typeOption11.css('display', 'none');
      typeOption12.css('display', 'none');
    }
  });

  typeTrigger7.change( function() {
    if (typeTrigger7.is(':checked')) {
      typeOption13.css('display', 'block');
      typeOption14.css('display', 'block');
    } else {
      typeOption13.css('display', 'none');
      typeOption14.css('display', 'none');
    }
  });

});


//
// Ethos.
//

jQuery(document).ready(function($) {

  var ethosPostCarouselTrigger1      = $('#customize-control-x_ethos_post_carousel_enable input');
  var ethosPostCarouselTrigger2      = $('#customize-control-x_ethos_post_carousel_display input[value="featured"]');
  var ethosPostCarouselTrigger2Group = $('#customize-control-x_ethos_post_carousel_display input');
  var ethosPostCarouselOptions       = [ '#customize-control-x_ethos_post_carousel_count', '#customize-control-x_ethos_post_carousel_display', '#customize-control-x_ethos_post_carousel_featured', '#customize-control-x_ethos_sub_title_post_carousel_screen_display_options', '#customize-control-x_ethos_description_post_carousel_screen_display_options', '#customize-control-x_ethos_post_carousel_display_count_extra_large', '#customize-control-x_ethos_post_carousel_display_count_large', '#customize-control-x_ethos_post_carousel_display_count_medium', '#customize-control-x_ethos_post_carousel_display_count_small', '#customize-control-x_ethos_post_carousel_display_count_extra_small' ];

  var ethosPostSliderBlogTrigger1      = $('#customize-control-x_ethos_post_slider_blog_enable input');
  var ethosPostSliderBlogTrigger2      = $('#customize-control-x_ethos_post_slider_blog_display input[value="featured"]');
  var ethosPostSliderBlogTrigger2Group = $('#customize-control-x_ethos_post_slider_blog_display input');
  var ethosPostSliderBlogOptions       = [ '#customize-control-x_ethos_post_slider_blog_height', '#customize-control-x_ethos_post_slider_blog_count', '#customize-control-x_ethos_post_slider_blog_display', '#customize-control-x_ethos_post_slider_blog_featured' ];

  var ethosPostSliderArchiveTrigger1      = $('#customize-control-x_ethos_post_slider_archive_enable input');
  var ethosPostSliderArchiveTrigger2      = $('#customize-control-x_ethos_post_slider_archive_display input[value="featured"]');
  var ethosPostSliderArchiveTrigger2Group = $('#customize-control-x_ethos_post_slider_archive_display input');
  var ethosPostSliderArchiveOptions       = [ '#customize-control-x_ethos_post_slider_archive_height', '#customize-control-x_ethos_post_slider_archive_count', '#customize-control-x_ethos_post_slider_archive_display', '#customize-control-x_ethos_post_slider_archive_featured' ];

  var ethosFilterableIndexTrigger = $('#customize-control-x_ethos_filterable_index_enable input');
  var ethosFilterableIndexOptions = [ '#customize-control-x_ethos_filterable_index_categories' ];


  //
  // Post carousel.
  //

  if (!ethosPostCarouselTrigger1.is(':checked')) {
    for (i = 0; i < ethosPostCarouselOptions.length; i++) {
      $(ethosPostCarouselOptions[i]).css('display', 'none');
    }
  } else if (ethosPostCarouselTrigger1.is(':checked') && !ethosPostCarouselTrigger2.is(':checked')) {
    $(ethosPostCarouselOptions[2]).css('display', 'none');
  }

  ethosPostCarouselTrigger1.change( function() {
    if ($(this).is(':checked') && !ethosPostCarouselTrigger2.is(':checked')) {
      for (i = 0; i < ethosPostCarouselOptions.length; i++) {
        if (i !== 2) {
          $(ethosPostCarouselOptions[i]).css('display', 'block');
        }
      }
    } else if ($(this).is(':checked') && ethosPostCarouselTrigger2.is(':checked')) {
      for (i = 0; i < ethosPostCarouselOptions.length; i++) {
        $(ethosPostCarouselOptions[i]).css('display', 'block');
      }
    } else if (!$(this).is(':checked')) {
      for (i = 0; i < ethosPostCarouselOptions.length; i++) {
        $(ethosPostCarouselOptions[i]).css('display', 'none');
      }
    }
  });

  ethosPostCarouselTrigger2Group.change( function() {
    if ($(this).val() === 'featured') {
      $(ethosPostCarouselOptions[2]).css('display', 'block');
    } else if ($(this).val() !== 'featured') {
      $(ethosPostCarouselOptions[2]).css('display', 'none');
    }
  });


  //
  // Post slider - blog.
  //

  if (!ethosPostSliderBlogTrigger1.is(':checked')) {
    for (i = 0; i < ethosPostSliderBlogOptions.length; i++) {
      $(ethosPostSliderBlogOptions[i]).css('display', 'none');
    }
  } else if (ethosPostSliderBlogTrigger1.is(':checked') && !ethosPostSliderBlogTrigger2.is(':checked')) {
    $(ethosPostSliderBlogOptions[3]).css('display', 'none');
  }

  ethosPostSliderBlogTrigger1.change( function() {
    if ($(this).is(':checked') && !ethosPostSliderBlogTrigger2.is(':checked')) {
      for (i = 0; i < ethosPostSliderBlogOptions.length; i++) {
        if (i !== 3) {
          $(ethosPostSliderBlogOptions[i]).css('display', 'block');
        }
      }
    } else if ($(this).is(':checked') && ethosPostSliderBlogTrigger2.is(':checked')) {
      for (i = 0; i < ethosPostSliderBlogOptions.length; i++) {
        $(ethosPostSliderBlogOptions[i]).css('display', 'block');
      }
    } else if (!$(this).is(':checked')) {
      for (i = 0; i < ethosPostSliderBlogOptions.length; i++) {
        $(ethosPostSliderBlogOptions[i]).css('display', 'none');
      }
    }
  });

  ethosPostSliderBlogTrigger2Group.change( function() {
    if ($(this).val() === 'featured') {
      $(ethosPostSliderBlogOptions[3]).css('display', 'block');
    } else if ($(this).val() !== 'featured') {
      $(ethosPostSliderBlogOptions[3]).css('display', 'none');
    }
  });


  //
  // Post slider - archive.
  //

  if (!ethosPostSliderArchiveTrigger1.is(':checked')) {
    for (i = 0; i < ethosPostSliderArchiveOptions.length; i++) {
      $(ethosPostSliderArchiveOptions[i]).css('display', 'none');
    }
  } else if (ethosPostSliderArchiveTrigger1.is(':checked') && !ethosPostSliderArchiveTrigger2.is(':checked')) {
    $(ethosPostSliderArchiveOptions[3]).css('display', 'none');
  }

  ethosPostSliderArchiveTrigger1.change( function() {
    if ($(this).is(':checked') && !ethosPostSliderArchiveTrigger2.is(':checked')) {
      for (i = 0; i < ethosPostSliderArchiveOptions.length; i++) {
        if (i !== 3) {
          $(ethosPostSliderArchiveOptions[i]).css('display', 'block');
        }
      }
    } else if ($(this).is(':checked') && ethosPostSliderArchiveTrigger2.is(':checked')) {
      for (i = 0; i < ethosPostSliderArchiveOptions.length; i++) {
        $(ethosPostSliderArchiveOptions[i]).css('display', 'block');
      }
    } else if (!$(this).is(':checked')) {
      for (i = 0; i < ethosPostSliderArchiveOptions.length; i++) {
        $(ethosPostSliderArchiveOptions[i]).css('display', 'none');
      }
    }
  });

  ethosPostSliderArchiveTrigger2Group.change( function() {
    if ($(this).val() === 'featured') {
      $(ethosPostSliderArchiveOptions[3]).css('display', 'block');
    } else if ($(this).val() !== 'featured') {
      $(ethosPostSliderArchiveOptions[3]).css('display', 'none');
    }
  });


  //
  // Filterable index.
  //

  if (!ethosFilterableIndexTrigger.is(':checked')) {
    for (i = 0; i < ethosFilterableIndexOptions.length; i++) {
      $(ethosFilterableIndexOptions[i]).css('display', 'none');
    }
  }

  ethosFilterableIndexTrigger.change( function() {
    if ($(this).is(':checked')) {
      for (i = 0; i < ethosFilterableIndexOptions.length; i++) {
        $(ethosFilterableIndexOptions[i]).css('display', 'block');
      }
    } else if (!$(this).is(':checked')) {
      for (i = 0; i < ethosFilterableIndexOptions.length; i++) {
        $(ethosFilterableIndexOptions[i]).css('display', 'none');
      }
    }
  });

});


//
// Typography.
//

jQuery(document).ready(function($) {

  var typeTrigger1 = $('#customize-control-x_custom_fonts input');
  var typeTrigger2 = $('#customize-control-x_custom_font_subsets input');
  var typeTrigger3 = $('#customize-control-x_logo_font_color_enable input');
  var typeTrigger4 = $('#customize-control-x_headings_font_color_enable input');
  var typeTrigger5 = $('#customize-control-x_body_font_color_enable input');

  var typeOption1  = $('#customize-control-x_logo_font_family');
  var typeOption2  = $('#customize-control-x_navbar_font_family');
  var typeOption3  = $('#customize-control-x_headings_font_family');
  var typeOption4  = $('#customize-control-x_body_font_family');
  var typeOption5  = $('#customize-control-x_custom_font_subset_cyrillic');
  var typeOption6  = $('#customize-control-x_custom_font_subset_greek');
  var typeOption7  = $('#customize-control-x_custom_font_subset_vietnamese');
  var typeOption8  = $('#customize-control-x_logo_font_color');
  var typeOption9  = $('#customize-control-x_headings_font_color');
  var typeOption10 = $('#customize-control-x_body_font_color');

  if (!typeTrigger1.is(':checked')) {
    typeOption1.css('display', 'none');
    typeOption2.css('display', 'none');
    typeOption3.css('display', 'none');
    typeOption4.css('display', 'none');
  }

  if (!typeTrigger2.is(':checked')) {
    typeOption5.css('display', 'none');
    typeOption6.css('display', 'none');
    typeOption7.css('display', 'none');
  }

  if (!typeTrigger3.is(':checked')) {
    typeOption8.css('display', 'none');
  }

  if (!typeTrigger4.is(':checked')) {
    typeOption9.css('display', 'none');
  }

  if (!typeTrigger5.is(':checked')) {
    typeOption10.css('display', 'none');
  }

  typeTrigger1.change( function() {
    if (typeTrigger1.is(':checked')) {
      typeOption1.css('display', 'block');
      typeOption2.css('display', 'block');
      typeOption3.css('display', 'block');
      typeOption4.css('display', 'block');
    } else if (!typeTrigger1.is(':checked')) {
      typeOption1.css('display', 'none');
      typeOption2.css('display', 'none');
      typeOption3.css('display', 'none');
      typeOption4.css('display', 'none');
    }
  });

  typeTrigger2.change( function() {
    if (typeTrigger2.is(':checked')) {
      typeOption5.css('display', 'block');
      typeOption6.css('display', 'block');
      typeOption7.css('display', 'block');
    } else if (!typeTrigger2.is(':checked')) {
      typeOption5.css('display', 'none');
      typeOption6.css('display', 'none');
      typeOption7.css('display', 'none');
    }
  });

  typeTrigger3.change( function() {
    if (typeTrigger3.is(':checked')) {
      typeOption8.css('display', 'block');
    } else {
      typeOption8.css('display', 'none');
    }
  });

  typeTrigger4.change( function() {
    if (typeTrigger4.is(':checked')) {
      typeOption9.css('display', 'block');
    } else {
      typeOption9.css('display', 'none');
    }
  });

  typeTrigger5.change( function() {
    if (typeTrigger5.is(':checked')) {
      typeOption10.css('display', 'block');
    } else {
      typeOption10.css('display', 'none');
    }
  });

});


//
// Buttons.
//

jQuery(document).ready(function($) {

  var btnTrigger1 = $('#customize-control-x_button_style input[value="real"]');
  var btnTrigger2 = $('#customize-control-x_button_style input[value="flat"]');
  var btnTrigger3 = $('#customize-control-x_button_style input[value="transparent"]');

  var btnOption1 = $('#customize-control-x_button_background_color');
  var btnOption2 = $('#customize-control-x_button_background_color_hover');
  var btnOption3 = $('#customize-control-x_button_bottom_color');
  var btnOption4 = $('#customize-control-x_button_bottom_color_hover');

  var group = $('#customize-control-x_button_style input');

  if (btnTrigger1.is(':checked')) {
    btnOption1.css('display', 'block');
    btnOption2.css('display', 'block');
    btnOption3.css('display', 'block');
    btnOption4.css('display', 'block');
  }

  if (btnTrigger2.is(':checked')) {
    btnOption1.css('display', 'block');
    btnOption2.css('display', 'block');
    btnOption3.css('display', 'none');
    btnOption4.css('display', 'none');
  }

  if (btnTrigger3.is(':checked')) {
    btnOption1.css('display', 'none');
    btnOption2.css('display', 'none');
    btnOption3.css('display', 'none');
    btnOption4.css('display', 'none');
  }

  group.change( function() {
    if ($(this).val() === 'real') {
      btnOption1.css('display', 'block');
      btnOption2.css('display', 'block');
      btnOption3.css('display', 'block');
      btnOption4.css('display', 'block');
    } else if ($(this).val() === 'flat') {
      btnOption1.css('display', 'block');
      btnOption2.css('display', 'block');
      btnOption3.css('display', 'none');
      btnOption4.css('display', 'none');
    } else if ($(this).val() === 'transparent') {
      btnOption1.css('display', 'none');
      btnOption2.css('display', 'none');
      btnOption3.css('display', 'none');
      btnOption4.css('display', 'none');
    }
  });

});


//
// Header.
//

jQuery(document).ready(function($) {

  var navbarTopTrigger1 = $('#customize-control-x_navbar_positioning input[value="static-top"]');
  var navbarTopTrigger2 = $('#customize-control-x_navbar_positioning input[value="fixed-top"]');
  var navbarTopOption1  = $('#customize-control-x_navbar_height');
  var navbarTopOption2  = $('#customize-control-x_logo_adjust_navbar_top');
  var navbarTopOption3  = $('#customize-control-x_navbar_adjust_links_top');

  var navbarSideTrigger1 = $('#customize-control-x_navbar_positioning input[value="fixed-left"]');
  var navbarSideTrigger2 = $('#customize-control-x_navbar_positioning input[value="fixed-right"]');
  var navbarSideOption1  = $('#customize-control-x_navbar_width');
  var navbarSideOption2  = $('#customize-control-x_logo_adjust_navbar_side');
  var navbarSideOption3  = $('#customize-control-x_navbar_adjust_links_side');

  var mastheadLayoutTrigger = $('#customize-control-x_logo_navigation_layout input[value="inline"]');
  var mastheadLayoutOption1 = $('#customize-control-x_logobar_adjust_spacing_top');
  var mastheadLayoutOption2 = $('#customize-control-x_logobar_adjust_spacing_bottom');

  var widgetbarTrigger = $('#customize-control-x_header_widget_areas input[value="0"]');
  var widgetbarOption1 = $('#customize-control-x_widgetbar_button_background');
  var widgetbarOption2 = $('#customize-control-x_widgetbar_button_background_hover');

  var topbarTrigger = $('#customize-control-x_topbar_display input');
  var topbarOption1 = $('#customize-control-x_topbar_content');

  var groupNavbarPosition    = $('#customize-control-x_navbar_positioning input');
  var groupMastheadLayout    = $('#customize-control-x_logo_navigation_layout input');
  var groupHeaderWidgetAreas = $('#customize-control-x_header_widget_areas input');

  if (navbarTopTrigger1.is(':checked') || navbarTopTrigger2.is(':checked')) {
    navbarTopOption1.css('display', 'block');
    navbarTopOption2.css('display', 'block');
    navbarTopOption3.css('display', 'block');
    navbarSideOption1.css('display', 'none');
    navbarSideOption2.css('display', 'none');
    navbarSideOption3.css('display', 'none');
  }

  if (navbarSideTrigger1.is(':checked') || navbarSideTrigger2.is(':checked')) {
    navbarTopOption1.css('display', 'block');
    navbarTopOption2.css('display', 'block');
    navbarTopOption3.css('display', 'block');
    navbarSideOption1.css('display', 'block');
    navbarSideOption2.css('display', 'block');
    navbarSideOption3.css('display', 'block');
  }

  if (mastheadLayoutTrigger.is(':checked')) {
    mastheadLayoutOption1.css('display', 'none');
    mastheadLayoutOption2.css('display', 'none');
  }

  if (widgetbarTrigger.is(':checked')) {
    widgetbarOption1.css('display', 'none');
    widgetbarOption2.css('display', 'none');
  }

  if (!topbarTrigger.is(':checked')) {
    topbarOption1.css('display', 'none');
  }

  groupNavbarPosition.change( function() {
    if ($(this).val() === 'static-top' || $(this).val() === 'fixed-top') {
      navbarTopOption1.css('display', 'block');
      navbarTopOption2.css('display', 'block');
      navbarTopOption3.css('display', 'block');
      navbarSideOption1.css('display', 'none');
      navbarSideOption2.css('display', 'none');
      navbarSideOption3.css('display', 'none');
    } else if ($(this).val() === 'fixed-left' || $(this).val() === 'fixed-right') {
      navbarTopOption1.css('display', 'block');
      navbarTopOption2.css('display', 'block');
      navbarTopOption3.css('display', 'block');
      navbarSideOption1.css('display', 'block');
      navbarSideOption2.css('display', 'block');
      navbarSideOption3.css('display', 'block');
    }
  });

  groupMastheadLayout.change( function() {
    if ($(this).val() === 'inline') {
      mastheadLayoutOption1.css('display', 'none');
      mastheadLayoutOption2.css('display', 'none');
    } else {
      mastheadLayoutOption1.css('display', 'block');
      mastheadLayoutOption2.css('display', 'block');
    }
  });

  groupHeaderWidgetAreas.change( function() {
    if ($(this).val() === '0') {
      widgetbarOption1.css('display', 'none');
      widgetbarOption2.css('display', 'none');
    } else {
      widgetbarOption1.css('display', 'block');
      widgetbarOption2.css('display', 'block');
    }
  });

  topbarTrigger.change( function() {
    if (topbarTrigger.is(':checked')) {
      topbarOption1.css('display', 'block');
    } else {
      topbarOption1.css('display', 'none');
    }
  });

});


//
// Footer.
//

jQuery(document).ready(function($) {

  var footerTrigger1 = $('#customize-control-x_footer_bottom_display input');
  var footerTrigger2 = $('#customize-control-x_footer_content_display input');
  var footerTrigger3 = $('#customize-control-x_footer_content_dock_display input');
  var footerTrigger4 = $('#customize-control-x_footer_scroll_top_display input');

  var footerOption1  = $('#customize-control-x_footer_menu_display');
  var footerOption2  = $('#customize-control-x_footer_social_display');
  var footerOption3  = $('#customize-control-x_footer_content_display');
  var footerOption4  = $('#customize-control-x_footer_content');
  var footerOption5  = $('#customize-control-x_footer_content_dock_position');
  var footerOption6  = $('#customize-control-x_footer_content_dock_width');
  var footerOption7  = $('#customize-control-x_footer_content_dock_display_unit');
  var footerOption8  = $('#customize-control-x_footer_content_dock_include_pages');
  var footerOption9  = $('#customize-control-x_footer_content_dock_include_posts');
  var footerOption10 = $('#customize-control-x_footer_scroll_top_position');
  var footerOption11 = $('#customize-control-x_footer_scroll_top_display_unit');

  if (!footerTrigger1.is(':checked')) {
    footerOption1.css('display', 'none');
    footerOption2.css('display', 'none');
    footerOption3.css('display', 'none');
    footerOption4.css('display', 'none');
  }

  if (!footerTrigger2.is(':checked')) {
    footerOption4.css('display', 'none');
  }

  if (!footerTrigger3.is(':checked')) {
    footerOption5.css('display', 'none');
    footerOption6.css('display', 'none');
    footerOption7.css('display', 'none');
    footerOption8.css('display', 'none');
    footerOption9.css('display', 'none');
  }

  if (!footerTrigger4.is(':checked')) {
    footerOption10.css('display', 'none');
    footerOption11.css('display', 'none');
  }

  footerTrigger1.change( function() {
    if (footerTrigger1.is(':checked') && footerTrigger2.is(':checked')) {
      footerOption1.css('display', 'block');
      footerOption2.css('display', 'block');
      footerOption3.css('display', 'block');
      footerOption4.css('display', 'block');
    } else if (footerTrigger1.is(':checked')) {
      footerOption1.css('display', 'block');
      footerOption2.css('display', 'block');
      footerOption3.css('display', 'block');
    } else {
      footerOption1.css('display', 'none');
      footerOption2.css('display', 'none');
      footerOption3.css('display', 'none');
      footerOption4.css('display', 'none');
    }
  });

  footerTrigger2.change( function() {
    if (footerTrigger2.is(':checked')) {
      footerOption4.css('display', 'block');
    } else {
      footerOption4.css('display', 'none');
    }
  });

  footerTrigger3.change( function() {
    if (footerTrigger3.is(':checked')) {
      footerOption5.css('display', 'block');
      footerOption6.css('display', 'block');
      footerOption7.css('display', 'block');
      footerOption8.css('display', 'block');
      footerOption9.css('display', 'block');
    } else {
      footerOption5.css('display', 'none');
      footerOption6.css('display', 'none');
      footerOption7.css('display', 'none');
      footerOption8.css('display', 'none');
      footerOption9.css('display', 'none');
    }
  });

  footerTrigger4.change( function() {
    if (footerTrigger4.is(':checked')) {
      footerOption10.css('display', 'block');
      footerOption11.css('display', 'block');
    } else {
      footerOption10.css('display', 'none');
      footerOption11.css('display', 'none');
    }
  });

});


//
// Blog.
//

jQuery(document).ready(function($) {

  var blogTrigger1 = $('#customize-control-x_blog_style input[value="standard"]');
  var blogTrigger2 = $('#customize-control-x_archive_style input[value="standard"]');
  var blogTrigger3 = $('#customize-control-x_blog_enable_full_post_content input');

  var blogOption1  = $('#customize-control-x_blog_masonry_columns');
  var blogOption2  = $('#customize-control-x_archive_masonry_columns');
  var blogOption3  = $('#customize-control-x_blog_excerpt_length');

  var group1 = $('#customize-control-x_blog_style input');
  var group2 = $('#customize-control-x_archive_style input');

  if (blogTrigger1.is(':checked')) {
    blogOption1.css('display', 'none');
  }

  if (blogTrigger2.is(':checked')) {
    blogOption2.css('display', 'none');
  }

  if (blogTrigger3.is(':checked')) {
    blogOption3.css('display', 'none');
  }

  blogTrigger3.change( function() {
    if (blogTrigger3.is(':checked')) {
      blogOption3.css('display', 'none');
    } else {
      blogOption3.css('display', 'block');
    }
  });

  group1.change( function() {
    if ($(this).val() === 'standard') {
      blogOption1.css('display', 'none');
    } else if ($(this).val() === 'masonry') {
      blogOption1.css('display', 'block');
    }
  });

  group2.change( function() {
    if ($(this).val() === 'standard') {
      blogOption2.css('display', 'none');
    } else if ($(this).val() === 'masonry') {
      blogOption2.css('display', 'block');
    }
  });

});


//
// Portfolio.
//

jQuery(document).ready(function($) {

  var triggerEthos = $('#customize-control-x_stack input[value="ethos"]');
  var triggerGroup = $('#customize-control-x_stack input');
  var option       = $('#customize-control-x_portfolio_enable_cropped_thumbs');

  if (triggerEthos.is(':checked')) {
    option.css('display', 'none');
  }

  triggerGroup.change( function() {
    if ($(this).val() === 'ethos') {
      option.css('display', 'none');
    } else {
      option.css('display', 'block');
    }
  });

});


//
// WooCommerce.
//

jQuery(document).ready(function($) {

  var wooTrigger1 = $('#customize-control-x_woocommerce_product_tabs_enable input');
  var wooTrigger2 = $('#customize-control-x_woocommerce_product_related_enable input');
  var wooTrigger3 = $('#customize-control-x_woocommerce_product_upsells_enable input');
  var wooTrigger4 = $('#customize-control-x_woocommerce_cart_cross_sells_enable input');

  var wooOption1 = $('#customize-control-x_woocommerce_product_tab_description_enable');
  var wooOption2 = $('#customize-control-x_woocommerce_product_tab_additional_info_enable');
  var wooOption3 = $('#customize-control-x_woocommerce_product_tab_reviews_enable');
  var wooOption4 = $('#customize-control-x_woocommerce_product_related_columns');
  var wooOption5 = $('#customize-control-x_woocommerce_product_related_count');
  var wooOption6 = $('#customize-control-x_woocommerce_product_upsell_columns');
  var wooOption7 = $('#customize-control-x_woocommerce_product_upsell_count');
  var wooOption8 = $('#customize-control-x_woocommerce_cart_cross_sells_columns');
  var wooOption9 = $('#customize-control-x_woocommerce_cart_cross_sells_count');

  var group = $('#customize-control-x_button_style input');

  if (!wooTrigger1.is(':checked')) {
    wooOption1.css('display', 'none');
    wooOption2.css('display', 'none');
    wooOption3.css('display', 'none');
  }

  if (!wooTrigger2.is(':checked')) {
    wooOption4.css('display', 'none');
    wooOption5.css('display', 'none');
  }

  if (!wooTrigger3.is(':checked')) {
    wooOption6.css('display', 'none');
    wooOption7.css('display', 'none');
  }

  if (!wooTrigger4.is(':checked')) {
    wooOption8.css('display', 'none');
    wooOption9.css('display', 'none');
  }

  wooTrigger1.change( function() {
    if (wooTrigger1.is(':checked')) {
      wooOption1.css('display', 'block');
      wooOption2.css('display', 'block');
      wooOption3.css('display', 'block');
    } else {
      wooOption1.css('display', 'none');
      wooOption2.css('display', 'none');
      wooOption3.css('display', 'none');
    }
  });

  wooTrigger2.change( function() {
    if (wooTrigger2.is(':checked')) {
      wooOption4.css('display', 'block');
      wooOption5.css('display', 'block');
    } else {
      wooOption4.css('display', 'none');
      wooOption5.css('display', 'none');
    }
  });

  wooTrigger3.change( function() {
    if (wooTrigger3.is(':checked')) {
      wooOption6.css('display', 'block');
      wooOption7.css('display', 'block');
    } else {
      wooOption6.css('display', 'none');
      wooOption7.css('display', 'none');
    }
  });

  wooTrigger4.change( function() {
    if (wooTrigger4.is(':checked')) {
      wooOption8.css('display', 'block');
      wooOption9.css('display', 'block');
    } else {
      wooOption8.css('display', 'none');
      wooOption9.css('display', 'none');
    }
  });

});



// Informational Elements
// =============================================================================

jQuery(document).ready(function($) {

  function xCustomizerText( targetElement, subTitle, description ) {

    if ( subTitle !== false ) {

      subTitle = '<li class="customize-control customize-control-sub-title">' +
                   '<h4 class="customize-sub-title">' +
                     subTitle +
                   '</h4>' +
                 '</li>';

      targetElement.before(subTitle);

    }

    if ( description !== false ) {

      description = '<li class="customize-control customize-control-description">' +
                      '<p class="customize-description">' +
                        '<span>INFO:</span> ' + description +
                      '</p>' +
                    '</li>';

      targetElement.before(description);

    }

  }

  xCustomizerText( $( '#customize-control-x_stack' ),                                         false,                                  'Select the Stack you would like to use and wait a brief moment to view it in the preview area to the right. Each Stack functions like a unique WordPress theme, and thus comes with its own set of options, features, layouts, and more.' );
  xCustomizerText( $( '#customize-control-x_integrity_layout_site' ),                         false,                                  'Integrity is a beautiful design geared towards businesses and individuals desiring a site with a more traditional layout, yet with plenty of modern touches.' );
  xCustomizerText( $( '#customize-control-x_integrity_design' ),                              'Design Options',                       'The greatness of Integrity\'s design is in its simplicity. The look and feel of your site will change dramatically based on the choices selected for a couple options.' );
  xCustomizerText( $( '#customize-control-x_integrity_light_bg_color' ),                      'Background Options',                   'The "Background Pattern" setting will override the "Background Color" unless the image used is transparent, and the "Background Image" option will take precedence over both. The "Background Image Fade (ms)" option allows you to set a time in milliseconds for your image to fade in. To disable this feature, set the value to "0."' );
  xCustomizerText( $( '#customize-control-x_integrity_blog_header_enable' ),                  'Blog Options',                         'Enabling the blog header will turn on the area above your posts on the index page that contains your title and subtitle. Disabling it will result in more content being visible above the fold.' );
  xCustomizerText( $( '#customize-control-x_integrity_portfolio_archive_sort_button_text' ),  'Portfolio Options',                    'Enabling portfolio index sharing will turn on social sharing links for each post on the portfolio index page. Activate and deactivate individual sharing links underneath the main Portfolio section.' );
  xCustomizerText( $( '#customize-control-x_integrity_shop_header_enable' ),                  'Shop Options',                         'Enabling the shop header will turn on the area above your posts on the index page that contains your title and subtitle. Disabling it will result in more content being visible above the fold.' );
  xCustomizerText( $( '#customize-control-x_renew_layout_site' ),                             false,                                  'Renew features a gorgeous look and feel that lends a clean, modern look to your site. All of your content will take center stage with Renew in place.' );
  xCustomizerText( $( '#customize-control-x_renew_topbar_background' ),                       'Design Options',                       'Renew\'s flat design is built around a simple interface and bold colors. Use your palette to set the colors for some main structural elements of your site below.' );
  xCustomizerText( $( '#customize-control-x_renew_bg_color' ),                                'Background Options',                   'The "Background Pattern" setting will override the "Background Color" unless the image used is transparent, and the "Background Image" option will take precedence over both. The "Background Image Fade (ms)" option allows you to set a time in milliseconds for your image to fade in. To disable this feature, set the value to "0."' );
  xCustomizerText( $( '#customize-control-x_renew_topbar_text_color' ),                       'Typography Options',                   'Here you can set the colors for your topbar and footer. Get creative, the possibilities are endless.' );
  xCustomizerText( $( '#customize-control-x_renew_blog_title' ),                              'Blog Options',                         'The entry icon color is for the post icons to the left of each title. Selecting "Creative" under the "Entry Icon Position" setting will allow you to align your entry icons in a different manner on your posts index page when "Content Left, Sidebar Right" or "Fullwidth" are selected as your "Content Layout" and when your blog "Style" is set to "Standard." This feature is intended to be paired with a "Boxed" layout.' );
  xCustomizerText( $( '#customize-control-x_renew_shop_title' ),                              'Shop Options',                         'Provide a title you would like to use for your shop. This will show up on the index page as well as in your breadcrumbs.' );
  xCustomizerText( $( '#customize-control-x_icon_layout_site' ),                              false,                                  'Icon features a stunning, modern, fullscreen design with a unique fixed sidebar layout that scolls with users on larger screens as you move down the page. The end result is attractive, app-like, and intuitive.' );
  xCustomizerText( $( '#customize-control-x_icon_bg_color' ),                                 'Background Options',                   'The "Background Pattern" setting will override the "Background Color" unless the image used is transparent, and the "Background Image" option will take precedence over both. The "Background Image Fade (ms)" option allows you to set a time in milliseconds for your image to fade in. To disable this feature, set the value to "0."' );
  xCustomizerText( $( '#customize-control-x_icon_post_standard_colors_enable' ),              'Blog Options',                         'Set unique colors for each blog post type if you so desire. You can enable or disable any combination of colors you want to fit your design style.' );
  xCustomizerText( $( '#customize-control-x_icon_shop_title' ),                               'Shop Options',                         'Provide a title you would like to use for your shop. This will show up on the index page as well as in your breadcrumbs.' );
  xCustomizerText( $( '#customize-control-x_ethos_layout_site' ),                             false,                                  'Ethos is a magazine-centric design that works great for blogs, news sites, or anything else that is content heavy with a focus on information.' );
  xCustomizerText( $( '#customize-control-x_ethos_topbar_background' ),                       'Design Options',                       'Ethos\' streamlined look is designed to make your content shine. Customize the appearance of various items below and take note that some of these accent colors will be used for additional elements. For example, the "Navbar Background Color" option will also update the appearance of the widget titles in your sidebar.' );
  xCustomizerText( $( '#customize-control-x_ethos_bg_color' ),                                'Background Options',                   'The "Background Pattern" setting will override the "Background Color" unless the image used is transparent, and the "Background Image" option will take precedence over both. The "Background Image Fade (ms)" option allows you to set a time in milliseconds for your image to fade in. To disable this feature, set the value to "0."' );
  xCustomizerText( $( '#customize-control-x_ethos_post_carousel_enable' ),                    'Post Carousel',                        'The "Post Carousel" is an element located above the masthead, which allows you to showcase your posts in various formats. If "Featured" is chosen as a display option, a text input will appear to enter in the IDs of the posts you would like to showcase. This input accepts a list of numeric IDs separated by a comma (e.g. 14, 1, 817).' );
  xCustomizerText( $( '#customize-control-x_ethos_post_carousel_display_count_extra_large' ), 'Post Carousel &ndash; Screen Display', 'Select how many posts you would like to show for various screen sizes. Make sure to customize this section to suit your needs depending on how you have other options setup for your site (i.e. boxed site layout, fixed left or right navigation, et cetera).' );
  xCustomizerText( $( '#customize-control-x_ethos_post_slider_blog_enable' ),                 'Post Slider &ndash; Blog',             'The blog "Post Slider" is located at the top of the posts index page, which allows you to showcase your posts in various formats. If "Featured" is chosen as a display option, a text input will appear to enter in the IDs of the posts you would like to showcase. This input accepts a list of numeric IDs separated by a comma (e.g. 14, 1, 817).' );
  xCustomizerText( $( '#customize-control-x_ethos_post_slider_archive_enable' ),              'Post Slider &ndash; Archives',         'The archive "Post Slider" is located at the top of all archive pages, which allows you to showcase your posts in various formats. If "Featured" is chosen as a display option, a text input will appear to enter in the IDs of the posts you would like to showcase. This input accepts a list of numeric IDs separated by a comma (e.g. 14, 1, 817).' );
  xCustomizerText( $( '#customize-control-x_ethos_navbar_desktop_link_side_padding' ),        'Navbar Options',                       'Set the side padding for your navbar links on larger screens to suit the needs of your design.' );
  xCustomizerText( $( '#customize-control-x_ethos_filterable_index_enable' ),                 'Blog Options',                         'Enabling the filterable index will bypass the standard output of your blog page, allowing you to specify categories to highlight. Upon selecting this option, a text input will appear to enter in the IDs of the categories you would like to showcase. This input accepts a list of numeric IDs separated by a comma (e.g. 14, 1, 817).' );
  xCustomizerText( $( '#customize-control-x_ethos_shop_title' ),                              'Shop Options',                         'Provide a title you would like to use for your shop. This will show up on the index page as well as in your breadcrumbs.' );
  xCustomizerText( $( '#customize-control-x_custom_fonts' ),                                  false,                                  'X provides you with full control over your site\'s typography. Remember to check the box for "Enable Custom Fonts" to set your own individual fonts for headings, body copy, et cetera.' );
  xCustomizerText( $( '#customize-control-x_logo_font_family' ),                              'Logo',                                 false );
  xCustomizerText( $( '#customize-control-x_navbar_font_family' ),                            'Navbar',                               false );
  xCustomizerText( $( '#customize-control-x_headings_font_family' ),                          'Headings',                             false );
  xCustomizerText( $( '#customize-control-x_body_font_family' ),                              'Body and Content',                     '"Body Font Size (px)" will affect the sizing of all copy outside of a post or page content area. "Content Font Size (px)" will affect the sizing of all copy inside a post or page content area. Headings are set with percentages and sized proportionally to these settings.' );
  xCustomizerText( $( '#customize-control-x_site_link_color' ),                               'Site Links',                           'Site link colors are also used as accents for various elements throughout your site, so make sure to select something you really enjoy and keep an eye out for how it affects your design.' );
  xCustomizerText( $( '#customize-control-x_button_style' ),                                  false,                                  'Retina ready, limitless colors, and multiple shapes. The buttons available in X are fun to use, simple to implement, and look great on all devices no matter the size.' );
  xCustomizerText( $( '#customize-control-x_button_color' ),                                  'Colors',                               false );
  xCustomizerText( $( '#customize-control-x_button_color_hover' ),                            'Hover Colors',                         false );
  xCustomizerText( $( '#customize-control-x_navbar_positioning' ),                            false,                                  'Never before has such flexibility been offered to WordPress users for their site\'s header. It\'s one of the first things your visitors see when they come to your site, now you can make it look exactly how you want.' );
  xCustomizerText( $( '#customize-control-x_logo_navigation_layout' ),                        'Logo and Navigation',                  'Selecting "Inline" for your logo and navigation layout will place them both in the navbar. Selecting "Stacked" will place the logo in a separate section above the navbar.' );
  xCustomizerText( $( '#customize-control-x_navbar_height' ),                                 'Navbar',                               '"Navbar Top Height (px)" must still be set even when using "Fixed Left" or "Fixed Right" positioning because on tablet and mobile devices, the menu is pushed to the top.' );
  xCustomizerText( $( '#customize-control-x_logo' ),                                          'Logo',                                 'To make your logo retina ready, enter in the width of your uploaded image in the "Logo Width (px)" field and we\'ll take care of all the calculations for you. If you want your logo to stay the original size that was uploaded, leave the field blank.' );
  xCustomizerText( $( '#customize-control-x_header_search_enable' ),                          'Search',                               'Activate search functionality for the navbar. If activated, select the font size you would like to use for the search input.' );
  xCustomizerText( $( '#customize-control-x_logo_adjust_navbar_top' ),                        'Alignment',                            '"Navbar Top Logo Alignment (px)" and "Navbar Top Link Alignment (px)" must still be set even when using "Fixed Left" or "Fixed Right" positioning because on tablet and mobile devices, the menu is pushed to the top.' );
  xCustomizerText( $( '#customize-control-x_header_widget_areas' ),                           'Widgetbar',                            false );
  xCustomizerText( $( '#customize-control-x_topbar_display' ),                                'Miscellaneous',                        false );
  xCustomizerText( $( '#customize-control-x_footer_widget_areas' ),                           false,                                  'Easily adjust your site\'s footer by setting your widget areas to the specific number desired and turning on or off various parts as needed. You\'re never forced to use a layout you don\'t need with X.' );
  xCustomizerText( $( '#customize-control-x_footer_scroll_top_display' ),                     'Scroll Top Anchor',                    'Activating the scroll top anchor will output a link that appears in the bottom corner of your site for users to click on that will return them to the top of your website. Once activated, set the value (as a percentage) for how far down the page your users will need to scroll for it to appear. For example, if you want the scroll top anchor to appear once your users have scrolled halfway down your page, you would enter "50" into the field.' );
  xCustomizerText( $( '#customize-control-x_blog_style' ),                                    false,                                  'Adjust the style and layout of your blog using the settings below. This will only affect the posts index page of your blog and will not alter any archive or search results pages. The "Layout" option allows you to keep your sidebar on your posts index page if you have already selected "Content Left, Sidebar Right" or "Sidebar Left, Content Right" for you "Content Layout" option, or remove the sidebar completely if desired.' );
  xCustomizerText( $( '#customize-control-x_archive_style' ),                                 'Archives',                             'Adjust the style and layout of your archive pages using the settings below. The "Layout" option allows you to keep your sidebar on your posts index page if you have already selected "Content Left, Sidebar Right" or "Sidebar Left, Content Right" for you "Content Layout" option, or remove the sidebar completely if desired.' );
  xCustomizerText( $( '#customize-control-x_blog_enable_post_meta' ),                         'Content',                              'Selecting the "Enable Full Post Content on Index" option below will allow the entire contents of your posts to be shown on the post index pages for all stacks. Deselecting this option will allow you to set the length of your excerpt.' );
  xCustomizerText( $( '#customize-control-x_custom_portfolio_slug' ),                         false,                                  'Setting your custom portfolio slug allows you to create a unique URL structure for your archive pages that suits your needs. When you update it, remember to save your Permalinks again to avoid any potential errors.' );
  xCustomizerText( $( '#customize-control-x_portfolio_enable_post_meta' ),                    'Content',                              false );
  xCustomizerText( $( '#customize-control-x_portfolio_tag_title' ),                           'Labels',                               false );
  xCustomizerText( $( '#customize-control-x_portfolio_enable_facebook_sharing' ),             'Sharing',                              false );
  xCustomizerText( $( '#customize-control-x_woocommerce_shop_layout_content' ),               false,                                  'This section handles all options regarding your WooCommerce setup. Select your content layout, product columns, along with plenty of other options to get your shop up and running. The "Shop Layout" option allows you to keep your sidebar on your shop page if you have already selected "Content Left, Sidebar Right" or "Sidebar Left, Content Right" for you "Content Layout" option, or remove the sidebar completely if desired.' );
  xCustomizerText( $( '#customize-control-x_woocommerce_product_tabs_enable' ),               'Single Product',                       'All options available in this section pertain to the layout of your individual product pages. Simply enable or disable the sections you want to use to achieve the layout you want.' );
  xCustomizerText( $( '#customize-control-x_woocommerce_cart_cross_sells_enable' ),           'Cart',                                 'All options available in this section pertain to the layout of your cart page. Simply enable or disable the sections you want to use to achieve the layout you want.' );
  xCustomizerText( $( '#customize-control-x_woocommerce_widgets_image_alignment' ),           'Widgets',                              'Select the placement of your product images in the various WooCommerce widgets that provide them. Right alignment is better if your items have longer titles to avoid staggered word wrapping.' );
  xCustomizerText( $( '#customize-control-x_social_facebook' ),                               false,                                  'Set the URLs for your social media profiles here to be used in the topbar and bottom footer. Adding in a link will make its respective icon show up without needing to do anything else. Keep in mind that these sections are not necessarily intended for a lot of items, so adding all icons could create some layout issues. It is typically best to keep your selections here to a minimum for structural purposes and for usability purposes so you do not overwhelm your visitors.' );
  xCustomizerText( $( '#customize-control-x_icon_favicon' ),                                  false,                                  'Easily manage your favicon for desktop, touch icon for mobile devices, and tile icon for the Windows 8 Metro interface in this section. If an image is not set, nothing will be output for that particular icon type. When setting the path to your favicon, make sure you are using the ".ico" format. A 152x152 PNG should be used for your touch icon, and a 144x144 PNG should be used for your tile icon. The color you set for your tile icon will be used behind your image.' );
  xCustomizerText( $( '#customize-control-x_custom_styles' ),                                 false,                                  'Quickly add custom CSS or JavaScript to your site without any complicated setups. Ideal for minor style alterations or small snippets like Google Analytics. Do not place any <style> or <script> tags in these areas as they are already added for your convenience.' );

});