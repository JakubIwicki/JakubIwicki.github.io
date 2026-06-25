/**
 * Single source for site-wide configuration.
 *
 * S3 bucket is `jiapp-downloads-899088266605` in eu-central-1.
 *
 * NOTE: use the regioned virtual-hosted form (`s3.{region}.amazonaws.com`)
 * rather than the global form, because the publisher uploads to the
 * regioned host. The global form 301-redirects for non-us-east-1
 * buckets, which breaks the CORS fetch of apk-metadata.json.
 */

/** Stable URL for the latest JiApp APK on the public S3 download bucket. */
export const APK_URL =
  "https://jiapp-downloads-899088266605.s3.eu-central-1.amazonaws.com/JiApp-latest.apk";

/** URL for the APK metadata sidecar (version, size, sha256, release date). */
export const APK_METADATA_URL =
  "https://jiapp-downloads-899088266605.s3.eu-central-1.amazonaws.com/apk-metadata.json";

/** Jakub's public GitHub profile. */
export const GITHUB_URL = "https://github.com/JakubIwicki";
