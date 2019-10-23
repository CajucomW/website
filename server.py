# "bottle.py" is a simple Python framework for writing web-servers. It does
# the same sorts of things as Django, except its much simpler and is only
# in one file.

# for now, API will be stored through python. Later, create a 
# SQLite DB
from bottle import route, run, request

import json
import io


# Posts saved as array
blog_posts = [
  {
    'title': "Reactifying a Django multi-page app",
    'image': "https://i.imgur.com/uOTwjaG.jpg",
    'content': [
      '''I've got an old multi-page app that I"m trying to "reactify" that,
      later, I'm hoping to connect to a SQLite DB.''',
      '''Wish me luck!''',
    ],
  },
  {
    'title': "Trying to make an array",
    'image': "https://i.imgur.com/uOTwjaG.jpg",
    'content': [
      '''blah, blah, blah....''',
      '''...blah, blah, blah...''',
    ],
  },
  {
    'title': "...and another",
    'image': "https://i.imgur.com/uOTwjaG.jpg",
    'content': [
      '''La lala lala''',
      '''lalalala''',
      '''lala, lala''',
    ],
  },
]

@route('/api/all')
def index():
    return {
        'posts': blog_posts,
    }

@route('/api/<index>')
def index(index):
    return {
        'post': blog_posts[int(index)],
    }

@route('/api/create/', method='POST')
def index():
    info = json.load(io.TextIOWrapper(request.body))
    info['content'] = [info['content']]
    info.setdefault('image', 'https://i.imgur.com/uOTwjaG.jpg')
    blog_posts.append(info)
    return {
        'success': True,
    }

@route('/api/<index>/delete/', method='DELETE')
def index(index):
    del blog_posts[int(index)]
    return {
        'success': True,
    }

@route('/api/<index>/update/', method='PUT')
def index(index):
    info = json.load(io.TextIOWrapper(request.body))
    blog_posts[int(index)] = info
    return {
        'success': True,
    }


@route('/api/search/<search_term>')
def index(search_term):
    search_term = search_term.lower()
    return {
        'results': [
            blog_post for blog_post in blog_posts
            if search_term in blog_post.get('name', '').lower()
        ],
    }

run(host='localhost', port=8080)
