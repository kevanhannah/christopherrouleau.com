import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Rich text annotations used in the block content editor
import annotationLinkExternal from './annotations/annotationLinkExternal';
import annotationLinkInternal from './annotations/annotationLinkInternal';

// Documents
import category from './documents/category';
import featureList from './documents/featureList';
import featureItem from './documents/featureItem';
import post from './documents/post';
import work from './documents/work';

// Singletons
import about from './singletons/about';
import home from './singletons/home';
import settings from './singletons/settings';

// Block content
import body from './blocks/body';

// Objects
import blockImage from './objects/blockImage';
import description from './objects/description';
import excerpt from './objects/excerpt';
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
    featureList,
    featureItem,
    post,
    work,
    // Singletons
    about,
    home,
    settings,
    // Block content
    body,
    // Objects
    blockImage,
    description,
    excerpt,
    hero,
    itemImage,
    linkExternal,
    linkInternal,
    plainTextItem,
  ]),
});
