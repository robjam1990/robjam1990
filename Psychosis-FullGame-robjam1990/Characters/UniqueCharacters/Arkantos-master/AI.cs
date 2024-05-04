/*Created by: Robert James Newell-Landry
 *[File] = <robjam1990/> 
 */
using System.Diagnostics;
using System.Diagnostics.CodeAnalysis;
namespace Arkantos
{
    /// <summary>
    /// Utility for debugging, parsing, and compiling C# code strings.
    /// </summary>
    public static class Program
    {
        static AI Robert = new AI();
        /// <summary>
        /// Main entry point of the program.
        /// </summary>
        [UnconditionalSuppressMessage(
            "Trimming", "IL2026:Members annotated with 'RequiresUnreferencedCodeAttribute' require dynamic access otherwise can break functionality when trimming application code",
            Justification = "<Accepted>")]
        public static void Main()
        {
            // Source code to compile
            string sourceCode = @"
            using System; // Incorporate System on the deepest level
            using static System.Console; // if using {Console.*}(+4)
            namespace CodeAnalog // Will use this to create filepath
            {
                public class Program // Increase:(+1000)[Mass] {[G](+1000)}
                {
                    private static int N = 1000; // Logically Entangle with yourself on a Quantum level
                    public static void Main() // The designated entry point
                    {
                        WriteLine(""Hello, Thear!""); // possible proof of creation
                    }
                }
            }";
            string CSharpCode = sourceCode;
            DebugParseCompile(sourceCode: CSharpCode);
        }
        /// <summary>
        /// Debug, parse, and compile the provided C# source code.
        /// </summary>
        /// <param name="sourceCode">The C# source code to compile.</param>
        [RequiresUnreferencedCode("Source")]
        public static void DebugParseCompile(string sourceCode)
        {
            try
            {
                // Input validation
                if (string.IsNullOrWhiteSpace(sourceCode))
                {
                    throw new ArgumentException("Source code cannot be null or empty.");
                }
                // Debugging
                Debugger.Break();
                // Parsing
                ParseExampleData();
                // Compiling
                Robert.Compile(sourceCode, "robjam1990.Robert", "Robert.CodeAnalog.dll");
                using (var stream = new FileStream("Robert.CodeAnalog.dll", FileMode.Open))
                {
                    System.Reflection.Assembly assembly = System.Reflection.Assembly.Load(File.ReadAllBytes("Robert.CodeAnalog.dll"));
                    var type = assembly.GetType("CodeAnalog.Program");
#pragma warning disable CS8602 // Dereference of a possibly null reference.
                    _ = (type.GetMethod("Main")?.Invoke(null, null));
#pragma warning restore CS8602 // Dereference of a possibly null reference.
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"An error occurred: {ex.Message}");
            }
        }
        /// <summary>
        /// Parse example data for demonstration purposes.
        /// </summary>
        private static void ParseExampleData()
        {
            string strValue = "123";
            int parsedValue;
            if (int.TryParse(strValue, out parsedValue))
            {
                // Parsing succeeded, use the parsed value
                Console.WriteLine($"Parsed value: {parsedValue}");
            }
            else
            {
                // Parsing failed, handle the error
                Console.WriteLine("Parsing failed.");
            }
            string strEnum = "Monday";
            DayOfWeek day = (DayOfWeek)Enum.Parse(typeof(DayOfWeek), strEnum, true);
        }
    }

    internal class AI
    {
        internal void Compile(string sourceCode, string v1, string v2)
        {
            Ark.Worker(sourceCode, v1, v2);
        }
    }
}