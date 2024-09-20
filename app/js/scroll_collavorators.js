function get_offset( part, el_selector ) {

    const target = document.querySelector(el_selector);
    const styles = window.getComputedStyle( target );
    const target_width = Number( styles.getPropertyValue( 'width' ).slice( 0, -2 ) );

    const window_height = document.documentElement.clientHeight;
    const window_width = document.documentElement.clientWidth;

    const proportions = target_width / window_width

    return 90;
}

function scroll_lines( direction, right__offset, left_offset ) {
    const right_line = document.querySelector('.page__colaborates-first');
    const left_line = document.querySelector('.page__colaborates-second');

    if ( right_line.getBoundingClientRect().y < window.innerHeight ) {

        const right_styles = window.getComputedStyle( right_line );

        var left_pos_1 = Number(right_styles.getPropertyValue('left').slice(0, -2));
        var right_pos_1 = Number(right_styles.getPropertyValue('right').slice(0, -2));

        if( direction === 'down' ) {
            if ( right_pos_1 + right__offset > 0 ) {
                right_line.style.left = `${ left_pos_1 - right_pos_1 }px`;
            } else if ( right_pos_1 + right__offset < 0 ) {
                right_line.style.left = `${ left_pos_1 - right__offset }px`;
            }

        } else if ( direction === 'up' ) {

            if ( left_pos_1 + right__offset > 0 ) {
                right_line.style.left = `${ left_pos_1 - left_pos_1 }px`;
            } else {
                right_line.style.left = `${ left_pos_1 + right__offset }px`;
            }

        }
    }

    if ( left_line.getBoundingClientRect().y  < window.innerHeight ) {
        
        const left_styles = window.getComputedStyle( left_line );

        var left_pos_2 = Number(left_styles.getPropertyValue('left').slice(0, -2));
        var right_pos_2 = Number(left_styles.getPropertyValue('right').slice(0, -2));

        if( direction === 'down' ) {

            if ( left_pos_2 + left_offset > 0  ) {
                left_line.style.right = `${ right_pos_2 - left_pos_2 }px`;
            } else {
                left_line.style.right = `${ right_pos_2 - left_offset }px`;
            }

        } else if ( direction === 'up' ) {

            if ( right_pos_2 + left_offset > 0 ) {
                left_line.style.right = `${ right_pos_2 - right_pos_2 }px`;
            } else {
                left_line.style.right = `${ right_pos_2 + left_offset }px`;
            }
        }
    }
}

var last_scroll = 0;

window.addEventListener('scroll', () => {

    const part = last_scroll - window.scrollY;
    const right__offset = get_offset( part, '.page__colaborates-first' );
    const left_offset  = get_offset( part, '.page__colaborates-second' );

    if ( window.scrollY > last_scroll ) {
        scroll_lines( 'down', right__offset, left_offset )
    } else {
        scroll_lines( 'up', right__offset, left_offset )
    }

    last_scroll = window.scrollY;
});
