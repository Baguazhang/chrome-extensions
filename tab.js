<!--
Chrome-extension "Improved" new tab.
Main page for the GUI.
  Rory Summers 2013.
-->

<html>
<head>
<title>start</title>
<!--- <link rel="shortcut icon" type="image/gif" href="" /> -->
<link href='http://fonts.googleapis.com/css?family=Ubuntu:500 | 300' rel='stylesheet' type='text/css'>

<link href='default.css' rel='stylesheet' type='text/css'>
</head>

<body>
<div class="toolbar">
  <textarea id="noteText"></textarea>
</div>
<div class="keepcentered"> 
  <center><div id="time"></div></center>

    <table id="bookmarks" width="100%" border="0px" style="color = "#2B96D9"">
    </table>
    <br>
    <input id="search" placeholder="search" type="text" />
    <br>
    <table width="100%" border="0px">
      <tr>
        <td><input id="subreddit" placeholder="Subreddit" type="text" /></td>
        <td><input id="Github" placeholder="Repo" type="text" /></td>
        <td><input id="Gmail" placeholder="Gmail" type="text" /></td>
        <td><input id="youtube" placeholder="Youtube" type="text" /></td>
        <td><input id="imdb" placeholder="IMDB" type="text" /></td>
      </tr>
    </table>
  </p>
</div>
</body>
<script src="tab.js"></script>
</html>
