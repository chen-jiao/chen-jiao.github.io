<script language="Javascript" type="text/javascript">
function search_google()
{
  var query = document.getElementById("google-search").value;
  window.open("https://google.com/search?q=" + query
      + "%20site:" + "{{site.url}}");
}
</script>
