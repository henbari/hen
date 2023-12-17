<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'henbari_db' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ':&? A4QiP=0_I+!&7tXS^jtp69AR_vbIrTyqtq;JO]i8qwt,^[HtLD|qbuQ^yP7B' );
define( 'SECURE_AUTH_KEY',  'xPx_;}:L|V#EyVO?/Fc%-/=|FfyW{3N!XbPNjMuZ6d{i&T0YF7H1Sx@Tw*8Qo[O`' );
define( 'LOGGED_IN_KEY',    '8-}/1}93Qwj_2!=g9*ql)>3GTl_TNu_>.WcQzHR9T7u2)Yfl&wA6eY{7Vc(7Wcn1' );
define( 'NONCE_KEY',        'tN#nV;1s,Z}B&#s<9=W,?f1;zz>l}Re.4:z>T[BR|=N5hsQ!U#NG-zR`+GyXK]e~' );
define( 'AUTH_SALT',        'jttex*C oHFtl*=}7bJ+RD<W*!}(UeJwNq=w,{0u#MHKX%!2{gcOPk608/HTxn@i' );
define( 'SECURE_AUTH_SALT', '|[(mE/0Ty1w/>Cr#spsoTcp^3`Bp!S:lBWJyr.W*.l>P^Rbd8nm}l$u%{Lk+lJ${' );
define( 'LOGGED_IN_SALT',   'vajAJ&us ^SNu&Rrw8A&nPH<6%M37pw_!-*9!k]ibW=lQ=.x3@-jm[NMNW:(ac@c' );
define( 'NONCE_SALT',       'PK$mg3@F[@[-r$B-~$3:9Y.H^r4g[JU,_7hH~{10;T7dR0GDA@aa9e:Xdq,C5Mjc' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
