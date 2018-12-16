<template>
<div>
  <v-container>
    <v-layout row wrap >
      <v-flex text-md-center text-xs-center class="mb-3">
        <v-card flat>
          <v-card-text>
            <strong>Hi there, I'm Stash</strong>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout align-center justify-center row class="mb-3">
      <img src="/img/profile.jpg" class="profile">
    </v-layout>

    <v-layout align-center justify-center row class="mb-4">
          <p class="text-md-center">
            I'm a Freelance Interactive Art Director based in France. Focusing across branding and identiry, digital and print.
          </p>
    </v-layout>

    <v-layout row wrap class="mb-5">
      <v-flex md10 offset-md1>
      <v-toolbar class="elevation-0" style="border-bottom: 2px solid; border-top: 0.2px solid;background-color: white;">
        <v-toolbar-title>ogato</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>HOME</v-btn>
          <v-btn flat>PAGES</v-btn>
          <v-btn flat>POST FORMATS</v-btn>
          <v-btn icon>
            <v-icon name="search"></v-icon>
          </v-btn>
          <v-toolbar-side-icon></v-toolbar-side-icon>
        </v-toolbar-items>
      </v-toolbar>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
        <!-- left -->
          <v-flex md7 offset-md1 mr-2>
            <img src="/img/cafe.jpg" class="img-content">
            <v-layout row mb-4>
              <v-flex md10 offset-md1>
                <v-card class="card--flex-toolbar">
                  <v-toolbar card prominent >
                    <img src="/img/profile.jpg" class="profile-content">
                    <v-toolbar-title class="caption grey--text">
                        by : orgato __ 
                        <font color="red">life</font> 
                        __ February 27,2018
                    </v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn icon>
                      <v-icon>search</v-icon>
                    </v-btn>

                    <v-btn icon>
                      <v-icon>apps</v-icon>
                    </v-btn>

                    <v-btn icon>
                      <v-icon>more_vert</v-icon>
                    </v-btn>
                  </v-toolbar>

                  <v-divider></v-divider>

                  <v-card-text>
                      <h2 style="margin-bottom: 15px;">Makeup Primers for Everyday Wear</h2>
                      
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at. 
                      <v-divider></v-divider>
                      <div style="margin: 10px;">
                          <v-icon name="message-circle" class="icon"></v-icon> 3 COMMENTS
                          LOAD MORE
                          Post share
                          <v-icon name="share-2" class="icon"></v-icon>
                      </div>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>

            <img src="/img/cafe.jpg" class="img-content">
            <v-layout row mb-3>
              <v-flex md10 offset-md1 mb-5>
                <v-card class="card--flex-toolbar">
                  <v-toolbar card prominent >
                    <img src="/img/profile.jpg" class="profile-content">
                    <v-toolbar-title class="caption grey--text">
                        by : orgato __ 
                        <font color="red">life</font> 
                        __ February 27,2018
                    </v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn icon>
                      <v-icon>search</v-icon>
                    </v-btn>

                    <v-btn icon>
                      <v-icon>apps</v-icon>
                    </v-btn>

                    <v-btn icon>
                      <v-icon>more_vert</v-icon>
                    </v-btn>
                  </v-toolbar>

                  <v-divider></v-divider>

                  <v-card-text>
                      <h2 style="margin-bottom: 15px;">Makeup Primers for Everyday Wear</h2>
                      
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum maiores modi quidem veniam, expedita quis laboriosam, ullam facere adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo numquam fuga ab at. 
                      <v-divider></v-divider>
                      <div style="margin: 10px;">
                          <v-icon name="message-circle" class="icon"></v-icon> 3 COMMENTS
                          LOAD MORE
                          Post share
                          <v-icon name="share-2" class="icon"></v-icon>
                      </div>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
    

          <!-- right -->
          <v-flex md3 class="grey lighten-3" style="height: 100%;">
            <div style="text-align: center; margin-top: 50px;">
              <p>About Me</p>
              <img src="/img/profile.jpg" alt="" class="profile"> 
              <p>
                Schilitz knausgad occupy master clnse normcore health goth. Coloring book i street, art umami pok biosel brunch cloud bread.
              </p>
              <v-spacer>Recent Posts</v-spacer> 

              <v-list class="grey lighten-3">
                <v-list-tile>
                  <v-list-tile-avatar>
                    <img src="/img/list1.jpg"  alt="">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-sub-title>
                      Hairstyle
                    </v-list-tile-sub-title>
                    <v-list-tile-title>
                      6 Hairstyle Ideas for Instant Refresh Look
                    </v-list-tile-title>               
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
              <v-list class="grey lighten-3">
                <v-list-tile>
                  <v-list-tile-avatar>
                    <img src="/img/list2.jpg"  alt="">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-sub-title>
                      Hairstyle
                    </v-list-tile-sub-title>
                    <v-list-tile-title>
                      6 Hairstyle Ideas for Instant Refresh Look
                    </v-list-tile-title>               
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
              <v-list class="grey lighten-3">
                <v-list-tile>
                  <v-list-tile-avatar>
                    <img src="/img/list3.jpg"  alt="">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-sub-title>
                      Hairstyle
                    </v-list-tile-sub-title>
                    <v-list-tile-title>
                      6 Hairstyle Ideas for Instant Refresh Look
                    </v-list-tile-title>               
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
              <br>
              <v-spacer>----------Follow Me----------</v-spacer>
              <br>
                <v-icon name="facebook" class="icon"></v-icon>
                <v-icon name="twitter" class="icon"></v-icon>
                <v-icon name="linkedin" class="icon"></v-icon>
                <v-icon name="instagram" class="icon"></v-icon>
              
              <v-spacer>----------Instagram----------</v-spacer>

              <v-container fluid grid-list-xs>
              <v-layout row wrap>
                <v-flex
                  v-for="i in 4"
                  :key="i"
                  xs6
                >
                  <img
                    :src="`https://randomuser.me/api/portraits/women/${i + 5}.jpg`"
                    alt="lorem"
                    class="image"
                    height="100%"
                    width="100%"
                  >
                </v-flex>
              </v-layout>
            </v-container>

            <v-spacer>----------Subscribe----------</v-spacer>
            <br>

            <v-flex xs10 offset-xs1>
              <v-text-field
                label="Your Email Address"
                solo
                flat
              ></v-text-field>
              <v-btn
                class="btn-subscribe"
                dark
                flat
              >
                SIGN IN
              </v-btn>
            </v-flex>
            </div>
          </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex md4 offset-md4>
        <v-pagination
          v-model="page"
          :length="4"
          circle
        ></v-pagination>
      </v-flex>
    </v-layout>

    
    <!-- <div class="parent">
      <div class="child">
        <v-layout row wrap>
          <v-flex>
            <img src="/img/profile.jpg" alt="">
          </v-flex>
        </v-layout>
      </div>
    </div> -->
  </v-container>

    <v-layout> 
      <v-flex md1>
        <img src="/img/1.jpeg" style="width: 100%;" >
      </v-flex>
      <v-flex md1>
        <img src="/img/2.jpeg" alt="" style="width: 100%;" >
      </v-flex>
      <v-flex md1>
        <img src="/img/3.jpeg" alt="" style="width: 100%;" >
      </v-flex>
      <v-flex md1>
        <img src="/img/4.jpeg" alt="" style="width: 100%;" >
      </v-flex>
      <v-flex md1>
        <img src="/img/1.jpeg" alt="" style="width: 100%;" >
      </v-flex>
      <v-flex md1>
        <img src="/img/2.jpeg" alt="" style="width: 100%;" >
      </v-flex>
      <v-flex md1>
        <img src="/img/3.jpeg" alt="" style="width: 100%;" >
      </v-flex>
      <v-flex md1>
        <img src="/img/4.jpeg" alt="" style="width: 100%;" >
      </v-flex>
      <v-flex md1>
        <img src="/img/1.jpeg" alt="" style="width: 100%;" >
      </v-flex>
      <v-flex md1>
        <img src="/img/2.jpeg" alt="" style="width: 100%;" >
      </v-flex>
      <v-flex md1>
        <img src="/img/3.jpeg" alt="" style="width: 100%;" >
      </v-flex>
      <v-flex md1>
        <img src="/img/4.jpeg" alt="" style="width: 100%;" >
      </v-flex>
    </v-layout>

    <v-layout row wrap>
    <v-card
      flat
      width="100%"
      class="black white--text text-xs-center"
    > 
      <br>         
      <h1>orgato</h1>

      <v-card-text>
      <v-divider></v-divider>
        <v-icon name="facebook" class="icon"></v-icon>
        <v-icon name="twitter" class="icon"></v-icon>
        <v-icon name="instagram" class="icon"></v-icon>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        SIGN UP FOR OUR WEEKLY NEWSLETTER
      </v-card-text>

      <v-flex xs4 offset-xs4>
        <v-text-field
          label="Your Email Address"
          solo
        ></v-text-field>
        <!-- <v-btn small class="black white--text">SIGN UP</v-btn> -->
        <v-divider></v-divider>
        <v-btn outline fab color="white">
          <v-icon name="arrow-up-circle" class="icon"></v-icon>
        </v-btn>
      </v-flex>
      <v-divider></v-divider>
      <v-card-text class="white--text">
        &copy;2018 — Design Grid. All Rights Reserved.
      </v-card-text>
    </v-card>
    </v-layout>

</div>
</template>

<script>
  export default {
  }
</script>

<style lang="scss">
  html body {
    margin: 0px;
    padding: 0px;
    font-family: 'Courier New', Courier, monospace;
  }

  .profile {
    width: 100px;
    height: 100px;
    border-radius: 100px;
  }
  
  .profile-content {
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }

  .card--flex-toolbar {
    margin-top: -50px;
  }

  .btn-subscribe {
    color: white;
    background-color: black;
  }

  .img-content {
    width: 100%;
  }

  .parent {
    position: relative;
    height: 300px;
    width: 400px;

    .child {
      position: absolute;
      background-color: rgb(255, 255, 255);
      bottom: -350px;
      height: 300px;
      width: 500px;
      left: 50px;
    }
  }

  .icon {
    width: 20px;
  }
</style>

