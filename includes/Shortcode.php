<?php
namespace RJ_Telegram;

use RJ_Telegram\Fields;

defined('ABSPATH') || exit;
class Shortcode
{
    protected static $instance = null;
    protected $accountID;

    public static function getInstance()
    {
        if (null == self::$instance) {
            self::$instance = new self;
            self::$instance->doHooks();
        }
        return self::$instance;
    }

    private function doHooks(){
        add_shortcode('rj_button', [$this, 'button_shortcode']);
    }

    public function button_shortcode($id)
    {
        extract($id);
        $displayOption = Fields::getWidgetDisplay();
        $stylesOption = Fields::getWidgetStyles();
        $analyticsOption = Fields::getAnalyticsSetting();

        $script = array(
            'name' => get_the_title($id),
            'info' => get_post_meta($id, 'nta_wa_account_info', true),
            'styles' => Fields::getButtonStyles($id),
            'avatar' => get_the_post_thumbnail_url($id),
            'options' => [
                'display' => $displayOption,
                'styles' => $stylesOption,
                'analytics' => $analyticsOption
            ],
            'gdprStatus' => Helper::checkGDPR($stylesOption),
            'defaultAvatar' => RJ_TELEGRAM_PLUGIN_URL . 'assets/img/telegram_logo.svg'
        );
        wp_add_inline_script('rj-te-libs', 'var rj_te_button_' . $id . '=' . json_encode($script));

        $content = '';  
        
        $content .= '<div class="nta_wa_button" data-id="' . $id . '"></div>';

        return $content;
    }
}
