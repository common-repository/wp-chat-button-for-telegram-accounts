<div class="meta-button-style">
    <div class="design-button" id="button-design">
        <table class="form-table">
            <p><?php echo __('This styling applies only to the shortcode buttons for this account. Leave blank to use the default styles.', 'rj-telegram') ?></a></p>
            <tbody>
                <tr>
                    <th scope="row">
                        <label for="label"><?php echo __('Button Label', 'rj-telegram') ?></label>
                    </th>
                    <td>
                        <input type="text" id="label" name="label" value="<?php echo esc_attr($buttonStyles['label']) ?>" placeholder="Need help? Chat via Telegram" class="widefat" autocomplete="off">
                        <p class="description"><?php echo __('This text applies only on shortcode button.', 'rj-telegram') ?>
                        </p>
                    </td>
                </tr>
                <tr>
                    <th scope="row"><label for="type"><?php echo __('Button Style', 'rj-telegram') ?></label></th>
                    <td>
                        <div class="setting align">
                            <div class="button-group button-large" data-setting="align">
                                <button class="button btn-round <?php echo ($buttonStyles['type'] == 'round' ? 'active' : '') ?>" value="round" type="button">
                                    <?php echo __('Round', 'rj-telegram') ?>
                                </button>
                                <button class="button btn-square <?php echo ($buttonStyles['type'] == 'square' ? 'active' : '') ?>" value="square" type="button">
                                    <?php echo __('Square', 'rj-telegram') ?>
                                </button>
                            </div>
                            <input name="btnType" id="btnType" class="hidden" value="<?php echo esc_attr($buttonStyles['type']) ?>" />
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row"><label for="backgroundColor"><?php echo __('Button Background Color', 'rj-telegram') ?></label></th>
                    <td>

                        <input type="text" id="backgroundColor" name="backgroundColor" value="<?php echo esc_attr
                        ($buttonStyles['backgroundColor']) ?>" class="widget-button-color"
                               data-default-color="#0088CC" />
                    </td>
                </tr>
                <tr>
                    <th scope="row"><label for="textColor"><?php echo __('Button Text Color', 'rj-telegram') ?></label></th>
                    <td>
                        <input type="text" id="textColor" name="textColor" value="<?php echo esc_attr($buttonStyles['textColor']) ?>" class="widget-button-color" data-default-color="#fff" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="preview-button">
        <p>Preview</p>
        <div id="wa-button"></div>
    </div>
</div>

<script>
    var buttonStyles = <?php echo json_encode($buttonStyles); ?>
</script>
<script type="text/template" id="button-preview">
    <div id="rjte-wabutton">
        <a href="javascript:;" class="wa__stt_online wa__button <%= buttonStyles.buttonClass %>">
            <% if (_.isEmpty(buttonStyles.avatar)) { %>
                <div class="wa__btn_icon">
                    <img src="<?php echo RJ_TELEGRAM_PLUGIN_URL ?>assets/img/telegram_logo.svg" alt="img"/>
                </div>
            <% } else { %>
                <div class="wa__cs_img">
                    <div class="wa__cs_img_wrap" style="background: url(<%= buttonStyles.avatar %>) center center no-repeat; background-size: cover;">
                    </div>
                </div>
            <% } %>
            <div class="wa__btn_txt">
            <% if (!_.isEmpty(buttonStyles.title)) { %>
                <div class="wa__cs_info">
                    <div class="wa__cs_name"><%= buttonStyles.title %></div>
                    <div class="wa__cs_status"><?php echo  __('Online', 'rj-telegram') ?></div>
                </div>
            <% } %>
                <div class="wa__btn_title"><%= buttonStyles.label %></div>
            </div>
        </a>
    </div>
</script>

