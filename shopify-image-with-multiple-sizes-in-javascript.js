/**
 * Adds a Shopify size attribute to a URL
 */
function getSizedImageUrl(src, size) {
  if (!src) {
    return src;
  }

  if (size == null) {
    return src;
  }

  if (size === 'master') {
    return src.replace(/http(s)?:/, '');
  }

  var match = src.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);

  if (match != null) {
    var prefix = src.split(match[0]);
    var suffix = match[0];

    return (prefix[0] + '_' + size + suffix).replace(/http(s)?:/, '');
  }

  return null;
}
