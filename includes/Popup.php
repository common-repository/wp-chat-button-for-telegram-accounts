<?php
namespace RJ_Telegram;

use RJ_Telegram\Fields;
use RJ_Telegram\PostType;

defined('ABSPATH') || exit;
class Popup
{
    protected static $instance = null;

    public static function getInstance()
    {
        if (null == self::$instance) {
            self::$instance = new self;
            self::$instance->doHooks();
        }
        return self::$instance;
    }

    public function __construct()
    {
    }

    private function doHooks(){
        add_action('wp_enqueue_scripts', [$this, 'enqueue_global_scripts_styles']);
        add_action('wp_footer', [$this, 'show_widget']);
    }

    public function enqueue_global_scripts_styles(){
        wp_register_style('nta-css-popup', RJ_TELEGRAM_PLUGIN_URL . 'assets/css/style.css');
        wp_enqueue_style('nta-css-popup');
        wp_style_add_data('nta-css-popup', 'rtl', 'replace');

        //This base script for add_inline_script in shortcode
        wp_enqueue_script('rj-te-libs', Helper::AssetResolve('libs/rj-telegram.js'), ['jquery'], RJ_TELEGRAM_VERSION, true);

        wp_register_script('nta-js-global', RJ_TELEGRAM_PLUGIN_URL . 'assets/js/telegram-button.js', ['jquery'], RJ_TELEGRAM_VERSION, true);
        wp_localize_script('nta-js-global', 'rj_te_global', [
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('ajax-nonce'),
            'defaultAvatarSVG' => Helper::print_icon(),
            'defaultAvatarUrl' => RJ_TELEGRAM_PLUGIN_URL . 'assets/img/telegram_logo.svg',
            'timezone' => wp_timezone_string(),
            'i18n' => I18n::getTranslation()
        ]);
        wp_enqueue_script('nta-js-global');
    }

    public function show_widget()
    {
        $displayOption = Fields::getWidgetDisplay();
        $postId = get_the_ID();
        
        if ( $this->notShowInPage($postId, $displayOption) ) return;

        $activeAccounts = $this->get_accounts_active_and_meta();
        if ( count($activeAccounts) < 1 ) return;

        if (    wp_is_mobile() && $displayOption['showOnMobile'] === "OFF"
            || !wp_is_mobile() && $displayOption['showOnDesktop'] === "OFF"
            || ( $displayOption['showOnMobile'] === "OFF" && $displayOption['showOnDesktop'] === "OFF" )
        ) {
            return;
        }

        echo '<div id="wa"></div>';
        $this->enqueue_scripts_styles($activeAccounts, $displayOption);
    }

    public function enqueue_scripts_styles($activeAccounts, $displayOption)
    {
        $stylesOption = Fields::getWidgetStyles();
        $analyticsOption = Fields::getAnalyticsSetting();
        wp_register_script('nta-js-popup', RJ_TELEGRAM_PLUGIN_URL . 'assets/js/telegram-popup.js', ['jquery']);
        wp_localize_script('nta-js-popup', 'rj_te', [
            'gdprStatus' => Helper::checkGDPR($stylesOption),
            'accounts' => $activeAccounts,
            'options' => [
                'display' => $displayOption,
                'styles' => $stylesOption,
                'analytics' => $analyticsOption
            ]
        ]);
        wp_enqueue_script('nta-js-popup');
    }

    public function notShowInPage($postId, $option)
    {
        $isPageOrShop = apply_filters('rjte_telegram_is_page_or_shop_filter', is_page());
        $postId       = apply_filters('rjte_telegram_get_post_id_filter', $postId);

        if ($option['displayCondition'] == 'includePages') {
            if (is_array($option['includePages']) && $isPageOrShop && in_array(strval($postId), $option['includePages'])) {
                return false;
            } 
            return true;
        } else if ($option['displayCondition'] == 'excludePages') {
            if (is_array($option['excludePages']) && $isPageOrShop && in_array(strval($postId), $option['excludePages'])) {
                return true;
            } 
        }

        return false;
    }

    public function get_accounts_active_and_meta(){
        $postType = PostType::getInstance();
        $results = array_map(function ($account){
            $meta = get_post_meta($account->ID, 'nta_wa_account_info', true);
            $avatar = get_the_post_thumbnail_url($account->ID);
            return array_merge(array(
                'accountId' => $account->ID,
                'accountName' => $account->post_title,
                'avatar' => $avatar !== false ? $avatar : '',
            ), $meta);
        }, $postType->get_active_widget_accounts());
        return $results;
    }

    // public function show_popup_view()
    // {
    //     //prevent Oxygen builder
    //     if (isset($_GET['ct_builder']) && !isset($_GET['oxygen_iframe'])) {
    //         return;
    //     }
}
