

![](https://screenshotscdn.firefoxusercontent.com/images/c02ed3b0-59bb-4bdc-8dec-de2248c7c523.png)

![](https://screenshotscdn.firefoxusercontent.com/images/a3f3962f-be5c-4c16-9ead-b597d7eb7693.png)

![feedpagescreenshot](https://user-images.githubusercontent.com/24230243/38755719-1316bfae-3f67-11e8-8ff0-012600e1cd7f.PNG)
src

  app

    feedPage 

      VideoPost.js -----> create post with video, post type and number of comments
      TextPost.js ------> create post with text, post type and number of comments
      ImagePost.js -----> create post with image, post type and number of comments
      CreateNewPost.js -> button that will have popup with new 3 buttons which give us a choice to create one of mentioned posts 
      FilterPost.js ----> drop down menu that will filter list of chosen type of posts
      FeedPage.js ------> place where we should have all logic of this page and render all components
      NewTextPost.js ---> pop up item where we can add new post
      NewVideoPost.js ---> pop up item where we can add new video post
      NewImagePost.js --> pop up item where we can add new image post

    singlePostPage

      PostItem.js -------> Selected post
      CommentItem.js ----> create comment item that includes user name, img and comment
      CommentList.js ----> create list of comments
      AddComment.js -----> input where user can add new comment
      SinglePostPage.js -> place where we should have all logic of this page and render all components

    welcomePage

      Login.js ---------> create login form where people can login into their account trough login form
      WelcomePage.js ---> place where we should have all logic of this page and render all components

    partials 

      Header.js --------> Static element that has logo and nav menu
      Footer.js --------> Static element with team name and year of production

    peoplePage

      PeoplePage.js -----> place where we should have all logic of this page and render all components
      Search.js ---------> create search input that will filter searched user 
      UserItem.js -------> create user item that includes user name, img, short description and time of the last post
      UserList.js--------> create list of users

    profilePage

      ProfilePage.js -------> place where we should have all logic of this page and render all components
      UserInfo.js ----------> create image, user name and user description
      EditProfile.js -------> popup menu that gives us option to upload a photo, change name and description

  entities

    User.js ------------> object with user info
    Comment.js ---------> object with comments info
    TextPost.js --------> object with text post info
    VideoPost.js -------> object with video post info
    ImagePost.js -------> object with img post info

  services

    UserService.js ------------> object with user info
    CommentService.js ---------> object with comments info
    PostService.js ------------> object with img post info
  
  shared --------------> place for the additional logic that has nothing with react

index.js
index.css
