<?php
namespace RJ_Telegram;

defined('ABSPATH') || exit;

class Helper
{
    protected static $instance = null;
    private static $manifest = [];
    static $timezone;
    static $time_symbols;
    public static function getInstance()
    {
        if (null == self::$instance) {
            self::$instance = new self;
        }
    return self::$instance;
    }

    public function __construct()
    {
        $option = get_option('rj_telegram_setting');
        self::$timezone = get_option('timezone_string');
        self::$time_symbols = isset($option['time_symbols']) ? explode(":", $option['time_symbols']) : 'h:m';
    }
    
    public static function printWorkingDays($array_data)
    {
        if ($array_data['isAlwaysAvailable'] === 'ON') {
            return __('Always online','rj-telegram');
        }

        $date_string = "";
        $daysOfWeek = array(
            'sunday' => __('Sunday', "rj-telegram"),
            'monday' => __('Monday', "rj-telegram"),
            'tuesday' => __('Tuesday', "rj-telegram"),
            'wednesday' => __('Wednesday', "rj-telegram"),
            'thursday' => __('Thursday', "rj-telegram"),
            'friday' => __('Friday', "rj-telegram"),
            'saturday' => __('Saturday', "rj-telegram"),
        );

        foreach ($array_data['daysOfWeekWorking'] as $dayKey => $dayVal) {
            if ($dayVal["isWorkingOnDay"] === 'ON') {
                $date_string .= $daysOfWeek[$dayKey] . ', ';
            }
        }

        $date_string = trim($date_string, ', ');
        return $date_string;
    }

    public static function getValueOrDefault($object, $objectKey, $defaultValue = '')
    {
        return (isset($object[$objectKey]) ? $object[$objectKey] : $defaultValue);
    }

    public static function buildTimeSelector($default = '08:00', $interval = '+30 minutes')
    {
        $output = '';

        $current = strtotime('00:00');
        $end = strtotime('23:59');
        
        while ($current <= $end) {
            $time = date('H:i', $current);
            $sel = ($time == $default) ? ' selected' : '';

            $output .= "<option value=\"{$time}\"{$sel}>" . date('H:i', $current) . '</option>';
            $current = strtotime($interval, $current);
        }
        $sel = ($default === '23:59') ? ' selected' : '';
        $output .= "<option value=\"23:59\"{$sel}>" . '23:59' . '</option>';
        return $output;
    }

    public static function sanitize_array($var)
    {
        if (is_array($var)) {
            return array_map('self::sanitize_array', $var);
        } else {
            return is_scalar($var) ? sanitize_text_field($var) : $var;
        }
    }

    public static function get_back_time($account_info)
    {
        // IF CHECKED ALWAYS AVAILABLE
        if ($account_info['nta_button_available'] == 'ON') {
            return 'online';
        }

        // $todayDayOfWeek = current_time('l');
        // $timeNow = current_time('H:i');
        // $timeNow = new DateTime($timeNow);
        // $todayDayOfWeek = strtolower(date("l", strtotime(current_time('mysql'))));
        // $timeNow = new DateTime(current_time('mysql'));
        $hourSymbol = self::$time_symbols[0];
        $minSymbol = self::$time_symbols[1];
        $timezone = self::$timezone;
        
        if (!empty($timezone)) {
            $timezone = new \DateTimeZone($timezone);
            $timeNow = new \DateTime(current_time('mysql'), $timezone);
            $dateTime = new \DateTime('now', $timezone);
            $todayDayOfWeek = strtolower($dateTime->format('l'));
        } else {
            $timeNow = new \DateTime(current_time('mysql'));
            $todayDayOfWeek = strtolower(date("l", strtotime(current_time('mysql'))));
        }

        $getTimeWorking = explode("-", $account_info["nta_{$todayDayOfWeek}_working"]);

        if (!empty($timezone)) {
            $start = new \DateTime($getTimeWorking[0], $timezone);
            $end = new \DateTime($getTimeWorking[1], $timezone);
        } else {
            $start = new \DateTime($getTimeWorking[0]);
            $end = new \DateTime($getTimeWorking[1]);
        }
        
        if ($account_info["nta_{$todayDayOfWeek}"] == 'ON') {
            $hours = $start->diff($timeNow);
            if ($timeNow >= $start && $timeNow <= $end) {
                return 'online';
            } else if ($timeNow < $start) {
                return $hours->format("%h${hourSymbol}:%i${minSymbol}");
            }
        }
        return 'offline';
    }

    public static function checkGDPR($option){
        if ($option['isShowGDPR'] === 'OFF') return false;
        if (isset($_COOKIE["rj-te-gdpr"]) && $_COOKIE["rj-te-gdpr"] == 'accept') return false;
        return true;
    }

    public static function isSaveNewPost($refererUrl){
        $add_new_action = strpos($refererUrl, 'post-new.php');
        if ($add_new_action !== false) return true;
        return false;
    }

    public static function print_icon(){
        return '<svg width="48px" height="48px" class="nta-telegram-default-avatar" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
            <path style="fill:#EDEDED;" d="M0,512l35.31-128C12.359,344.276,0,300.138,0,254.234C0,114.759,114.759,0,255.117,0
            S512,114.759,512,254.234S395.476,512,255.117,512c-44.138,0-86.51-14.124-124.469-35.31L0,512z"/>
            <path style="fill:#55CD6C;" d="M137.71,430.786l7.945,4.414c32.662,20.303,70.621,32.662,110.345,32.662
            c115.641,0,211.862-96.221,211.862-213.628S371.641,44.138,255.117,44.138S44.138,137.71,44.138,254.234
            c0,40.607,11.476,80.331,32.662,113.876l5.297,7.945l-20.303,74.152L137.71,430.786z"/>
            <path style="fill:#FEFEFE;" d="M187.145,135.945l-16.772-0.883c-5.297,0-10.593,1.766-14.124,5.297
            c-7.945,7.062-21.186,20.303-24.717,37.959c-6.179,26.483,3.531,58.262,26.483,90.041s67.09,82.979,144.772,105.048
            c24.717,7.062,44.138,2.648,60.028-7.062c12.359-7.945,20.303-20.303,22.952-33.545l2.648-12.359
            c0.883-3.531-0.883-7.945-4.414-9.71l-55.614-25.6c-3.531-1.766-7.945-0.883-10.593,2.648l-22.069,28.248
            c-1.766,1.766-4.414,2.648-7.062,1.766c-15.007-5.297-65.324-26.483-92.69-79.448c-0.883-2.648-0.883-5.297,0.883-7.062
            l21.186-23.834c1.766-2.648,2.648-6.179,1.766-8.828l-25.6-57.379C193.324,138.593,190.676,135.945,187.145,135.945"/>
        </svg>';
    }

    private static function get_manifest() {
		if ( ! self::$manifest ) {
			$manifest = RJ_TELEGRAM_PLUGIN_DIR . 'assets/dist/mix-manifest.json';

			if (
				$map = file_get_contents( $manifest ) and
				is_array( $map = json_decode( $map, true ) )
			) {
				self::$manifest = $map;
			}
		}

		return self::$manifest;
    }
    
    public static function AssetResolve( $path ) {
		if ( $map = self::get_manifest() ) {

			$path = self::leading_slash_it( $path );

			if ( isset( $map[ $path ] ) ) {
				return RJ_TELEGRAM_PLUGIN_URL . 'assets/dist' . self::leading_slash_it( $map[ $path ] );
			}
		}

		return '';
    }
    
    private static function leading_slash_it( $string ) {
		return '/' . ltrim( $string, '/\\' );
	}
}
