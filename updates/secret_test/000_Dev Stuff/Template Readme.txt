This template is very heavily based on Zarla's GT Template. If you need a template that is more of a walkthrough, try that one here: http://ashido.com/ukagaka/

You're using X. Template YAYA - v1.0.5
You can use the 'Check Template Version' button to check if there's a new version!

If you find any bugs in this template, please tell me so I can correct them!

Feel free to contact me on Discord, or on any of my social medias. My website is here for more info (my socials are linked at the bottom) https://zichqec.github.io/s-the-skeleton/index.html

This ghost includes a to-do list of the basic stuff every ghost needs. If you want to use it, type %(debug = 1) into script input to turn on debug mode. That will give you a menu option for the test variable and the todo list. You can turn it off again with %(debug = 0). When you're done with it you can delete the zzz_todo.dic file from the master folder, just make sure you remove it in yaya.txt too.

If you need a place to host network updates, I've set up a tutorial on how you can do that with Github! https://zichqec.github.io/s-the-skeleton/github.html


I've included 3 Saoris with X. Template. Saoris are basically plugins you can add to your ghost with unique functions. The ones I've included are:
Gomi - Allows the ghost to interact with the recycle bin, seeing how many items are in it and emptying it.
CPUID - Gathers system information.
Time_Check - Does time based math, so you can check the time between two dates, for example.
If you want to read what we've learned about these saoris and how to use them, you can see it here https://docs.google.com/document/d/1EJSeEMGdN2eHSfWGyS-acG0DzfqpqEvMU-kYuGjbBtk/edit


Here are the resources I most recommend when making ghosts, I use these almost daily and they will save you so much headache.

http://umeici.onjn.jp/files/tama_v1p1.zip This is Tama, a debugging tool for AYA and YAYA. All you need to do is reload your ghost while Tama is running, and it will show you all kinds of information. If your ghost has errors upon startup, Tama can help you find them.

https://translate.google.com/translate?hl=&sl=ja&tl=en&u=http%3A%2F%2Fssp.shillest.net%2Fukadoc%2Fmanual%2Flist_shiori_event.html This is a list of Shiori events. It's run through google translate since it's in Japanese originally.

https://translate.google.com/translate?hl=&sl=ja&tl=en&u=http%3A%2F%2Fssp.shillest.net%2Fukadoc%2Fmanual%2Flist_sakura_script.html This is a list of sakurascript tags and what they do. It's run through google translate since it's in Japanese originally.

https://translate.google.com/translate?hl=&sl=ja&tl=en&u=http%3A%2F%2Femily.shillest.net%2Fayaya%2Findex.php&sandbox=1 This is the YAYA wiki, where you can find more information about programming with YAYA. I'd come here if you're looking to do anything complicated. It's run through google translate since it's in Japanese originally.

https://drive.google.com/file/d/16JYyweRFNPhq-BzLQhPu5EPwG557hFto/view?usp=sharing This is a download for Coordin, a little program that can help you make simple collisions. Just drag and drop your surface onto it, then click and drag an area, and it'll copy the coordinates to your clipboard for you to paste right into surfaces.txt!

You can't go wrong with those resources on your side! If by some chance you are not a part of the Ukagaka Dream Team Discord Server, you can join us here. https://ukagakadreamteam.tumblr.com/discord
Having feedback from other people is incredibly helpful, and we're always glad to meet more ghost devs!



----------Differences from the GT Template----------

Differences users will see:

-When installing a ghost with X. Template, you'll be offered the options to call or change to them in dialogue.
-When checking emails, the ghost will offer to display the headers.
-Automatic update checks are built in, and will notify the user if a new update is available.
-The ghost will track when they were last closed, and comment if it's been a long time when you open them.
-The ghost will say 'happy new year' as the year rolls over.
-When changing shells, the ghost will stay in the same position on screen.
-Right clicking the ghost will not cause their personal menu to open.
-Changing name/birthday/pronouns will lead back to the config menu.
-Offers a changelog after updating!
-Hitting the ghost for the first time will pop up a confirmation dialogue, to prevent accidental punches.
-You can type in the name of the month you were born instead of just the number.
-Petting ghosts repeatedly without taking your mouse off of them will have special dialogue.
-Config menu has toggle buttons, and also has options for hemisphere, and to opt in to beta updates.
-Always has dialogue when done installing something, even if it's something niche like a calendar skin.
-There is no title system, since I never include it in my ghosts.


Differences devs will see:

-Very few tutorial comments, all code is formatted consistently and has been cleaned up where possible.
-A Kero is not present unless you add them in.
-Uses the new seriko definition.
-The test variable will only show up if the variable 'debug' is set to 1, hiding it from the user.
-When 'debug' is set to 1, you can use the test variable by pressing V when the ghost is the active window.
-Sakurascript commands, such as those to open the calendar or set a wallpaper, have been separated from dialogue with --s. This makes it a bit easier to create ghosts with multiple modes, as you won't need to copy the commands into each line of dialogue.
-All menu related envelopes are optimized and have been moved to word.dic.
-Anchor.dic has been updated to allow https links as well as http.
-Removed some functions from etc.dic that were non-functional, and some other redundant functions.
-Much fewer global variables, some variables have been changed to arrays, notably the birthday variables (bithday[0] to see the written birthday and birthday[1] to see it written DD/MM) and the passhour/min/sec variables (are now runtime[0], [1], and [2]).
-Commu.dic should be ready to use, and offers a method of doing commu dialogue that is much more readable.
-You can have the template ghost check if there is a new version of the template.


---Changelog---

-v1.0.5-

-Fixed a terrible bug I added in 1.0.2, which prevented you from changing the talk rate or the pronouns... Turns out those brackets were necessary!
-Added a Commu Ping Menu. If the variable debug is set to 1, you can press C to get a nice window with the names of all the currently open ghosts in it. Click a name to send them a generic ping, or click the custom option to type in a custom message to send. Good for easily testing commu dialogues!
-Added a new hotkey: pressing Y will start a commu conversation with a random ghost, same as clicking the 'Talk to another ghost' option in the menu.
-Changed to the dedicated OnOffscreen function for offscreen dialogue, instead of using OnSecondChange. The format is a little more complicated, but now you can check if any character is off the screen, not just the sakura.
-Related, changed the name of MikireTalk and EndMikireTalk to OffscreenTalk and EndOffscreenTalk. Same functions, clearer labels.
-OnGhostChanging now checks to see if reference0 and sakuraname are the same, so you don't need to actually type your ghost's name in there at all.
-New function: leapyear. Is 1 if it's currently a leapyear, and 0 if it's not.
-When email checking fails because the user has their POP settings wrong, it opens the configuration dialogue to the POP page specifically.
-betaTester and nowscale variables are now properly initialized on first boot
-Got rid of the currentfile global variable. New system uses a local variable, and uses the SPLITPATH function to grab just the file name and extension instead of the whole path.
-Viewing headlines/RSS feeds will now display a choice marker in front of every item.
-Tweaked the format of the name change function and birthday teaching functions to better match the rest of X. Template.
-Added cancel buttons to the name change function and birthday teaching functions. These cancel buttons will activate a bit of code in the config menu, which closes the appropriate input boxes. If you were in the middle of changing your birthday, this also resets it back to what it was before you tried to change it.
-Updated surfaces.txt with some new info about SERIKO comments, and tweaked my comments appropriately.
-Fixed a missing surface call when there was an MD5 error during updates, and corrected an incorrect surface call in the SNTP functions.


-v1.0.4-

-Removed some testing stuff I left in commu.dic by mistake
-Uncommented some stuff that I had commented in aitalk.dic by mistake
-Added some clarification about nonoverlap in aitalk.dic


-v1.0.3-

-Fixed an incorrect variable name when updates finish. 'updateavailable' should be 'AutoUpdates[1]'
-Changed "'o clock" in the hour notifications to "o'clock"
-Added a better loop prevention system in commu dialogue
-Added a non-interrupt system in commu dialogue
-Slightly restructured things in OnSecondChange
-Checking for an update from the ghost's menu now actually starts an update, not just a check (sorry, I keep changing my mind lol)
-Changed the recommendations for UpdateVars, now it has a proper check to see if the variable exists
-Made a tweak to nowday and nowmonth. If you call them and include 'last' or 'next' as the second argument, you'll get the previous day/month or next day/month, respectively.
-Added the Capitalize function
-When done creating a .nar file, the ghost will give you a link to click that will open the folder you made the .nar in.


-v1.0.2-

-Fixed email checking again, I forgot to change the name of 1 variable and I'm very sorry for the trouble.
-Fixed the aitalkinterval being set to 6 minutes instead of 5 during the first boot, and adjusted a check in the config menu as well.
-Removed some unnecessary brackets in the config menu and some spots in etc, added in some semicolons instead.
-Made the RSS/Headline failure dialogue tell the user what error it got even if it isn't a recognized error.
-Added a note about OnSNTPFailure.
-Added a check for ] characters when setting wallpapers, as a ] in the file name will cause the wallpaper command to break. X. Template will now tell you that you need to remove any ]s from the file name first.


-v1.0.1-

-Fixed email checking, it should no longer spew headers all over the place before you've asked.
-Fixed the header code, it's much simpler, cleaner, and works properly now.
-Fixed an issue where the auto updates button wasn't appearing in the config menu.
-Changed some options in the config menu to display a 'Back to menu' and 'I'm done' button, instead of clicking the balloon to go back.
-Changed how new variables are added in updates, and removed that section from the 'Some YAYA tips' file since it's no longer relevant (new explanation is in Bootend because it's very short)
-Changed the URL that links to the template in the right click menu; it now correctly points to X. Template's page instead of the website's homepage.
-Changed wallpaper code so that it can see what OS you're running without needing the Saori, meaning that the span option should always appear if available.
-Changed the function that checks the template's version number, the changelog will now be displayed instantly.


-v1.0.0-

-Initial release