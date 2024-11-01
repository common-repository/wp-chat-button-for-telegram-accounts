<?php
namespace RJ_Telegram;

defined('ABSPATH') || exit;
class Plugin {
  protected static $instance = null;

  public static function getInstance() {
    if (null == self::$instance) {
      self::$instance = new self;
    }

    return self::$instance;
  }

  private function __construct() {
  }

  public static function activate() {
    $firstTimeActive = get_option('rj_te_first_time_active');
    if ( $firstTimeActive === false ) { 
      $waReview = \RJTelegramReview::get_instance('rj_te', 'Telegram Plugin', 'rj-telegram');
      $waReview->need_update_option(1); // 1 day
      update_option('rj_te_first_time_active', 1);
    }

    $currentVersion = get_option('rj_te_version');
    if ( version_compare(RJ_TELEGRAM_VERSION, $currentVersion, '>' ) ) {
      // $filebirdCross = \FileBirdCross::get_instance('filebird', 'filebird+ninjateam', RJ_TELEGRAM_PLUGIN_URL, array('filebird/filebird.php', 'filebird-pro/filebird.php'));
      // $filebirdCross->need_update_option();

      if ($firstTimeActive !== false) {
        $waReview = \RJTelegramReview::get_instance('rj_te', 'Telegram Plugin', 'rj-telegram');
        $waReview->need_update_option(7); // 1 day
      }

      update_option('rj_te_version', RJ_TELEGRAM_VERSION);
    }
  }

  public static function deactivate() {
  }
}
