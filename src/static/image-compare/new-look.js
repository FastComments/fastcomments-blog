$(function () {
    function setup() {
        $('.screenshot-comparison').twentytwenty({
            //  How much of the before image is visible when the page loads
            default_offset_pct: 0.0,

            // or vertical
            orientation: 'horizontal',

            // label text
            before_label: 'Before',
            after_label: 'After',

            // enable/disable overlay
            no_overlay: false,

            // move with handle
            move_with_handle_only: true,

            // click to move
            click_to_move: false
        });
    }
    setup();
    // Library messes up sometimes. Just retry.
    const interval = setInterval(function() {
        if ($('.screenshot-comparison').height() === 0) {
            setup();
        } else {
            clearInterval(interval);
        }
    }, 50);
});
