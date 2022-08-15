import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Rich text annotations used in the block content editor
import annotationLinkExternal from './annotations/annotationLinkExternal';
import annotationLinkInternal from './annotations/annotationLinkInternal';

// Documents
import category from './documents/category';
import post from './documents/post';
import series from './documents/series';
import work from './documents/work';

// Singletons
import home from './singletons/home';
import settings from './singletons/settings';

// Block content
import body from './blocks/body';

// Objects
import description from './objects/description';
import excerpt from './objects/excerpt';
import featuresList from './objects/featuresList';
import featureListItem from './objects/featureListItem';
import hero from './objects/hero';
import itemImage from './objects/itemImage';
import linkExternal from './objects/linkExternal';
import linkInternal from './objects/linkInternal';
import plainTextItem from './objects/plainTextItem';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // Annotations
    annotationLinkInternal,
    annotationLinkExternal,
    // Documents
    category,
    post,
    series,
    work,
    // Singletons
    home,
    settings,
    // Block content
    body,
    // Objects
    description,
    excerpt,
    featuresList,
    featureListItem,
    hero,
    itemImage,
    linkExternal,
    linkInternal,
    plainTextItem,
  ]),
});
