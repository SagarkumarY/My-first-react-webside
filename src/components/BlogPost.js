import React from 'react';
import './BlogPost.css'

function generateAnimeBlogPost() {
  return (
    <div className='container1'>
    
      <h1>Top 10 Must-Watch Anime Series</h1>

      <p>If you're a fan of anime or just getting started, here's a curated list of the top 10 must-watch anime series that you shouldn't miss. These shows have captured the hearts of millions of viewers worldwide and have become iconic within the anime community.</p>

      <h2>1. Attack on Titan</h2>

      <p>Set in a world where humanity is on the brink of extinction due to giant humanoid creatures called Titans, "Attack on Titan" is a thrilling and action-packed series that follows the journey of Eren Yeager and his friends as they fight against these monstrous beings. With intense battles, complex characters, and a gripping storyline, this anime is a must-watch for any anime enthusiast.</p>

      <h2>2. Fullmetal Alchemist: Brotherhood</h2>

      <p>"Fullmetal Alchemist: Brotherhood" is a masterpiece that combines action, adventure, and drama seamlessly. It tells the story of two brothers, Edward and Alphonse Elric, who embark on a journey to find the Philosopher's Stone to regain their bodies after a failed alchemical experiment. With deep themes, strong character development, and an intricate plot, this series is a must-see for anime fans.</p>

      <h2>3. Death Note</h2>

      <p>"Death Note" is a psychological thriller that explores the battle of wits between Light Yagami, a high school student who discovers a supernatural notebook that can kill anyone whose name is written in it, and the eccentric detective known as L. With its intricate plot twists and morally ambiguous characters, this anime will keep you on the edge of your seat from start to finish.</p>

      {/* Rest of the blog post content */}
    </div>
  );
}

function BlogPost() {
  const blogContent = generateAnimeBlogPost();

  return (
    <div>
      {blogContent}
    </div>
  );
}

export default BlogPost;
