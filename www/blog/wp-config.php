<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'qdgytrans');

/** MySQL database username */
define('DB_USER', 'qdgytrans');

/** MySQL database password */
define('DB_PASSWORD', 'q1w2e3r4t5');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');



/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Da4N )T^njKTPq[$dz5oe|B~-c7`s2g,R>ROeIN;wLy)$2i$BI;?nSmDT(<4Y}TU');
define('SECURE_AUTH_KEY',  '+aq{-Y j>#?[GPSkqjq^.S/TME}D[*-H6|DX!n.lXr~Y#:$_[rt]%Uwm,P^X=-nH');
define('LOGGED_IN_KEY',    'wn4^huaH2JF+g+=$o&oB|9f1p|),G$s.q-^e*LGl=Jy(//i9ytzm.a+8XKr|VPI,');
define('NONCE_KEY',        'Mgv?yE|.d}O$|0#[pM+^~0s+<6%2m;VfF74MaCP0-MFrSWY3-3qMh@OGWn8n!|.h');
define('AUTH_SALT',        '=4<I?x<W.v)N]WGGEwI6@ycw-^U.uL%^[P_c+,6=/?aW!+j(r0C9+w^Aw)2$=r$[');
define('SECURE_AUTH_SALT', 'c[lh#SnZqL|*=0<pT{4RkM22Z{Pz;S,$2pFKn>T@>^7z^DL7$k6MQz+Pa^bB]e(e');
define('LOGGED_IN_SALT',   '7(33{nFgx1awU:)&eE;Wjh88DnCREe-`q/a4Y)~mFm^9(|`HGeF9Vlh1~db?r2cC');
define('NONCE_SALT',       'kONR@`c+kIjUMH4yr`xAe&~c]EKaB ^NS__sPs>B<C$-[32N$(JC;v8DyqO}ga-u');


/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
