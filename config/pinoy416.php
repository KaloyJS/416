<?php


return [
    // How dates are shown. The database always stores UTC.
    'timezone' => 'America/Toronto',

    // Flip to true when members may submit events (Step 9).
    'member_submissions' => (bool) env('PINOY416_MEMBER_SUBMISSIONS', false),

    'featured_limit' => 6,
];
