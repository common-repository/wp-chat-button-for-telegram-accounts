<table class="form-table">
    <p><?php echo __('Setting text and style for the floating widget.', 'rj-telegram') ?></p>
    <tbody>
        <tr>
            <th scope="row"><label for="time_symbols"><?php echo __('Time Symbols', 'rj-telegram') ?></label></th>
            <td>
                <input name="time_symbols[hourSymbol]" placeholder="h" type="text" id="time_symbols-hour" value="<?php echo esc_attr($option['time_symbols'][0]) ?>" class="small-text code" style="text-align: center">
                <span>:<span>
                        <input name="time_symbols[minSymbol]" placeholder="m" type="text" id="time_symbols-minutes" value="<?php echo esc_attr($option['time_symbols'][1]) ?>" class="small-text code" style="text-align: center">
            </td>
        </tr>
        <tr>
            <th scope="row"><label for="rj-te-switch-control"><?php echo __('Show on desktop', 'rj-telegram') ?></label></th>
            <td>
                <div class="rj-te-switch-control">
                    <input type="checkbox" id="rj-te-switch" name="showOnDesktop" <?php checked($option['showOnDesktop'], 'ON') ?>>
                    <label for="rj-te-switch" class="green"></label>
                </div>
            </td>
        </tr>
        <tr>
            <th scope="row"><label for="rj-te-switch-control"><?php echo __('Show on mobile', 'rj-telegram') ?></label></th>
            <td>
                <div class="rj-te-switch-control">
                    <input type="checkbox" id="rj-te-switch-mb" name="showOnMobile" <?php checked($option['showOnMobile'], 'ON') ?>>
                    <label for="rj-te-switch-mb" class="green"></label>
                </div>
            </td>
        </tr>
        <tr>
            <th scope="row"><label for="displayCondition"><?php echo __('Display', 'rj-telegram') ?></label></th>
            <td>
                <select name="displayCondition" id="displayCondition">
                    <option <?php selected($option['displayCondition'], 'excludePages'); ?> value="excludePages"><?php echo __("Show on all pages except", "rj-telegram") ?></option>
                    <option <?php selected($option['displayCondition'], 'includePages'); ?> value="includePages"><?php echo __("Show on these pages...", "rj-telegram") ?></option>
                </select>
                <p class="description"><?php _e("Please select 'Show on all pages except' if you want to display the widget on WooCommerce pages.", 'rj-telegram') ?></p>
            </td>
        </tr>
        <th scope="row">
            <!-- <label for="widget_show_on_pages">
                <?php // echo __('Select pages', 'rj-telegram') ?>
            </label> -->
        </th>
        <td class="rj-te-pages-content include-pages <?php echo esc_attr($option['displayCondition'] == 'includePages' ? '' : 'hide-select') ?>">
            <input type="checkbox" id="include-pages-checkall" />
            <label for="include-pages-checkall">All</label>
            <ul id="rj-te-display-pages-list">
                <?php
                $array_includes = $option['includePages'];
                if (!$array_includes) {
                    $array_includes = array();
                }
                while ($get_pages_query->have_posts()) : $get_pages_query->the_post();
                ?>
                    <li>
                        <input <?php if (in_array(get_the_ID(), $array_includes)) {
                                    echo 'checked="checked"';
                                } ?> name="includePages[]" class="includePages" type="checkbox" value="<?php esc_attr(the_ID()) ?>" id="rj-te-hide-page-<?php esc_attr(the_ID()) ?>" />
                        <label for="rj-te-hide-page-<?php esc_attr(the_ID()) ?>"><?php esc_html(the_title()) ?></label>
                    </li>
                <?php
                endwhile;
                wp_reset_postdata();
                ?>
            </ul>
        </td>

        <td class="rj-te-pages-content exclude-pages <?php echo esc_attr($option['displayCondition'] == 'excludePages' ? '' : 'hide-select') ?>">
            <input type="checkbox" id="exclude-pages-checkall" />
            <label for="exclude-pages-checkall">All</label>
            <ul id="rj-te-display-pages-list">
                <?php
                $array_excludes = $option['excludePages'];
                if (!$array_excludes) {
                    $array_excludes = array();
                }
                while ($get_pages_query->have_posts()) : $get_pages_query->the_post();
                ?>
                    <li>
                        <input <?php if (in_array(get_the_ID(), $array_excludes)) {
                                    echo 'checked="checked"';
                                } ?> name="excludePages[]" class="excludePages" type="checkbox" value="<?php esc_attr(the_ID()) ?>" id="rj-te-show-page-<?php esc_attr(the_ID()) ?>" />
                        <label for="rj-te-show-page-<?php esc_attr(the_ID()) ?>"><?php esc_html(the_title()) ?></label>
                    </li>
                <?php
                endwhile;
                wp_reset_postdata();
                ?>
            </ul>
        </td>
        </tr>
    </tbody>
</table>
<button class="button button-large button-primary wa-save"><?php echo __('Save Changes', 'rj-telegram') ?><span></span></button>
