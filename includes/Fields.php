<?php

namespace RJ_Telegram;

defined('ABSPATH') || exit;

class Fields
{
    protected static $instance = null;

    public static function getInstance()
    {
        if (null == self::$instance) {
            self::$instance = new self;
        }
        return self::$instance;
    }

    public function __construct()
    {
    }

    public static function getButtonStyles($postId)
    {   
        $meta = get_post_meta($postId, 'nta_wa_button_styles', true);
        return wp_parse_args(
            $meta === false ? array() : $meta,
            array(
                'type' => "round",
                'backgroundColor' => "#0088CC",
                'textColor' => "#fff",
                'label' => __("Need Help? Chat with us", "rj-telegram"),
                'width' => 300,
                'height' => 64,
            )
        );
    }


    public static function getWidgetDisplay()
    {
        return wp_parse_args(
            get_option('nta_wa_widget_display', array()),
            array(
                'displayCondition' => 'includePages',
                'includePages' => [],
                'excludePages' => [],
                'showOnDesktop' => 'ON',
                'showOnMobile' => 'ON',
                'time_symbols' => 'h:m'
            )
        );
    }

    public static function getWidgetStyles()
    {
        return wp_parse_args(
            get_option('nta_wa_widget_styles', array()),
            array(
                'title' => __("Start a Conversation", "rj-telegram"),
                "responseText" => __("The team typically replies in a few minutes.", "rj-telegram"),
                'description' => __("Hi! Click one of our member below to chat on <strong>Telegram</strong>", "rj-telegram"),
                'backgroundColor' => "#0088CC",
                'textColor' => "#fff",
                'scrollHeight' => 500,
                'isShowScroll' => 'OFF',
                'isShowResponseText' => 'ON',

                "btnLabel" => __("Need Help? <strong>Chat with us</strong>", "rj-telegram"),
                'btnLabelWidth' => 156,
                'btnPosition' => 'right',
                'btnLeftDistance' => 30,
                'btnRightDistance' => 30,
                'btnBottomDistance' => 30,
                'isShowBtnLabel' => 'ON',

                'isShowGDPR' => 'OFF',
                "gdprContent" => __('Please accept our <a href="https://www.jeviwebstudio.com/privacy-policy/">privacy policy</a> first to start a conversation.', "rj-telegram"),
            )
        );
    }

    public static function getButtonSetting()
    {
        $option = get_option('nta_wabutton_setting');
        return wp_parse_args($option, self::$buttonSetting);
    }

    public static function getWoocommerceSetting()
    {
        $option = get_option('nta_wa_woocommerce', array());
        return wp_parse_args($option, array(
            'position' => 'after_atc',
            'isShow' => 'OFF'
        ));
    }

    public static function getAnalyticsSetting(){
        $option = get_option('nta_wa_analytics', array());
        return wp_parse_args($option, array(
            'enabledGoogle' => 'OFF',
            'enabledFacebook' => 'OFF'
        ));
    }

    public static function getDefaultMetaAccount($daysOfWeek)
    {
        $meta = array(
            'number' => '',
            'title' => '',
            'predefinedText' => '',
            'willBeBackText' => __('I will be back in [rj_working_time]', 'rj-telegram'),
            'dayOffsText' => __('I will be back soon', 'rj-telegram'),
            'isAlwaysAvailable' => 'ON',
        );

        foreach ($daysOfWeek as $dayKey) {
            $meta['daysOfWeekWorking'][$dayKey] = [
                'isWorkingOnDay' => 'OFF',
                'workHours'      => [
                    [
                        'startTime' => '08:00',
                        'endTime'   => '17:30'
                    ]
                ]
            ];
        }

        return $meta;
    }
}
