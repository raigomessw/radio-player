// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>

let apiUrl; // Declare apiUrl at the global scope
let data;

document.addEventListener("DOMContentLoaded", function () {
  apiUrl = "http://api.sr.se/api/v2/channels?format=json&size=100";

  // Fetch data and render channels
  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((responseData) => {
      data = responseData;
      renderChannels(data.channels);
    })
    .catch((error) => console.error("Error fetching data:", error));
});

function fetchData(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  });
}

function renderChannels(channels) {
  const channelsContainer = document.getElementById("channels");

  // Initial rendering of all channels
  channels.forEach((channel) => {
    renderChannel(channel, channelsContainer);
  });
}

function renderChannel(channel, container) {
  const channelDiv = document.createElement("div");
  channelDiv.classList.add("channel");

  channelDiv.innerHTML = `
    <h2 class="channel-name">${channel.name}</h2>
    <img class="channel-image" src="${channel.image}" alt="${channel.name} Image">
    <audio controls class="channel-audio">
      <source src="${channel.liveaudio.url}" type="audio/mpeg">
    </audio>
  `;

  container.appendChild(channelDiv);
}

function handleSearch() {
  const searchInput = document.getElementById("search");
  const searchValue = searchInput.value.trim().toLowerCase();

  const channelsContainer = document.getElementById("channels");
  channelsContainer.innerHTML = "";

  if (!searchValue) {
    renderChannels(data.channels);
    return;
  }

  fetchData(apiUrl)
    .then((data) => {
      const filteredChannels = data.channels.filter((channel) =>
        channel.name.toLowerCase().includes(searchValue)
      );

      if (filteredChannels.length === 0) {
        const noResultsMessage = document.createElement("p");
        noResultsMessage.textContent = "No matching channels found.";
        channelsContainer.appendChild(noResultsMessage);
      } else {
        filteredChannels.forEach((channel) =>
          renderChannel(channel, channelsContainer)
        );
      }
    })
    .catch((error) => console.error("Error fetching data:", error));
}

