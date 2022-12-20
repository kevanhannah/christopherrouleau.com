import about from './desk/about';
import home from './desk/home';
import posts from './desk/posts';
import settings from './desk/settings';
import childWorks from './desk/childWorks';
import works from './desk/works';

export default (S, context) =>
  S.list()
    .title('Site Content')
    .items([
      home(S),
      about(S),
      S.divider(),
      works(S, 'work'),
      childWorks(S, context, 'work'),
      S.divider(),
      posts(S),
      S.divider(),
      settings(S, context, 'featureList'),
    ]);
