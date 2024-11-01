(function($) {
    $(document).ready(function() {
      $(".nta_wa_button").each(function(i, element){
        const id = $(element).data('id')
        $(element).rjteTelegramButton({
            ...window['rj_te_button_' + id],
            timezone: rj_te_global.timezone,
            i18n: rj_te_global.i18n
        })
      })
    });
})(jQuery);
