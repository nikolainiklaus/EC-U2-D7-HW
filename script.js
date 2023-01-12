function deleteTrack(event) {
  // Get the parent row of the delete button that was clicked
  let row = event.target.closest("tr");
  // Remove the row from the table
  row.remove();
  // Notify the user that the track has been deleted
  alert("Track deleted!");
}

window.onload = function () {
  document.querySelector("#addTrackBtn").addEventListener("click", addTrack);

  const deleteButtons = document.querySelectorAll(".delete-btn");

  // Add a click event to each button
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", deleteTrack);
  }
};

function addTrack() {
  let trackNumber = document.querySelector("#trackNumber").value;
  let trackTitle = document.querySelector("#trackTitle").value;
  let artistName = document.querySelector("#artistName").value;
  let trackDuration = document.querySelector("#trackDuration").value;

  // create a new table row
  let newRow = document.createElement("tr");
  newRow.innerHTML = `
      <td>${trackNumber}</td>
      <td>${trackTitle}</td>
      <td>${artistName}</td>
      <td>${trackDuration}</td>
      <td><button class="btn btn-danger delete-btn">DELETE</button></td>
    `;

  // append the new row to the table body
  let tableBody = document.querySelector(".tracklist table tbody");
  let deleteBtn = newRow.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteTrack);
  tableBody.appendChild(newRow);

  // clear the input fields
  document.querySelector("#trackNumber").value = "";
  document.querySelector("#trackTitle").value = "";
  document.querySelector("#artistName").value = "";
  document.querySelector("#trackDuration").value = "";

  // Notify the user with an alert message containing the name of the track
  alert(`New Track: ${trackTitle} added to the tracklist`);

  // close the modal
  $("#addTrackModal").modal("hide");
}
