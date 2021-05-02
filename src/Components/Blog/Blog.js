import React from 'react';
import "./Blog.css"

const Blog = () => {
    return (
        <div class='container main-box'>
        <div class="row">
          <div class="col-md-12">
            <h1 class="text-center dgn">Recent Blog</h1>
      
      
            <ul>
              <li class="col-md-3">
                <div class='front'></div>
                <div class='back'>
                  <img src='http://morestarwars.com/wp-content/uploads/2017/03/x-wing-gif.gif'></img>
                  {/* <Link class='link' to='/blog'>Click here</Link> */}
                </div>
              </li>
              <li class="col-md-3">
                <div class='front'></div>
                <div class='back'>
                  <img src='https://media.giphy.com/media/6QcwCXbbavxVC/giphy.gif'></img>
                </div>
              </li>
              <li class="col-md-3">
                <div class='front'></div>
                <div class='back'>
                  <img src='https://cdn.dribbble.com/users/363484/screenshots/1501204/stormtrooperdrbl2.gif'></img>
                </div>
              </li>
              <li class="col-md-3">
                <div class='front'></div>
                <div class='back'>
                  <img src='https://media.giphy.com/media/6QcwCXbbavxVC/giphy.gif'></img>
                </div>
              </li>
              <li class="col-md-3">
                <div class='front'></div>
                <div class='back'>
                  <img src='https://cdn.dribbble.com/users/363484/screenshots/1501204/stormtrooperdrbl2.gif'></img>
                </div>
              </li>
              <li class="col-md-3">
                <div class='front'></div>
                <div class='back'>
                  <img src='http://morestarwars.com/wp-content/uploads/2017/03/x-wing-gif.gif'></img>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Blog;