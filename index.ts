import { DateTime, OptimaDB, OptimaTable } from "@inflector/db";
import * as tables from "./tables";
import * as readline from "readline";

const db = new OptimaDB(tables , { mode : "Disk" , path : "data"
});

export const rl= readline.createInterface({
    input: process.stdin,
    output: process.stdout
});





function showMenu() {
    console.log("\n");
    console.log("\n");
    console.log("\n");
    console.log("\n");
    console.log("\n");
    console.log("\n");
    console.log("\n");
    console.log("\n");
    console.log("\n");
    console.log("\n");
    console.log("\n=== Data management menu ===");
    console.log("1. add data .");
    console.log("2. retrieve data .");
    console.log("3. change data .");
    console.log("4. delete data .");
    console.log("5. close the app .");
    rl.question("Choose an option: ", (answer) => {
        handleChoice(answer);
    });
}
function handleChoice(choice: string) {
    switch (choice) {
        case "1":
            showMenu1();
            break;
        case "2":
            showMenu2();
            break;
        case "3":
            console.log("change data .") ;
            break;
        case "4" :
            console.log("delete data .") ;
            break;
        case "5" :
            console.log("close the app .") ;
            rl.close();
            return;
        default:
            console.log("Invalid choice. Please try again.");
    }
}



function showMenu1() {
    console.log("\n");
    console.log("\n");
    console.log("\n");
    console.log("\n");
    console.log("\n");
    console.log("\n");
    console.log("\n");
    console.log("\n");
    console.log("\n");
    console.log("\n");
    console.log("1. add user .");
    console.log("2. add post ." );
    console.log("3. add comment .");
    console.log("4. follow user .");
    console.log("5. like post .");
    console.log("6 like comment .");
    console.log("7 back to menu .");
    rl.question("Choose an option: ", (answer) => {
        handleChoice1(answer);
    });
}

function handleChoice1(choice: string) {
    switch (choice) {
        case "1":
            console.log("user information :") ;
            break;
        case "2":
            console.log("add post .") ;
            break;
        case "3":
            console.log("add comment .") ;
            break;
        case "4" :
            console.log("follow user .") ;
            break;
        case "5" :
            console.log("like post .") ;
            break;
        case "6" :
            console.log("like comment .") ;
            break;
        case "7" :
            console.log("back to menu .") ;
            showMenu();
            return;
        default:
            console.log("Invalid choice. Please try again.");
    }
    showMenu1();
}

function showMenu2() {
    console.log("\n");
    console.log("\n");
    console.log("\n");
    console.log("\n");
    console.log("\n");
    console.log("\n");
    console.log("\n");
    console.log("\n");
    console.log("\n");
    console.log("\n");
    console.log("1 retrive users .");
    console.log("2 retrive top user by followers .");
    console.log("3 retrive posts .");
    console.log("4 retrive top posts by likes .");
    console.log("5 retrive comments .");
    console.log("6 retrive top comments by likes .");
    console.log("7 back to menu .");
    rl.question("Choose an option: ", (answer) => {
        handleChoice2(answer);
    });

}
function handleChoice2(choice: string) {
    switch (choice) {
        case "1":
            console.log("users :") ;
            //function to retrieve users
            break;
        case "2":
            console.log("retrieve top user by followers .") ;
            //function to retrieve top user by followers
            break;
        case "3":
            console.log("retrieve posts .") ;
            //function to retrieve posts
            break;
        case "4" :
            console.log("retrieve top posts by likes .") ;
            //function to retrieve top posts by likes
            break;
        case "5" :
            console.log("retrieve comments .") ;
            //function to retrieve comments
            break;
        case "6" :
            console.log("retrieve top comments by likes .") ;
            //function to retrieve top comments by likes
            break;
        case "7" :
            console.log("back to menu .") ;
            showMenu();
            return;
        default:
            console.log("Invalid choice. Please try again.");
    }
    showMenu2();
}





showMenu();



