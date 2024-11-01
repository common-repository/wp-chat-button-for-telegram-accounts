(function($) {
  $(document).ready(function() {
    $("#wa").rjteTelegram({
      accounts: rj_te.accounts,
      timezone: rj_te_global.timezone,
      gdprStatus: rj_te.gdprStatus,
      defaultAvatar: rj_te_global.defaultAvatarSVG,
      options: rj_te.options,
    });
  });
})(jQuery);
