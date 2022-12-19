import { about } from './desk/about';
import { home } from './desk/home';
import { posts } from './desk/posts';
import { settings } from './desk/settings';
import { childWorks } from './desk/childWorks';
import { works } from './desk/works';

export default (S) =>
  S.list()
    .title('Site Content')
    .items([
      home,
      about,
      S.divider(),
      works('work'),
      childWorks('work'),
      S.divider(),
      posts,
      S.divider(),
      settings('featureList'),
    ]);
