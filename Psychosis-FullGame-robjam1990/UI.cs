/*
<Comments> and Suggestions section:
*/
namespace UI
{
    internal class Program
    {
            // Define Print method to output text gradually
            static void Print(string text, int speed)
        {
            foreach (char c in text)
            {
                Console.Write(c);
                Thread.Sleep(speed);
            }
        }

        // Define the UI class
        class UI
        {
            // Define the PlayerUI class responsible for displaying player-related UI elements
            public class PlayerUI
            {
                // Method to display action menu
                public void DisplayActionUI()
                {
                    Print(@"  /_===========================================\/================================================_\  ", 60);
                    Print(@" ||(M)ovement        (O)bservation  (R)etreat  /                                                  || ", 60);
                    Print(@" ||                                           /                                                   || ", 60);
                    Print(@" ||                             __=========___\___________________________________________________|| ", 60);
                    Print(@" ||                             |Text (0)utput|                                                   || ", 60);
                    Print(@" ||Conversa(t)ion:              |__========__/                                                    || ", 60);
                    Print(@" ||_____________________________|_____________\___________________________________________________|| ", 60);
                    Print(@"  \_=============================================================================================_/  ", 60);
                }

                // Method to display character statistics
                public void DisplayCharacterUI()
                {
                    Print(@" |__==================================================================__|", 60);
                    Print(@" ||(C)haracter Statistics|                                             ||", 60);
                    Print(@" |__==================__/                                              ||", 60);
                    Print(@" ||/                                                                   ||", 60);
                    Print(@" ||                                                                    ||", 60);
                    Print(@" ||                                                                    ||", 60);
                    Print(@" ||                                                                    ||", 60);
                    Print(@" ||                                                                    ||", 60);
                    Print(@" ||                                                                    /|", 60);
                    Print(@" /\                                                                   / |", 60);
                    Print(@" ==\=================================================================/__|", 60);
                    Print(@" ____________________________________________________________________/   ", 60);
                }
            }

            // Define the Inventory class responsible for displaying inventory UI elements
            class Inventory
            {
                // Method to display inventory
                public void DisplayInventoryUI()
                {
                    Print(@"|__=============================================", 60);
                    Print(@"|/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/", 60);
                    Print(@"||(I)nventory:                                ||", 60);
                    Print(@"||                                            ||", 60);
                    Print(@"||                                            ||", 60);
                    Print(@"||                                            ||", 60);
                    Print(@"||                                            ||", 60);
                    Print(@"||                                            ||", 60);
                    Print(@"||                                            ||", 60);
                    Print(@"||                                            ||", 60);
                    Print(@"||                                            |\", 60);
                    Print(@"||                                            |_", 60);
                    Print(@"||                                            ||", 60);
                    Print(@"||                                            |_", 60);
                    Print(@"||                                            ||", 60);
                    Print(@"||                                            ||", 60);
                    Print(@"||                                            ||", 60);
                    Print(@"||                                            ||", 60);
                    Print(@"||                                            ||", 60);
                    Print(@"|\                                            ||", 60);
                    Print(@"| \                                           /\", 60);
                    Print(@"|__\=========================================/==", 60);
                    Print(@"   \____________________________________________", 60);
                }
            }

            // Define the Quests class responsible for displaying quest-related UI elements
            public class Quests
            {
                // Method to display quest list
                public void DisplayQuestListUI()
                {
                    Print(@"===================__/|", 60);
                    Print(@"Character (Q)uests _/_|", 60);
                    Print(@"__|__=============__\_|", 60);
                    Print(@"|/|(List):           ||", 60);
                    Print(@" \|                  ||", 60);
                    Print(@"\ |                  ||", 60);
                    Print(@"_\|                  ||", 60);
                    Print(@"__|                  ||", 60);
                    Print(@"/\|                  ||", 60);
                    Print(@"  |                  ||", 60);
                    Print(@"  |                  ||", 60);
                    Print(@"  |                  ||", 60);
                    Print(@"  |                  ||", 60);
                    Print(@"  |                  ||", 60);
                    Print(@"  |                  ||", 60);
                    Print(@"  |                  ||", 60);
                    Print(@"  |                  /|", 60);
                    Print(@"  |                 / |", 60);
                    Print(@"==^================/__|", 60);
                }
            }

            // Define the MapUI class responsible for displaying map-related UI elements
            public class MapUI
            {
                // Method to display map UI
                public void DisplayMapUI()
                {
                    Print(@"=================================================__|", 60);
                    Print(@"\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\|", 60);
                    Print(@"||(Map)UI:                                         |", 60);
                    Print(@"||                                                 |", 60);
                    Print(@"||                                                 |", 60);
                    Print(@"||                                                 |", 60);
                    Print(@"||                                                 |", 60);
                    Print(@"||                                                 |", 60);
                    Print(@"||                                                 |", 60);
                    Print(@"||                                                 |", 60);
                    Print(@"|\                                                 |", 60);
                    Print(@"|__\===================/===========================^", 60);
                }
            }

            // Define the Notifications class responsible for displaying notification UI elements
            public class Notifications
            {
                // Method to display notifications
                public void DisplayNotificationsUI()
                {
                    Print(@"/\==================================================================__\ ", 60);
                    Print(@"||(N)otifications:                                                    |\", 60);
                    Print(@"||                                                                    ||", 60);
                    Print(@"||                                                                    ||", 60);
                    Print(@"||                                                                    ||", 60);
                    Print(@"||                                                                    ||", 60);
                    Print(@"||                                                                    ||", 60);
                    Print(@"||                                                                    ||", 60);
                    Print(@"||                                                                    ||", 60);
                    Print(@"||                                                                    ||", 60);
                    Print(@"\/==========================================_/======================__/|", 60);
                }
            }

            // Define the InputUI method responsible for displaying input UI
            static void InputUI()
            {
                Print(@"  ______________________________________________  ", 60);
                Print(@" /|_==========================================_|\ ", 60);
                Print(@" || Text (1)nput:                              || ", 60);
                Print(@" ||                                            || ", 60);
                Print(@" ||                                            || ", 60);
                Print(@" ||                                            || ", 60);
                Print(@" ||                                            || ", 60);
                Print(@" ||                                            || ", 60);
                Print(@" ||                                            || ", 60);
                Print(@" ||                                            || ", 60);
                Print(@" ||                                            || ", 60);
                Print(@"  \____________________________________________/  ", 60);
            }
            public static void DrawUI()
            {
                try
                {
                    Print(@"    ________________________________________________________________________________________________________________    "+ ConsoleColor.Green);
                    Print(@"  /__==========================================/\==================================================================__\  "+ ConsoleColor.Green);
                    Print(@" /|Text input:                                 ||Notifications:                                                      |\ "+ ConsoleColor.Green);
                    Print(@" ||                                            ||                                                                    || "+ ConsoleColor.Green);
                    Print(@" ||                                            ||                                                                    || "+ ConsoleColor.Green);
                    Print(@" ||                                            ||                                                                    || "+ ConsoleColor.Green);
                    Print(@" ||                                            ||                                                                    || "+ ConsoleColor.Green);
                    Print(@" ||                                            ||                                                                    || "+ ConsoleColor.Green);
                    Print(@" ||                                            ||                                                                    || "+ ConsoleColor.Green);
                    Print(@" ||                                            ||                                                                    || "+ ConsoleColor.Green);
                    Print(@" ||                                            ||                                                                    || "+ ConsoleColor.Green);
                    Print(@" |__===========================================\/==========================================_/======================__/| "+ ConsoleColor.Green);
                    Print(@" ||(M)ovement        (O)bservation  (R)etreat  /                                           |\_  Character Quests:  _/_| "+ ConsoleColor.Green);
                    Print(@" ||                                           /                                            |_\|\__|__=============__\_| "+ ConsoleColor.Green);
                    Print(@" ||                             __=========__|_____________________________________________|__\_|/|List:             || "+ ConsoleColor.Green);
                    Print(@" ||                             |Text output:|                                                 \ \|                  || "+ ConsoleColor.Green);
                    Print(@" ||(C)onversation:              |__========__\                                                  \ |                  || "+ ConsoleColor.Green);
                    Print(@" ||_____________________________|_____________\__________________________________________________\|                  || "+ ConsoleColor.Green);
                    Print(@" |__============================================================================================__|                  || "+ ConsoleColor.Green);
                    Print(@" |/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\|                  || "+ ConsoleColor.Green);
                    Print(@" ||Inventory:                                  ||Map(7*8):                                        |                  || "+ ConsoleColor.Green);
                    Print(@" ||                                            ||                                                 |                  || "+ ConsoleColor.Green);
                    Print(@" ||                                            ||                                                 |                  || "+ ConsoleColor.Green);
                    Print(@" ||                                            ||                                                 |                  || "+ ConsoleColor.Green);
                    Print(@" ||                                            ||                                                 |                  || "+ ConsoleColor.Green);
                    Print(@" ||                                            ||                                                 |                  || "+ ConsoleColor.Green);
                    Print(@" ||                                            ||                                                 |                  || "+ ConsoleColor.Green);
                    Print(@" ||                                            ||                                                 |                  /| "+ ConsoleColor.Green);
                    Print(@" ||                                            |\                                                 |                 / | "+ ConsoleColor.Green);
                    Print(@" ||                                            |__\===================/===========================^================/__| "+ ConsoleColor.Green);
                    Print(@" ||                                            ||Character Statistics/                                               || "+ ConsoleColor.Green);
                    Print(@" ||                                            |__================__/                                                || "+ ConsoleColor.Green);
                    Print(@" ||                                            ||/                                                                   || "+ ConsoleColor.Green);
                    Print(@" ||                                            ||                                                                    || "+ ConsoleColor.Green);
                    Print(@" ||                                            ||                                                                    || "+ ConsoleColor.Green);
                    Print(@" ||                                            ||                                                                    || "+ ConsoleColor.Green);
                    Print(@" ||                                            ||                                                                    || "+ ConsoleColor.Green);
                    Print(@" |\                                            ||                                                                    /| "+ ConsoleColor.Green);
                    Print(@" | \                                           /\                                                                   / | "+ ConsoleColor.Green);
                    Print(@" |__\=========================================/==\=================================================================/__| "+ ConsoleColor.Green);
                    Print(@"    \______________________________________________________________________________________________________________/    "+ ConsoleColor.Green);
                    Print(@"                                                                                                                        "+ ConsoleColor.Green);
                }
                catch (Exception ex)
                {
                    Console.WriteLine("An error occurred while drawing the UI: " + ex.Message);
                }
            }
        }
    }
}
