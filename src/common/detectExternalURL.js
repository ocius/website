/**
 * Helper function for detection of external links.
 *
 * This function assumes that any internal link (intended for Gatsby)
 * will start with exactly one slash, and that anything else is external.
 *
 * Tailor the following test to your environment.
 *
 * @param {String} url URL to be checked
 */
const isExternalURL = (url) => !/^\/(?!\/)/.test(url);

export default isExternalURL;
