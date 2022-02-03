—————————— Terms ——————————

This shell is free for you to modify and use to create your own ghosts with.
You may redistribute it as the shell bundled with a ghost, but you may not redistribute any version of the shell on its own.
Please keep this credit in the readme file.

Please let me know if you find any issues!

Skeleton 00 Freeshell v1.0.0
Created by Zichqec https://zichqec.github.io/s-the-skeleton/


—————————— How to change the colors ——————————

The colors of this freeshell can be easily customized. In the shell's folder, you will see several png files that begin with 'color_'. These files control the colors; simply import them into an art program, use the paint bucket to change the color to what you like, save the file, and reload the shell to see the changes. Each file is labelled with what it changes, and you don't have to pick different colors for each one. You could, for example, make the hoodie, sleeves, hood, drawstrings, and pocket all the same color, if you wanted the hoodie to be a single color. The extra options are there if you want to make something more complicated.

If you want to add something like stripes or a color on half the sleeves, you're sort of on your own. I would recommend adding these things to the lineart pieces in the surface folders, since that will show above the custom colors. Or you can brave my nightmarish seriko code. Do as you like!


—————————— How to pick arms and expressions ——————————

This shell comes with only 3 base surfaces; a 3/4 pose, a forward facing pose, and a sideways pose. Each of these poses has several expressions and some arm positions to pick from, which you can use to create intricate expressions on the fly. They also all have their own blinking and talking animations, and an option to stop the talking animation (in case you want to write narration, etc). Below is a reference for what intervals do what.

I recommend making use of surface test to make your poses! You can tick the 'copy' box in surface test to make it copy the last surface/interval you clicked to your clipboard automatically every time you choose one. You can also turn on the 'ID Multi Select' in the little drop down menu in the bottom left corner, which will let you apply multiple intervals at once.

\i[5] - Stops talking animation on any surface

Surface 0 - 3/4 pose
	//———Eyes———
	\i[10] - Forward
	\i[11] - Left
	\i[12] - Right
	\i[13] - Down
	\i[14] - Rolling
	\i[15] - Closed, up
	\i[16] - Closed, down
	
	//———Eyebrows———
	\i[20] - Annoyed
	\i[21] - Angry
	\i[22] - Neutral
	\i[23] - Confused
	\i[24] - Mild
	\i[25] - Sad
	
	//———Mouths———
	\i[30] - Normal
	\i[31] - Frown
	\i[32] - Snarl
	\i[33] - Pouty
	
	//———Page left arms (shell's right arm, left side of the screen)———
	\i[40] - Down
	\i[41] - Hip
	\i[42] - Gesticulate
	\i[43] - Think
	
	//———Page right arms (shell's left arm, right side of the screen)———
	\i[50] - Hip (Always active)


Surface 1 - Forward pose
	//———Eyes———
	\i[10] - Forward
	\i[11] - Left
	\i[12] - Right
	\i[13] - Down
	\i[14] - Up
	\i[15] - Rolling
	\i[16] - Closed, down
	
	//———Eyebrows———
	\i[21] - Angry
	\i[22] - Neutral
	\i[23] - Confused
	\i[24] - Mild
	\i[25] - Sad
	
	//———Mouths———
	\i[30] - Normal
	\i[31] - Frown
	\i[32] - Snarl
	\i[33] - Pouty
	
	//———Page left arms (shell's right arm, left side of the screen)———
	\i[40] - Hip
	\i[41] - Frustration
	\i[42] - Exasperated
	\i[43] - Pointing
	
	//———Page right arms (shell's left arm, right side of the screen)———
	\i[50] - Hip
	\i[51] - Frustration
	\i[52] - Exasperated
	
	//———Crossed arms———
	\i[60] - Crossed


Surface 2 - Sideways pose
	//———Eyes———
	\i[10] - Forward
	\i[11] - Back
	\i[12] - Down
	\i[13] - Up
	\i[14] - Rolling
	\i[15] - Closed
	
	//———Eyebrows———
	\i[20] - Annoyed
	\i[21] - Angry
	\i[22] - Worried
	\i[24] - Mild
	\i[25] - Sad
	
	//———Mouths———
	\i[30] - Normal
	\i[31] - Frown
	\i[32] - Snarl
	
	//———Page left arms (shell's right arm, left side of the screen)———
	\i[40] - Crossed
	\i[41] - Gesturing
	
	//———Page right arms (shell's left arm, right side of the screen)———
	\i[50] - Crossed (Always active)


I would also recommend (if you're using AYA/YAYA) creating functions for your most common poses. For example, I can set up a pose like so:

frustration
{
	"\s[1]\i[14]\i[21]\i[32]\i[41]\i[51]"
}

And now I can write %(frustration) in my dialogues to call this pose!


—————————— descript.txt ——————————

I've included a homeurl with this shell, in case I decide to update any part of the shell later to clean up the art or add new poses/expressions. I will not include the color files in any updates that I make, so that it doesn't overwrite your custom colors, but if you make any other modifications to this shell or otherwise don't want the shell to be able to update, please remove the homeurl in descript.txt.

You can also change the look of the right click menu by editing the RGB values in descript.txt, as well as editing the images that start with 'menu_' in the shell's folder.