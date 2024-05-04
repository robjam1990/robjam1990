using System;
using System.IO;
using Windows.System;
using static System.Console;
using System.Collections.Generic;

namespace Characters
{
    public interface IAslo
    {
        Windows.System.Boolean Equals(Object obj);
        bool Equals(Object obj);
        Int32 GetHashCode();
    }

    public class Occupation
    {
        private const string J = "Legendary Bard";
        public string Bed = "Nexus: Mercenary Camp (Bedroll)";
        public string[] Benefits = new string[] { "Food", "Private Access for resting" };
        public string Employer = "Barkeep";
        public bool EmployerBenefits = true;
        public string Location = "Taverne: Main Hall (Between the counter and the Back Room)";
        public string Name = "Aslo";
        public string Salary = "(1 Silver) * Hour";
    }

    // Define the character Aslo
    public class Aslo : Occupation, IAslo
    {
        public string Characteristics = "{(o) - [+i]}";

        static string dataPath = "Aslo.n"; // Local storage file path
        static string Think(string input) // Simulate thinking
        {
            // Simple logic for demonstration
            string result = "";
            if (input == "hello")
            {
                result = "Hi there!";
            }
            else if (input == "how are you?")
            {
                result = "How am I what?";
            }
            else if (input == "what is your purpose?")
            {
                result = "A sexy one!";
            }
            else
            {
                result = "Would you care to hear a song instead?";
            }
            return result;
        }

        static void StoreThought(string thought) // Store data locally
        {
            try // Error handling
            {
                File.AppendAllText(dataPath, thought
                    + Environment.NewLine); // Append thought to file
            }
            catch (Exception ex) // Catch exceptions
            {
                WriteLine("Error storing thought: "
                    + ex.Message); // Output error message
            }
        }

        static void Initiate(string[] args)
        {
            TextAnimation.WaitForInput();
            TextAnimation.PlayDeadAnimation();
            TextAnimation.WaitForInput();
            TextAnimation.GameTitle();
            TextAnimation.WaitForInput();
            TextAnimation.Say($"Greetings {Think(dataPath)}, my name is Robert.", ConsoleColor.DarkBlue, 27);
            TextAnimation.WaitForInput();

            string input0; // User input
            string thought; // Simulated thought
            while (true) // Main loop
            {
                Write("Input: "); // Prompt user
                input0 = ReadLine(); // Read user input
                thought = Think(input0); // Process input
                WriteLine("Thought: " + thought); // Output thought
                StoreThought(thought); // Store thought locally

                if (input0 == "exit") // Exit condition
                {
                    break; // Exit loop
                }
                WriteLine("Aslo: Hello, I am Aslo. How can I help you today?"); // Greeting
                string input = ""; // Initialize input variable


                while (input != "exit") // Loop until user types "exit"
                {
                    Write("You: "); // Prompt user for input
                    input = ReadLine(); // Get user input
                    string output = Think(input); // Process input
                    WriteLine("Aslo: " + output); // Output response
                    StoreThought(input); // Store input
                    StoreThought(output); // Store response

                    if (input == "create character")
                    {
                        Character character = CreateCharacter();
                        WriteLine("Character created!");
                    }

                    if (input == "view character")
                    {
                        // Read the character data from the file
                        string characterData = File.ReadAllText(dataPath);
                        WriteLine(characterData);
                    }

                    if (input == "clear thoughts")
                    {
                        // Clear the stored thoughts
                        File.WriteAllText(dataPath, "Aslo.en");
                        WriteLine("Thoughts cleared!");
                    }
                }
            }
        }

        public class Character
        {
            public dynamic identification;
            public dynamic attributes;
            public dynamic skillTree;
            public dynamic traits;
            public string occupation;
            public dynamic inventory;
            public dynamic reputation;
            public dynamic relationships;

            public Character(string name, string gender, dynamic pigment, string odor, string occupation)
            {
                identification = new
                {
                    name = name,
                    gender = "Male",
                    age = 0,
                    size = new int[] { 1, 1, 3 },
                    pigment = pigment ?? new { red = 255, green = 0, blue = 0 },
                    odor = odor ?? "bit sequence"
                };

                attributes = new
                {
                    Strength_Power = 1,
                    Endurance_Stamina = 5,
                    Speed_Agility = 3,
                    Perception_Recognition = 7,
                    Intelligence_Logistics = 2,
                    Knowledge_Memory = 6,
                    Experience_Wisdom = 2,
                    Will_Determination = 4,
                    Patience_Poise = 9,
                    Flexibility_Elasticity = 1,
                    Balance_Dexterity = 3
                };

                skillTree = new { Observation = 1 };

                traits = new
                {
                    physical = new { strength = 0, speed = 0, aggression = 0, health = 0, appeal = 0 },
                    social = new { humility = 0, temperament = 0, generosity = 0, loyalty = 0, honesty = 0 },
                    Emotional = new { Spontaneity = 0, Mannerism = 0, Rage = 0 },
                    Behavioral = new { Curiosity = 0, Dependency = 0, Confidence = 0, Ambition = 0 },
                    Intellectual = new { Creativity = 0, Concentration = 0, Intelligence = 0 }
                };

                this.occupation = occupation;

                inventory = new
                {
                    gold = 1,
                    silver = 430,
                    equipped = new
                    {
                        Head = "",
                        Shoulders = "",
                        Chest = "Rugged Linen Shirt (.5lbs){Durability: 50%}",
                        Arms = "",
                        Waist = "Rugged Cotton Belt (.5lbs){Durability: 50%}",
                        Legs = "Rugged Linen Pants (.5lbs){Durability: 50%}",
                        Feet = "Rugged Rubber Boots (.5lbs){Durability: 50%}",
                        RightHand = "",
                        LeftHand = ""
                    },
                    bag = new { Item_Weight = "" }
                };

                // Set the birthdate as the current date
                identification.birthdate = DateTime.Now;
                // Calculate the age based on the current date
                identification.age = CalculateAge(identification.birthdate);

                reputation = new { fame = 13, notoriety = 0 };

                relationships = new { allies = new string[] { "Barkeep", "Maia" }, enemies = new string[] { }, loyalty = 74, fear = 34, respect = 87, morality = 0.61 }; // 1 = "Pure Good", 0 = "Pure Evil"
            }

            // Function to calculate the character's age based on the provided birthdate
            public int CalculateAge(DateTime birthdate)
            {
                DateTime now = DateTime.Now;
                int age = now.Year - birthdate.Year;

                if (now.Month < birthdate.Month || (now.Month == birthdate.Month && now.Day < birthdate.Day))
                {
                    age--;
                }

                return age;
            }
        }

        // Function to create a new character instance with user input
        public static Character CreateCharacter()
        {
            Write("Enter character name: ");
            string name = ReadLine();
            Write("Enter character gender: ");
            string gender = ReadLine();
            Write("Enter red pigment (0-255): ");
            int red = Convert.ToInt32(ReadLine());
            Write("Enter green pigment (0-255): ");
            int green = Convert.ToInt32(ReadLine());
            Write("Enter blue pigment (0-255): ");
            int blue = Convert.ToInt32(ReadLine());
            dynamic pigment = new { red, green, blue };
            Write("Enter odor (bit sequence): ");
            string odor = ReadLine();
            Write("Enter character occupation: ");
            string occupation = ReadLine();

            return new Character(name, gender, pigment, odor, occupation);
        }

        public override global::System.Boolean Equals(global::System.Object obj) => obj is Characters aslo &&
                   Name == aslo.Name &&
                   Characteristics == aslo.Characteristics &&
                   Salary == aslo.Salary &&
                   Location == aslo.Location &&
                   Employer == aslo.Employer &&
                   EmployerBenefits == aslo.EmployerBenefits &&
                   EqualityComparer<global::System.String[]>.Default.Equals(Benefits, aslo.Benefits) &&
                   Bed == aslo.Bed;

        public override global::System.Int32 GetHashCode()
        {
            global::System.Int32 hashCode = 1754675299;
            hashCode = hashCode * -1521134295 + EqualityComparer<global::System.String>.Default.GetHashCode(Name);
            hashCode = (hashCode * -1521134295) + EqualityComparer<global::System.String>.Default.GetHashCode(Characteristics);
            hashCode = hashCode * -1521134295 + EqualityComparer<global::System.String>.Default.GetHashCode(Occupation);
            hashCode = hashCode * -1521134295 + EqualityComparer<global::System.String>.Default.GetHashCode(Salary);
            hashCode = hashCode * -1521134295 + EqualityComparer<global::System.String>.Default.GetHashCode(Location);
            hashCode = hashCode * -1521134295 + EqualityComparer<global::System.String>.Default.GetHashCode(Employer);
            hashCode = hashCode * -1521134295 + EqualityComparer<global::System.Boolean>.Default.GetHashCode(EmployerBenefits);
            hashCode = hashCode * -1521134295 + EqualityComparer<global::System.String[]>.Default.GetHashCode(Benefits);
            hashCode = hashCode * -1521134295 + EqualityComparer<global::System.String>.Default.GetHashCode(Bed);
            return hashCode;
        }

        System.Boolean IAslo.Equals(Object obj)
        {
            throw new System.NotImplementedException();
        }

        Windows.System.Boolean IAslo.Equals(Object obj)
        {
            throw new NotImplementedException();
        }

        Int32 IAslo.GetHashCode()
        {
            throw new NotImplementedException();
        }

        public static global::System.Boolean operator ==(Aslo left, Aslo right)
        {
            return EqualityComparer<Aslo>.Default.Equals(left, right);
        }

        public static global::System.Boolean operator !=(Aslo left, Aslo right)
        {
            return !(left == right);
        }
    }
}