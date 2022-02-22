export class UtilService{

  /**
 * Sanitize a URL.
 *
 * Source @braintree/sanitize-url
 * <https://github.com/braintree/sanitize-url>
 *
 * @param {string} url
 * @return {string}
 */
static sanitizeUrl(url : string) : string {
  if (!url) {
      return "about:blank";
  }

  let invalidProtocolRegex = /^(%20|\s)*(javascript|data|vbscript)/im;
  let ctrlCharactersRegex = /[^\x20-\x7EÀ-ž]/gim;
  let urlSchemeRegex = /^([^:]+):/gm;
  let relativeFirstCharacters = [".", "/"];

  function _isRelativeUrlWithoutProtocol(url) {
      return relativeFirstCharacters.indexOf(url[0]) > -1;
  }

  let sanitizedUrl = url.replace(ctrlCharactersRegex, "").trim();
  if (_isRelativeUrlWithoutProtocol(sanitizedUrl)) {
      return sanitizedUrl;
  }

  let urlSchemeParseResults = sanitizedUrl.match(urlSchemeRegex);
  if (!urlSchemeParseResults) {
      return sanitizedUrl;
  }

  let urlScheme = urlSchemeParseResults[0];
  if (invalidProtocolRegex.test(urlScheme)) {
      return "about:blank";
  }

  return sanitizedUrl;
}
}