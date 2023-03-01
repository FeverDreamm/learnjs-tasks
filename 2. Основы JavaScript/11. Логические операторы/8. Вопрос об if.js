if (-1 || 0) alert( 'first' ); // 'first'
if (-1 && 0) alert( 'second' ); // не сработает
if (null || -1 && 1) alert( 'third' ); // 'third'