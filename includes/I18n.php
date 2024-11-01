<?php
namespace RJ_Telegram;

defined('ABSPATH') || exit;
/**
 * I18n Logic
 */
class I18n {
  public static function loadPluginTextdomain() {
    if (function_exists('determine_locale')) {
      $locale = determine_locale();
    } else {
      $locale = is_admin() ? get_user_locale() : get_locale();
    }
    unload_textdomain('rj-telegram');
    load_textdomain('rj-telegram', RJ_TELEGRAM_PLUGIN_DIR . '/languages/' . $locale . '.mo');
    load_plugin_textdomain('rj-telegram', false, RJ_TELEGRAM_PLUGIN_DIR . '/languages/');
  }

  public static function getTranslation(){
    $translation = array(
      'online' => __('Online', 'rj-telegram'),
      'offline' => __('Offline', 'rj-telegram')
    );

    return $translation;
  }
}
