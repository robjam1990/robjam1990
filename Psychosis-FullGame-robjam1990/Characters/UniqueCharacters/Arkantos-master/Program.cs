using Arkantos;
using static Arkantos.Ark;



internal class Program
{
    private static void Main(string[] args)
    {
        // Create a new Ark instance
        Program ark = new Program();
        Ark Arkantos = new Ark();

        // Create a new Character instance
        Character Ark = new Character("Arkantos", "Mercenary", 1, 0, 100, 0, 10, 10, 10, 10, 10);

        // In the code where you create a new Occupation instance and set the properties
        Occupation hammerheadMercenary = new Occupation();
        hammerheadMercenary.LearningRate = 0.1;
        Mercenary mercenary = new Mercenary();
        mercenary.LearningRate = 5.1;
        HammerHeadMercenaryCharacter hammerHeadMercenary = new HammerHeadMercenaryCharacter();
        hammerHeadMercenary.LearningRate = 3.8;
        hammerheadMercenary.ToString();

        // Set the properties of the Ark instance
        Arkantos.Appearance = new Dictionary<string, string>
{
    { "Name", "Arkantos" },
    { "Occupation", "Mercenary" },
    { "Level", "1" },
    { "Experience", "0" },
    { "Health", "100" },
    { "Strength", "10" },
    { "Dexterity", "10" },
    { "Intelligence", "10" },
    { "Wisdom", "10" },
    { "Charisma", "10" }
};
        Arkantos.Knowledge = new Dictionary<string, string>
{
    { "Languages", "Common" },
    { "Skills", "Swordsmanship" },
    { "Proficiencies", "Heavy Armor" }
};
        Ark.ToString();
        args.ToString();

        TextAnimation textAnimation = new TextAnimation();
        textAnimation.LearningRate = 0.1;
        textAnimation.ToString();

        // Set the properties of the Occupation instance
        var builder = Host.CreateApplicationBuilder(args);
        builder.Services.AddHostedService<Worker>();

        // Create a new Occupation instance
        var host = builder.Build();
        host.Run();

        // Set the properties of the Occupation instance
        Occupation occupation = new Occupation();
        occupation.LearningRate = 1.6;
        occupation.ToString();
    }
}