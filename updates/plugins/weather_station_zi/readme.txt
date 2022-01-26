Weather Station is a plugin for both users and developers, to display and share weather data. Run it from the plugin tab in the right click menu, search your location, and it will update the weather every hour and send the data to all open ghosts. It will also show the current weather/forecast data in the plugin menu. Developers are welcome to make use of the weather data in their ghosts, and even bundle this plugin with their ghosts if they would like.

Ghosts cannot see your location data unless you explicitly turn this setting on in the settings menu. Therefore, many ghosts can have weather information without you needing to trust each one.

A full list of events sent by the plugin, as well as the references associated with them, is available in events_reference.txt. The OnWeatherStation.Weather event is run every time the weather updates, the location changes, another ghost requests the weather, or another ghost boots. And possibly more that I forgot. The other events do not run unless you call them with raiseplugin.

Please note: I only get 1 million free API calls a month. If you're a developer and that limit worries you, please check the note near the top of main.dic about it. My code uses weatherapi.com to get the weather, and you are welcome to use anything you find in main.dic and envelopes.dic! I would appreciate a link back to me if you use my code.

Weather Station v0.0.1
Made by Zichqec https://zichqec.github.io/s-the-skeleton/
Using Weather API https://www.weatherapi.com/