jQuery(document).ready(function() {
    jQuery('#rjte-wa-ads').click(function() {
        jQuery.ajax({
            url: ajaxurl,
            type: 'POST',
            dataType: 'json',
            data: {
                'action': 'rj_te_ads_save',
                'nonce': window.rjte_admin_ads.nonce
            }
        }).done(function(result) {
            if (result.success) {
                jQuery('#rjte-wa-ads-wrapper').hide('slow')
            } else {
                console.log("Error", result.data.status)
            }
        });
    })
});
