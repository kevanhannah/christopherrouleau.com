export default function parseSanityLink(link) {
  const parsedLink = {
    text: link.linkText,
  };

  if (link._type === 'linkExternal') {
    parsedLink.url = `${link.url}`;
    parsedLink.type = 'external';
    return parsedLink;
  }

  parsedLink.url = `${link.reference.slug.current}`;
  parsedLink.type = 'internal';

  return parsedLink;
}
