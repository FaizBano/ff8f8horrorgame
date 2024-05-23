gitimport inquirer from "inquirer";
// --------------------GAME VERIABLES-------------------------------
let enemies = ['Sceleton', 'Zombie', 'Warrior', 'Assassin'];
let maximumHealth = 75;
let heroHealth = 100;
let ememyAttackDamagetoHero = 25;
let attackDemagetoEnemy = 50;
let numHealthPotion = 3;
let healpotionHealthAmount = 30;
let healthPotionDropChance = 50;
// ---------------------WHILE LOOP CONDITION---------------------------------
let gameRunning = true;
console.log("\n\t WELCOME TO DEAD ZONE! \n\t  ");
game: while (gameRunning) {
    let enemyHealth = Math.floor(Math.random() * maximumHealth + 1);
    let enemyIndex = Math.floor(Math.random() * enemies.length);
    let enemy = enemies[enemyIndex];
    console.log(`# ${enemy} has appeared # \n`);
    while (enemyHealth > 0) {
        console.log(` your Health : ${heroHealth}`);
        console.log(`${enemy} health: ${enemyHealth}`);
        let option = await inquirer.prompt([
            {
                name: "ans",
                type: "list",
                message: "What would you like to do?",
                choices: ["1. Attack", "2. Take Health Potion", "3. Run"]
            }
        ]);
        if (option.ans === "1. Attack") {
            let damagetoEnemy = Math.floor(Math.random() * attackDemagetoEnemy + 1);
            let damagetoHero = Math.floor(Math.random() * ememyAttackDamagetoHero + 1);
            enemyHealth -= damagetoEnemy;
            heroHealth -= damagetoHero;
            console.log(`you strik the ${enemy} for ${damagetoEnemy}`);
            console.log(` ${enemy} strike you for ${damagetoHero} damage`);
            if (heroHealth < 1) {
                console.log("you have taken too much damage, you are too week to continue");
                break;
            }
        }
        else if (option.ans === "2. Take Health Potion") {
            if (numHealthPotion > 0) {
                heroHealth += healpotionHealthAmount;
                numHealthPotion--;
                console.log(`you use health potion for ${healpotionHealthAmount}`);
                console.log(`you now have ${heroHealth} health`);
                console.log(`you have ${numHealthPotion} health potion left`);
            }
            else {
                console.log(`you have your all health potion. defeat enemy to get a chance of health potion`);
            }
        }
        else if (option.ans === "3. Run") {
            console.log(`you run away from ${enemy}`);
            continue game;
        }
    }
    if (heroHealth < 1) {
        console.log("you are out from the battle, you are too weak");
        break;
    }
    console.log(`${enemy} has defeated ! `);
    console.log(`you have ${heroHealth} health`);
    let rendomNumber = Math.floor(Math.random() * 100 + 1);
    if (rendomNumber < healthPotionDropChance) {
        numHealthPotion++;
        console.log(` your enemy give you health potion`);
        console.log(` your health is ${heroHealth}`);
        console.log(`you number of health potion is ${numHealthPotion}`);
    }
    let userOption = await inquirer.prompt([{
            name: "ans",
            message: ["What would you like to do now?"],
            type: "list",
            choices: ["1. Continue", "2. Exit"]
        }
    ]);
    if (userOption.ans === "1. Continue") {
        console.log(`you are continue to your adventure`);
    }
    else {
        console.log("you successfuly Exit from dead Zone");
        break;
    }
    console.log("Thank You for Playing Dead Zone Game");
}
