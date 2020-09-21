function openCity(evt, cityName) {
  // Variables
  const tabcontent = document.getElementsByClassName("tabcontent");
  const tablinks = document.getElementsByClassName("tablinks");

  // Get all elements with class="tabcontent" and hide them
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.querySelector("#infoSection").innerHTML = `<div id="pageContainer">
<div id="bodyGrid">
  <div id="tabContainer">
    <!-- Tab names -->
    <div class="tab">
      <button
        class="tablinks active"
        onclick="openCity(event, 'ourStory')"
      >
        Our Story
      </button>
      <button class="tablinks" onclick="openCity(event, 'menu')">
        Menu
      </button>
      <button class="tablinks" onclick="openCity(event, 'reservation')">
        Reservations
      </button>
    </div>

    <!-- Tab content -->
    <div id="ourStory" class="tabcontent">
      <p class="story">
        The oldest restaurant in Italy, located near the ocean beach in
        Milan, has been delighting hungry customers since 1800. Founded by
        Nick and Bereket and owned still today by both, Terra & Mare is
        the oldest Italian restaurant in Milan and the oldest restaurant
        in the city’s theatric district. The place’s not only known for
        its food, but also for the historical and architectural value of
        its location, which has been recognized as a landmark by the
        Locali Storici d’Italia association, the only Italy establishment
        to have received the honor. So beautiful and iconic it is, that
        Terra & Mare has been chosen in more than one occasion as a
        backdrop to famous movies and tv series.
        <img
          id="storyImage"
          src="https://restaurantstory.co.uk/wp-content/uploads/2019/12/Team-1024x613.jpeg"
        />
        Terra & Mare is best known for its outdoor seating area, which
        spills onto the sidewalk along the ocean. It’s an easy place to
        spot actors, models, rock stars, and socialites, but the food is
        great, too—come for a strong offering of classics executed really
        well, with one of the city’s best handmade pasta. It’s the perfect
        place to take out of town guests for an "only in Milan" type of
        experience, where they'll see a full cross-section of downtown
        denizens and get a great meal, to boot.
        <br />
        <br />
        Our company has developed a reputation for consistent,
        non-complicated dining through years of attention to detail of our
        operations. We never compromise on the quality of raw food we
        select or take shortcuts in food preparation. Personal and
        friendly service to every guest who enters the door is a priority
        and will continue to be a priority, Terra & Mare.
      </p>
    </div>

    <div id="menu" class="tabcontent">
      <h2 id="menuTitle">Our Dinner Selection...</h2>
      <h2 id="appTitle">Appetizers</h2>
      <div>
        <div id="apps"></div>
      </div>
      <h2>Entrees</h2>
      <div id="entrees"></div>
      <h2>Desserts</h2>
      <div id="desserts"></div>
    </div>

    <div id="reservation" class="tabcontent">
      <form action="">
        <label>Full Name</label>
        <input id="name" type="text" />
        <label>Number of Guests</label>
        <input id="guests" type="text" />
        <label>Date</label>
        <input id="date" type="text" />
        <label>Special Notes</label>
        <textarea id="notes" rows="5"></textarea>
        <label>Seating Preference</label>
        <select id="select">
          <option value="Indoor">Indoor</option>
          <option value="Outdoor">Outdoor</option>
        </select>
        <button id="reserve" type="submit">Reserve Table</button>
      </form>
    </div>
  </div>
  <div id="foodPhotos">
    <img
      class="foodPhoto"
      src="https://images.unsplash.com/photo-1516100882582-96c3a05fe590?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      alt=""
    />
    <img
      class="foodPhoto"
      src="https://images.unsplash.com/photo-1507273026339-31b655f3752d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
      alt=""
    />
    <img
      class="foodPhoto"
      src="https://images.unsplash.com/photo-1568627175730-73d05bd69ca9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      alt=""
    />
    <img
      class="foodPhoto"
      src="https://images.unsplash.com/photo-1588685582221-28183cab4f8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      alt=""
    />
    <img
      class="foodPhoto"
      src="https://images.unsplash.com/photo-1560963689-7f69d8ca0518?ixlib=rb-1.2.1&auto=format&fit=crop&w=1293&q=80"
      alt=""
    />
  </div>
</div>
<footer>© 2020 Terra & Mare</footer>
</div>`;
