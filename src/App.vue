<template>
<div>
  <v-container mb-5>
    <v-layout row wrap >
      <v-flex text-md-center text-xs-center class="mb-3">
        <v-card flat>
          <v-card-text>
            Hi there, I'm Stash
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
            <v-icon>search</v-icon>
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
            <v-layout row pb-2>
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
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>

            <img src="/img/cafe.jpg" class="img-content">
            <v-layout row pb-2>
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
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
    

    <!-- right -->
          <v-flex md3>
            <div style="text-align: center;">
              <p>About Me</p>
              <img src="/img/profile.jpg" alt="" class="profile"> 
              <p>
                Schilitz knausgad occupy master clnse normcore health goth. Coloring book i street, art umami pok biosel brunch cloud bread.
              </p>
              <v-spacer>Recent Posts</v-spacer> 

              <v-list>
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
              <v-list>
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
              <v-list>
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
              <v-spacer>Follow Me</v-spacer>
              <v-spacer>Instagram</v-spacer>

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

            <v-spacer>Subscribe</v-spacer>
            
            <v-flex>
              <v-text-field
                label="Your Email Address"
                solo
              ></v-text-field>
              <v-btn
                class="btn-subscribe"
              >
                SIGN IN
              </v-btn>
            </v-flex>
            </div>
            
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

  <v-footer mt-5>
    <v-card
      flat
      tile
      width="100%"
      class="black white--text text-xs-center"
    >
      <v-card-text>
        <v-icon name="facebook"></v-icon>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        SIGN UP FOR OUR WEEKLY NEWSLETTER
      </v-card-text>

      <v-flex xs4 offset-xs4>
        <v-text-field
          label="Your Email Address"
          solo
        ></v-text-field>
      </v-flex>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2018 — Design Grid. All Rights Reserved.
      </v-card-text>
    </v-card>
  </v-footer>

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
    font-family: 'Courier New', Courier, monospace
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
    width: 50px;
  }
</style>

