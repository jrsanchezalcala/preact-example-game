export class UtilService {

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
      return 'about:blank';
  }

  const invalidProtocolRegex = /^(%20|\s)*(javascript|data|vbscript)/im;
  const ctrlCharactersRegex = /[^\x20-\x7EÀ-ž]/gim;
  const urlSchemeRegex = /^([^:]+):/gm;
  const relativeFirstCharacters = ['.', '/'];

  function _isRelativeUrlWithoutProtocol(url : string) : boolean {
      return relativeFirstCharacters.indexOf(url[0]) > -1;
  }

  const sanitizedUrl = url.replace(ctrlCharactersRegex, '').trim();
  if (_isRelativeUrlWithoutProtocol(sanitizedUrl)) {
      return sanitizedUrl;
  }

  const urlSchemeParseResults = sanitizedUrl.match(urlSchemeRegex);
  if (!urlSchemeParseResults) {
      return sanitizedUrl;
  }

  const urlScheme = urlSchemeParseResults[0];
  if (invalidProtocolRegex.test(urlScheme)) {
      return 'about:blank';
  }

  return sanitizedUrl;
}
}
