/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/
/* 
Items List:
Torch
Map
Rusted Sword
Bow and Arrow


*/
const input = require('readline-sync');
const hasTorch = true;
const hasMap = false;
let rustedSword;
let bowAndArrow;
let endFight = false;

console.log("You see two paths: one leads to the mountains, the other to the village. ");
const choice = input.question("Do you go to the 'mountains' or the 'village'? \n");

if (choice === "mountains" && hasTorch) {
  console.log("You decide to move towards the mountains and find a trail of corpses leading up the dark mountain staircase. A flurry of strong gust swarm the surronding area.");
  userChoice = input.questionInt("Do you (1) decide to retreat or (2) continue walking up the mountain? (Please type 1 or 2)\n");
  if (userChoice == 1) {
    console.log(`You attempt to walk back down the mountain, but the wind blows away the fire from your torch. The wind creates a fog and you are unable to see more than a foot in front of you.
You are lost...`)
    console.log("Game Over")
    console.log("You completed the 'How did I get lost AGAIN?!' ending ")
  }
  if (userChoice == 2) {
    console.log("You continue your trail up the mountain where the winds have died down a bit. You find a rusted sword and a bow and arrow; however, you are unable to carry both iems.");
    userChoice = input.questionInt("Do you (1) pick up the rusted sword or (2) pick up the bow and arrows? (Please type 1 or 2) \n");
    if (userChoice == 1) {
      rustedSword = true;
      weapon = "Rusted Sword";
    }
    if (userChoice == 2) {
      bowAndArrow = true;
      weapon = "Bow and Arrow";
    }
    
    console.log(`As you pick up your ${weapon}, goblins jump from the shadows and block the exit back down the path. 
      It seems unlikely you are able to fend off all the goblins by yourself.`);
    userChoice = input.questionInt("Do you (1) retreat up the mountain or (2) attack the globlins? (Please type 1 or 2)\n");

      if (userChoice == 1){
        console.log(`You sprint up the steps of the mountain, you see a large figure defending a pedistal. As the figure get's closer, a goblin snatches your leg.
          You try to use your ${weapon} to keep the creatures off of you, but it is too late...`);
        console.log(`Game Over`);
        console.log("You completed the 'im scared of goblins' ending");
      }

      if (userChoice == 2 && weapon == "Bow and Arrow"){
        console.log(`You start shooting arrows towards the goblins and as they begin to drop, other goblins look discouraged to attack. The goblins flee from the scene.
        As you continue your path up the mountain, you see a large figure defending a pedistal.`);
        endFight = true
      }
      if (userChoice == 2 && weapon == "Rusted Sword") {
        console.log(`You start to fling your sword around and that scares off the goblins. The goblins flee from the scene.
        As you continue your path up the mountain, you see a large figure defending a pedistal. `)
        endFight = true
    }       
                     
  }

} else if (choice === "village" || hasMap) {
  console.log(`You find your way to the village, where you encounter a group of citizens of the village happily welcome you in. They tell you a story about a giant that has been 
imprissoned for 1000 years due to a hero's failure. The hero received a sword from the giant mountain to defeat a great monster; however, once the monster was defeated, 
the "hero" decided to keep the sword for himself instead of keeping his promise to the giant. Once the "hero" died, legends say that the sword has slowly made it's way back to 
the mountain. The villigers further explained, now another hero must find the sword by fate and return it to the Giant's petastil. Until that sword is brought back, anyone 
who enters this village WILL BE NO LONGER BE ABLE TO LEAVE THIS VILLAGE. Welcome to your new home...`);
  console.log("Game Over")
  console.log("You completed the 'Trapped' ending'")
} else {
  console.log("You get lost and wander aimlessly.");
  console.log("Game Over")
  console.log("You completed the 'How did I get lost?!' ending ")
}



//ENDING FIGHT with Bow and Arrow:
if (endFight == true && weapon == "Bow and Arrow") {
  console.log("You have made it to the top of the mountain and you are faced against a giant creature.");
  userChoice = input.questionInt("Do you (1) retreat or (2) attack the giant or (3) try talking to the giant? (Please type 1 or 2) ");

  if (userChoice == 1){
    console.log(`You attempt to escape by running back down the mountain; however, as you flee, some of your arrows fall from your inventory causing you to 
    trip and fall down the steps of the mountain.`);
    console.log("Game Over");
    console.log("You completed the 'At least I can still move my arms ending'");
  }
  if (userChoice == 3){
    console.log('You attempt to politely communicate with the giant, but they immediately stomp on you.');
    console.log("Game Over")
    console.log("You completed the 'Pancake ending' ");
  }
  if (userChoice == 2){
    console.log("You shoot at the giant with your bow and blind one of his eyes. You are down to your last arrow and the giant is appoaching you.");
    userChoice = input.questionInt("Do you (1) continue to shoot the remaing arrows at the giant OR (2) Attempt to evade the giants attack? (Please type 1 or 2) ");
    if (userChoice == 2){
      console.log(`The giant attempts to stomp on you; however, evade his attack. As you run towards the pedastil to gain space, you notice that engravings depict a sword.
        The giant attempts to chase you down while you shoot the remaining arrows at giants head. Your final arrow hit his other eye leaving it blinded. In a panic, the 
        giant then begins to fling it's body in your direction. You attempt to dodge the giant; however, he lands on you leaving you unable to escape.`)
      console.log("Game Over");
      console.log("You completed the 'Good Ending?' ");
    }
    else {
      console.log("As you fire off your remaining arrows, the giant sheilds face with its arms and kicks you back down the mountain.")
      console.log("Game Over");
      console.log("You completed the 'Points for effort' ending? ");
    }
  }
}


if (endFight == true && weapon == "Rusted Sword"){
  console.log("You have made it to the top of the mountain and you are faced against a giant creature.");
  userChoice = input.questionInt("Do you (1) retreat or (2) attack the giant or (3) try talking to the giant? (Please type 1, 2, or 3) \n");

  if (userChoice == 1){
    console.log(`You make it down the mountain safely with the ${weapon}`);
    console.log("Game Over");
    console.log("You completed the 'I tried my best' ending ");
  }
  if (userChoice == 2){
    console.log(`You run towards the giant flinging the ${weapon} towards it. The giant grabs you and says "All of you humans are the same." You hear a loud crunch followed by nothing.`)
    console.log("Game Over");
    console.log("You completed the 'I wanted to be the hero' ending ");
  }
  if (userChoice == 3){
    console.log(`You attempt to speak to the giant.`);
    console.log(`
      Giant: Welcome brave hero, I have been waiting for you. Thank you for finally returning the sword once intrusted to me by other past heros. Please put the sword back in the 
      petastil so my time of imprisonment can end.`);
    userChoice = input.questionInt("Do you (1) place the sword back in the petestil or (2) deny the giant's request? (Please type 1 or 2) \n");
    
    if (userChoice == 1){
      console.log(`You place the sword into the petestil. The petesil begins to light up and shoots a beam into the sky. The dark mountain that was once dark, was now lit up
      like the rest of the world. The giant begins to evaporate into thin air, with his voice fading, "Thank you kind hero for finally releasing me." As the giant's final parts
      disappear, you see the sword glow even brighter. The once rusted sword you saw is now made of gold and a aura of magical power can be felt as you get closer. It's power's
      slowly draw you in.\n`);

      userChoice = input.questionInt("Do you (1) leave the sword or (2) take the sword? (Please type 1 or 2) \n");
        //This is intentional. User needs to take the sword to continue the story.
      while(userChoice == 1){
        userChoice = input.questionInt("Do you (1) leave the sword or (2) take the sword? (Please type 1 or 2)\n");
      }
      console.log("You grab the swords handle and the mountain starts to rumble immensley.\n Too be continued...");
    if (userChoice == 2){
      console.log(`You deny the giant's request and they scream, "YOU ARE NO DIFFERENT THAN THE OTHERS." The giant then sprints towards you. You swing your sword at his leg,
      but due to it's current state, it shatters. The giant then says "I guess I will have to wait another 1000 years," then proceeds to grab and throw you off the side 
      of the mountain.`);
      console.log("Game Over");
      console.log("You completed the 'Rebellious' ending ");
    }
    }
  }
}

/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/