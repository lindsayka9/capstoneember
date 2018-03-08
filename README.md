# Just Say It.
## A blog for those that want to speak their minds.

**Just Say It.** is a blog for people who want to vent, post their feelings, and comment on each other's posts.

![Screenshot](https://i.imgur.com/bCzFthc.png "Screenshot")
![Screenshot](https://i.imgur.com/T3lUl29.png "Screenshot")

**Wireframes:** https://i.imgur.com/UG0rhVg.jpg, https://i.imgur.com/67Vp39Z.jpg

**Client Deployed:** https://lindsayka9.github.io/capstoneember

**Back-End Repo:** https://github.com/lindsayka9/capstonerailsapi

**Back-End Deployed:** https://frozen-plains-50910.herokuapp.com/

## Project Planning and Implementation

When it came to planning out the building of this project, I started out by pseudocoding and drawing everything out on paper before I even touched my computer. When it was time to start coding, I first built my API out for both my resources (posts and comments). I knew that I would be using both of these, and wanted to make sure they were there when I was ready to start building out front-end functionality.

Moving to the front-end I began by building a route for posts, then putting all of the code I needed to complete all CRUD actions in the `posts.js` route file. Once everything was functional in that file, I generated new components for all of the modules I wanted to make use of, and migrated the appropriate actions and methods to each component and template.

After my `posts` resource was fully functional on the front-end, I moved on to my second resource, `comments`. I wanted users to be able to add comments on their own and other's posts, so I created components right away for these - I had been keeping notes along the way with the `posts` process.

The final steps for me were bug fixes and styling, which was made easier by copious user testing by myself and others.

### Technlogies Used
- Ember.js
- JavaScript
- Ruby
- Rails
- CSS

### Next Time

I would like to give more functionality to the comments resource in future iterations of this project, so the post user would be able to delete comments on their post.

I'd also like to create 'Admin' functionality, though I'm not sure at this point what that would look like. Lastly, I'd like to add a way for users to upload photos and other media to go along with their post, and add category tags.

## User Stories

As a user, I want to be able to sign up, sign in, and sign out
As a user, I want to be able to change my password
As a user, I want to be able to create a new blog post
As a user, I want to be able to see all blog posts by all users
As a user, I want to be able to see who wrote each blog post
As a user, I want to be able to edit my blog post
As a user, I want to be able to delete my blog post
As a user, I want to be able to read an individual post
As a user, I want to be able to comment on any blog post
As a user, I want to be able to edit my comment
As a user, I want to be able to delete my comment
