<template>
  <div>
    <div style="margin-top:-10px" class="d-none d-md-block">
      <img src="/static/img/mozfest.jpg" class='header headerimg' alt='A picture from Mozilla Festival 2014. All participants are in a circle.' />
    </div>
    <div class="jumbotron center">
        <h1>
            Hello.
        </h1>
        <p class="nomargin">I'm Errietta Kostala and I'm a full stack developer...</p>
        <p class="cursive nomargin">
            with a passion.
        </p>
        <h2 class="caps ">
            <a class="underline" href="#more" id="learnmore">Learn more</a>
        </h2>
    </div>
    <br/>
    <div id="more">
    </div>
    <div>
        <p>
            Ever since I was a teenager, I knew I wanted to be involved in programming. I spent countless hours working on my own projects, learning more
    and more and becoming more and more fascinated.
        </p>
        <p>
           As I started getting
    involved in freenode, Mozilla, and other open
    source projects, it became a way to be part of a community - I could
    network, make friends, and meet people that would be with me for the rest of my
    life.
        </p>
        <p>
            It then became clear to me - I didn't <em>just</em> want to follow my
    passion of programming. I wanted to <a href="http://errietta.me/blog/first-activity-stem-ambassador/" target="_blank" class="underline">teach
    others</a> what I knew. And I wanted to keep supporting Open Source projects
    and helping others.
        </p>
        <p>
            For this reason, I studied Web
            Technologies at the University of Huddersfield - so that I can learn even more about what I'm passionate for, and I did an internship for <a href="http://shadow.cat" target="_blank">Shadowcat Systems</a> - a small company in Lancaster that holds open source and community projects very dearly.
        </p>
       <p>
          I'm an ex-employee of FairFX (or as I call it FairF-eX) and I currently work as a software developer for <a href='https://zoopla.co.uk' target='_blank'>Zoopla</a>, and I still spend a lot of my time on community projects.
        </p>
        <p>
            Do you want to learn more about me? Check out my <a href="/cv" class="underline">projects</a> or my <a href="http://errietta.me/blog" target="_blank" class="underline">blog</a>.
        </p>
    </div>

    <div>
      <h3>Latest blog posts</h3>
      <app-posts :posts="posts"></app-posts>
    </div>

    <div>
      <h3>Testimonials</h3>

      <blockquote>
          <p>
            I have a sneaking suspicion this woman is going to be scary good in a few years.
          </p>
          <small>
              Matt Trout, Shadowcat Systems Technical Director.
          </small>
      </blockquote>

      <blockquote>
          <p>
              We get a lot of contributors but it is not every day someone so
      seamlessly integrates with the entire team. I went away on vacation and when I
      came back Errietta was an integral part of our work environment – a powerful
      presence on IRC, at our video demo call and on GitHub.
          </p>
          <small>
              Cassie McDaniel, Webmaker UX Lead
          </small>
      </blockquote>

      <blockquote>
          <p>
                  Errietta has all the qualities of a great web developer — she
              learns quickly, values feedback from both engineers and designers, and cares
              deeply about sharing her knowledge with others. I'm always impressed by how
              quickly she's willing to jump into a new code base and effectively solve
              problems.
          </p>
          <small>
              Kate Hudson, Webmaker Developer
          </small>
      </blockquote>
    </div>
  </div>
</template>

<script>
import Posts from './Posts.vue';

export default {
  name: 'HelloWorld',
  props: {
  },
  components: {
    'app-posts': Posts
  },
  asyncData ({ store }) {
    return store.dispatch('fetchPosts');
  },

  computed: {
    posts() {
      return this.$store.state.posts.filter(post => post.id < 3);
    }
  }
}
</script>

<style scoped>
hr.styled {
  padding: 0;
  border: none;
  border-top: medium double #333;
  color: #333;
  text-align: center;
}

hr.styled:after {
  content: '\0000A7';
  display: inline-block;
  position: relative; 
  top: -0.7em;  
  font-size: 1.5em;
  padding: 0 0.25em;
  background: #EEE9F5;
}

.header {
  background-color                :#2E1F47;
  color                           :white;
  font-size                       :20pt;
  width: 100%;
}

.title {
  font-weight                     :700;
}

.jumbotron {
  color: inherit;
  background-color: #FFF9FD;
  padding: 10px;
  margin: 10px 0 0;
  border-top: 2px dotted #ff05ab;
  border-bottom: 2px inset #ff05ab
}

.jumbotron .h1,.jumbotron h1 {
  color: #ff05ab;
  font-weight: 700;
  font-size: 400%;
  margin: 0;
}

.jumbotron p {
  margin-bottom: 15px;
  font-weight: 200;
  font-size: 160%;
}

.container .jumbotron {
  border-radius: 6px
}

.jumbotron .container {
  max-width: 100%
}


</style>
