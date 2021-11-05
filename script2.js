let vars = {};
let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
  console.log(value);
  vars[key] = value;
});
document.getElementById("tamu").innerHTML = `Welcome ${vars.name1}`;
