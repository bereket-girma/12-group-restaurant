document.querySelector(
  ".cardsContainer"
).innerHTML = `<div class="column card1">
<div class="header">
  <h4>Latest News</h4>
  <hr />
</div>
<div >
  <h5 >Terra & Mare is opening...</h5> <h5 class="bold">June 7</h5>
  <p id="subHeader">
  Next month in New York, Terra & Mare is opening its fifth location, and first in New York.
  “We are living in an unprecedented time, but the one thing that we’ve seen is that people will always find comfort in food, especially Italian food,” said its founders in a release.
  Even during this tumultuous economic chapter, Terra & Mare continues to experience sales growth, increased customer loyalty and retains a strong brand reputation.  
  There is no other restaurant positioned like Terra & Mare in the competitive set, so we are confident that this concept will thrive in New York and are excited about the growth potential in the Empire State and beyond... read more >
  </p>
</div>
</div>
<div class="column card2">
<div class="header">
  <h4>Today's Special</h4>
  <hr />
  <div id="specialMenue"></div>
  <h5>
    Red Pepper Tagliatelle
    ....................................................................50
  </h5>
  <p>
    Fresh, handmade tagliatelle, cooked with tomato and red pepper
    sauce. Garnished with fresh parsley and peas.
    
  </p>
</div>
</div>

<div class="column card3">
<div class="header">
  <h4>Our Location</h4>
  <hr />
</div>
<div id="map">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.0593149468227!2d-115.14594248470137!3d36.16511121088955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c39ab242ee05%3A0x14135188ae6c3322!2sPunchCode!5e0!3m2!1sen!2sus!4v1600451551323!5m2!1sen!2sus"
    width="388"
    height="159"
    frameborder="0"
    style="border: 0"
    allowfullscreen=""
    aria-hidden="false"
    tabindex="0"
  ></iframe>
</div>
<div id="address-phone">
  <p id="address">123 Main Street, Las Vegas, NV 89001</p>

  <p>702-345-6789 * 702-123-4567 * Map * Directions</p>
</div>
</div>`;
