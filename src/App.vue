<template>
  <v-container>
    <v-layout align-center justify-center row>
        Hi there, I'm Stash
    </v-layout>
    <br>

    <v-layout align-center justify-center row>
      <img src="/img/profile.jpg" class="profile"></img>
    </v-layout>
    <br>

    <v-layout align-center justify-center row>
          <p class="text-md-center">
            I'm a Freelance Interactive Art Director based in France. Focusing across branding and identiry, digital and print.
          </p>
    </v-layout>
    <br>

    <v-layout align-center justify-center row>
      <v-toolbar>
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
    </v-layout>
    <br>

    <!-- right -->
    <v-layout>
      <v-flex md9>
        <div class="parent">
          <img src="/img/cafe.jpg" alt="" class="img-content">
          <div class="child">

          </div>
        </div>
        
      </v-flex>

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
        
        <v-flex xs12 sm12 md12>
          <v-text-field
            label="Solo"
            solo
          ></v-text-field>
        </v-flex>
        </div>
      </v-flex>
    </v-layout>

    <div class="parent">
      <div class="child">

      </div>
    </div>
  </v-container>
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

  .img-content {
    width: 600px;
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

</style>

